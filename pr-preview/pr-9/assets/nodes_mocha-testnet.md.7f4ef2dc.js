import{M as t}from"./chunks/MochaVersionTags.d4a7e39a.js";import{o,c as a,H as n,Q as e}from"./chunks/framework.bfc7682c.js";import"./chunks/mocha_versions.d091215e.js";import"./chunks/constants.e90b75b1.js";const s="/pr-preview/pr-9/img/mocha.jpg",l=e('<h1 id="mocha-testnet" tabindex="-1">Mocha testnet <a class="header-anchor" href="#mocha-testnet" aria-label="Permalink to &quot;Mocha testnet&quot;">​</a></h1><p><img src="'+s+'" alt="mocha-testnet"></p><p>This guide contains the relevant sections for how to connect to Mocha, depending on the type of node you are running. Mocha testnet is designed to help validators test out their infrastructure and node software. Developers are encouraged to deploy their sovereign rollups on Mocha, but we also recommend <a href="./arabica-devnet">Arabica devnet</a> for that as it is designed for development purposes.</p><p>Mocha is a milestone in Celestia, allowing everyone to test out core functionalities on the network. Read <a href="https://blog.celestia.org/celestia-testnet-introduces-alpha-data-availability-api" target="_blank" rel="noreferrer">the announcement</a>. Your best approach to participating is to first determine which node you would like to run. Each node guides will link to the relevant network in order to show you how to connect to them.</p><p>You have a list of options on the type of nodes you can run in order to participate in Mocha:</p><p>Consensus:</p><ul><li><a href="./consensus-node">Full consensus node</a></li><li><a href="./consensus-node#optional-setting-up-a-validator">Validator node</a></li></ul><p>Data Availability:</p><ul><li><a href="./bridge-node">Bridge node</a></li><li><a href="./full-storage-node">Full storage node</a></li><li><a href="./light-node">Light node</a></li></ul><p>Select the type of node you would like to run and follow the instructions on each respective page. Whenever you are asked to select the type of network you want to connect to in those guides, select <code>Mocha</code> in order to refer to the correct instructions on this page on how to connect to Mocha.</p><h2 id="software-version-numbers" tabindex="-1">Software version numbers <a class="header-anchor" href="#software-version-numbers" aria-label="Permalink to &quot;Software version numbers&quot;">​</a></h2>',11),i=e('<h2 id="rpc-endpoints" tabindex="-1">RPC endpoints <a class="header-anchor" href="#rpc-endpoints" aria-label="Permalink to &quot;RPC endpoints&quot;">​</a></h2><p>The RPC endpoint is to allow users to interact with Celestia&#39;s nodes by querying the node&#39;s state and broadcasting transactions on the Celestia network. The default port is 26657.</p><p>Below is a list of RPC endpoints you can use to connect to Mocha testnet:</p><h3 id="bridge-full-and-light-nodes" tabindex="-1">Bridge, full, and light nodes <a class="header-anchor" href="#bridge-full-and-light-nodes" aria-label="Permalink to &quot;Bridge, full, and light nodes&quot;">​</a></h3><ul><li><code>full.consensus.mocha-4.celestia-mocha.com</code></li><li><code>consensus-full-mocha-4.celestia-mocha.com</code></li><li><code>rpc-mocha.pops.one</code></li><li><code>celestia-rpc.f5nodes.com</code></li><li><code>celestia-testnet.brightlystake.com</code></li><li><code>rpc-celestia-mocha.architectnodes.com</code></li></ul><h3 id="full-and-light-nodes-only" tabindex="-1">Full and light nodes ONLY <a class="header-anchor" href="#full-and-light-nodes-only" aria-label="Permalink to &quot;Full and light nodes ONLY&quot;">​</a></h3><p>These RPC endpoints do not allow you to download full blocks from them. We advise that if you are running a bridge node, that you also run a local <a href="./consensus-node">full consensus node</a> in order to download full blocks from it.</p><ul><li><code>rpc.celestia-mocha.com</code></li><li><code>rpc-2.celestia-mocha.com</code></li></ul><h2 id="api-endpoints" tabindex="-1">API endpoints <a class="header-anchor" href="#api-endpoints" aria-label="Permalink to &quot;API endpoints&quot;">​</a></h2><p>The API endpoint is to allow users to interact with the REST API in Cosmos SDK which is implemented using gRPC-gateway, which exposes gRPC endpoints as REST endpoints. This allows for communication with the node using REST calls, which can be useful if the client does not support gRPC or HTTP2. The default port is 1317.</p><ul><li><a href="https://api-mocha.pops.one" target="_blank" rel="noreferrer">https://api-mocha.pops.one</a></li><li><a href="https://api.celestia-mocha.com/" target="_blank" rel="noreferrer">https://api.celestia-mocha.com/</a></li><li><a href="https://api-2.celestia-mocha.com/" target="_blank" rel="noreferrer">https://api-2.celestia-mocha.com/</a></li><li><a href="https://celestia-api.f5nodes.com" target="_blank" rel="noreferrer">https://celestia-api.f5nodes.com</a></li><li><a href="https://celestia-testnet.brightlystake.com/api" target="_blank" rel="noreferrer">https://celestia-testnet.brightlystake.com/api</a></li><li><a href="https://rest-celestia-mocha.architectnodes.com" target="_blank" rel="noreferrer">https://rest-celestia-mocha.architectnodes.com</a></li></ul><h2 id="grpc-endpoints" tabindex="-1">gRPC endpoints <a class="header-anchor" href="#grpc-endpoints" aria-label="Permalink to &quot;gRPC endpoints&quot;">​</a></h2><p>The gRPC endpoint is to allow users to interact with a Celestia Node using gRPC, a modern open-source and high-performance RPC framework. The default port is 9090. In the Cosmos SDK, gRPC is used to define state queries and broadcast transactions.</p><ul><li><a href="https://grpc-mocha.pops.one" target="_blank" rel="noreferrer">https://grpc-mocha.pops.one</a></li><li><code>grpc.celestia-mocha.com:443</code></li><li><code>grpc-2.celestia-mocha.com:443</code></li><li><code>full.consensus.mocha-4.celestia-mocha.com:9090</code></li><li><code>consensus-full-mocha-4.celestia-mocha.com:9090</code></li><li><code>celestia-grpc.f5nodes.com</code></li><li><code>celestia-testnet.brightlystake.com:9390</code></li><li><code>grpc-celestia-mocha.architectnodes.com:1443</code></li></ul><h2 id="bridge-and-full-node-endpoints" tabindex="-1">Bridge and full node endpoints <a class="header-anchor" href="#bridge-and-full-node-endpoints" aria-label="Permalink to &quot;Bridge and full node endpoints&quot;">​</a></h2><p>The endpoints below are for bridge and full nodes only. They can be used to find bootstrapper peers in the p2p network.</p><p>Bridge node 1:</p><ul><li>da-bridge-mocha-4.celestia-mocha.com</li><li>bridge-mocha-4.da.celestia-mocha.com</li></ul><p>Bridge node 2:</p><ul><li>da-bridge-mocha-4-2.celestia-mocha.com</li><li>bridge-mocha-4-2.da.celestia-mocha.com</li></ul><p>Full node 1:</p><ul><li>da-full-1-mocha-4.celestia-mocha.com</li><li>full-1-mocha-4.da.celestia-mocha.com</li></ul><p>Full node 2:</p><ul><li>da-full-2-mocha-4.celestia-mocha.com</li><li>full-2-mocha-4.da.celestia-mocha.com</li></ul><h2 id="mocha-testnet-faucet" tabindex="-1">Mocha testnet faucet <a class="header-anchor" href="#mocha-testnet-faucet" aria-label="Permalink to &quot;Mocha testnet faucet&quot;">​</a></h2><div class="danger custom-block"><p class="custom-block-title">WARNING</p><p>USING THIS FAUCET DOES NOT ENTITLE YOU TO ANY AIRDROP OR OTHER DISTRIBUTION OF MAINNET CELESTIA TOKENS. MAINNET CELESTIA TOKENS DO NOT CURRENTLY EXIST AND THERE ARE NO PUBLIC SALES OR OTHER PUBLIC DISTRIBUTIONS OF ANY MAINNET CELESTIA TOKENS.</p></div><p>You can request from Mocha testnet Faucet on the #mocha-faucet channel on Celestia&#39;s Discord server with the following command:</p><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">$request &lt;CELESTIA-ADDRESS&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">$request &lt;CELESTIA-ADDRESS&gt;</span></span></code></pre></div><p>Where <code>&lt;CELESTIA-ADDRESS&gt;</code> is a <code>celestia1******</code> generated address.</p><blockquote><p>Note: Faucet has a limit of 10 tokens per week per address/Discord ID</p></blockquote><h2 id="explorers" tabindex="-1">Explorers <a class="header-anchor" href="#explorers" aria-label="Permalink to &quot;Explorers&quot;">​</a></h2><p>There are several explorers you can use for Mocha:</p><ul><li><a href="https://testnet.mintscan.io/celestia-testnet" target="_blank" rel="noreferrer">https://testnet.mintscan.io/celestia-testnet</a></li><li><a href="https://celestiascan.com" target="_blank" rel="noreferrer">https://celestiascan.com</a></li><li><a href="https://celestia.explorers.guru" target="_blank" rel="noreferrer">https://celestia.explorers.guru/</a></li><li><a href="https://explorer.nodestake.top/celestia-testnet" target="_blank" rel="noreferrer">https://explorer.nodestake.top/celestia-testnet/</a></li></ul><h2 id="network-upgrades" tabindex="-1">Network upgrades <a class="header-anchor" href="#network-upgrades" aria-label="Permalink to &quot;Network upgrades&quot;">​</a></h2><p>Join our <a href="https://t.me/+smSFIA7XXLU4MjJh" target="_blank" rel="noreferrer">Telegram announcement channel</a> for network upgrades.</p>',35),g=JSON.parse('{"title":"Mocha testnet","description":"Learn how to connect to the Mocha network.","frontmatter":{"description":"Learn how to connect to the Mocha network.","head":[["meta",{"name":"og:title","content":"Mocha testnet | Celestia Docs"},{"name":"og:description","content":false}]]},"headers":[],"relativePath":"nodes/mocha-testnet.md","filePath":"nodes/mocha-testnet.md","lastUpdated":1698085536000}'),r={name:"nodes/mocha-testnet.md"},b=Object.assign(r,{setup(c){return(d,h)=>(o(),a("div",null,[l,n(t),i]))}});export{g as __pageData,b as default};
