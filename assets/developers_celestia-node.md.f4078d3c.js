import{c as u}from"./chunks/constants.85711f77.js";import{_,o as n,c as i,k as e,L as f,M as g,n as k,t as o,K as C,O as l,a,w as T,X as v}from"./chunks/framework.5a6ba88b.js";const y={data(){return{activeTab:0,tabs:[{name:"Mocha",content:`this is code with ${u.mochaChainId}<br/>more code<br/>and then this line is one that is going to overflow and we'll see what happens now`},{name:"Arabica",content:`this is code with ${u.arabicaChainId}`}]}},methods:{copyToClipboard(){navigator.clipboard.writeText(this.tabs[this.activeTab].content)}}},I={class:"tabs"},w=["onClick"],A={class:"tab-content"},$={class:"code-box"},q=["innerHTML"];function V(p,t,b,c,s,r){return n(),i("div",null,[e("div",I,[(n(!0),i(f,null,g(s.tabs,(d,h)=>(n(),i("div",{key:h,onClick:H=>s.activeTab=h,class:k({active:s.activeTab===h})},o(d.name),11,w))),128))]),e("div",A,[e("div",$,[e("pre",null,[e("code",{innerHTML:s.tabs[s.activeTab].content},null,8,q)]),e("i",{class:"fas fa-clipboard copy-icon",onClick:t[0]||(t[0]=(...d)=>r.copyToClipboard&&r.copyToClipboard(...d))})])])])}const x=_(y,[["render",V],["__scopeId","data-v-fb55de52"]]),P={data(){return{text:"```hello world```"}}};function S(p,t,b,c,s,r){return n(),i("div",null,o(s.text),1)}const m=_(P,[["render",S]]),D=v('<h1 id="this-is-a-demo-page-for-testing" tabindex="-1">This is a demo page for testing <a class="header-anchor" href="#this-is-a-demo-page-for-testing" aria-label="Permalink to &quot;This is a demo page for testing&quot;">​</a></h1><h2 id="normal-code-block" tabindex="-1">normal code block <a class="header-anchor" href="#normal-code-block" aria-label="Permalink to &quot;normal code block&quot;">​</a></h2><p>Testing out variables in code blocks. This is the default code block with tabs, and no variables:</p><div class="vp-code-group"><div class="tabs"><input type="radio" name="group-A-a1s" id="tab-kheF-gW" checked="checked"><label for="tab-kheF-gW">potato</label><input type="radio" name="group-A-a1s" id="tab-pyAhas1"><label for="tab-pyAhas1">pancakes</label></div><div class="blocks"><div class="language-md active"><button title="Copy Code" class="copy"></button><span class="lang">md</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">import constants from &quot;/.vitepress/versions/constants.js&quot;;</span></span></code></pre></div><div class="language-md"><button title="Copy Code" class="copy"></button><span class="lang">md</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">import constants from &quot;/.potato/pancakes/constants.js&quot;;</span></span></code></pre></div></div></div><h2 id="custom-code-block" tabindex="-1">custom code block <a class="header-anchor" href="#custom-code-block" aria-label="Permalink to &quot;custom code block&quot;">​</a></h2><p>This is the custom cude block with tabs, and variables from the constants.js file:</p><p>known issues</p><ul><li>there is not enough padding on the right side when text overflows</li><li>the clipboard icon moves when you scroll</li><li>oof. copies the html break tags when you copy multiple lines of code</li></ul>',8),N=e("code",null,' function helloWorld() { console.log("Hello, world!"); } ',-1),F=e("h2",{id:"testing-frontmatter-variables",tabindex:"-1"},[a("testing frontmatter variables "),e("a",{class:"header-anchor",href:"#testing-frontmatter-variables","aria-label":'Permalink to "testing frontmatter variables"'},"​")],-1),M=e("p",null,"This is a section to test variables used in frontmatter. It is not possible to display variables in the native code blocks on Vitepress.",-1),j=e("code",null,"mochaChainId",-1),B=e("code",null,"arabicaChainId",-1),E=v('<div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;">{ $frontmatter.arabicaChainId }}</span></span></code></pre></div><p>This is <a href="./v0.11.0-rc8">random value</a></p><h2 id="use-variables-like-this" tabindex="-1">use variables like this <a class="header-anchor" href="#use-variables-like-this" aria-label="Permalink to &quot;use variables like this&quot;">​</a></h2>',3),L=e("p",null,"git checkout $VERSION",-1),G=JSON.parse('{"title":"This is a demo page for testing","description":"","frontmatter":{"mochaChainId":"mocha-4","arabicaChainId":"arabica-10","head":[["meta",{"name":"og:title","content":"This is a demo page for testing | Celestia Docs"},{"name":"og:description","content":false}]]},"headers":[],"relativePath":"developers/celestia-node.md","filePath":"developers/celestia-node.md","lastUpdated":1696465059000}'),O={name:"developers/celestia-node.md"},J=Object.assign(O,{setup(p){return(t,b)=>{const c=C("codeblock");return n(),i("div",null,[D,l(x),l(m),e("pre",null,[e("code",null,[a(`
    `),l(m),a(`
`)])]),l(c,null,{default:T(()=>[a("hi")]),_:1}),N,F,M,e("pre",null,[e("code",null,`
const mochaChainId = "`+o(t.$frontmatter.mochaChainId)+`";
const arabicaChainId = "`+o(t.$frontmatter.arabicaChainId)+`";
`,1)]),e("p",null,[a("In this example, "),j,a(" and "),B,a(" are variables defined in the frontmatter. They are then accessed in the JavaScript code block using "),e("code",null,o(t.$frontmatter.mochaChainId),1),a(" and "),e("code",null,o(t.$frontmatter.arabicaChainId),1),a(".")]),E,e("p",null,[a("Arabica Version: "),e("code",null,o(t.$frontmatter.arabicaChainId),1),a(" Mocha Version: `"+o(t.$frontmatter.mochaChainId)+"``",1)]),L])}}});export{G as __pageData,J as default};