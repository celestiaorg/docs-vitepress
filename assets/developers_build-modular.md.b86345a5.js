import{_ as e,o as a,c as o,Q as t}from"./chunks/framework.25fa9d36.js";const i="/docs-vitepress/img/da-and-validity.png",f=JSON.parse('{"title":"Build modular","description":"Advantages of building on modular blockchains like Celestia.","frontmatter":{"description":"Advantages of building on modular blockchains like Celestia.","head":[["meta",{"name":"og:title","content":"Build modular | Celestia Docs"},{"name":"og:description","content":false}]]},"headers":[],"relativePath":"developers/build-modular.md","filePath":"developers/build-modular.md","lastUpdated":1697594670000}'),r={name:"developers/build-modular.md"},l=t('<h1 id="build-modular" tabindex="-1">Build modular <a class="header-anchor" href="#build-modular" aria-label="Permalink to &quot;Build modular&quot;">​</a></h1><p>“I’m a developer, and I want to know what the benefits of modular blockchains are for me!”</p><p>You’ve come to the right place. This page will give you the rundown on modular blockchains and their benefits for developers like you.</p><p>If you already know all this, <a href="#building-on-celestia">skip to the end</a> to get straight into building.</p><h2 id="what-is-a-modular-blockchain" tabindex="-1">What is a modular blockchain? <a class="header-anchor" href="#what-is-a-modular-blockchain" aria-label="Permalink to &quot;What is a modular blockchain?&quot;">​</a></h2><p>With blockchains there are more or less four core functions that they do.</p><ul><li><strong>Execution</strong>: transaction execution and state update.</li><li><strong>Settlement</strong>: finality and dispute resolution.</li><li><strong>Consensus</strong>: agreement on transaction ordering.</li><li><strong>Data availability</strong>: prove data was published to the network.</li></ul><p>Modular blockchains specialize in one or two of these functions rather than doing all of them like a monolithic blockchain. You probably know about layer 1s and layer 2s. That’s the general idea.</p><p>A typical example of a modular blockchain you might’ve heard of is a rollup. Rollups host smart contracts and execute transactions, much like any monolithic chain. But, the data of those transactions get sent to a layer 1 blockchain to carry out the remaining functions.</p><p>If you want to brush up on your understanding of modular blockchains, head over to <a href="https://celestia.org/learn/" target="_blank" rel="noreferrer">Learn Modular</a>.</p><h2 id="ease-of-deploying-a-chain" tabindex="-1">Ease of deploying a chain <a class="header-anchor" href="#ease-of-deploying-a-chain" aria-label="Permalink to &quot;Ease of deploying a chain&quot;">​</a></h2><p>One of the goals of modular blockchains is to make it as easy to deploy a blockchain as a smart contract. There are a few unique ways that modular blockchains can significantly reduce the cost of deploying a new blockchain.</p><ol><li><strong>No validator set is required</strong>. Rollups can deploy without sourcing their own set of validators or sequencers.</li><li><strong>Inherit security from the start</strong>. Rollups don’t need to build all their security from scratch.</li><li><strong>Any part of the stack can be delegated</strong>. Development time can be reduced by outsourcing functions of the rollup to external providers.</li></ol><p>All in all, builders will be able to outsource as much of the stack as they need. Deploying a new blockchain will be as simple as clicking a few options to initialize a production-ready rollup.</p><h2 id="scaling" tabindex="-1">Scaling <a class="header-anchor" href="#scaling" aria-label="Permalink to &quot;Scaling&quot;">​</a></h2><p>Of course, a much higher scale is necessary if we want to support many more users. And modular blockchains use some new innovative technologies that can help us get there.</p><ul><li><a href="https://celestia.org/glossary/data-availability-sampling/" target="_blank" rel="noreferrer">Data availability sampling</a> enables modular blockchains like Celestia to scale data availability with the number of light nodes - that means more capacity for rollups.</li><li><strong>Fraud and validity proofs</strong> make rollups vastly more efficient to verify. Nodes only need to verify a small proof of transaction validity (<a href="https://celestia.org/glossary/validity-proof/" target="_blank" rel="noreferrer">validity proof</a>) or assume transactions are valid by default (<a href="https://celestia.org/glossary/state-transition-fraud-proof/" target="_blank" rel="noreferrer">fraud proof</a>). This means rollups don’t require every node in the network to re-execute every transaction.</li></ul><p><img src="'+i+'" alt="image"></p><ul><li><strong>Decoupling execution from consensus</strong> lets developers define the VM that best fits the scaling needs of their application.</li><li><strong>Separating applications</strong> across multiple rollups isolates congestion. If an application congests the execution capacity of one rollup, all other rollups remain unaffected in their execution capacity.</li></ul><p>All these scaling properties combined make new types of applications and features possible, like onchain gaming, dynamic metadata, and ephemeral rollups, to name a few.</p><h2 id="customizability" tabindex="-1">Customizability <a class="header-anchor" href="#customizability" aria-label="Permalink to &quot;Customizability&quot;">​</a></h2><p>By design, modular blockchains don’t lock in any feature set. They promote experimentation and customization.</p><p>Remember how decoupling execution from consensus enables VM customizability? Well, rollups are the execution component. Applications can run on their own rollup and adjust the VM to maximize their application&#39;s performance. Developers have that flexibility because Celestia&#39;s execution logic doesn&#39;t restrict rollups.</p><p>Basically, rollups can be customized to integrate any new or existing VM stack.</p><p>With existing rollup frameworks, developers can run rollup testnets using the EVM or Cosmos SDK. In the future, one can imagine a variety of VMs that rollup frameworks support, providing developers with more out-of-the-box options for their applications.</p><p>Some customizations that could be made to a rollup&#39;s VM include custom precompiles, changing transaction processing from sequential to parallel, or adding support for private smart contracts.</p><p>All of this only scratches the surface.</p><h2 id="building-on-celestia" tabindex="-1">Building on Celestia <a class="header-anchor" href="#building-on-celestia" aria-label="Permalink to &quot;Building on Celestia&quot;">​</a></h2><p>So, you’re ready to start experimenting and building on Celestia? Here are a few options that are currently available for developers.</p><h3 id="smart-contracts" tabindex="-1">Smart contracts <a class="header-anchor" href="#smart-contracts" aria-label="Permalink to &quot;Smart contracts&quot;">​</a></h3><p><a href="https://bubstestnet.com/" target="_blank" rel="noreferrer">Bubs testnet</a> is a dedicated EVM-compatible rollup that developers can use to test and deploy smart contract applications.</p><h3 id="sovereign-rollups" tabindex="-1">Sovereign rollups <a class="header-anchor" href="#sovereign-rollups" aria-label="Permalink to &quot;Sovereign rollups&quot;">​</a></h3><p>Developers can build applications on a sovereign rollup testnet on Celestia. <a href="https://rollkit.dev/" target="_blank" rel="noreferrer">Rollkit</a> and <a href="https://github.com/Sovereign-Labs/sovereign-sdk/tree/main/examples/demo-rollup" target="_blank" rel="noreferrer">Sovereign SDK</a> provide frameworks for deploying sovereign rollup testnets on Celestia.</p><h3 id="rollups" tabindex="-1">Rollups <a class="header-anchor" href="#rollups" aria-label="Permalink to &quot;Rollups&quot;">​</a></h3><p>Developers can also build rollup testnets for their applications using <a href="https://docs.dymension.xyz/" target="_blank" rel="noreferrer">Dymension’s Rollapps</a> or <a href="https://docs.celestia.org/developers/optimism-devnet/" target="_blank" rel="noreferrer">Optimism’s OP Stack</a>.</p>',35),n=[l];function s(c,u,p,d,h,m){return a(),o("div",null,n)}const b=e(r,[["render",s]]);export{f as __pageData,b as default};
