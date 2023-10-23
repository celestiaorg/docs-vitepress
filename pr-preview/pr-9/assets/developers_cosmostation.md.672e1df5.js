import{c as t}from"./chunks/constants.e90b75b1.js";import{o,c as a,k as e,t as s,l as i,a as n,Q as l}from"./chunks/framework.bfc7682c.js";const r=e("h1",{id:"cosmostation-integration-with-celestia",tabindex:"-1"},[n("Cosmostation integration with Celestia "),e("a",{class:"header-anchor",href:"#cosmostation-integration-with-celestia","aria-label":'Permalink to "Cosmostation integration with Celestia"'},"​")],-1),c=e("p",null,"This guide will go over how you can add Celestia network parameters to Cosmostation wallet.",-1),d=l('<h2 id="install-cosmostation" tabindex="-1">Install Cosmostation <a class="header-anchor" href="#install-cosmostation" aria-label="Permalink to &quot;Install Cosmostation&quot;">​</a></h2><p>Cosmostation is a popular Cosmos-based wallet that allows anyone to connect to Cosmos chains from their browser or phone.</p><p>You can learn more and download Cosmostation on <a href="https://cosmostation.io/" target="_blank" rel="noreferrer">the Cosmostation site</a>.</p><p>Alternatively, you can <a href="https://cosmostation.io/products/cosmostation_extension" target="_blank" rel="noreferrer">download and install the Chrome extension directly</a>.</p><h2 id="add-celestia-network-parameters" tabindex="-1">Add Celestia network parameters <a class="header-anchor" href="#add-celestia-network-parameters" aria-label="Permalink to &quot;Add Celestia network parameters&quot;">​</a></h2><p>Click the hamburger menu icon in the top corner of Cosmostation wallet. Scroll down and click &quot;Add Custom Chain&quot;</p><p>You can then add the following parameters:</p><ul><li>Custom Chain name: <code>Mocha testnet</code></li><li>Rest URL: <code>https://api-mocha.pops.one</code></li><li>New RPC URL: <code>https://rpc-mocha.pops.one</code></li><li>Currency symbol: <code>TIA</code></li><li>Address prefix: <code>celestia</code></li><li>Demon: <code>utia</code></li><li>Symbol image URL (optional): <code>https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/celestiatestnet/images/celestia.svg</code></li><li>Explorer URL (optional): <code>https://testnet.mintscan.io/celestia-testnet</code></li><li>Coin Type: <code>118</code></li><li>Decimals: <code>6</code></li><li>Gas rate Tiny: <code>0.1</code></li><li>Gas rate Low: <code>0.25</code></li><li>Gas rate Average: <code>0.5</code></li></ul><p>Now, click <code>Add a custom chain</code> and you will be able to view your Celestia account balance and transactions in Cosmostation wallet.</p><p>Switch chains to &quot;Mocha testnet&quot; and you&#39;ll see that you&#39;re connected to Celestia&#39;s Mocha testnet!</p>',10),_=JSON.parse('{"title":"Cosmostation integration with Celestia","description":"How you can add Celestia network parameters to Cosmostation wallet.","frontmatter":{"description":"How you can add Celestia network parameters to Cosmostation wallet.","prev":{"text":"Integrating Leap for developers","link":"/developers/leap"},"next":{"text":"Integrate Celestia for service providers","link":"/developers/integrate-celestia"},"head":[["meta",{"name":"og:title","content":"Cosmostation integration with Celestia | Celestia Docs"},{"name":"og:description","content":false}]]},"headers":[],"relativePath":"developers/cosmostation.md","filePath":"developers/cosmostation.md","lastUpdated":1698085536000}'),m={name:"developers/cosmostation.md"},g=Object.assign(m,{setup(p){return(h,u)=>(o(),a("div",null,[r,c,e("p",null,"The example in this guide is for "+s(i(t).mochaChainId)+" testnet, and the same workflow can be used for any Celestia network.",1),d]))}});export{_ as __pageData,g as default};
