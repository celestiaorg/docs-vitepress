import{c as d}from"./chunks/constants.85711f77.js";import{_ as m,o as n,c as i,k as a,L as u,M as _,n as v,t as s,O as f,a as t,X as h}from"./chunks/framework.fed37ee6.js";const g={data(){return{activeTab:0,tabs:[{name:"Mocha",content:`this is code with ${d.mochaChainId}<br/>more code<br/>and then this line is one that is going to overflow and we'll see what happens now`},{name:"Arabica",content:`this is code with ${d.arabicaChainId}`}]}},methods:{copyToClipboard(){navigator.clipboard.writeText(this.tabs[this.activeTab].content)}}},C={class:"tabs"},k=["onClick"],T={class:"tab-content"},y={class:"code-box"},I=["innerHTML"];function A(p,e,b,E,o,r){return n(),i("div",null,[a("div",C,[(n(!0),i(u,null,_(o.tabs,(l,c)=>(n(),i("div",{key:c,onClick:M=>o.activeTab=c,class:v({active:o.activeTab===c})},s(l.name),11,k))),128))]),a("div",T,[a("div",y,[a("pre",null,[a("code",{innerHTML:o.tabs[o.activeTab].content},null,8,I)]),a("i",{class:"fas fa-clipboard copy-icon",onClick:e[0]||(e[0]=(...l)=>r.copyToClipboard&&r.copyToClipboard(...l))})])])])}const w=m(g,[["render",A],["__scopeId","data-v-fb55de52"]]),P=h("",8),q=a("h2",{id:"testing-frontmatter-variables",tabindex:"-1"},[t("testing frontmatter variables "),a("a",{class:"header-anchor",href:"#testing-frontmatter-variables","aria-label":'Permalink to "testing frontmatter variables"'},"​")],-1),V=a("p",null,"This is a section to test variables used in frontmatter. It is not possible to display variables in the native code blocks on Vitepress.",-1),S=a("code",null,"mochaChainId",-1),D=a("code",null,"arabicaChainId",-1),$=h("",3),N=a("p",null,"git checkout $VERSION",-1),H=JSON.parse('{"title":"This is a demo page for testing","description":"","frontmatter":{"mochaChainId":"mocha-4","arabicaChainId":"arabica-10","head":[["meta",{"name":"og:title","content":"This is a demo page for testing | Celestia Docs"},{"name":"og:description","content":false}]]},"headers":[],"relativePath":"developers/celestia-node.md","filePath":"developers/celestia-node.md","lastUpdated":1696469673000}'),x={name:"developers/celestia-node.md"},L=Object.assign(x,{setup(p){return(e,b)=>(n(),i("div",null,[P,f(w),q,V,a("pre",null,[a("code",null,`
const mochaChainId = "`+s(e.$frontmatter.mochaChainId)+`";
const arabicaChainId = "`+s(e.$frontmatter.arabicaChainId)+`";
`,1)]),a("p",null,[t("In this example, "),S,t(" and "),D,t(" are variables defined in the frontmatter. They are then accessed in the JavaScript code block using "),a("code",null,s(e.$frontmatter.mochaChainId),1),t(" and "),a("code",null,s(e.$frontmatter.arabicaChainId),1),t(".")]),$,a("p",null,[t("Arabica Version: "),a("code",null,s(e.$frontmatter.arabicaChainId),1),t(" Mocha Version: `"+s(e.$frontmatter.mochaChainId)+"``",1)]),N]))}});export{H as __pageData,L as default};
