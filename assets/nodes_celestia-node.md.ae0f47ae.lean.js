import{c as l}from"./chunks/constants.85711f77.js";import{_ as p,o as t,c as s,k as e,L as _,M as b,n as h,t as m,O as u,X as v}from"./chunks/framework.fed37ee6.js";const C={data(){return{activeTab:0,tabs:[{name:"Mocha",content:`this is code with ${l.mochaChainId}<br/>more code<br/>and then this line is one that is going to overflow and we'll see what happens now`},{name:"Arabica",content:`this is code with ${l.arabicaChainId}`}]}},methods:{copyToClipboard(){navigator.clipboard.writeText(this.tabs[this.activeTab].content)}}},f={class:"tabs"},g=["onClick"],y={class:"tab-content"},T={class:"code-box"},k=["innerHTML"];function A(d,o,r,q,a,i){return t(),s("div",null,[e("div",f,[(t(!0),s(_,null,b(a.tabs,(n,c)=>(t(),s("div",{key:c,onClick:x=>a.activeTab=c,class:h({active:a.activeTab===c})},m(n.name),11,g))),128))]),e("div",y,[e("div",T,[e("pre",null,[e("code",{innerHTML:a.tabs[a.activeTab].content},null,8,k)]),e("i",{class:"fas fa-clipboard copy-icon",onClick:o[0]||(o[0]=(...n)=>i.copyToClipboard&&i.copyToClipboard(...n))})])])])}const D=p(C,[["render",A],["__scopeId","data-v-fb55de52"]]),w=v("",3),W=JSON.parse('{"title":"Celestia node","description":"","frontmatter":{"head":[["meta",{"name":"og:title","content":"Celestia node | Celestia Docs"},{"name":"og:description","content":false}]]},"headers":[],"relativePath":"nodes/celestia-node.md","filePath":"nodes/celestia-node.md","lastUpdated":1696375757000}'),N={name:"nodes/celestia-node.md"},I=Object.assign(N,{setup(d){return(o,r)=>(t(),s("div",null,[w,u(D)]))}});export{W as __pageData,I as default};