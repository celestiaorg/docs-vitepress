import{_ as s,o as e,c as a,Q as n}from"./chunks/framework.6e3b93cd.js";const g=JSON.parse('{"title":"Blobstream orchestrator","description":"Learn about the Blobstream orchestrator.","frontmatter":{"sidebar_label":"Blobstream orchestrator","description":"Learn about the Blobstream orchestrator.","head":[["meta",{"name":"og:title","content":"Blobstream orchestrator | Celestia Docs"},{"name":"og:description","content":false}]]},"headers":[],"relativePath":"nodes/blobstream-orchestrator.md","filePath":"nodes/blobstream-orchestrator.md","lastUpdated":1712192838000}'),t={name:"nodes/blobstream-orchestrator.md"},l=n(`<h1 id="blobstream-orchestrator" tabindex="-1">Blobstream orchestrator <a class="header-anchor" href="#blobstream-orchestrator" aria-label="Permalink to &quot;Blobstream orchestrator&quot;">​</a></h1><p>The role of the orchestrator is to sign attestations using its corresponding validator EVM private key. These attestations are generated within the Blobstream module of the Celestia-app state machine. To learn more about what attestations are, you can refer to <a href="https://github.com/celestiaorg/celestia-app/tree/main/x/blobstream" target="_blank" rel="noreferrer">the Blobstream overview</a>.</p><h2 id="how-it-works" tabindex="-1">How it works <a class="header-anchor" href="#how-it-works" aria-label="Permalink to &quot;How it works&quot;">​</a></h2><p>The orchestrator does the following:</p><ol><li>Connect to a Celestia-app full node or validator node via RPC and gRPC and wait for new attestations</li><li>Once an attestation is created inside the Blobstream state machine, the orchestrator queries it.</li><li>After getting the attestation, the orchestrator signs it using the provided EVM private key. The private key should correspond to the EVM address provided when creating the validator. Read <a href="https://docs.celestia.org/nodes/blobstream-keys/" target="_blank" rel="noreferrer">more about Blobstream keys</a>.</li><li>Then, the orchestrator pushes its signature to the P2P network it is connected to, via adding it as a DHT value.</li><li>Listen for new attestations and go back to step 2.</li></ol><p>The orchestrator connects to a separate P2P network than the consensus or the data availability one. So, we will provide bootstrappers for that one.</p><p>Bootstrapper for the Blockspace Race is:</p><ul><li><code>/dns/bootstr-incent-1.celestia.tools/tcp/30000/p2p/12D3KooWSGZ2LXW2soQFHgU82uLfN7pNW5gMMkTnu1fhMXG43TvP</code></li></ul><p>Make sure to specify it using the <code>-b</code> flag when running the orchestrator.</p><p>This means that even if the consensus node is already connected to the consensus network, if the orchestrator doesn&#39;t start with a list of bootstrapper to its specific network, then, it will not work and will output the following logs:</p><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">I[2023-04-26|00:04:08.175] waiting for routing table to populate        targetnumberofpeers=1 currentcount=0</span></span>
<span class="line"><span style="color:#e1e4e8;">I[2023-04-26|00:04:18.175] waiting for routing table to populate        targetnumberofpeers=1 currentcount=0</span></span>
<span class="line"><span style="color:#e1e4e8;">I[2023-04-26|00:04:28.175] waiting for routing table to populate        targetnumberofpeers=1 currentcount=0</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">I[2023-04-26|00:04:08.175] waiting for routing table to populate        targetnumberofpeers=1 currentcount=0</span></span>
<span class="line"><span style="color:#24292e;">I[2023-04-26|00:04:18.175] waiting for routing table to populate        targetnumberofpeers=1 currentcount=0</span></span>
<span class="line"><span style="color:#24292e;">I[2023-04-26|00:04:28.175] waiting for routing table to populate        targetnumberofpeers=1 currentcount=0</span></span></code></pre></div><h2 id="how-to-run" tabindex="-1">How to run <a class="header-anchor" href="#how-to-run" aria-label="Permalink to &quot;How to run&quot;">​</a></h2><h3 id="requirements" tabindex="-1">Requirements <a class="header-anchor" href="#requirements" aria-label="Permalink to &quot;Requirements&quot;">​</a></h3><p>To run an orchestrator, you will need to have access to the following:</p><ul><li>Access to your EVM address private key. This latter doesn&#39;t need to be funded in any network. If yours is not yet set, check the <a href="#register-evm-address">register an EVM address</a> section.</li><li>A list of bootstrappers for the P2P network. These will be shared by the team for every network we plan on supporting.</li><li>Access to your consensus node RPC and gRPC ports.</li></ul><h3 id="install-the-blobstream-binary" tabindex="-1">Install the Blobstream binary <a class="header-anchor" href="#install-the-blobstream-binary" aria-label="Permalink to &quot;Install the Blobstream binary&quot;">​</a></h3><p>Make sure to have the Blobstream binary installed. Check <a href="https://docs.celestia.org/nodes/blobstream-binary" target="_blank" rel="noreferrer">the Blobstream binary page</a> for more details.</p><h3 id="init-the-store" tabindex="-1">Init the store <a class="header-anchor" href="#init-the-store" aria-label="Permalink to &quot;Init the store&quot;">​</a></h3><p>Before starting the orchestrator, we will need to init the store:</p><div class="language-ssh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ssh</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">blobstream orchestrator init</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">blobstream orchestrator init</span></span></code></pre></div><p>By default, the store will be created under <code>~/.orchestrator</code>. However, if you want to specify a custom location, you can use the <code>--home</code> flag. Or, you can use the following environment variable:</p><table><thead><tr><th>Variable</th><th>Explanation</th><th>Default value</th><th>Required</th></tr></thead><tbody><tr><td><code>ORCHESTRATOR_HOME</code></td><td>Home directory for the orchestrator</td><td><code>~/.orchestrator</code></td><td>Optional</td></tr></tbody></table><h3 id="add-keys" tabindex="-1">Add keys <a class="header-anchor" href="#add-keys" aria-label="Permalink to &quot;Add keys&quot;">​</a></h3><p>In order for the orchestrator to start, it will need two private keys:</p><ul><li>EVM private key</li><li>P2P private key</li></ul><p>The EVM private key is the most important one since it needs to correspond to the EVM address provided when creating the validator.</p><p>The P2P private key is optional, and a new one will be generated automatically on the start if none is provided.</p><p>The <code>keys</code> command will help you set up these keys:</p><div class="language-ssh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ssh</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">blobstream orchestrator keys  --help</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">blobstream orchestrator keys  --help</span></span></code></pre></div><p>To add an EVM private key, check the next section.</p><h4 id="evm-key" tabindex="-1">EVM key <a class="header-anchor" href="#evm-key" aria-label="Permalink to &quot;EVM key&quot;">​</a></h4><p>Because EVM keys are important, we provide a keystore that will help manage them. The keystore uses a file system keystore protected by a passphrase to store and open private keys.</p><p>To register an EVM address for your validator, check the section <a href="#register-evm-address">Register EVM Address</a>.</p><p>To import your EVM private key, there is the <code>import</code> subcommand to assist you with that:</p><div class="language-ssh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ssh</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">blobstream orchestrator keys evm import --help</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">blobstream orchestrator keys evm import --help</span></span></code></pre></div><p>This subcommand allows you to either import a raw ECDSA private key provided as plaintext, or import it from a file. The files are JSON keystore files encrypted using a passphrase like in <a href="https://geth.ethereum.org/docs/developers/dapp-developer/native-accounts" target="_blank" rel="noreferrer">this example</a>.</p><p>After adding the key, you can check that it&#39;s added via running:</p><div class="language-ssh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ssh</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">blobstream orchestrator keys evm list</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">blobstream orchestrator keys evm list</span></span></code></pre></div><p>For more information about the <code>keys</code> command, check <a href="https://docs.celestia.org/nodes/blobstream-keys" target="_blank" rel="noreferrer">the <code>keys</code> documentation</a>.</p><h3 id="start-the-orchestrator" tabindex="-1">Start the orchestrator <a class="header-anchor" href="#start-the-orchestrator" aria-label="Permalink to &quot;Start the orchestrator&quot;">​</a></h3><p>Now that we have the store initialized, we can start the orchestrator. Make sure you have your Celestia-app node RPC and gRPC accessible, and able to connect to the P2P network bootstrappers.</p><p>The orchestrator accepts the following flags:</p><div class="language-ssh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ssh</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">blobstream orchestrator start --help</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">Starts the Blobstream orchestrator to sign attestations</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">Usage:</span></span>
<span class="line"><span style="color:#e1e4e8;">  blobstream orchestrator start &lt;flags&gt; [flags]</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">blobstream orchestrator start --help</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">Starts the Blobstream orchestrator to sign attestations</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">Usage:</span></span>
<span class="line"><span style="color:#24292e;">  blobstream orchestrator start &lt;flags&gt; [flags]</span></span></code></pre></div><p>To start the orchestrator in the default home directory, run the following:</p><div class="language-ssh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ssh</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">blobstream orchestrator start \\</span></span>
<span class="line"><span style="color:#e1e4e8;">    --core.grpc.host localhost \\</span></span>
<span class="line"><span style="color:#e1e4e8;">    --core.grpc.port 9090 \\</span></span>
<span class="line"><span style="color:#e1e4e8;">    --core.rpc.host localhost \\</span></span>
<span class="line"><span style="color:#e1e4e8;">    --core.rpc.port 26657 \\</span></span>
<span class="line"><span style="color:#e1e4e8;">    --evm.account 0x966e6f22781EF6a6A82BBB4DB3df8E225DfD9488 \\</span></span>
<span class="line"><span style="color:#e1e4e8;">    --p2p.bootstrappers /ip4/127.0.0.1/tcp/30001/p2p/12D3KooWFFHahpcZcuqnUhpBoX5fJ68Qm5Hc8dxiBcX1oo46fLxh \\</span></span>
<span class="line"><span style="color:#e1e4e8;">    --p2p.listen-addr /ip4/0.0.0.0/tcp/30000</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">blobstream orchestrator start \\</span></span>
<span class="line"><span style="color:#24292e;">    --core.grpc.host localhost \\</span></span>
<span class="line"><span style="color:#24292e;">    --core.grpc.port 9090 \\</span></span>
<span class="line"><span style="color:#24292e;">    --core.rpc.host localhost \\</span></span>
<span class="line"><span style="color:#24292e;">    --core.rpc.port 26657 \\</span></span>
<span class="line"><span style="color:#24292e;">    --evm.account 0x966e6f22781EF6a6A82BBB4DB3df8E225DfD9488 \\</span></span>
<span class="line"><span style="color:#24292e;">    --p2p.bootstrappers /ip4/127.0.0.1/tcp/30001/p2p/12D3KooWFFHahpcZcuqnUhpBoX5fJ68Qm5Hc8dxiBcX1oo46fLxh \\</span></span>
<span class="line"><span style="color:#24292e;">    --p2p.listen-addr /ip4/0.0.0.0/tcp/30000</span></span></code></pre></div><p>And, you will be prompted to enter your EVM key passphrase so that the orchestrator can use it to sign attestations. Make sure that it&#39;s the EVM address that was provided when creating the validator. If not, then the orchestrator will not sign, and you will keep seeing a &quot;validator not part of valset&quot; warning message. If you see such message, first verify that your validator is part of the active validator set. If so, then probably the EVM address provided to the orchestrator is not the right one, and you should check which EVM address is registered to your validator. Check the next section for more information.</p><p>If you no longer have access to your EVM address, you could always edit your validator with a new EVM address. This can be done through the <code>edit-validator</code> command. Check the next section.</p><h3 id="open-the-p2p-port" tabindex="-1">Open the P2P port <a class="header-anchor" href="#open-the-p2p-port" aria-label="Permalink to &quot;Open the P2P port&quot;">​</a></h3><p>In order for the signature propagation to be successful, you will need to expose the P2P port, which is by default <code>30000</code>.</p><p>If not, then the signatures may not be available to the network and relayers will not be able to query them.</p><h4 id="register-evm-address" tabindex="-1">Register EVM Address <a class="header-anchor" href="#register-evm-address" aria-label="Permalink to &quot;Register EVM Address&quot;">​</a></h4><p>When creating a validator, a random EVM address corresponding to its operator is set in the Blobstream state. This latter will be used by the orchestrator to sign attestations. And since validators will generally not have access to its corresponding private key, that address needs to be edited with one whose private key is known to the validator operator.</p><p>To edit an EVM address for a certain validator, its corresponding account needs to send a <code>RegisterEVMAddress</code> transaction with the new address.</p><p>First, you should get your validator <code>valoper</code> address. To do so, run the following:</p><div class="language-ssh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ssh</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">celestia-appd keys show &lt;validator_account&gt; --bech val</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">celestia-appd keys show &lt;validator_account&gt; --bech val</span></span></code></pre></div><p>This assumes that you&#39;re using the default home directory, the default keystore etc. If not, make sure to add the flags that correspond to your situation.</p><p>To check which EVM address is registered for your <code>valoper</code> address, run the following:</p><div class="language-ssh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ssh</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">celestia-appd query blobstream evm &lt;validator_valoper_address&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">celestia-appd query blobstream evm &lt;validator_valoper_address&gt;</span></span></code></pre></div><p>Then, to proceed with the edit, run the following command:</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">celestia-appd</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">tx</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">blobstream</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">register</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">\\</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">&lt;</span><span style="color:#9ECBFF;">valoper_addres</span><span style="color:#E1E4E8;">s</span><span style="color:#F97583;">&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">\\</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">&lt;</span><span style="color:#9ECBFF;">new_evm_addres</span><span style="color:#E1E4E8;">s</span><span style="color:#F97583;">&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">\\</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">--fees</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">30000</span><span style="color:#9ECBFF;">utia</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">\\</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">--broadcast-mode</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">block</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">\\</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">--yes</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">celestia-appd</span><span style="color:#24292E;"> </span><span style="color:#032F62;">tx</span><span style="color:#24292E;"> </span><span style="color:#032F62;">blobstream</span><span style="color:#24292E;"> </span><span style="color:#032F62;">register</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">\\</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">&lt;</span><span style="color:#032F62;">valoper_addres</span><span style="color:#24292E;">s</span><span style="color:#D73A49;">&gt;</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">\\</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">&lt;</span><span style="color:#032F62;">new_evm_addres</span><span style="color:#24292E;">s</span><span style="color:#D73A49;">&gt;</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">\\</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">--fees</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">30000</span><span style="color:#032F62;">utia</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">\\</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">--broadcast-mode</span><span style="color:#24292E;"> </span><span style="color:#032F62;">block</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">\\</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">--yes</span></span></code></pre></div><p>Example command output:</p><div class="language-ssh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ssh</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">code: 0</span></span>
<span class="line"><span style="color:#e1e4e8;">codespace: &quot;&quot;</span></span>
<span class="line"><span style="color:#e1e4e8;">data: 12300A2E2F63656C65737469612E7167622E76312E4D7367526567697374657245564D41646472657373526573706F6E7365</span></span>
<span class="line"><span style="color:#e1e4e8;">events:</span></span>
<span class="line"><span style="color:#e1e4e8;">- attributes:</span></span>
<span class="line"><span style="color:#e1e4e8;">  - index: true</span></span>
<span class="line"><span style="color:#e1e4e8;">    key: c3BlbmRlcg==</span></span>
<span class="line"><span style="color:#e1e4e8;">    value: Y2VsZXN0aWExcDkzcmd6Mnl5MG5hMnN5OWc3a3NzanY2MDY2dWxqcWV3cGpwZ2c=</span></span>
<span class="line"><span style="color:#e1e4e8;">  - index: true</span></span>
<span class="line"><span style="color:#e1e4e8;">    key: YW1vdW50</span></span>
<span class="line"><span style="color:#e1e4e8;">    value: MzAwMDB1dGlh</span></span>
<span class="line"><span style="color:#e1e4e8;">  type: coin_spent</span></span>
<span class="line"><span style="color:#e1e4e8;">- attributes:</span></span>
<span class="line"><span style="color:#e1e4e8;">  - index: true</span></span>
<span class="line"><span style="color:#e1e4e8;">    key: cmVjZWl2ZXI=</span></span>
<span class="line"><span style="color:#e1e4e8;">    value: Y2VsZXN0aWExN3hwZnZha20yYW1nOTYyeWxzNmY4NHoza2VsbDhjNWxwbmpzM3M=</span></span>
<span class="line"><span style="color:#e1e4e8;">  - index: true</span></span>
<span class="line"><span style="color:#e1e4e8;">    key: YW1vdW50</span></span>
<span class="line"><span style="color:#e1e4e8;">    value: MzAwMDB1dGlh</span></span>
<span class="line"><span style="color:#e1e4e8;">  type: coin_received</span></span>
<span class="line"><span style="color:#e1e4e8;">- attributes:</span></span>
<span class="line"><span style="color:#e1e4e8;">  - index: true</span></span>
<span class="line"><span style="color:#e1e4e8;">    key: cmVjaXBpZW50</span></span>
<span class="line"><span style="color:#e1e4e8;">    value: Y2VsZXN0aWExN3hwZnZha20yYW1nOTYyeWxzNmY4NHoza2VsbDhjNWxwbmpzM3M=</span></span>
<span class="line"><span style="color:#e1e4e8;">  - index: true</span></span>
<span class="line"><span style="color:#e1e4e8;">    key: c2VuZGVy</span></span>
<span class="line"><span style="color:#e1e4e8;">    value: Y2VsZXN0aWExcDkzcmd6Mnl5MG5hMnN5OWc3a3NzanY2MDY2dWxqcWV3cGpwZ2c=</span></span>
<span class="line"><span style="color:#e1e4e8;">  - index: true</span></span>
<span class="line"><span style="color:#e1e4e8;">    key: YW1vdW50</span></span>
<span class="line"><span style="color:#e1e4e8;">    value: MzAwMDB1dGlh</span></span>
<span class="line"><span style="color:#e1e4e8;">  type: transfer</span></span>
<span class="line"><span style="color:#e1e4e8;">- attributes:</span></span>
<span class="line"><span style="color:#e1e4e8;">  - index: true</span></span>
<span class="line"><span style="color:#e1e4e8;">    key: c2VuZGVy</span></span>
<span class="line"><span style="color:#e1e4e8;">    value: Y2VsZXN0aWExcDkzcmd6Mnl5MG5hMnN5OWc3a3NzanY2MDY2dWxqcWV3cGpwZ2c=</span></span>
<span class="line"><span style="color:#e1e4e8;">  type: message</span></span>
<span class="line"><span style="color:#e1e4e8;">- attributes:</span></span>
<span class="line"><span style="color:#e1e4e8;">  - index: true</span></span>
<span class="line"><span style="color:#e1e4e8;">    key: ZmVl</span></span>
<span class="line"><span style="color:#e1e4e8;">    value: MzAwMDB1dGlh</span></span>
<span class="line"><span style="color:#e1e4e8;">  - index: true</span></span>
<span class="line"><span style="color:#e1e4e8;">    key: ZmVlX3BheWVy</span></span>
<span class="line"><span style="color:#e1e4e8;">    value: Y2VsZXN0aWExcDkzcmd6Mnl5MG5hMnN5OWc3a3NzanY2MDY2dWxqcWV3cGpwZ2c=</span></span>
<span class="line"><span style="color:#e1e4e8;">  type: tx</span></span>
<span class="line"><span style="color:#e1e4e8;">- attributes:</span></span>
<span class="line"><span style="color:#e1e4e8;">  - index: true</span></span>
<span class="line"><span style="color:#e1e4e8;">    key: YWNjX3NlcQ==</span></span>
<span class="line"><span style="color:#e1e4e8;">    value: Y2VsZXN0aWExcDkzcmd6Mnl5MG5hMnN5OWc3a3NzanY2MDY2dWxqcWV3cGpwZ2cvMQ==</span></span>
<span class="line"><span style="color:#e1e4e8;">  type: tx</span></span>
<span class="line"><span style="color:#e1e4e8;">- attributes:</span></span>
<span class="line"><span style="color:#e1e4e8;">  - index: true</span></span>
<span class="line"><span style="color:#e1e4e8;">    key: c2lnbmF0dXJl</span></span>
<span class="line"><span style="color:#e1e4e8;">    value: cE5ZS0pqWEZlOFVTaEZUdDdzRHVETWZNWW55YjZTT01iZnlBSkZGYnZpVk45bGJ2L2tUeXhEWWxHK2VjRE94bFlSajJIMmlWNGJLWVhMNDBQM1F4TUE9PQ==</span></span>
<span class="line"><span style="color:#e1e4e8;">  type: tx</span></span>
<span class="line"><span style="color:#e1e4e8;">- attributes:</span></span>
<span class="line"><span style="color:#e1e4e8;">  - index: true</span></span>
<span class="line"><span style="color:#e1e4e8;">    key: YWN0aW9u</span></span>
<span class="line"><span style="color:#e1e4e8;">    value: L2NlbGVzdGlhLnFnYi52MS5Nc2dSZWdpc3RlckVWTUFkZHJlc3M=</span></span>
<span class="line"><span style="color:#e1e4e8;">  type: message</span></span>
<span class="line"><span style="color:#e1e4e8;">gas_used: &quot;66959&quot;</span></span>
<span class="line"><span style="color:#e1e4e8;">gas_wanted: &quot;210000&quot;</span></span>
<span class="line"><span style="color:#e1e4e8;">height: &quot;3&quot;</span></span>
<span class="line"><span style="color:#e1e4e8;">info: &quot;&quot;</span></span>
<span class="line"><span style="color:#e1e4e8;">logs:</span></span>
<span class="line"><span style="color:#e1e4e8;">- events:</span></span>
<span class="line"><span style="color:#e1e4e8;">  - attributes:</span></span>
<span class="line"><span style="color:#e1e4e8;">    - key: action</span></span>
<span class="line"><span style="color:#e1e4e8;">      value: /celestia.blobstream.v1.MsgRegisterEVMAddress</span></span>
<span class="line"><span style="color:#e1e4e8;">    type: message</span></span>
<span class="line"><span style="color:#e1e4e8;">  log: &quot;&quot;</span></span>
<span class="line"><span style="color:#e1e4e8;">  msg_index: 0</span></span>
<span class="line"><span style="color:#e1e4e8;">raw_log: &#39;[{&quot;msg_index&quot;:0,&quot;events&quot;:[{&quot;type&quot;:&quot;message&quot;,&quot;attributes&quot;:[{&quot;key&quot;:&quot;action&quot;,&quot;value&quot;:&quot;/celestia.blobstream.v1.MsgRegisterEVMAddress&quot;}]}]}]&#39;</span></span>
<span class="line"><span style="color:#e1e4e8;">timestamp: &quot;&quot;</span></span>
<span class="line"><span style="color:#e1e4e8;">tx: null</span></span>
<span class="line"><span style="color:#e1e4e8;">txhash: 4199EA959A2CFEFCD4726D8D8F7B536458A46A27318D3483A4E9614F560606BC</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">code: 0</span></span>
<span class="line"><span style="color:#24292e;">codespace: &quot;&quot;</span></span>
<span class="line"><span style="color:#24292e;">data: 12300A2E2F63656C65737469612E7167622E76312E4D7367526567697374657245564D41646472657373526573706F6E7365</span></span>
<span class="line"><span style="color:#24292e;">events:</span></span>
<span class="line"><span style="color:#24292e;">- attributes:</span></span>
<span class="line"><span style="color:#24292e;">  - index: true</span></span>
<span class="line"><span style="color:#24292e;">    key: c3BlbmRlcg==</span></span>
<span class="line"><span style="color:#24292e;">    value: Y2VsZXN0aWExcDkzcmd6Mnl5MG5hMnN5OWc3a3NzanY2MDY2dWxqcWV3cGpwZ2c=</span></span>
<span class="line"><span style="color:#24292e;">  - index: true</span></span>
<span class="line"><span style="color:#24292e;">    key: YW1vdW50</span></span>
<span class="line"><span style="color:#24292e;">    value: MzAwMDB1dGlh</span></span>
<span class="line"><span style="color:#24292e;">  type: coin_spent</span></span>
<span class="line"><span style="color:#24292e;">- attributes:</span></span>
<span class="line"><span style="color:#24292e;">  - index: true</span></span>
<span class="line"><span style="color:#24292e;">    key: cmVjZWl2ZXI=</span></span>
<span class="line"><span style="color:#24292e;">    value: Y2VsZXN0aWExN3hwZnZha20yYW1nOTYyeWxzNmY4NHoza2VsbDhjNWxwbmpzM3M=</span></span>
<span class="line"><span style="color:#24292e;">  - index: true</span></span>
<span class="line"><span style="color:#24292e;">    key: YW1vdW50</span></span>
<span class="line"><span style="color:#24292e;">    value: MzAwMDB1dGlh</span></span>
<span class="line"><span style="color:#24292e;">  type: coin_received</span></span>
<span class="line"><span style="color:#24292e;">- attributes:</span></span>
<span class="line"><span style="color:#24292e;">  - index: true</span></span>
<span class="line"><span style="color:#24292e;">    key: cmVjaXBpZW50</span></span>
<span class="line"><span style="color:#24292e;">    value: Y2VsZXN0aWExN3hwZnZha20yYW1nOTYyeWxzNmY4NHoza2VsbDhjNWxwbmpzM3M=</span></span>
<span class="line"><span style="color:#24292e;">  - index: true</span></span>
<span class="line"><span style="color:#24292e;">    key: c2VuZGVy</span></span>
<span class="line"><span style="color:#24292e;">    value: Y2VsZXN0aWExcDkzcmd6Mnl5MG5hMnN5OWc3a3NzanY2MDY2dWxqcWV3cGpwZ2c=</span></span>
<span class="line"><span style="color:#24292e;">  - index: true</span></span>
<span class="line"><span style="color:#24292e;">    key: YW1vdW50</span></span>
<span class="line"><span style="color:#24292e;">    value: MzAwMDB1dGlh</span></span>
<span class="line"><span style="color:#24292e;">  type: transfer</span></span>
<span class="line"><span style="color:#24292e;">- attributes:</span></span>
<span class="line"><span style="color:#24292e;">  - index: true</span></span>
<span class="line"><span style="color:#24292e;">    key: c2VuZGVy</span></span>
<span class="line"><span style="color:#24292e;">    value: Y2VsZXN0aWExcDkzcmd6Mnl5MG5hMnN5OWc3a3NzanY2MDY2dWxqcWV3cGpwZ2c=</span></span>
<span class="line"><span style="color:#24292e;">  type: message</span></span>
<span class="line"><span style="color:#24292e;">- attributes:</span></span>
<span class="line"><span style="color:#24292e;">  - index: true</span></span>
<span class="line"><span style="color:#24292e;">    key: ZmVl</span></span>
<span class="line"><span style="color:#24292e;">    value: MzAwMDB1dGlh</span></span>
<span class="line"><span style="color:#24292e;">  - index: true</span></span>
<span class="line"><span style="color:#24292e;">    key: ZmVlX3BheWVy</span></span>
<span class="line"><span style="color:#24292e;">    value: Y2VsZXN0aWExcDkzcmd6Mnl5MG5hMnN5OWc3a3NzanY2MDY2dWxqcWV3cGpwZ2c=</span></span>
<span class="line"><span style="color:#24292e;">  type: tx</span></span>
<span class="line"><span style="color:#24292e;">- attributes:</span></span>
<span class="line"><span style="color:#24292e;">  - index: true</span></span>
<span class="line"><span style="color:#24292e;">    key: YWNjX3NlcQ==</span></span>
<span class="line"><span style="color:#24292e;">    value: Y2VsZXN0aWExcDkzcmd6Mnl5MG5hMnN5OWc3a3NzanY2MDY2dWxqcWV3cGpwZ2cvMQ==</span></span>
<span class="line"><span style="color:#24292e;">  type: tx</span></span>
<span class="line"><span style="color:#24292e;">- attributes:</span></span>
<span class="line"><span style="color:#24292e;">  - index: true</span></span>
<span class="line"><span style="color:#24292e;">    key: c2lnbmF0dXJl</span></span>
<span class="line"><span style="color:#24292e;">    value: cE5ZS0pqWEZlOFVTaEZUdDdzRHVETWZNWW55YjZTT01iZnlBSkZGYnZpVk45bGJ2L2tUeXhEWWxHK2VjRE94bFlSajJIMmlWNGJLWVhMNDBQM1F4TUE9PQ==</span></span>
<span class="line"><span style="color:#24292e;">  type: tx</span></span>
<span class="line"><span style="color:#24292e;">- attributes:</span></span>
<span class="line"><span style="color:#24292e;">  - index: true</span></span>
<span class="line"><span style="color:#24292e;">    key: YWN0aW9u</span></span>
<span class="line"><span style="color:#24292e;">    value: L2NlbGVzdGlhLnFnYi52MS5Nc2dSZWdpc3RlckVWTUFkZHJlc3M=</span></span>
<span class="line"><span style="color:#24292e;">  type: message</span></span>
<span class="line"><span style="color:#24292e;">gas_used: &quot;66959&quot;</span></span>
<span class="line"><span style="color:#24292e;">gas_wanted: &quot;210000&quot;</span></span>
<span class="line"><span style="color:#24292e;">height: &quot;3&quot;</span></span>
<span class="line"><span style="color:#24292e;">info: &quot;&quot;</span></span>
<span class="line"><span style="color:#24292e;">logs:</span></span>
<span class="line"><span style="color:#24292e;">- events:</span></span>
<span class="line"><span style="color:#24292e;">  - attributes:</span></span>
<span class="line"><span style="color:#24292e;">    - key: action</span></span>
<span class="line"><span style="color:#24292e;">      value: /celestia.blobstream.v1.MsgRegisterEVMAddress</span></span>
<span class="line"><span style="color:#24292e;">    type: message</span></span>
<span class="line"><span style="color:#24292e;">  log: &quot;&quot;</span></span>
<span class="line"><span style="color:#24292e;">  msg_index: 0</span></span>
<span class="line"><span style="color:#24292e;">raw_log: &#39;[{&quot;msg_index&quot;:0,&quot;events&quot;:[{&quot;type&quot;:&quot;message&quot;,&quot;attributes&quot;:[{&quot;key&quot;:&quot;action&quot;,&quot;value&quot;:&quot;/celestia.blobstream.v1.MsgRegisterEVMAddress&quot;}]}]}]&#39;</span></span>
<span class="line"><span style="color:#24292e;">timestamp: &quot;&quot;</span></span>
<span class="line"><span style="color:#24292e;">tx: null</span></span>
<span class="line"><span style="color:#24292e;">txhash: 4199EA959A2CFEFCD4726D8D8F7B536458A46A27318D3483A4E9614F560606BC</span></span></code></pre></div><p>Now, you can verify that the EVM address has been updated using the following command:</p><div class="language-ssh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ssh</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">celestia-appd query blobstream evm &lt;validator_valoper_address&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">celestia-appd query blobstream evm &lt;validator_valoper_address&gt;</span></span></code></pre></div><p>Now, you can restart the orchestrator, and it should start signing.</p><p>Note: A validator set change is triggered if more than 5% of the total staking power of the network changes (0.5% for BSR). This means that even if you change your EVM address, and you don&#39;t see your orchestrator signing, it&#39;s alright. Just wait until the validator set changes, and then your orchestrator will automatically start signing.</p><h4 id="systemd-service" tabindex="-1">Systemd service <a class="header-anchor" href="#systemd-service" aria-label="Permalink to &quot;Systemd service&quot;">​</a></h4><p>If you want to start the orchestrator as a <code>systemd</code> service, you could use the following:</p><ul><li>Make sure you have the store initialized and the EVM address private key imported. Check the above sections for how to do that.</li><li>Put the following configuration under: <code>/etc/systemd/system/orchestrator.service</code>:</li></ul><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">[Unit]</span></span>
<span class="line"><span style="color:#e1e4e8;">Description=Blobstream orchestrator service</span></span>
<span class="line"><span style="color:#e1e4e8;">After=network.target</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">[Service]</span></span>
<span class="line"><span style="color:#e1e4e8;">Type=simple</span></span>
<span class="line"><span style="color:#e1e4e8;">ExecStart=&lt;absolute_path_to_blobstream_binary&gt; orchestrator start --evm.account &lt;evm_account&gt; --evm.passphrase &lt;evm_passphrase&gt; --core.grpc.host &lt;grpc_endpoint_host&gt; --core.grpc.port &lt;grpc_endpoint_port&gt; --core.rpc.host &lt;rpc_endpoint_host&gt; --core.rpc.port &lt;rpc_endpoint_port&gt; --p2p.bootstrappers &lt;bootstrappers_list&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">LimitNOFILE=infinity</span></span>
<span class="line"><span style="color:#e1e4e8;">LimitCORE=infinity</span></span>
<span class="line"><span style="color:#e1e4e8;">Restart=always</span></span>
<span class="line"><span style="color:#e1e4e8;">RestartSec=1</span></span>
<span class="line"><span style="color:#e1e4e8;">StartLimitBurst=5</span></span>
<span class="line"><span style="color:#e1e4e8;">User=&lt;username&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">StandardError=journal</span></span>
<span class="line"><span style="color:#e1e4e8;">StandardOutput=journal</span></span>
<span class="line"><span style="color:#e1e4e8;">TTYPath=/dev/tty0</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">[Install]</span></span>
<span class="line"><span style="color:#e1e4e8;">WantedBy=multi-user.target</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">[Unit]</span></span>
<span class="line"><span style="color:#24292e;">Description=Blobstream orchestrator service</span></span>
<span class="line"><span style="color:#24292e;">After=network.target</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">[Service]</span></span>
<span class="line"><span style="color:#24292e;">Type=simple</span></span>
<span class="line"><span style="color:#24292e;">ExecStart=&lt;absolute_path_to_blobstream_binary&gt; orchestrator start --evm.account &lt;evm_account&gt; --evm.passphrase &lt;evm_passphrase&gt; --core.grpc.host &lt;grpc_endpoint_host&gt; --core.grpc.port &lt;grpc_endpoint_port&gt; --core.rpc.host &lt;rpc_endpoint_host&gt; --core.rpc.port &lt;rpc_endpoint_port&gt; --p2p.bootstrappers &lt;bootstrappers_list&gt;</span></span>
<span class="line"><span style="color:#24292e;">LimitNOFILE=infinity</span></span>
<span class="line"><span style="color:#24292e;">LimitCORE=infinity</span></span>
<span class="line"><span style="color:#24292e;">Restart=always</span></span>
<span class="line"><span style="color:#24292e;">RestartSec=1</span></span>
<span class="line"><span style="color:#24292e;">StartLimitBurst=5</span></span>
<span class="line"><span style="color:#24292e;">User=&lt;username&gt;</span></span>
<span class="line"><span style="color:#24292e;">StandardError=journal</span></span>
<span class="line"><span style="color:#24292e;">StandardOutput=journal</span></span>
<span class="line"><span style="color:#24292e;">TTYPath=/dev/tty0</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">[Install]</span></span>
<span class="line"><span style="color:#24292e;">WantedBy=multi-user.target</span></span></code></pre></div><ul><li>Start the orchestrator service using:</li></ul><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">sudo</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">systemctl</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">start</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">orchestrator</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">sudo</span><span style="color:#24292E;"> </span><span style="color:#032F62;">systemctl</span><span style="color:#24292E;"> </span><span style="color:#032F62;">start</span><span style="color:#24292E;"> </span><span style="color:#032F62;">orchestrator</span></span></code></pre></div><ul><li>Follow the logs to see if everything is running correctly:</li></ul><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">sudo</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">journalctl</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-f</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-u</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">orchestrator</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">sudo</span><span style="color:#24292E;"> </span><span style="color:#032F62;">journalctl</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-f</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-u</span><span style="color:#24292E;"> </span><span style="color:#032F62;">orchestrator</span></span></code></pre></div><p>And you should see the orchestrator signing.</p><h5 id="issue-journald-not-outputting-the-logs" tabindex="-1">Issue: Journald not outputting the logs <a class="header-anchor" href="#issue-journald-not-outputting-the-logs" aria-label="Permalink to &quot;Issue: Journald not outputting the logs&quot;">​</a></h5><p>Sometimes, <code>journald</code> wouldn&#39;t load the logs from the specified service. An easy fix would be to restart it:</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">sudo</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">systemctl</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">restart</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">systemd-journald</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">sudo</span><span style="color:#24292E;"> </span><span style="color:#032F62;">systemctl</span><span style="color:#24292E;"> </span><span style="color:#032F62;">restart</span><span style="color:#24292E;"> </span><span style="color:#032F62;">systemd-journald</span></span></code></pre></div><p>Then, you should be able to follow the logs as expected.</p>`,79),o=[l];function p(r,c,i,d,h,y){return e(),a("div",null,o)}const b=s(t,[["render",p]]);export{g as __pageData,b as default};
