import{c as u}from"./chunks/constants.85711f77.js";import{_ as m,o as n,c as i,k as e,L as f,M as C,n as k,t as o,K as g,O as l,a,w as T,X as v}from"./chunks/framework.5a6ba88b.js";const y={data(){return{activeTab:0,tabs:[{name:"Mocha",content:`this is code with ${u.mochaChainId}<br/>more code<br/>and then this line is one that is going to overflow and we'll see what happens now`},{name:"Arabica",content:`this is code with ${u.arabicaChainId}`}]}},methods:{copyToClipboard(){navigator.clipboard.writeText(this.tabs[this.activeTab].content)}}},I={class:"tabs"},w=["onClick"],A={class:"tab-content"},$={class:"code-box"},q=["innerHTML"];function V(p,t,b,c,s,r){return n(),i("div",null,[e("div",I,[(n(!0),i(f,null,C(s.tabs,(d,h)=>(n(),i("div",{key:h,onClick:F=>s.activeTab=h,class:k({active:s.activeTab===h})},o(d.name),11,w))),128))]),e("div",A,[e("div",$,[e("pre",null,[e("code",{innerHTML:s.tabs[s.activeTab].content},null,8,q)]),e("i",{class:"fas fa-clipboard copy-icon",onClick:t[0]||(t[0]=(...d)=>r.copyToClipboard&&r.copyToClipboard(...d))})])])])}const x=m(y,[["render",V],["__scopeId","data-v-fb55de52"]]),P={data(){return{text:"```hello world```"}}};function S(p,t,b,c,s,r){return n(),i("div",null,o(s.text),1)}const _=m(P,[["render",S]]),D=v("",8),N=e("code",null,' function helloWorld() { console.log("Hello, world!"); } ',-1),M=e("h2",{id:"testing-frontmatter-variables",tabindex:"-1"},[a("testing frontmatter variables "),e("a",{class:"header-anchor",href:"#testing-frontmatter-variables","aria-label":'Permalink to "testing frontmatter variables"'},"​")],-1),R=e("p",null,"This is a section to test variables used in frontmatter. It is not possible to display variables in the native code blocks on Vitepress.",-1),j=e("code",null,"mochaChainId",-1),B=e("code",null,"arabicaChainId",-1),E=v("",3),L=e("p",null,"git checkout $VERSION",-1),W=JSON.parse('{"title":"Celestia node","description":"","frontmatter":{"mochaChainId":"mocha-4","arabicaChainId":"arabica-10","head":[["meta",{"name":"og:title","content":"Celestia node | Celestia Docs"},{"name":"og:description","content":false}]]},"headers":[],"relativePath":"developers/celestia-node.md","filePath":"developers/celestia-node.md","lastUpdated":1696461744000}'),O={name:"developers/celestia-node.md"},G=Object.assign(O,{setup(p){return(t,b)=>{const c=g("codeblock");return n(),i("div",null,[D,l(x),l(_),e("pre",null,[e("code",null,[a(`
    `),l(_),a(`
`)])]),l(c,null,{default:T(()=>[a("hi")]),_:1}),N,M,R,e("pre",null,[e("code",null,`
const mochaChainId = "`+o(t.$frontmatter.mochaChainId)+`";
const arabicaChainId = "`+o(t.$frontmatter.arabicaChainId)+`";
`,1)]),e("p",null,[a("In this example, "),j,a(" and "),B,a(" are variables defined in the frontmatter. They are then accessed in the JavaScript code block using "),e("code",null,o(t.$frontmatter.mochaChainId),1),a(" and "),e("code",null,o(t.$frontmatter.arabicaChainId),1),a(".")]),E,e("p",null,[a("Arabica Version: "),e("code",null,o(t.$frontmatter.arabicaChainId),1),a(" Mocha Version: `"+o(t.$frontmatter.mochaChainId)+"``",1)]),L])}}});export{W as __pageData,G as default};