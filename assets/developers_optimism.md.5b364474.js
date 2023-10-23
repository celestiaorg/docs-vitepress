import{c as s}from"./chunks/constants.ad373f0f.js";import{o as n,c as l,k as e,t,l as a,Q as o}from"./chunks/framework.2b941d6c.js";const i=o('<h1 id="deploy-an-op-stack-testnet-with-celestia" tabindex="-1">Deploy an OP Stack testnet with Celestia <a class="header-anchor" href="#deploy-an-op-stack-testnet-with-celestia" aria-label="Permalink to &quot;Deploy an OP Stack testnet with Celestia&quot;">​</a></h1><p>In order to deploy a testnet with Celestia, you will need to have a modified version of <code>optimism-bedrock</code>. Refer to the <a href="./optimism-devnet">steps to install dependencies and the modified version of OP Stack</a> for your environment setup.</p><h2 id="pick-your-deployment-type" tabindex="-1">Pick your deployment type <a class="header-anchor" href="#pick-your-deployment-type" aria-label="Permalink to &quot;Pick your deployment type&quot;">​</a></h2><p>Using Celestia and OP stack, you have the option to either run a light node of your own or a <code>local-celestia-devnet</code>, which will give you a local devnet to test things out with.</p><h3 id="using-a-local-devnet" tabindex="-1">Using a local devnet <a class="header-anchor" href="#using-a-local-devnet" aria-label="Permalink to &quot;Using a local devnet&quot;">​</a></h3><p>If you&#39;d like to use the <code>local-celestia-devnet</code>, you&#39;re in luck! This is the default for the OP Stack + Celestia repository. Head to the <a href="./optimism-devnet">previous page</a> to get started.</p><h3 id="using-a-light-node" tabindex="-1">Using a light node <a class="header-anchor" href="#using-a-light-node" aria-label="Permalink to &quot;Using a light node&quot;">​</a></h3><p>This is a <strong>beta integration</strong> and we are working on resolving <a href="https://github.com/celestiaorg/optimism/issues/" target="_blank" rel="noreferrer">open issues</a>.</p><p>In order to allow your light node to post and retrieve data without errors, you will need to change <code>UseShareExchange</code> to <code>false</code> in:</p>',9),c={class:"vp-code-group vp-adaptive-theme"},p=o('<div class="tabs"><input type="radio" name="group-VKGt-" id="tab-9OobNan" checked="checked"><label for="tab-9OobNan">Arabica</label><input type="radio" name="group-VKGt-" id="tab-UpcIHX0"><label for="tab-UpcIHX0">Mocha</label></div>',1),d={class:"blocks"},r={class:"language-bash vp-adaptive-theme active"},h=e("button",{title:"Copy Code",class:"copy"},null,-1),u=e("span",{class:"lang"},"bash",-1),_={class:"shiki github-dark vp-code-dark"},y={class:"line"},g={style:{color:"#E1E4E8"}},b={class:"shiki github-light vp-code-light"},m={class:"line"},v={style:{color:"#24292E"}},k={class:"language-bash vp-adaptive-theme"},E=e("button",{title:"Copy Code",class:"copy"},null,-1),f=e("span",{class:"lang"},"bash",-1),C={class:"shiki github-dark vp-code-dark"},S={class:"line"},w={style:{color:"#E1E4E8"}},F={class:"shiki github-light vp-code-light"},T={class:"line"},I={style:{color:"#24292E"}},P=o('<p>If you choose to use your own node store, the light node must be <strong>fully synced</strong> and <strong>funded</strong> for you to be able to submit and retrieve <code>PayForBlobs</code> to a Celestia network.</p><p>If it is not synced, you will run into <a href="https://github.com/celestiaorg/celestia-node/issues/2151/" target="_blank" rel="noreferrer">errors similar to this</a>.</p><p>Visit the <a href="./../nodes/arabica-devnet">Arabica page</a> to visit the faucet.</p><p>In order to mount existing data, you must have a node store that is in this directory:</p>',4),A={class:"vp-code-group vp-adaptive-theme"},O=o('<div class="tabs"><input type="radio" name="group-D0heX" id="tab-O2X2TqK" checked="checked"><label for="tab-O2X2TqK">Arabica</label><input type="radio" name="group-D0heX" id="tab-ucDCHF-"><label for="tab-ucDCHF-">Mocha</label></div>',1),D={class:"blocks"},B={class:"language-bash vp-adaptive-theme active"},x=e("button",{title:"Copy Code",class:"copy"},null,-1),q=e("span",{class:"lang"},"bash",-1),R={class:"shiki github-dark vp-code-dark"},H={class:"line"},N={style:{color:"#E1E4E8"}},V={class:"shiki github-light vp-code-light"},U={class:"line"},M={style:{color:"#24292E"}},$={class:"language-bash vp-adaptive-theme"},X=e("button",{title:"Copy Code",class:"copy"},null,-1),K=e("span",{class:"lang"},"bash",-1),G={class:"shiki github-dark vp-code-dark"},Q={class:"line"},L={style:{color:"#E1E4E8"}},j={class:"shiki github-light vp-code-light"},z={class:"line"},J={style:{color:"#24292E"}},W=o(`<p>This is the default location of the node store when you initialize and run a new Celestia node.</p><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>The user in the <code>docker-compose-testnet.yml</code> is the <code>root</code> user, but this is not meant to be used in production.</p></div><p>By default, the node will run with the account named <code>my_celes_key</code>.</p><p>If you have your own setup you&#39;d like to try, you can always edit <code>optimism/ops-bedrock/docker-compose-testnet.yml</code> to work with your setup.</p><h3 id="using-a-raas-provider" tabindex="-1">Using a RaaS provider <a class="header-anchor" href="#using-a-raas-provider" aria-label="Permalink to &quot;Using a RaaS provider&quot;">​</a></h3><p>If you&#39;d like to use a Rollups as a Service (RaaS) provider, you can do so by going to the RaaS category in the menu.</p><h2 id="build-the-testnet" tabindex="-1">Build the testnet <a class="header-anchor" href="#build-the-testnet" aria-label="Permalink to &quot;Build the testnet&quot;">​</a></h2><p>Build TypeScript definitions for TS dependencies:</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#79B8FF;">cd</span><span style="color:#E1E4E8;"> $HOME</span></span>
<span class="line"><span style="color:#79B8FF;">cd</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">optimism</span></span>
<span class="line"><span style="color:#B392F0;">make</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">build-ts</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#005CC5;">cd</span><span style="color:#24292E;"> $HOME</span></span>
<span class="line"><span style="color:#005CC5;">cd</span><span style="color:#24292E;"> </span><span style="color:#032F62;">optimism</span></span>
<span class="line"><span style="color:#6F42C1;">make</span><span style="color:#24292E;"> </span><span style="color:#032F62;">build-ts</span></span></code></pre></div><p>Set environment variables to start network:</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> SEQUENCER_BATCH_INBOX_ADDRESS</span><span style="color:#F97583;">=</span><span style="color:#79B8FF;">0xff00000000000000000000000000000000000000</span></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> L2OO_ADDRESS</span><span style="color:#F97583;">=</span><span style="color:#79B8FF;">0x70997970C51812dc3A010C7d01b50e0d17dc79C8</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> SEQUENCER_BATCH_INBOX_ADDRESS</span><span style="color:#D73A49;">=</span><span style="color:#005CC5;">0xff00000000000000000000000000000000000000</span></span>
<span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> L2OO_ADDRESS</span><span style="color:#D73A49;">=</span><span style="color:#005CC5;">0x70997970C51812dc3A010C7d01b50e0d17dc79C8</span></span></code></pre></div><h2 id="start-the-testnet" tabindex="-1">Start the testnet <a class="header-anchor" href="#start-the-testnet" aria-label="Permalink to &quot;Start the testnet&quot;">​</a></h2><p>First, make sure your light node is synced and funded.</p><p>Next, you can start up the testnet with the following command:</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">make</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">testnet-up</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">make</span><span style="color:#24292E;"> </span><span style="color:#032F62;">testnet-up</span></span></code></pre></div><h2 id="view-the-logs-of-the-testnet" tabindex="-1">View the logs of the testnet <a class="header-anchor" href="#view-the-logs-of-the-testnet" aria-label="Permalink to &quot;View the logs of the testnet&quot;">​</a></h2><p>If you&#39;d like to view the logs of the testnet, run the following command from the root of the Optimism directory:</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">make</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">testnet-logs</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">make</span><span style="color:#24292E;"> </span><span style="color:#032F62;">testnet-logs</span></span></code></pre></div><h2 id="stop-the-testnet" tabindex="-1">Stop the testnet <a class="header-anchor" href="#stop-the-testnet" aria-label="Permalink to &quot;Stop the testnet&quot;">​</a></h2><p>To safely stop the testnet, run the following command:</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">make</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">testnet-down</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">make</span><span style="color:#24292E;"> </span><span style="color:#032F62;">testnet-down</span></span></code></pre></div><h2 id="clean-the-testnet" tabindex="-1">Clean the testnet <a class="header-anchor" href="#clean-the-testnet" aria-label="Permalink to &quot;Clean the testnet&quot;">​</a></h2><p>To remove all data from the testnet, run the following command:</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">make</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">testnet-clean</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">make</span><span style="color:#24292E;"> </span><span style="color:#032F62;">testnet-clean</span></span></code></pre></div>`,24),oe=JSON.parse('{"title":"Deploy an OP Stack testnet with Celestia","description":"Start your own testnet with a modified version of optimism-bedrock.","frontmatter":{"description":"Start your own testnet with a modified version of optimism-bedrock.","head":[["meta",{"name":"og:title","content":"Deploy an OP Stack testnet with Celestia | Celestia Docs"},{"name":"og:description","content":false}]]},"headers":[],"relativePath":"developers/optimism.md","filePath":"developers/optimism.md","lastUpdated":1697826708000}'),Y={name:"developers/optimism.md"},ne=Object.assign(Y,{setup(Z){return(ee,se)=>(n(),l("div",null,[i,e("div",c,[p,e("div",d,[e("div",r,[h,u,e("pre",_,[e("code",null,[e("span",y,[e("span",g,"$HOME/.celestia-light-"+t(a(s).arabicaChainId)+"/config.toml",1)])])]),e("pre",b,[e("code",null,[e("span",m,[e("span",v,"$HOME/.celestia-light-"+t(a(s).arabicaChainId)+"/config.toml",1)])])])]),e("div",k,[E,f,e("pre",C,[e("code",null,[e("span",S,[e("span",w,"$HOME/.celestia-light-"+t(a(s).mochaChainId)+"/config.toml",1)])])]),e("pre",F,[e("code",null,[e("span",T,[e("span",I,"$HOME/.celestia-light-"+t(a(s).mochaChainId)+"/config.toml",1)])])])])])]),P,e("div",A,[O,e("div",D,[e("div",B,[x,q,e("pre",R,[e("code",null,[e("span",H,[e("span",N,"$HOME/.celestia-light-"+t(a(s).arabicaChainId),1)])])]),e("pre",V,[e("code",null,[e("span",U,[e("span",M,"$HOME/.celestia-light-"+t(a(s).arabicaChainId),1)])])])]),e("div",$,[X,K,e("pre",G,[e("code",null,[e("span",Q,[e("span",L,"$HOME/.celestia-light-"+t(a(s).mochaChainId),1)])])]),e("pre",j,[e("code",null,[e("span",z,[e("span",J,"$HOME/.celestia-light-"+t(a(s).mochaChainId),1)])])])])])]),W]))}});export{oe as __pageData,ne as default};
