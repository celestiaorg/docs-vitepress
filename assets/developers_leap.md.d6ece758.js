import{c as t}from"./chunks/constants.ad373f0f.js";import{o as i,c as s,k as e,a,t as o,l,Q as n}from"./chunks/framework.25fa9d36.js";const c=e("h1",{id:"leap-integration-with-celestia",tabindex:"-1"},[a("Leap integration with Celestia "),e("a",{class:"header-anchor",href:"#leap-integration-with-celestia","aria-label":'Permalink to "Leap integration with Celestia"'},"​")],-1),r=e("p",null,"This guide will go over how you can add Celestia network parameters to Leap wallet.",-1),d=e("a",{href:"./../nodes/mocha-testnet"},"Mocha testnet",-1),h={href:"./../nodes/mocha-testnet#software-version-numbers"},p=n('<h2 id="install-leap" tabindex="-1">Install Leap <a class="header-anchor" href="#install-leap" aria-label="Permalink to &quot;Install Leap&quot;">​</a></h2><p>Leap is a popular Cosmos-based wallet that allows anyone to connect to Cosmos chains from their browser or phone.</p><p>Learn more and <a href="https://www.leapwallet.io/" target="_blank" rel="noreferrer">download Leap</a>.</p><p>Pick the <a href="https://www.leapwallet.io/download" target="_blank" rel="noreferrer">browser or mobile device that you are using</a> and follow the instructions to install Leap.</p><h2 id="add-mocha-testnet" tabindex="-1">Add Mocha Testnet <a class="header-anchor" href="#add-mocha-testnet" aria-label="Permalink to &quot;Add Mocha Testnet&quot;">​</a></h2><p>Click the Cosmos logo in the top corner of Leap wallet and search for and select &quot;Mocha Testnet&quot;.</p><p>You&#39;ll see that you&#39;re connected to Mocha testnet. You can now see your balance, send, and receive transactions.</p><h2 id="adding-a-custom-chain-to-leap" tabindex="-1">Adding a custom chain to Leap <a class="header-anchor" href="#adding-a-custom-chain-to-leap" aria-label="Permalink to &quot;Adding a custom chain to Leap&quot;">​</a></h2><p>If you want to add a custom chain to Leap, you can do so by:</p><ol><li>Clicking the Cosmos logo in the top corner of Leap wallet</li><li>Scrolling down and clicking &quot;Add new chain&quot;</li></ol><p>You can then add the following parameters:</p>',11),u=n("<li>Chain Name: <code>Arabica devnet</code></li><li>New RPC URL: <code>https://consensus-full.celestia-arabica-10.com</code></li><li>New REST URL: <code>https://api.consensus.celestia-arabica-10.com</code></li><li>Address Prefix: <code>celestia</code></li><li>Native Denom: <code>utia</code></li><li>Coin Type: <code>118</code></li><li>Decimals: <code>6</code></li><li>Block explorer URL (optional): <code>https://explorer.celestia-arabica-10.com</code></li>",8),_=e("p",null,[a("Now, click "),e("code",null,"Add chain"),a(" and you will be able to view your Arabica account balance and transactions in Leap wallet.")],-1),m=e("p",null,"You'll see that you're connected to Arabica Devnet.",-1),k=JSON.parse('{"title":"Leap integration with Celestia","description":"How you can add Celestia network parameters to Leap wallet.","frontmatter":{"description":"How you can add Celestia network parameters to Leap wallet.","head":[["meta",{"name":"og:title","content":"Leap integration with Celestia | Celestia Docs"},{"name":"og:description","content":false}]]},"headers":[],"relativePath":"developers/leap.md","filePath":"developers/leap.md","lastUpdated":1697826708000}'),w={name:"developers/leap.md"},T=Object.assign(w,{setup(f){return(b,g)=>(i(),s("div",null,[c,r,e("p",null,[a("The example in this guide is for the "),d,a(" ("),e("a",h,o(l(t).mochaChainId)+".",1),a("), and the same workflow can be used for any Celestia network.")]),p,e("ul",null,[e("li",null,[a("Chain Id: "),e("code",null,o(l(t).arabicaChainId),1)]),u]),_,m]))}});export{k as __pageData,T as default};