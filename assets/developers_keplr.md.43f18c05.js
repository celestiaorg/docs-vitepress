import{c as p}from"./chunks/constants.ad373f0f.js";import{_ as y,o as d,c as _,k as s,t as l,C as u,H as E,a as n,Q as o}from"./chunks/framework.25fa9d36.js";const F={props:["params"],methods:{async add(){if(!window.keplr)alert("Please install keplr extension");else{if(window.keplr.experimentalSuggestChain)try{await window.keplr.experimentalSuggestChain({chainId:this.params.chainId,chainName:this.params.chainName,rpc:this.params.rpc,rest:this.params.rest,bip44:{coinType:118},bech32Config:{bech32PrefixAccAddr:"celestia",bech32PrefixAccPub:"celestiapub",bech32PrefixValAddr:"celestiavaloper",bech32PrefixValPub:"celestiavaloperpub",bech32PrefixConsAddr:"celestiavalcons",bech32PrefixConsPub:"celestiavalconspub"},currencies:[{coinDenom:"TIA",coinMinimalDenom:"utia",coinDecimals:6,coinGeckoId:"celestia"}],feeCurrencies:[{coinDenom:"TIA",coinMinimalDenom:"utia",coinDecimals:6,coinGeckoId:"celestia",gasPriceStep:{low:.1,average:.2,high:.4}}],stakeCurrency:{coinDenom:"TIA",coinMinimalDenom:"utia",coinDecimals:6,coinGeckoId:"celestia"}})}catch{alert("Failed to suggest the chain")}const t=this.params.chainId;await window.keplr.enable(t)}}}},A={class:"center"};function m(t,c,i,h,a,r){return d(),_("div",A,[s("button",{class:"keplrButton",onClick:c[0]||(c[0]=(...e)=>r.add&&r.add(...e))},l(`Add/switch to ${i.params.chainName}`),1)])}const C=y(F,[["render",m],["__scopeId","data-v-0cb9ca4a"]]),w={components:{AddNetworkKeplr:C},data(){return{constants:p,ARABICA_PARAMS:{chainId:`${p.arabicaChainId}`,chainName:"Arabica devnet",rpc:`${p.arabicaRpcUrl}`,rest:`${p.arabicaRestUrl}`},MOCHA_PARAMS:{chainId:`${p.mochaChainId}`,chainName:"Mocha testnet",rpc:`${p.mochaRpcUrl}`,rest:`${p.mochaRestUrl}`}}}},Ms=JSON.parse('{"title":"Keplr integration with Celestia","description":"How you can add Celestia network parameters to Keplr.","frontmatter":{"description":"How you can add Celestia network parameters to Keplr.","head":[["meta",{"name":"og:title","content":"Keplr integration with Celestia | Celestia Docs"},{"name":"og:description","content":false}]]},"headers":[],"relativePath":"developers/keplr.md","filePath":"developers/keplr.md","lastUpdated":1697730860000}'),q=o(`<h1 id="keplr-integration-with-celestia" tabindex="-1">Keplr integration with Celestia <a class="header-anchor" href="#keplr-integration-with-celestia" aria-label="Permalink to &quot;Keplr integration with Celestia&quot;">​</a></h1><p>Keplr is a popular Cosmos-based wallet that allows anyone to connect to Tendermint chains from their browser.</p><p>In this tutorial, we will have an example that goes over how you can add Celestia network parameters to Keplr in a React app.</p><p>Most of the overview of this integration are found on <a href="https://docs.keplr.app/api" target="_blank" rel="noreferrer">Keplr&#39;s website</a>.</p><h2 id="add-celestia-network-to-keplr" tabindex="-1">Add Celestia network to Keplr <a class="header-anchor" href="#add-celestia-network-to-keplr" aria-label="Permalink to &quot;Add Celestia network to Keplr&quot;">​</a></h2><p>Before we demonstrate how to export the specific parameters for Celestia&#39;s testnets, we need to create a ReactJS component that allows us to connect directly to Keplr and pass it the network params.</p><p>In the following code, we show how you can export a component that detects whether Keplr is installed and sets the network params for it:</p><div class="language-jsx vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">jsx</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> React </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;react&quot;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> styles </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;./Keplr.module.css&quot;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">default</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">AddNetworkKeplr</span><span style="color:#E1E4E8;">({ </span><span style="color:#FFAB70;">params</span><span style="color:#E1E4E8;"> }) {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">async</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">add</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">!</span><span style="color:#E1E4E8;">window.keplr) {</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#B392F0;">alert</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;Please install keplr extension&quot;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">    } </span><span style="color:#F97583;">else</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> (window.keplr.experimentalSuggestChain) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">try</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">          </span><span style="color:#F97583;">await</span><span style="color:#E1E4E8;"> window.keplr.</span><span style="color:#B392F0;">experimentalSuggestChain</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">            chainId: params.chainId,</span></span>
<span class="line"><span style="color:#E1E4E8;">            chainName: params.chainName,</span></span>
<span class="line"><span style="color:#E1E4E8;">            rpc: params.rpc,</span></span>
<span class="line"><span style="color:#E1E4E8;">            rest: params.rest,</span></span>
<span class="line"><span style="color:#E1E4E8;">            bip44: {</span></span>
<span class="line"><span style="color:#E1E4E8;">              coinType: </span><span style="color:#79B8FF;">118</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            },</span></span>
<span class="line"><span style="color:#E1E4E8;">            bech32Config: {</span></span>
<span class="line"><span style="color:#E1E4E8;">              bech32PrefixAccAddr: </span><span style="color:#9ECBFF;">&quot;celestia&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">              bech32PrefixAccPub: </span><span style="color:#9ECBFF;">&quot;celestia&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;pub&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">              bech32PrefixValAddr: </span><span style="color:#9ECBFF;">&quot;celestia&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;valoper&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">              bech32PrefixValPub: </span><span style="color:#9ECBFF;">&quot;celestia&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;valoperpub&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">              bech32PrefixConsAddr: </span><span style="color:#9ECBFF;">&quot;celestia&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;valcons&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">              bech32PrefixConsPub: </span><span style="color:#9ECBFF;">&quot;celestia&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;valconspub&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            },</span></span>
<span class="line"><span style="color:#E1E4E8;">            currencies: [</span></span>
<span class="line"><span style="color:#E1E4E8;">              {</span></span>
<span class="line"><span style="color:#E1E4E8;">                coinDenom: </span><span style="color:#9ECBFF;">&quot;TIA&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                coinMinimalDenom: </span><span style="color:#9ECBFF;">&quot;utia&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                coinDecimals: </span><span style="color:#79B8FF;">6</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                coinGeckoId: </span><span style="color:#9ECBFF;">&quot;celestia&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">              },</span></span>
<span class="line"><span style="color:#E1E4E8;">            ],</span></span>
<span class="line"><span style="color:#E1E4E8;">            feeCurrencies: [</span></span>
<span class="line"><span style="color:#E1E4E8;">              {</span></span>
<span class="line"><span style="color:#E1E4E8;">                coinDenom: </span><span style="color:#9ECBFF;">&quot;TIA&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                coinMinimalDenom: </span><span style="color:#9ECBFF;">&quot;utia&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                coinDecimals: </span><span style="color:#79B8FF;">6</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                coinGeckoId: </span><span style="color:#9ECBFF;">&quot;celestia&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                gasPriceStep: {</span></span>
<span class="line"><span style="color:#E1E4E8;">                  low: </span><span style="color:#79B8FF;">0.1</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                  average: </span><span style="color:#79B8FF;">0.2</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                  high: </span><span style="color:#79B8FF;">0.4</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                },</span></span>
<span class="line"><span style="color:#E1E4E8;">              },</span></span>
<span class="line"><span style="color:#E1E4E8;">            ],</span></span>
<span class="line"><span style="color:#E1E4E8;">            stakeCurrency: {</span></span>
<span class="line"><span style="color:#E1E4E8;">              coinDenom: </span><span style="color:#9ECBFF;">&quot;TIA&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">              coinMinimalDenom: </span><span style="color:#9ECBFF;">&quot;utia&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">              coinDecimals: </span><span style="color:#79B8FF;">6</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">              coinGeckoId: </span><span style="color:#9ECBFF;">&quot;celestia&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            },</span></span>
<span class="line"><span style="color:#E1E4E8;">          });</span></span>
<span class="line"><span style="color:#E1E4E8;">        } </span><span style="color:#F97583;">catch</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">          </span><span style="color:#B392F0;">alert</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;Failed to suggest the chain&quot;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">chainId</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> params.chainId;</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#6A737D;">// Enabling before using the Keplr is recommended.</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#6A737D;">// This method will ask the user whether to allow access if they haven&#39;t visited this website.</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#6A737D;">// Also, it will request that the user unlock the wallet if the wallet is locked.</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#F97583;">await</span><span style="color:#E1E4E8;"> window.keplr.</span><span style="color:#B392F0;">enable</span><span style="color:#E1E4E8;">(chainId);</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> (</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">className</span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;">{styles.center}&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">      &lt;</span><span style="color:#85E89D;">button</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">className</span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;">{styles.keplrButton} </span><span style="color:#B392F0;">onClick</span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;">{add}&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">        Add/switch To {params.chainName}</span></span>
<span class="line"><span style="color:#E1E4E8;">      &lt;/</span><span style="color:#85E89D;">button</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;/</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  );</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> React </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;react&quot;</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> styles </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;./Keplr.module.css&quot;</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">default</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">function</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">AddNetworkKeplr</span><span style="color:#24292E;">({ </span><span style="color:#E36209;">params</span><span style="color:#24292E;"> }) {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">async</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">function</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">add</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (</span><span style="color:#D73A49;">!</span><span style="color:#24292E;">window.keplr) {</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6F42C1;">alert</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;Please install keplr extension&quot;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">    } </span><span style="color:#D73A49;">else</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (window.keplr.experimentalSuggestChain) {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">try</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#D73A49;">await</span><span style="color:#24292E;"> window.keplr.</span><span style="color:#6F42C1;">experimentalSuggestChain</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">            chainId: params.chainId,</span></span>
<span class="line"><span style="color:#24292E;">            chainName: params.chainName,</span></span>
<span class="line"><span style="color:#24292E;">            rpc: params.rpc,</span></span>
<span class="line"><span style="color:#24292E;">            rest: params.rest,</span></span>
<span class="line"><span style="color:#24292E;">            bip44: {</span></span>
<span class="line"><span style="color:#24292E;">              coinType: </span><span style="color:#005CC5;">118</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">            },</span></span>
<span class="line"><span style="color:#24292E;">            bech32Config: {</span></span>
<span class="line"><span style="color:#24292E;">              bech32PrefixAccAddr: </span><span style="color:#032F62;">&quot;celestia&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">              bech32PrefixAccPub: </span><span style="color:#032F62;">&quot;celestia&quot;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">+</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;pub&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">              bech32PrefixValAddr: </span><span style="color:#032F62;">&quot;celestia&quot;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">+</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;valoper&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">              bech32PrefixValPub: </span><span style="color:#032F62;">&quot;celestia&quot;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">+</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;valoperpub&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">              bech32PrefixConsAddr: </span><span style="color:#032F62;">&quot;celestia&quot;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">+</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;valcons&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">              bech32PrefixConsPub: </span><span style="color:#032F62;">&quot;celestia&quot;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">+</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;valconspub&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">            },</span></span>
<span class="line"><span style="color:#24292E;">            currencies: [</span></span>
<span class="line"><span style="color:#24292E;">              {</span></span>
<span class="line"><span style="color:#24292E;">                coinDenom: </span><span style="color:#032F62;">&quot;TIA&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                coinMinimalDenom: </span><span style="color:#032F62;">&quot;utia&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                coinDecimals: </span><span style="color:#005CC5;">6</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                coinGeckoId: </span><span style="color:#032F62;">&quot;celestia&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">              },</span></span>
<span class="line"><span style="color:#24292E;">            ],</span></span>
<span class="line"><span style="color:#24292E;">            feeCurrencies: [</span></span>
<span class="line"><span style="color:#24292E;">              {</span></span>
<span class="line"><span style="color:#24292E;">                coinDenom: </span><span style="color:#032F62;">&quot;TIA&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                coinMinimalDenom: </span><span style="color:#032F62;">&quot;utia&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                coinDecimals: </span><span style="color:#005CC5;">6</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                coinGeckoId: </span><span style="color:#032F62;">&quot;celestia&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                gasPriceStep: {</span></span>
<span class="line"><span style="color:#24292E;">                  low: </span><span style="color:#005CC5;">0.1</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                  average: </span><span style="color:#005CC5;">0.2</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                  high: </span><span style="color:#005CC5;">0.4</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                },</span></span>
<span class="line"><span style="color:#24292E;">              },</span></span>
<span class="line"><span style="color:#24292E;">            ],</span></span>
<span class="line"><span style="color:#24292E;">            stakeCurrency: {</span></span>
<span class="line"><span style="color:#24292E;">              coinDenom: </span><span style="color:#032F62;">&quot;TIA&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">              coinMinimalDenom: </span><span style="color:#032F62;">&quot;utia&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">              coinDecimals: </span><span style="color:#005CC5;">6</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">              coinGeckoId: </span><span style="color:#032F62;">&quot;celestia&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">            },</span></span>
<span class="line"><span style="color:#24292E;">          });</span></span>
<span class="line"><span style="color:#24292E;">        } </span><span style="color:#D73A49;">catch</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#6F42C1;">alert</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;Failed to suggest the chain&quot;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">        }</span></span>
<span class="line"><span style="color:#24292E;">      }</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">chainId</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> params.chainId;</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6A737D;">// Enabling before using the Keplr is recommended.</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6A737D;">// This method will ask the user whether to allow access if they haven&#39;t visited this website.</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6A737D;">// Also, it will request that the user unlock the wallet if the wallet is locked.</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#D73A49;">await</span><span style="color:#24292E;"> window.keplr.</span><span style="color:#6F42C1;">enable</span><span style="color:#24292E;">(chainId);</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> (</span></span>
<span class="line"><span style="color:#24292E;">    &lt;</span><span style="color:#22863A;">div</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">className</span><span style="color:#D73A49;">=</span><span style="color:#24292E;">{styles.center}&gt;</span></span>
<span class="line"><span style="color:#24292E;">      &lt;</span><span style="color:#22863A;">button</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">className</span><span style="color:#D73A49;">=</span><span style="color:#24292E;">{styles.keplrButton} </span><span style="color:#6F42C1;">onClick</span><span style="color:#D73A49;">=</span><span style="color:#24292E;">{add}&gt;</span></span>
<span class="line"><span style="color:#24292E;">        Add/switch To {params.chainName}</span></span>
<span class="line"><span style="color:#24292E;">      &lt;/</span><span style="color:#22863A;">button</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">    &lt;/</span><span style="color:#22863A;">div</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  );</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><p>This example is just for using Celestia configs.</p><p>We still need to pass the Celestia network params for it and we will for both testnets in the following section.</p><p>You can also test out the <code>Connect</code> button to add those params to your Keplr wallet. NOTE: You must have Keplr installed first.</p><p>Try it out yourself:</p>`,12),b=s("p",null,[n("Behind the scenes, here are the parameters we are passing to the "),s("code",null,"AddNetworkKeplr"),n(" function:")],-1),k={class:"vp-code-group vp-adaptive-theme"},g=o('<div class="tabs"><input type="radio" name="group-_s1MH" id="tab-dw9QUCs" checked="checked"><label for="tab-dw9QUCs">Mocha</label><input type="radio" name="group-_s1MH" id="tab-V5yBYUj"><label for="tab-V5yBYUj">Arabica</label></div>',1),D={class:"blocks"},f={class:"language-js vp-adaptive-theme active"},T=s("button",{title:"Copy Code",class:"copy"},null,-1),B=s("span",{class:"lang"},"js",-1),I={class:"shiki github-dark vp-code-dark"},P=s("span",{class:"line"},[s("span",{style:{color:"#F97583"}},"import"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#9ECBFF"}},"'@site/src/components/AddNetworkKeplr'")],-1),v=s("span",{class:"line"},null,-1),S=o('<span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">MOCHA_PARAMS</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> {</span><span style="color:#9ECBFF;">`{</span></span>',1),N={class:"line"},x={style:{color:"#9ECBFF"}},R=s("span",{class:"line"},[s("span",{style:{color:"#9ECBFF"}},"  chainName: 'Mocha testnet',")],-1),K={class:"line"},M={style:{color:"#9ECBFF"}},V={class:"line"},U={style:{color:"#9ECBFF"}},H=s("span",{class:"line"},[s("span",{style:{color:"#9ECBFF"}},"}`"),s("span",{style:{color:"#E1E4E8"}},"}")],-1),j=s("span",{class:"line"},null,-1),G=o('<span class="line"><span style="color:#E1E4E8;">{&lt;</span><span style="color:#79B8FF;">AddNetworkKeplr</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">params</span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;">{</span><span style="color:#79B8FF;">MOCHA_PARAMS</span><span style="color:#E1E4E8;">}/&gt;}</span></span>',1),O={class:"shiki github-light vp-code-light"},Y=s("span",{class:"line"},[s("span",{style:{color:"#D73A49"}},"import"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#032F62"}},"'@site/src/components/AddNetworkKeplr'")],-1),Q=s("span",{class:"line"},null,-1),J=o('<span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">MOCHA_PARAMS</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> {</span><span style="color:#032F62;">`{</span></span>',1),W={class:"line"},$={style:{color:"#032F62"}},z=s("span",{class:"line"},[s("span",{style:{color:"#032F62"}},"  chainName: 'Mocha testnet',")],-1),L={class:"line"},X={style:{color:"#032F62"}},Z={class:"line"},ss={style:{color:"#032F62"}},ns=s("span",{class:"line"},[s("span",{style:{color:"#032F62"}},"}`"),s("span",{style:{color:"#24292E"}},"}")],-1),as=s("span",{class:"line"},null,-1),ls=o('<span class="line"><span style="color:#24292E;">{&lt;</span><span style="color:#005CC5;">AddNetworkKeplr</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">params</span><span style="color:#D73A49;">=</span><span style="color:#24292E;">{</span><span style="color:#005CC5;">MOCHA_PARAMS</span><span style="color:#24292E;">}/&gt;}</span></span>',1),os={class:"language-js vp-adaptive-theme"},ps=s("button",{title:"Copy Code",class:"copy"},null,-1),es=s("span",{class:"lang"},"js",-1),ts={class:"shiki github-dark vp-code-dark"},cs=s("span",{class:"line"},[s("span",{style:{color:"#F97583"}},"import"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#9ECBFF"}},"'@site/src/components/AddNetworkKeplr'")],-1),rs=s("span",{class:"line"},null,-1),is=o('<span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">ARABICA_PARAMS</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> {</span><span style="color:#9ECBFF;">`{</span></span>',1),Es={class:"line"},ys={style:{color:"#9ECBFF"}},ds=s("span",{class:"line"},[s("span",{style:{color:"#9ECBFF"}},"  chainName: 'Arabica devnet',")],-1),_s={class:"line"},hs={style:{color:"#9ECBFF"}},us={class:"line"},Fs={style:{color:"#9ECBFF"}},As=s("span",{class:"line"},[s("span",{style:{color:"#9ECBFF"}},"}`"),s("span",{style:{color:"#E1E4E8"}},"}")],-1),ms=s("span",{class:"line"},null,-1),Cs=o('<span class="line"><span style="color:#E1E4E8;">{&lt;</span><span style="color:#79B8FF;">AddNetworkKeplr</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">params</span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;">{</span><span style="color:#79B8FF;">ARABICA_PARAMS</span><span style="color:#E1E4E8;">}/&gt;}</span></span>',1),ws={class:"shiki github-light vp-code-light"},qs=s("span",{class:"line"},[s("span",{style:{color:"#D73A49"}},"import"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#032F62"}},"'@site/src/components/AddNetworkKeplr'")],-1),bs=s("span",{class:"line"},null,-1),ks=o('<span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">ARABICA_PARAMS</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> {</span><span style="color:#032F62;">`{</span></span>',1),gs={class:"line"},Ds={style:{color:"#032F62"}},fs=s("span",{class:"line"},[s("span",{style:{color:"#032F62"}},"  chainName: 'Arabica devnet',")],-1),Ts={class:"line"},Bs={style:{color:"#032F62"}},Is={class:"line"},Ps={style:{color:"#032F62"}},vs=s("span",{class:"line"},[s("span",{style:{color:"#032F62"}},"}`"),s("span",{style:{color:"#24292E"}},"}")],-1),Ss=s("span",{class:"line"},null,-1),Ns=o('<span class="line"><span style="color:#24292E;">{&lt;</span><span style="color:#005CC5;">AddNetworkKeplr</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">params</span><span style="color:#D73A49;">=</span><span style="color:#24292E;">{</span><span style="color:#005CC5;">ARABICA_PARAMS</span><span style="color:#24292E;">}/&gt;}</span></span>',1);function xs(t,c,i,h,a,r){const e=u("AddNetworkKeplr");return d(),_("div",null,[q,E(e,{params:a.ARABICA_PARAMS},null,8,["params"]),E(e,{params:a.MOCHA_PARAMS},null,8,["params"]),b,s("div",k,[g,s("div",D,[s("div",f,[T,B,s("pre",I,[s("code",null,[P,n(`
`),v,n(`
`),S,n(`
`),s("span",N,[s("span",x,"  chainId: '"+l(a.constants.mochaChainId)+"',",1)]),n(`
`),R,n(`
`),s("span",K,[s("span",M,"  rpc: '"+l(a.constants.mochaRpcUrl)+"',",1)]),n(`
`),s("span",V,[s("span",U,"  rest: '"+l(a.constants.mochaRestUrl)+"'",1)]),n(`
`),H,n(`
`),j,n(`
`),G])]),s("pre",O,[s("code",null,[Y,n(`
`),Q,n(`
`),J,n(`
`),s("span",W,[s("span",$,"  chainId: '"+l(a.constants.mochaChainId)+"',",1)]),n(`
`),z,n(`
`),s("span",L,[s("span",X,"  rpc: '"+l(a.constants.mochaRpcUrl)+"',",1)]),n(`
`),s("span",Z,[s("span",ss,"  rest: '"+l(a.constants.mochaRestUrl)+"'",1)]),n(`
`),ns,n(`
`),as,n(`
`),ls])])]),s("div",os,[ps,es,s("pre",ts,[s("code",null,[cs,n(`
`),rs,n(`
`),is,n(`
`),s("span",Es,[s("span",ys,"  chainId: '"+l(a.constants.arabicaChainId)+"',",1)]),n(`
`),ds,n(`
`),s("span",_s,[s("span",hs,"  rpc: '"+l(a.constants.arabicaRpcUrl)+"',",1)]),n(`
`),s("span",us,[s("span",Fs,"  rest: '"+l(a.constants.arabicaRestUrl)+"'",1)]),n(`
`),As,n(`
`),ms,n(`
`),Cs])]),s("pre",ws,[s("code",null,[qs,n(`
`),bs,n(`
`),ks,n(`
`),s("span",gs,[s("span",Ds,"  chainId: '"+l(a.constants.arabicaChainId)+"',",1)]),n(`
`),fs,n(`
`),s("span",Ts,[s("span",Bs,"  rpc: '"+l(a.constants.arabicaRpcUrl)+"',",1)]),n(`
`),s("span",Is,[s("span",Ps,"  rest: '"+l(a.constants.arabicaRestUrl)+"'",1)]),n(`
`),vs,n(`
`),Ss,n(`
`),Ns])])])])])])}const Vs=y(w,[["render",xs]]);export{Ms as __pageData,Vs as default};
