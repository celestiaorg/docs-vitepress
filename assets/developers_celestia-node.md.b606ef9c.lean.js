import{c as d}from"./chunks/constants.85711f77.js";import{_ as m,o as i,c as n,k as a,F as u,D as v,n as _,t as s,H as g,a as t,Q as p}from"./chunks/framework.25fa9d36.js";const f={data(){return{activeTab:0,tabs:[{name:"Mocha",content:`this is code with ${d.mochaChainId}<br/>more code<br/>and then this line is one that is going to overflow and we'll see what happens now`},{name:"Arabica",content:`this is code with ${d.arabicaChainId}`}]}},methods:{copyToClipboard(){navigator.clipboard.writeText(this.tabs[this.activeTab].content)}}},k={class:"tabs"},C=["onClick"],T={class:"tab-content"},y={class:"code-box"},I=["innerHTML"];function q(h,e,b,N,o,r){return i(),n("div",null,[a("div",k,[(i(!0),n(u,null,v(o.tabs,(c,l)=>(i(),n("div",{key:l,onClick:j=>o.activeTab=l,class:_({active:o.activeTab===l})},s(c.name),11,C))),128))]),a("div",T,[a("div",y,[a("pre",null,[a("code",{innerHTML:o.tabs[o.activeTab].content},null,8,I)]),a("i",{class:"fas fa-clipboard copy-icon",onClick:e[0]||(e[0]=(...c)=>r.copyToClipboard&&r.copyToClipboard(...c))})])])])}const E=m(f,[["render",q],["__scopeId","data-v-fb55de52"]]),w=p("",8),V=a("h2",{id:"testing-frontmatter-variables",tabindex:"-1"},[t("testing frontmatter variables "),a("a",{class:"header-anchor",href:"#testing-frontmatter-variables","aria-label":'Permalink to "testing frontmatter variables"'},"​")],-1),P=a("p",null,"This is a section to test variables used in frontmatter. It is not possible to display variables in the native code blocks on Vitepress.",-1),S=a("code",null,"mochaChainId",-1),$=a("code",null,"arabicaChainId",-1),A=p("",3),x=a("p",null,"git checkout $VERSION",-1),M=JSON.parse('{"title":"This is a demo page for testing","description":"","frontmatter":{"mochaChainId":"mocha-4","arabicaChainId":"arabica-10","head":[["meta",{"name":"og:title","content":"This is a demo page for testing | Celestia Docs"},{"name":"og:description","content":false}]]},"headers":[],"relativePath":"developers/celestia-node.md","filePath":"developers/celestia-node.md","lastUpdated":1697143421000}'),D={name:"developers/celestia-node.md"},Z=Object.assign(D,{setup(h){return(e,b)=>(i(),n("div",null,[w,g(E),V,P,a("pre",null,[a("code",null,`
const mochaChainId = "`+s(e.$frontmatter.mochaChainId)+`";
const arabicaChainId = "`+s(e.$frontmatter.arabicaChainId)+`";
`,1)]),a("p",null,[t("In this example, "),S,t(" and "),$,t(" are variables defined in the frontmatter. They are then accessed in the JavaScript code block using "),a("code",null,s(e.$frontmatter.mochaChainId),1),t(" and "),a("code",null,s(e.$frontmatter.arabicaChainId),1),t(".")]),A,a("p",null,[t("Arabica Version: "),a("code",null,s(e.$frontmatter.arabicaChainId),1),t(" Mocha Version: `"+s(e.$frontmatter.mochaChainId)+"``",1)]),x]))}});export{M as __pageData,Z as default};
