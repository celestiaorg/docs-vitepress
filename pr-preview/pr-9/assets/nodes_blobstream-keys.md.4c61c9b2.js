import{_ as s,o as e,c as a,Q as n}from"./chunks/framework.bfc7682c.js";const b=JSON.parse('{"title":"Key management","description":"Learn how to manage EVM private keys and P2P identities.","frontmatter":{"sidebar_label":"Key management","description":"Learn how to manage EVM private keys and P2P identities.","head":[["meta",{"name":"og:title","content":"Key management | Celestia Docs"},{"name":"og:description","content":false}]]},"headers":[],"relativePath":"nodes/blobstream-keys.md","filePath":"nodes/blobstream-keys.md","lastUpdated":1698085536000}'),l={name:"nodes/blobstream-keys.md"},o=n(`<h1 id="key-management" tabindex="-1">Key management <a class="header-anchor" href="#key-management" aria-label="Permalink to &quot;Key management&quot;">​</a></h1><p>The Blobstream <code>keys</code> command allows managing EVM private keys and P2P identities. It is defined as a subcommand for multiple commands with the only difference being the directory where the keys are stored. For the remaining functionality, it is the same for all the commands.</p><h2 id="orchestrator-command" tabindex="-1">Orchestrator command <a class="header-anchor" href="#orchestrator-command" aria-label="Permalink to &quot;Orchestrator command&quot;">​</a></h2><p>The <code>blobstream orchestrator keys</code> command manages keys for the orchestrator. By default, it uses the orchestrator default home directory to store the keys: <code>~/.orchestrator/keystore</code>. However, the default home can be changed either by specifying a different directory using the <code>--home</code> flag or setting the following environment variable:</p><table><thead><tr><th>Variable</th><th>Explanation</th><th>Default value</th><th>Required</th></tr></thead><tbody><tr><td><code>ORCHESTRATOR_HOME</code></td><td>Home directory for the orchestrator</td><td><code>~/.orchestrator</code></td><td>Optional</td></tr></tbody></table><h2 id="relayer-command" tabindex="-1">Relayer command <a class="header-anchor" href="#relayer-command" aria-label="Permalink to &quot;Relayer command&quot;">​</a></h2><p>The <code>blobstream relayer keys</code> command manages keys for the relayer. By default, it uses the relayer default home directory to store the keys: <code>~/.relayer/keystore</code>. However, the default home can be changed either by specifying a different directory using the <code>--home</code> flag or setting the following environment variable:</p><table><thead><tr><th>Variable</th><th>Explanation</th><th>Default value</th><th>Required</th></tr></thead><tbody><tr><td><code>RELAYER_HOME</code></td><td>Home directory for the relayer</td><td><code>~/.relayer</code></td><td>Optional</td></tr></tbody></table><h2 id="deploy-command" tabindex="-1">Deploy command <a class="header-anchor" href="#deploy-command" aria-label="Permalink to &quot;Deploy command&quot;">​</a></h2><p>The <code>blobstream deploy keys</code> command manages keys for the deployer. By default, it uses the deployer default home directory to store the keys: <code>~/.deployer/keystore</code>. However, the default home can be changed either by specifying a different directory using the <code>--home</code> flag or setting the following environment variable:</p><table><thead><tr><th>Variable</th><th>Explanation</th><th>Default value</th><th>Required</th></tr></thead><tbody><tr><td><code>DEPLOYER_HOME</code></td><td>Home directory for the deploy command</td><td><code>~/.deployer</code></td><td>Optional</td></tr></tbody></table><h2 id="store-initialization" tabindex="-1">Store initialization (!) <a class="header-anchor" href="#store-initialization" aria-label="Permalink to &quot;Store initialization (!)&quot;">​</a></h2><p>For the <code>keys</code> command, the home directory will be created automatically for commands that <code>add/import</code> new keys without having to manually initialize the store. Thus, you should be careful when running those.</p><p>However, if it finds an already initialized store, it will only add new keys to it and not overwrite it.</p><p>For the remaining subcommands <code>update/delete/list</code>, if the store is not initialized, the command will complain and change nothing on the file system.</p><h2 id="options" tabindex="-1">Options <a class="header-anchor" href="#options" aria-label="Permalink to &quot;Options&quot;">​</a></h2><p>As specified above, aside from the difference in the default home directory, the <code>keys</code> subcommand is similar for all commands and handles the keys in the same way.</p><p>The examples will use the orchestrator command to access the keys. However, the same behaviour applies to the other commands as well.</p><div class="language-ssh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ssh</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">blobstream orchestrator keys --help</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">Blobstream keys manager</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">Usage:</span></span>
<span class="line"><span style="color:#e1e4e8;">  blobstream orchestrator keys [command]</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">Available Commands:</span></span>
<span class="line"><span style="color:#e1e4e8;">  evm         Blobstream EVM keys manager</span></span>
<span class="line"><span style="color:#e1e4e8;">  p2p         Blobstream p2p keys manager</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">Flags:</span></span>
<span class="line"><span style="color:#e1e4e8;">  -h, --help   help for keys</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">Use &quot;blobstream orchestrator keys [command] --help&quot; for more information about a command.</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">blobstream orchestrator keys --help</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">Blobstream keys manager</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">Usage:</span></span>
<span class="line"><span style="color:#24292e;">  blobstream orchestrator keys [command]</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">Available Commands:</span></span>
<span class="line"><span style="color:#24292e;">  evm         Blobstream EVM keys manager</span></span>
<span class="line"><span style="color:#24292e;">  p2p         Blobstream p2p keys manager</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">Flags:</span></span>
<span class="line"><span style="color:#24292e;">  -h, --help   help for keys</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">Use &quot;blobstream orchestrator keys [command] --help&quot; for more information about a command.</span></span></code></pre></div><h3 id="evm-keystore" tabindex="-1">EVM keystore <a class="header-anchor" href="#evm-keystore" aria-label="Permalink to &quot;EVM keystore&quot;">​</a></h3><p>The first subcommand of the <code>keys</code> command is <code>evm</code>. This latter allows managing EVM keys.</p><p>The EVM keys are <code>ECDSA</code> keys using the <code>secp256k1</code> curve. The implementation uses <code>geth</code> file system keystore <a href="https://geth.ethereum.org/docs/developers/dapp-developer/native-accounts" target="_blank" rel="noreferrer">implementation</a>. Thus, keys can be used interchangeably with any compatible software.</p><div class="language-ssh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ssh</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">blobstream orchestrator keys evm --help</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">Blobstream EVM keys manager</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">Usage:</span></span>
<span class="line"><span style="color:#e1e4e8;">  blobstream orchestrator keys evm [command]</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">Available Commands:</span></span>
<span class="line"><span style="color:#e1e4e8;">  add         create a new EVM address</span></span>
<span class="line"><span style="color:#e1e4e8;">  delete      delete an EVM addresses from the key store</span></span>
<span class="line"><span style="color:#e1e4e8;">  import      import evm keys to the keystore</span></span>
<span class="line"><span style="color:#e1e4e8;">  list        list EVM addresses in key store</span></span>
<span class="line"><span style="color:#e1e4e8;">  update      update an EVM account passphrase</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">Flags:</span></span>
<span class="line"><span style="color:#e1e4e8;">  -h, --help   help for evm</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">Use &quot;blobstream orchestrator keys evm [command] --help&quot; for more information about a command.</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">blobstream orchestrator keys evm --help</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">Blobstream EVM keys manager</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">Usage:</span></span>
<span class="line"><span style="color:#24292e;">  blobstream orchestrator keys evm [command]</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">Available Commands:</span></span>
<span class="line"><span style="color:#24292e;">  add         create a new EVM address</span></span>
<span class="line"><span style="color:#24292e;">  delete      delete an EVM addresses from the key store</span></span>
<span class="line"><span style="color:#24292e;">  import      import evm keys to the keystore</span></span>
<span class="line"><span style="color:#24292e;">  list        list EVM addresses in key store</span></span>
<span class="line"><span style="color:#24292e;">  update      update an EVM account passphrase</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">Flags:</span></span>
<span class="line"><span style="color:#24292e;">  -h, --help   help for evm</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">Use &quot;blobstream orchestrator keys evm [command] --help&quot; for more information about a command.</span></span></code></pre></div><p>The store also uses the <code>accounts.StandardScryptN</code> and <code>accounts.StandardScryptP</code> for the <code>Scrypt</code> password-based key derivation algorithm to improve its resistance to parallel hardware attacks:</p><div class="language-go vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">go</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">evmKs </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> keystore.</span><span style="color:#79B8FF;">NewKeyStore</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">evmKeyStorePath</span><span style="color:#E1E4E8;">(path), keystore.StandardScryptN, keystore.StandardScryptP)</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">evmKs </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> keystore.</span><span style="color:#005CC5;">NewKeyStore</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">evmKeyStorePath</span><span style="color:#24292E;">(path), keystore.StandardScryptN, keystore.StandardScryptP)</span></span></code></pre></div><h4 id="evm-add-subcommand" tabindex="-1">EVM: Add subcommand <a class="header-anchor" href="#evm-add-subcommand" aria-label="Permalink to &quot;EVM: Add subcommand&quot;">​</a></h4><p>The <code>add</code> subcommand allows creating a new EVM private key and storing it in the keystore:</p><div class="language-ssh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ssh</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">blobstream orchestrator keys evm add --help</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">create a new EVM address</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">Usage:</span></span>
<span class="line"><span style="color:#e1e4e8;">  blobstream orchestrator keys evm add [flags]</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">blobstream orchestrator keys evm add --help</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">create a new EVM address</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">Usage:</span></span>
<span class="line"><span style="color:#24292e;">  blobstream orchestrator keys evm add [flags]</span></span></code></pre></div><p>The passphrase of the key encryption can be passed as a flag. But it is advised not to pass it as plain text and instead enter it when prompted interactively.</p><p>After creating a new key, you will see its corresponding address printed:</p><div class="language-ssh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ssh</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">blobstream orchestrator keys evm add</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">I[2023-04-13|14:16:11.387] successfully opened store                    path=/home/midnight/.orchestrator</span></span>
<span class="line"><span style="color:#e1e4e8;">I[2023-04-13|14:16:11.387] please provide a passphrase for your account</span></span>
<span class="line"><span style="color:#e1e4e8;">I[2023-04-13|14:16:30.533] account created successfully                 address=0xaF319b70de80232539ad576f88739afD2dF44187</span></span>
<span class="line"><span style="color:#e1e4e8;">I[2023-04-13|14:16:30.534] successfully closed store                    path=/home/midnight/.orchestrator</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">blobstream orchestrator keys evm add</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">I[2023-04-13|14:16:11.387] successfully opened store                    path=/home/midnight/.orchestrator</span></span>
<span class="line"><span style="color:#24292e;">I[2023-04-13|14:16:11.387] please provide a passphrase for your account</span></span>
<span class="line"><span style="color:#24292e;">I[2023-04-13|14:16:30.533] account created successfully                 address=0xaF319b70de80232539ad576f88739afD2dF44187</span></span>
<span class="line"><span style="color:#24292e;">I[2023-04-13|14:16:30.534] successfully closed store                    path=/home/midnight/.orchestrator</span></span></code></pre></div><h4 id="evm-delete-subcommand" tabindex="-1">EVM: Delete subcommand <a class="header-anchor" href="#evm-delete-subcommand" aria-label="Permalink to &quot;EVM: Delete subcommand&quot;">​</a></h4><p>The <code>delete</code> subcommand allows deleting an EVM private key from store via providing its corresponding address:</p><div class="language-ssh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ssh</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">blobstream orchestrator keys evm delete --help</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">delete an EVM addresses from the key store</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">Usage:</span></span>
<span class="line"><span style="color:#e1e4e8;">  blobstream orchestrator keys evm delete &lt;account address in hex&gt; [flags]</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">blobstream orchestrator keys evm delete --help</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">delete an EVM addresses from the key store</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">Usage:</span></span>
<span class="line"><span style="color:#24292e;">  blobstream orchestrator keys evm delete &lt;account address in hex&gt; [flags]</span></span></code></pre></div><p>The provided address should be a <code>0x</code> prefixed EVM address.</p><p>After running the command, you will be prompted to enter the passphrase for the encrypted private key, if not passed as a flag.</p><p>Then, you will be prompted to confirm that you want to delete that private key. Make sure to verify if you&#39;re deleting the right one because once deleted, it can no longer be recovered!</p><div class="language-ssh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ssh</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">blobstream orchestrator keys evm delete 0x27a1F8CE94187E4b043f4D57548EF2348Ed556c7</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">I[2023-04-13|15:01:41.308] successfully opened store                    path=/home/midnight/.orchestrator</span></span>
<span class="line"><span style="color:#e1e4e8;">I[2023-04-13|15:01:41.309] deleting account                             address=0x27a1F8CE94187E4b043f4D57548EF2348Ed556c7</span></span>
<span class="line"><span style="color:#e1e4e8;">I[2023-04-13|15:01:41.309] please provide the address passphrase</span></span>
<span class="line"><span style="color:#e1e4e8;">I[2023-04-13|15:01:43.268] Are you sure you want to delete your private key? This action cannot be undone and may result in permanent loss of access to your account.</span></span>
<span class="line"><span style="color:#e1e4e8;">Please enter &#39;yes&#39; or &#39;no&#39; to confirm your decision: yes</span></span>
<span class="line"><span style="color:#e1e4e8;">I[2023-04-13|15:01:45.532] private key has been deleted successfully    address=0x27a1F8CE94187E4b043f4D57548EF2348Ed556c7</span></span>
<span class="line"><span style="color:#e1e4e8;">I[2023-04-13|15:01:45.534] successfully closed store                    path=/home/midnight/.orchestrator</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">blobstream orchestrator keys evm delete 0x27a1F8CE94187E4b043f4D57548EF2348Ed556c7</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">I[2023-04-13|15:01:41.308] successfully opened store                    path=/home/midnight/.orchestrator</span></span>
<span class="line"><span style="color:#24292e;">I[2023-04-13|15:01:41.309] deleting account                             address=0x27a1F8CE94187E4b043f4D57548EF2348Ed556c7</span></span>
<span class="line"><span style="color:#24292e;">I[2023-04-13|15:01:41.309] please provide the address passphrase</span></span>
<span class="line"><span style="color:#24292e;">I[2023-04-13|15:01:43.268] Are you sure you want to delete your private key? This action cannot be undone and may result in permanent loss of access to your account.</span></span>
<span class="line"><span style="color:#24292e;">Please enter &#39;yes&#39; or &#39;no&#39; to confirm your decision: yes</span></span>
<span class="line"><span style="color:#24292e;">I[2023-04-13|15:01:45.532] private key has been deleted successfully    address=0x27a1F8CE94187E4b043f4D57548EF2348Ed556c7</span></span>
<span class="line"><span style="color:#24292e;">I[2023-04-13|15:01:45.534] successfully closed store                    path=/home/midnight/.orchestrator</span></span></code></pre></div><h4 id="evm-list-subcommand" tabindex="-1">EVM: List subcommand <a class="header-anchor" href="#evm-list-subcommand" aria-label="Permalink to &quot;EVM: List subcommand&quot;">​</a></h4><p>The <code>list</code> subcommand allows listing the existing keys in the keystore:</p><div class="language-ssh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ssh</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">blobstream orchestrator keys evm list</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">I[2023-04-13|16:08:45.084] successfully opened store                    path=/home/midnight/.orchestrator</span></span>
<span class="line"><span style="color:#e1e4e8;">I[2023-04-13|16:08:45.084] listing accounts available in store</span></span>
<span class="line"><span style="color:#e1e4e8;">I[2023-04-13|16:08:45.084] 0x7Dd8F9CAfe6D25165249A454F2d0b72FD149Bbba</span></span>
<span class="line"><span style="color:#e1e4e8;">I[2023-04-13|16:08:45.084] successfully closed store                    path=/home/midnight/.orchestrator</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">blobstream orchestrator keys evm list</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">I[2023-04-13|16:08:45.084] successfully opened store                    path=/home/midnight/.orchestrator</span></span>
<span class="line"><span style="color:#24292e;">I[2023-04-13|16:08:45.084] listing accounts available in store</span></span>
<span class="line"><span style="color:#24292e;">I[2023-04-13|16:08:45.084] 0x7Dd8F9CAfe6D25165249A454F2d0b72FD149Bbba</span></span>
<span class="line"><span style="color:#24292e;">I[2023-04-13|16:08:45.084] successfully closed store                    path=/home/midnight/.orchestrator</span></span></code></pre></div><p>You could specify a different home using the <code>--home</code> flag to list the keys in another home directory.</p><h4 id="evm-update-subcommand" tabindex="-1">EVM: Update subcommand <a class="header-anchor" href="#evm-update-subcommand" aria-label="Permalink to &quot;EVM: Update subcommand&quot;">​</a></h4><p>The <code>update</code> subcommand allows changing the EVM private key passphrase to a new one. It takes as argument the <code>0x</code> prefixed EVM address corresponding to the private key we want to edit.</p><div class="language-ssh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ssh</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">blobstream orchestrator evm update --help</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">update an EVM account passphrase</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">Usage:</span></span>
<span class="line"><span style="color:#e1e4e8;">  blobstream orchestrator keys evm update &lt;account address in hex&gt; [flags]</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">blobstream orchestrator evm update --help</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">update an EVM account passphrase</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">Usage:</span></span>
<span class="line"><span style="color:#24292e;">  blobstream orchestrator keys evm update &lt;account address in hex&gt; [flags]</span></span></code></pre></div><p>Example:</p><div class="language-ssh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ssh</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">blobstream orchestrator evm update 0x7Dd8F9CAfe6D25165249A454F2d0b72FD149Bbba</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">I[2023-04-13|16:21:17.139] successfully opened store                    path=/home/midnight/.orchestrator</span></span>
<span class="line"><span style="color:#e1e4e8;">I[2023-04-13|16:21:17.140] updating account                             address=0x7Dd8F9CAfe6D25165249A454F2d0b72FD149Bbba</span></span>
<span class="line"><span style="color:#e1e4e8;">I[2023-04-13|16:21:17.140] please provide the address passphrase</span></span>
<span class="line"><span style="color:#e1e4e8;">I[2023-04-13|16:21:18.134] please provide the address new passphrase</span></span>
<span class="line"><span style="color:#e1e4e8;">I[2023-04-13|16:21:22.403] successfully updated the passphrase          address=0x7Dd8F9CAfe6D25165249A454F2d0b72FD149Bbba</span></span>
<span class="line"><span style="color:#e1e4e8;">I[2023-04-13|16:21:22.420] successfully closed store                    path=/home/midnight/.orchestrator</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">blobstream orchestrator evm update 0x7Dd8F9CAfe6D25165249A454F2d0b72FD149Bbba</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">I[2023-04-13|16:21:17.139] successfully opened store                    path=/home/midnight/.orchestrator</span></span>
<span class="line"><span style="color:#24292e;">I[2023-04-13|16:21:17.140] updating account                             address=0x7Dd8F9CAfe6D25165249A454F2d0b72FD149Bbba</span></span>
<span class="line"><span style="color:#24292e;">I[2023-04-13|16:21:17.140] please provide the address passphrase</span></span>
<span class="line"><span style="color:#24292e;">I[2023-04-13|16:21:18.134] please provide the address new passphrase</span></span>
<span class="line"><span style="color:#24292e;">I[2023-04-13|16:21:22.403] successfully updated the passphrase          address=0x7Dd8F9CAfe6D25165249A454F2d0b72FD149Bbba</span></span>
<span class="line"><span style="color:#24292e;">I[2023-04-13|16:21:22.420] successfully closed store                    path=/home/midnight/.orchestrator</span></span></code></pre></div><p>Both the passphrases can be provided as flags, but it&#39;s better to pass them interactively for more security.</p><p>The <code>--home</code> can be specified if the store is not in the default directory.</p><h4 id="evm-import-subcommand" tabindex="-1">EVM: Import subcommand <a class="header-anchor" href="#evm-import-subcommand" aria-label="Permalink to &quot;EVM: Import subcommand&quot;">​</a></h4><p>The <code>import</code> subcommand allows importing existing private keys into the keystore. It has two subcommands: <code>ecdsa</code> and <code>file</code>. The first allows importing a private key in plaintext, while the other allows importing a private key from a JSON file secured with a passphrase.</p><div class="language-ssh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ssh</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">blobstream orchestrator keys evm import --help</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">import evm keys to the keystore</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">Usage:</span></span>
<span class="line"><span style="color:#e1e4e8;">  blobstream orchestrator keys evm import [command]</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">Available Commands:</span></span>
<span class="line"><span style="color:#e1e4e8;">  ecdsa       import an EVM address from an ECDSA private key</span></span>
<span class="line"><span style="color:#e1e4e8;">  file        import an EVM address from a file</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">Flags:</span></span>
<span class="line"><span style="color:#e1e4e8;">  -h, --help   help for import</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">Use &quot;blobstream orchestrator keys evm import [command] --help&quot; for more information about a command.</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">blobstream orchestrator keys evm import --help</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">import evm keys to the keystore</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">Usage:</span></span>
<span class="line"><span style="color:#24292e;">  blobstream orchestrator keys evm import [command]</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">Available Commands:</span></span>
<span class="line"><span style="color:#24292e;">  ecdsa       import an EVM address from an ECDSA private key</span></span>
<span class="line"><span style="color:#24292e;">  file        import an EVM address from a file</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">Flags:</span></span>
<span class="line"><span style="color:#24292e;">  -h, --help   help for import</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">Use &quot;blobstream orchestrator keys evm import [command] --help&quot; for more information about a command.</span></span></code></pre></div><h4 id="evm-import-ecdsa" tabindex="-1">EVM: Import ECDSA <a class="header-anchor" href="#evm-import-ecdsa" aria-label="Permalink to &quot;EVM: Import ECDSA&quot;">​</a></h4><p>For the first one, it takes as argument the private key in plaintext. Then, it prompts for the passphrase to use when encrypting the key and saving it to the keystore. The passphrase could be passed as a flag using the <code>--evm.passphrase</code>, but it&#39;s advised not to.</p><p>Example:</p><div class="language-ssh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ssh</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">blobstream orchestrator keys evm import ecdsa da6ed55cb2894ac2c9c10209c09de8e8b9d109b910338d5bf3d747a7e1fc9eb7</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">I[2023-04-13|17:00:48.617] successfully opened store                    path=/home/midnight/.orchestrator</span></span>
<span class="line"><span style="color:#e1e4e8;">I[2023-04-13|17:00:48.617] importing account</span></span>
<span class="line"><span style="color:#e1e4e8;">I[2023-04-13|17:00:48.617] please provide the address passphrase</span></span>
<span class="line"><span style="color:#e1e4e8;">I[2023-04-13|17:00:51.989] successfully imported file                   address=0x6B452Da14195b0aDc3C960E56a078Cf8f50448f8</span></span>
<span class="line"><span style="color:#e1e4e8;">I[2023-04-13|17:00:51.990] successfully closed store                    path=/home/midnight/.orchestrator</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">blobstream orchestrator keys evm import ecdsa da6ed55cb2894ac2c9c10209c09de8e8b9d109b910338d5bf3d747a7e1fc9eb7</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">I[2023-04-13|17:00:48.617] successfully opened store                    path=/home/midnight/.orchestrator</span></span>
<span class="line"><span style="color:#24292e;">I[2023-04-13|17:00:48.617] importing account</span></span>
<span class="line"><span style="color:#24292e;">I[2023-04-13|17:00:48.617] please provide the address passphrase</span></span>
<span class="line"><span style="color:#24292e;">I[2023-04-13|17:00:51.989] successfully imported file                   address=0x6B452Da14195b0aDc3C960E56a078Cf8f50448f8</span></span>
<span class="line"><span style="color:#24292e;">I[2023-04-13|17:00:51.990] successfully closed store                    path=/home/midnight/.orchestrator</span></span></code></pre></div><h4 id="evm-import-file" tabindex="-1">EVM: Import file <a class="header-anchor" href="#evm-import-file" aria-label="Permalink to &quot;EVM: Import file&quot;">​</a></h4><p>For the second, it takes a JSON key file, as defined in <a href="https://github.com/ethereum/eth-keyfile" target="_blank" rel="noreferrer">@ethereum/eth-keyfile</a>, and imports it to your keystore, so it can be used for signatures.</p><div class="language-ssh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ssh</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">blobstream orchestrator keys evm import file --help</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">import an EVM address from a file</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">Usage:</span></span>
<span class="line"><span style="color:#e1e4e8;">  blobstream orchestrator keys evm import file &lt;path to key file&gt; [flags]</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">blobstream orchestrator keys evm import file --help</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">import an EVM address from a file</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">Usage:</span></span>
<span class="line"><span style="color:#24292e;">  blobstream orchestrator keys evm import file &lt;path to key file&gt; [flags]</span></span></code></pre></div><p>For example, if we have a file in the current directory containing a private key, we could run the following:</p><div class="language-ssh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ssh</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">blobstream orchestrator keys evm import file UTC--2023-04-13T15-00-50.302148204Z--966e6f22781ef6a6a82bbb4db3df8e225dfd9488</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">I[2023-04-13|17:31:53.307] successfully opened store                    path=/home/midnight/.orchestrator</span></span>
<span class="line"><span style="color:#e1e4e8;">I[2023-04-13|17:31:53.307] importing account</span></span>
<span class="line"><span style="color:#e1e4e8;">I[2023-04-13|17:31:53.308] please provide the address passphrase</span></span>
<span class="line"><span style="color:#e1e4e8;">I[2023-04-13|17:31:54.440] please provide the address new passphrase</span></span>
<span class="line"><span style="color:#e1e4e8;">I[2023-04-13|17:31:58.436] successfully imported file                   address=0x966e6f22781EF6a6A82BBB4DB3df8E225DfD9488</span></span>
<span class="line"><span style="color:#e1e4e8;">I[2023-04-13|17:31:58.437] successfully closed store                    path=/home/midnight/.orchestrator</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">blobstream orchestrator keys evm import file UTC--2023-04-13T15-00-50.302148204Z--966e6f22781ef6a6a82bbb4db3df8e225dfd9488</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">I[2023-04-13|17:31:53.307] successfully opened store                    path=/home/midnight/.orchestrator</span></span>
<span class="line"><span style="color:#24292e;">I[2023-04-13|17:31:53.307] importing account</span></span>
<span class="line"><span style="color:#24292e;">I[2023-04-13|17:31:53.308] please provide the address passphrase</span></span>
<span class="line"><span style="color:#24292e;">I[2023-04-13|17:31:54.440] please provide the address new passphrase</span></span>
<span class="line"><span style="color:#24292e;">I[2023-04-13|17:31:58.436] successfully imported file                   address=0x966e6f22781EF6a6A82BBB4DB3df8E225DfD9488</span></span>
<span class="line"><span style="color:#24292e;">I[2023-04-13|17:31:58.437] successfully closed store                    path=/home/midnight/.orchestrator</span></span></code></pre></div><p>with the <code>passphrase</code> being the current file passphrase, and the <code>new passphrase</code> being the new passphrase that will be used to encrypt the private key in the Blobstream store.</p><h3 id="p2p-keystore" tabindex="-1">P2P keystore <a class="header-anchor" href="#p2p-keystore" aria-label="Permalink to &quot;P2P keystore&quot;">​</a></h3><p>Similar to the above EVM keystore, the P2P store has similar subcommands for handling the P2P Ed25519 private keys. However, it doesn&#39;t use any passphrase to secure them because they aren&#39;t that important. Any key could be used, and it is not binding to any identity. Thus, there is no need to secure them.</p><p>To access the P2P keystore, run the following:</p><div class="language-ssh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ssh</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">blobstream orchestrator keys p2p</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">Blobstream p2p keys manager</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">Usage:</span></span>
<span class="line"><span style="color:#e1e4e8;">  blobstream orchestrator keys p2p [command]</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">Available Commands:</span></span>
<span class="line"><span style="color:#e1e4e8;">  add         create a new Ed25519 P2P address</span></span>
<span class="line"><span style="color:#e1e4e8;">  delete      delete an Ed25519 P2P private key from store</span></span>
<span class="line"><span style="color:#e1e4e8;">  import      import an existing p2p private key</span></span>
<span class="line"><span style="color:#e1e4e8;">  list        list existing p2p addresses</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">Flags:</span></span>
<span class="line"><span style="color:#e1e4e8;">  -h, --help   help for p2p</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">Use &quot;blobstream orchestrator keys p2p [command] --help&quot; for more information about a command.</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">blobstream orchestrator keys p2p</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">Blobstream p2p keys manager</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">Usage:</span></span>
<span class="line"><span style="color:#24292e;">  blobstream orchestrator keys p2p [command]</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">Available Commands:</span></span>
<span class="line"><span style="color:#24292e;">  add         create a new Ed25519 P2P address</span></span>
<span class="line"><span style="color:#24292e;">  delete      delete an Ed25519 P2P private key from store</span></span>
<span class="line"><span style="color:#24292e;">  import      import an existing p2p private key</span></span>
<span class="line"><span style="color:#24292e;">  list        list existing p2p addresses</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">Flags:</span></span>
<span class="line"><span style="color:#24292e;">  -h, --help   help for p2p</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">Use &quot;blobstream orchestrator keys p2p [command] --help&quot; for more information about a command.</span></span></code></pre></div><p>The <code>orchestrator</code> could be replaced by <code>relayer</code> and the only difference would be the default home directory. Aside from that, all the methods defined for the orchestrator will also work with the relayer.</p><h4 id="p2p-add-subcommand" tabindex="-1">P2P: Add subcommand <a class="header-anchor" href="#p2p-add-subcommand" aria-label="Permalink to &quot;P2P: Add subcommand&quot;">​</a></h4><p>The <code>add</code> subcommand creates a new p2p key to the p2p store:</p><div class="language-ssh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ssh</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">blobstream orchestrator keys p2p add --help</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">create a new Ed25519 P2P address</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">Usage:</span></span>
<span class="line"><span style="color:#e1e4e8;">  blobstream orchestrator keys p2p add &lt;nickname&gt; [flags]</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">blobstream orchestrator keys p2p add --help</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">create a new Ed25519 P2P address</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">Usage:</span></span>
<span class="line"><span style="color:#24292e;">  blobstream orchestrator keys p2p add &lt;nickname&gt; [flags]</span></span></code></pre></div><p>It takes as argument an optional <code>&lt;nickname&gt;</code> which would be the name that we can use to reference that private key. If not specified, an incremental nickname will be assigned.</p><div class="language-ssh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ssh</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">blobstream orchestrator keys p2p add</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">I[2023-04-13|17:38:17.289] successfully opened store                    path=/home/midnight/.orchestrator</span></span>
<span class="line"><span style="color:#e1e4e8;">I[2023-04-13|17:38:17.290] generating a new Ed25519 private key         nickname=1</span></span>
<span class="line"><span style="color:#e1e4e8;">I[2023-04-13|17:38:17.291] key created successfully                     nickname=1</span></span>
<span class="line"><span style="color:#e1e4e8;">I[2023-04-13|17:38:17.291] successfully closed store                    path=/home/midnight/.orchestrator</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">blobstream orchestrator keys p2p add</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">I[2023-04-13|17:38:17.289] successfully opened store                    path=/home/midnight/.orchestrator</span></span>
<span class="line"><span style="color:#24292e;">I[2023-04-13|17:38:17.290] generating a new Ed25519 private key         nickname=1</span></span>
<span class="line"><span style="color:#24292e;">I[2023-04-13|17:38:17.291] key created successfully                     nickname=1</span></span>
<span class="line"><span style="color:#24292e;">I[2023-04-13|17:38:17.291] successfully closed store                    path=/home/midnight/.orchestrator</span></span></code></pre></div><p>For example, in the above execution, the nickname <code>1</code> was given to the newly added key, since we didn&#39;t provide a nickname.</p><p>The nickname will be needed in case the orchestrator needs to use a specific private key to connect to the P2P network, and that nickname will be provided as a flag. However, if not provided, the orchestrator/relayer will choose the first key in the store and just use it to connect.</p><h4 id="p2p-delete-subcommand" tabindex="-1">P2P: Delete subcommand <a class="header-anchor" href="#p2p-delete-subcommand" aria-label="Permalink to &quot;P2P: Delete subcommand&quot;">​</a></h4><p>The <code>delete</code> subcommand will delete a P2P private key from store referenced by its nickname:</p><div class="language-ssh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ssh</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">blobstream orchestrator keys p2p delete --help</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">delete an Ed25519 P2P private key from store</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">Usage:</span></span>
<span class="line"><span style="color:#e1e4e8;">  blobstream orchestrator keys p2p delete &lt;nickname&gt; [flags]</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">blobstream orchestrator keys p2p delete --help</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">delete an Ed25519 P2P private key from store</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">Usage:</span></span>
<span class="line"><span style="color:#24292e;">  blobstream orchestrator keys p2p delete &lt;nickname&gt; [flags]</span></span></code></pre></div><h4 id="p2p-import-subcommand" tabindex="-1">P2P: Import subcommand <a class="header-anchor" href="#p2p-import-subcommand" aria-label="Permalink to &quot;P2P: Import subcommand&quot;">​</a></h4><p>The <code>import</code> subcommand will import an existing Ed25519 private key to the store. It takes as argument the nickname that we wish to save the private key under, and the actual private key in hex format without <code>0x</code>:</p><div class="language-ssh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ssh</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">blobstream orchestrator keys p2p import --help</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">import an existing p2p private key</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">Usage:</span></span>
<span class="line"><span style="color:#e1e4e8;">  blobstream orchestrator keys p2p import &lt;nickname&gt; &lt;private_key_in_hex_without_0x&gt; [flags]</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">blobstream orchestrator keys p2p import --help</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">import an existing p2p private key</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">Usage:</span></span>
<span class="line"><span style="color:#24292e;">  blobstream orchestrator keys p2p import &lt;nickname&gt; &lt;private_key_in_hex_without_0x&gt; [flags]</span></span></code></pre></div><h4 id="p2p-list-subcommand" tabindex="-1">P2P: List subcommand <a class="header-anchor" href="#p2p-list-subcommand" aria-label="Permalink to &quot;P2P: List subcommand&quot;">​</a></h4><p>The <code>list</code> subcommand lists the existing P2P private keys in the store:</p><div class="language-ssh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ssh</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">blobstream orchestrator keys p2p list --help</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">list existing p2p addresses</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">Usage:</span></span>
<span class="line"><span style="color:#e1e4e8;">  blobstream orchestrator keys p2p list [flags]</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">blobstream orchestrator keys p2p list --help</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">list existing p2p addresses</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">Usage:</span></span>
<span class="line"><span style="color:#24292e;">  blobstream orchestrator keys p2p list [flags]</span></span></code></pre></div>`,83),p=[o];function t(r,c,i,d,h,y){return e(),a("div",null,p)}const u=s(l,[["render",t]]);export{b as __pageData,u as default};
