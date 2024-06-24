import{c as l}from"./chunks/constants.190e12be.js";import{o as e,c as t,k as s,a as n,t as o,l as p,Q as a}from"./chunks/framework.25fa9d36.js";const c=a(`<h1 id="keplr-integration-with-celestia" tabindex="-1">Keplr integration with Celestia <a class="header-anchor" href="#keplr-integration-with-celestia" aria-label="Permalink to &quot;Keplr integration with Celestia&quot;">​</a></h1><p>Keplr is a popular Cosmos-based wallet that allows anyone to connect to Tendermint chains from their browser.</p><p>In this tutorial, we will have an example that goes over how you can add Celestia network parameters to Keplr in a React app.</p><p>Most of the overview of this integration are found on <a href="https://docs.keplr.app/api" target="_blank" rel="noreferrer">Keplr&#39;s website</a>.</p><h2 id="add-celestia-network-to-keplr" tabindex="-1">Add Celestia network to Keplr <a class="header-anchor" href="#add-celestia-network-to-keplr" aria-label="Permalink to &quot;Add Celestia network to Keplr&quot;">​</a></h2><p>Before we demonstrate how to export the specific parameters for Celestia&#39;s testnets, we need to create a ReactJS component that allows us to connect directly to Keplr and pass it the network params.</p><p>In the following code, we show how you can export a component that detects whether Keplr is installed and sets the network params for it:</p><div class="language-jsx vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">jsx</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> React </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;react&quot;</span><span style="color:#E1E4E8;">;</span></span>
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
<span class="line"><span style="color:#E1E4E8;">        Add/Switch To {params.chainName}</span></span>
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
<span class="line"><span style="color:#24292E;">        Add/Switch To {params.chainName}</span></span>
<span class="line"><span style="color:#24292E;">      &lt;/</span><span style="color:#22863A;">button</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">    &lt;/</span><span style="color:#22863A;">div</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  );</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><p>This example is just for using Celestia configs.</p><p>We still need to pass the Celestia network params for it.</p><p>We can do it for both testnets in the following section.</p><p>You can also test out the <code>Connect</code> button to add those params to your Keplr wallet. NOTE: You must have Keplr installed first.</p><p>Behind the scenes, here are the parameters you will pass to the <code>AddNetworkKeplr</code> function:</p>`,13),r={class:"vp-code-group vp-adaptive-theme"},E=a('<div class="tabs"><input type="radio" name="group-g4AS1" id="tab-rbBxMJn" checked="checked"><label for="tab-rbBxMJn">Mocha</label><input type="radio" name="group-g4AS1" id="tab-3CmeVFw"><label for="tab-3CmeVFw">Arabica</label></div>',1),i={class:"blocks"},y={class:"language-js vp-adaptive-theme active"},d=s("button",{title:"Copy Code",class:"copy"},null,-1),_=s("span",{class:"lang"},"js",-1),h={class:"shiki github-dark vp-code-dark"},u=s("span",{class:"line"},[s("span",{style:{color:"#F97583"}},"import"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#9ECBFF"}},"'@site/src/components/AddNetworkKeplr'")],-1),F=s("span",{class:"line"},null,-1),A=a('<span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">MOCHA_PARAMS</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> {</span><span style="color:#9ECBFF;">`{</span></span>',1),C={class:"line"},m={style:{color:"#9ECBFF"}},q=s("span",{class:"line"},[s("span",{style:{color:"#9ECBFF"}},"  chainName: 'Mocha testnet',")],-1),w=s("span",{class:"line"},[s("span",{style:{color:"#9ECBFF"}},"  rpc: 'https://rpc-mocha.pops.one',")],-1),b=s("span",{class:"line"},[s("span",{style:{color:"#9ECBFF"}},"  rest: 'https://api-mocha.pops.one/'")],-1),g=s("span",{class:"line"},[s("span",{style:{color:"#9ECBFF"}},"}`"),s("span",{style:{color:"#E1E4E8"}},"}")],-1),D=s("span",{class:"line"},null,-1),k=a('<span class="line"><span style="color:#E1E4E8;">{&lt;</span><span style="color:#79B8FF;">AddNetworkKeplr</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">params</span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;">{</span><span style="color:#79B8FF;">MOCHA_PARAMS</span><span style="color:#E1E4E8;">}/&gt;}</span></span>',1),B={class:"shiki github-light vp-code-light"},T=s("span",{class:"line"},[s("span",{style:{color:"#D73A49"}},"import"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#032F62"}},"'@site/src/components/AddNetworkKeplr'")],-1),f=s("span",{class:"line"},null,-1),I=a('<span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">MOCHA_PARAMS</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> {</span><span style="color:#032F62;">`{</span></span>',1),v={class:"line"},P={style:{color:"#032F62"}},S=s("span",{class:"line"},[s("span",{style:{color:"#032F62"}},"  chainName: 'Mocha testnet',")],-1),N=s("span",{class:"line"},[s("span",{style:{color:"#032F62"}},"  rpc: 'https://rpc-mocha.pops.one',")],-1),x=s("span",{class:"line"},[s("span",{style:{color:"#032F62"}},"  rest: 'https://api-mocha.pops.one/'")],-1),K=s("span",{class:"line"},[s("span",{style:{color:"#032F62"}},"}`"),s("span",{style:{color:"#24292E"}},"}")],-1),V=s("span",{class:"line"},null,-1),R=a('<span class="line"><span style="color:#24292E;">{&lt;</span><span style="color:#005CC5;">AddNetworkKeplr</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">params</span><span style="color:#D73A49;">=</span><span style="color:#24292E;">{</span><span style="color:#005CC5;">MOCHA_PARAMS</span><span style="color:#24292E;">}/&gt;}</span></span>',1),M={class:"language-js vp-adaptive-theme"},j=s("button",{title:"Copy Code",class:"copy"},null,-1),O=s("span",{class:"lang"},"js",-1),G={class:"shiki github-dark vp-code-dark"},H=s("span",{class:"line"},[s("span",{style:{color:"#F97583"}},"import"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#9ECBFF"}},"'@site/src/components/AddNetworkKeplr'")],-1),J=s("span",{class:"line"},null,-1),W=a('<span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">ARABICA_PARAMS</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> {</span><span style="color:#9ECBFF;">`{</span></span>',1),Y={class:"line"},Q={style:{color:"#9ECBFF"}},U=s("span",{class:"line"},[s("span",{style:{color:"#9ECBFF"}},"  chainName: 'Arabica devnet',")],-1),z=s("span",{class:"line"},[s("span",{style:{color:"#9ECBFF"}},"  rpc: 'https://consensus-full.celestia-arabica-10.com/',")],-1),L=s("span",{class:"line"},[s("span",{style:{color:"#9ECBFF"}},"  rest: 'https://api.consensus.celestia-arabica-10.com/'")],-1),X=s("span",{class:"line"},[s("span",{style:{color:"#9ECBFF"}},"}`"),s("span",{style:{color:"#E1E4E8"}},"}")],-1),Z=s("span",{class:"line"},null,-1),$=a('<span class="line"><span style="color:#E1E4E8;">{&lt;</span><span style="color:#79B8FF;">AddNetworkKeplr</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">params</span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;">{</span><span style="color:#79B8FF;">ARABICA_PARAMS</span><span style="color:#E1E4E8;">}/&gt;}</span></span>',1),ss={class:"shiki github-light vp-code-light"},ns=s("span",{class:"line"},[s("span",{style:{color:"#D73A49"}},"import"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#032F62"}},"'@site/src/components/AddNetworkKeplr'")],-1),as=s("span",{class:"line"},null,-1),ls=a('<span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">ARABICA_PARAMS</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> {</span><span style="color:#032F62;">`{</span></span>',1),os={class:"line"},ps={style:{color:"#032F62"}},es=s("span",{class:"line"},[s("span",{style:{color:"#032F62"}},"  chainName: 'Arabica devnet',")],-1),ts=s("span",{class:"line"},[s("span",{style:{color:"#032F62"}},"  rpc: 'https://consensus-full.celestia-arabica-10.com/',")],-1),cs=s("span",{class:"line"},[s("span",{style:{color:"#032F62"}},"  rest: 'https://api.consensus.celestia-arabica-10.com/'")],-1),rs=s("span",{class:"line"},[s("span",{style:{color:"#032F62"}},"}`"),s("span",{style:{color:"#24292E"}},"}")],-1),Es=s("span",{class:"line"},null,-1),is=a('<span class="line"><span style="color:#24292E;">{&lt;</span><span style="color:#005CC5;">AddNetworkKeplr</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">params</span><span style="color:#D73A49;">=</span><span style="color:#24292E;">{</span><span style="color:#005CC5;">ARABICA_PARAMS</span><span style="color:#24292E;">}/&gt;}</span></span>',1),As=JSON.parse('{"title":"Keplr integration with Celestia","description":"How you can add Celestia network parameters to Keplr.","frontmatter":{"description":"How you can add Celestia network parameters to Keplr.","head":[["meta",{"name":"og:title","content":"Keplr integration with Celestia | Celestia Docs"},{"name":"og:description","content":false}]]},"headers":[],"relativePath":"developers/keplr.md","filePath":"developers/keplr.md","lastUpdated":1697670050000}'),ys={name:"developers/keplr.md"},Cs=Object.assign(ys,{setup(ds){return(_s,hs)=>(e(),t("div",null,[c,s("div",r,[E,s("div",i,[s("div",y,[d,_,s("pre",h,[s("code",null,[u,n(`
`),F,n(`
`),A,n(`
`),s("span",C,[s("span",m,"  chainId: '"+o(p(l).mochaChainId)+"',",1)]),n(`
`),q,n(`
`),w,n(`
`),b,n(`
`),g,n(`
`),D,n(`
`),k])]),s("pre",B,[s("code",null,[T,n(`
`),f,n(`
`),I,n(`
`),s("span",v,[s("span",P,"  chainId: '"+o(p(l).mochaChainId)+"',",1)]),n(`
`),S,n(`
`),N,n(`
`),x,n(`
`),K,n(`
`),V,n(`
`),R])])]),s("div",M,[j,O,s("pre",G,[s("code",null,[H,n(`
`),J,n(`
`),W,n(`
`),s("span",Y,[s("span",Q,"  chainId: '"+o(p(l).arabicaChainId)+"',",1)]),n(`
`),U,n(`
`),z,n(`
`),L,n(`
`),X,n(`
`),Z,n(`
`),$])]),s("pre",ss,[s("code",null,[ns,n(`
`),as,n(`
`),ls,n(`
`),s("span",os,[s("span",ps,"  chainId: '"+o(p(l).arabicaChainId)+"',",1)]),n(`
`),es,n(`
`),ts,n(`
`),cs,n(`
`),rs,n(`
`),Es,n(`
`),is])])])])])]))}});export{As as __pageData,Cs as default};