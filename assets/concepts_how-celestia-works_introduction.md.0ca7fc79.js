import{_ as e,o as a,c as t,X as i}from"./chunks/framework.05326dcf.js";const f=JSON.parse('{"title":"Introduction","description":"A brief introduction to the Celestia modular blockchain.","frontmatter":{"description":"A brief introduction to the Celestia modular blockchain."},"headers":[],"relativePath":"concepts/how-celestia-works/introduction.md","filePath":"concepts/how-celestia-works/introduction.md","lastUpdated":1692138830000}'),r={name:"concepts/how-celestia-works/introduction.md"},o=i('<h1 id="introduction" tabindex="-1">Introduction <a class="header-anchor" href="#introduction" aria-label="Permalink to &quot;Introduction&quot;">​</a></h1><p>Celestia is a modular blockchain network whose goal is to build a scalable <a href="https://blog.celestia.org/celestia-a-scalable-general-purpose-data-availability-layer-for-decentralized-apps-and-trust-minimized-sidechains" target="_blank" rel="noreferrer">data availability layer</a>, enabling the next generation of scalable blockchain architectures - <a href="https://celestia.org/learn" target="_blank" rel="noreferrer">modular blockchains</a>. Celestia scales by <a href="https://arxiv.org/abs/1905.09274" target="_blank" rel="noreferrer">decoupling execution from consensus</a> and introducing a new primitive, <a href="https://arxiv.org/abs/1809.09044" target="_blank" rel="noreferrer">data availability sampling</a>.</p><p>The former entails that Celestia is only responsible for ordering transactions and guaranteeing their data availability; this is similar to <a href="https://en.wikipedia.org/wiki/Atomic_broadcast#Equivalent_to_Consensus" target="_blank" rel="noreferrer">reducing consensus to atomic broadcast</a>.</p><p>The latter provides an efficient solution to the <a href="https://coinmarketcap.com/alexandria/article/what-is-data-availability" target="_blank" rel="noreferrer">data availability problem</a> by only requiring resource-limited light nodes to sample a small number of random chunks from each block to verify data availability.</p><p>Interestingly, more light nodes that participate in sampling increases the amount of data that the network can safely handle, enabling the block size to increase without equally increasing the cost to verify the chain.</p>',5),n=[o];function l(s,c,d,h,p,u){return a(),t("div",null,n)}const _=e(r,[["render",l]]);export{f as __pageData,_ as default};
