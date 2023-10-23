import{c as d}from"./chunks/constants.ad373f0f.js";import{_ as m,o as n,c as i,k as a,F as u,D as v,n as _,t as s,H as f,a as t,Q as p}from"./chunks/framework.25fa9d36.js";const g={data(){return{activeTab:0,tabs:[{name:"Mocha",content:`this is code with ${d.mochaChainId}<br/>more code<br/>and then this line is one that is going to overflow and we'll see what happens now`},{name:"Arabica",content:`this is code with ${d.arabicaChainId}`}]}},methods:{copyToClipboard(){navigator.clipboard.writeText(this.tabs[this.activeTab].content)}}},k={class:"tabs"},C=["onClick"],T={class:"tab-content"},y={class:"code-box"},I=["innerHTML"];function q(h,e,b,j,o,r){return n(),i("div",null,[a("div",k,[(n(!0),i(u,null,v(o.tabs,(c,l)=>(n(),i("div",{key:l,onClick:D=>o.activeTab=l,class:_({active:o.activeTab===l})},s(c.name),11,C))),128))]),a("div",T,[a("div",y,[a("pre",null,[a("code",{innerHTML:o.tabs[o.activeTab].content},null,8,I)]),a("i",{class:"fas fa-clipboard copy-icon",onClick:e[0]||(e[0]=(...c)=>r.copyToClipboard&&r.copyToClipboard(...c))})])])])}const E=m(g,[["render",q],["__scopeId","data-v-ad5f550c"]]),w=p("",8),V=a("h2",{id:"testing-frontmatter-variables",tabindex:"-1"},[t("testing frontmatter variables "),a("a",{class:"header-anchor",href:"#testing-frontmatter-variables","aria-label":'Permalink to "testing frontmatter variables"'},"​")],-1),P=a("p",null,"This is a section to test variables used in frontmatter. It is not possible to display variables in the native code blocks on Vitepress.",-1),S=a("code",null,"mochaChainId",-1),$=a("code",null,"arabicaChainId",-1),x=p("",3),A=a("p",null,"git checkout $VERSION",-1),B=JSON.parse('{"title":"This is a demo page for testing","description":"","frontmatter":{"mochaChainId":"mocha-4","arabicaChainId":"arabica-10","head":[["meta",{"name":"og:title","content":"This is a demo page for testing | Celestia Docs"},{"name":"og:description","content":false}]]},"headers":[],"relativePath":"developers/celestia-node.md","filePath":"developers/celestia-node.md","lastUpdated":1697647221000}'),N={name:"developers/celestia-node.md"},H=Object.assign(N,{setup(h){return(e,b)=>(n(),i("div",null,[w,f(E),V,P,a("pre",null,[a("code",null,`
const mochaChainId = "`+s(e.$frontmatter.mochaChainId)+`";
const arabicaChainId = "`+s(e.$frontmatter.arabicaChainId)+`";
`,1)]),a("p",null,[t("In this example, "),S,t(" and "),$,t(" are variables defined in the frontmatter. They are then accessed in the JavaScript code block using "),a("code",null,s(e.$frontmatter.mochaChainId),1),t(" and "),a("code",null,s(e.$frontmatter.arabicaChainId),1),t(".")]),x,a("p",null,[t("Arabica Version: "),a("code",null,s(e.$frontmatter.arabicaChainId),1),t(" Mocha Version: `"+s(e.$frontmatter.mochaChainId)+"``",1)]),A]))}});export{B as __pageData,H as default};
