import{c as l}from"./chunks/constants.85711f77.js";import{_ as p,o as t,c as s,k as e,L as _,M as b,n as m,t as h,O as u,X as v}from"./chunks/framework.fed37ee6.js";const C={data(){return{activeTab:0,tabs:[{name:"Mocha",content:`this is code with ${l.mochaChainId}<br/>more code<br/>and then this line is one that is going to overflow and we'll see what happens now`},{name:"Arabica",content:`this is code with ${l.arabicaChainId}`}]}},methods:{copyToClipboard(){navigator.clipboard.writeText(this.tabs[this.activeTab].content)}}},f={class:"tabs"},g=["onClick"],T={class:"tab-content"},y={class:"code-box"},k=["innerHTML"];function w(d,o,r,q,a,i){return t(),s("div",null,[e("div",f,[(t(!0),s(_,null,b(a.tabs,(n,c)=>(t(),s("div",{key:c,onClick:x=>a.activeTab=c,class:m({active:a.activeTab===c})},h(n.name),11,g))),128))]),e("div",T,[e("div",y,[e("pre",null,[e("code",{innerHTML:a.tabs[a.activeTab].content},null,8,k)]),e("i",{class:"fas fa-clipboard copy-icon",onClick:o[0]||(o[0]=(...n)=>i.copyToClipboard&&i.copyToClipboard(...n))})])])])}const A=p(C,[["render",w],["__scopeId","data-v-fb55de52"]]),S=v("",3),N=JSON.parse('{"title":"Celestia node","description":"","frontmatter":{"head":[["meta",{"name":"og:title","content":"Celestia node | Celestia Docs"},{"name":"og:description","content":false}]]},"headers":[],"relativePath":"nodes/celestia-node.md","filePath":"nodes/celestia-node.md","lastUpdated":1696375757000}'),I={name:"nodes/celestia-node.md"},P=Object.assign(I,{setup(d){return(o,r)=>(t(),s("div",null,[S,u(A)]))}});export{N as __pageData,P as default};