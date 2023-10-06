import{c as d}from"./chunks/constants.85711f77.js";import{_ as m,o as i,c as n,k as a,L as u,M as _,n as v,t as s,O as f,a as t,X as h}from"./chunks/framework.fed37ee6.js";const g={data(){return{activeTab:0,tabs:[{name:"Mocha",content:`this is code with ${d.mochaChainId}<br/>more code<br/>and then this line is one that is going to overflow and we'll see what happens now`},{name:"Arabica",content:`this is code with ${d.arabicaChainId}`}]}},methods:{copyToClipboard(){navigator.clipboard.writeText(this.tabs[this.activeTab].content)}}},C={class:"tabs"},k=["onClick"],T={class:"tab-content"},y={class:"code-box"},I=["innerHTML"];function A(p,e,b,O,o,r){return i(),n("div",null,[a("div",C,[(i(!0),n(u,null,_(o.tabs,(l,c)=>(i(),n("div",{key:c,onClick:M=>o.activeTab=c,class:v({active:o.activeTab===c})},s(l.name),11,k))),128))]),a("div",T,[a("div",y,[a("pre",null,[a("code",{innerHTML:o.tabs[o.activeTab].content},null,8,I)]),a("i",{class:"fas fa-clipboard copy-icon",onClick:e[0]||(e[0]=(...l)=>r.copyToClipboard&&r.copyToClipboard(...l))})])])])}const w=m(g,[["render",A],["__scopeId","data-v-fb55de52"]]),P=h('<h1 id="this-is-a-demo-page-for-testing" tabindex="-1">This is a demo page for testing <a class="header-anchor" href="#this-is-a-demo-page-for-testing" aria-label="Permalink to &quot;This is a demo page for testing&quot;">​</a></h1><h2 id="normal-code-block" tabindex="-1">normal code block <a class="header-anchor" href="#normal-code-block" aria-label="Permalink to &quot;normal code block&quot;">​</a></h2><p>Testing out variables in code blocks. This is the default code block with tabs, and no variables:</p><div class="vp-code-group"><div class="tabs"><input type="radio" name="group-xrRU6" id="tab-09PIfOA" checked="checked"><label for="tab-09PIfOA">potato</label><input type="radio" name="group-xrRU6" id="tab-rpNuTz6"><label for="tab-rpNuTz6">pancakes</label></div><div class="blocks"><div class="language-md active"><button title="Copy Code" class="copy"></button><span class="lang">md</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">import constants from &quot;/.vitepress/versions/constants.js&quot;;</span></span></code></pre></div><div class="language-md"><button title="Copy Code" class="copy"></button><span class="lang">md</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">import constants from &quot;/.potato/pancakes/constants.js&quot;;</span></span></code></pre></div></div></div><h2 id="custom-code-block" tabindex="-1">custom code block <a class="header-anchor" href="#custom-code-block" aria-label="Permalink to &quot;custom code block&quot;">​</a></h2><p>This is the custom cude block with tabs, and variables from the constants.js file:</p><p>known issues</p><ul><li>there is not enough padding on the right side when text overflows</li><li>the clipboard icon moves when you scroll</li><li>oof. copies the html break tags when you copy multiple lines of code</li></ul>',8),q=a("h2",{id:"testing-frontmatter-variables",tabindex:"-1"},[t("testing frontmatter variables "),a("a",{class:"header-anchor",href:"#testing-frontmatter-variables","aria-label":'Permalink to "testing frontmatter variables"'},"​")],-1),V=a("p",null,"This is a section to test variables used in frontmatter. It is not possible to display variables in the native code blocks on Vitepress.",-1),S=a("code",null,"mochaChainId",-1),D=a("code",null,"arabicaChainId",-1),N=h('<div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;">{ $frontmatter.arabicaChainId }}</span></span></code></pre></div><p>This is <a href="./v0.11.0-rc8">random value</a></p><h2 id="use-variables-like-this" tabindex="-1">use variables like this <a class="header-anchor" href="#use-variables-like-this" aria-label="Permalink to &quot;use variables like this&quot;">​</a></h2>',3),$=a("p",null,"git checkout $VERSION",-1),E=JSON.parse('{"title":"This is a demo page for testing","description":"","frontmatter":{"mochaChainId":"mocha-4","arabicaChainId":"arabica-10","head":[["meta",{"name":"og:title","content":"This is a demo page for testing | Celestia Docs"},{"name":"og:description","content":false}]]},"headers":[],"relativePath":"developers/celestia-node.md","filePath":"developers/celestia-node.md","lastUpdated":1696469673000}'),x={name:"developers/celestia-node.md"},L=Object.assign(x,{setup(p){return(e,b)=>(i(),n("div",null,[P,f(w),q,V,a("pre",null,[a("code",null,`
const mochaChainId = "`+s(e.$frontmatter.mochaChainId)+`";
const arabicaChainId = "`+s(e.$frontmatter.arabicaChainId)+`";
`,1)]),a("p",null,[t("In this example, "),S,t(" and "),D,t(" are variables defined in the frontmatter. They are then accessed in the JavaScript code block using "),a("code",null,s(e.$frontmatter.mochaChainId),1),t(" and "),a("code",null,s(e.$frontmatter.arabicaChainId),1),t(".")]),N,a("p",null,[t("Arabica Version: "),a("code",null,s(e.$frontmatter.arabicaChainId),1),t(" Mocha Version: `"+s(e.$frontmatter.mochaChainId)+"``",1)]),$]))}});export{E as __pageData,L as default};
