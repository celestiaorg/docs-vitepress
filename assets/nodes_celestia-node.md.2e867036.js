import{c as d}from"./chunks/constants.85711f77.js";import{_ as m,o as n,c as i,k as a,L as _,M as u,n as v,t as s,O as C,a as t,X as h}from"./chunks/framework.fed37ee6.js";const f={data(){return{activeTab:0,tabs:[{name:"Mocha",content:`this is code with ${d.mochaChainId}<br/>more code<br/>and then this line is one that is going to overflow and we'll see what happens now`},{name:"Arabica",content:`this is code with ${d.arabicaChainId}`}]}},methods:{copyToClipboard(){navigator.clipboard.writeText(this.tabs[this.activeTab].content)}}},g={class:"tabs"},k=["onClick"],T={class:"tab-content"},y={class:"code-box"},I=["innerHTML"];function w(p,e,b,$,o,r){return n(),i("div",null,[a("div",g,[(n(!0),i(_,null,u(o.tabs,(c,l)=>(n(),i("div",{key:l,onClick:E=>o.activeTab=l,class:v({active:o.activeTab===l})},s(c.name),11,k))),128))]),a("div",T,[a("div",y,[a("pre",null,[a("code",{innerHTML:o.tabs[o.activeTab].content},null,8,I)]),a("i",{class:"fas fa-clipboard copy-icon",onClick:e[0]||(e[0]=(...c)=>r.copyToClipboard&&r.copyToClipboard(...c))})])])])}const A=m(f,[["render",w],["__scopeId","data-v-fb55de52"]]),q=h('<h1 id="celestia-node" tabindex="-1">Celestia node <a class="header-anchor" href="#celestia-node" aria-label="Permalink to &quot;Celestia node&quot;">​</a></h1><h2 id="normal-code-block" tabindex="-1">normal code block <a class="header-anchor" href="#normal-code-block" aria-label="Permalink to &quot;normal code block&quot;">​</a></h2><p>Testing out variables in code blocks. This is the default code block with tabs, and no variables:</p><div class="vp-code-group"><div class="tabs"><input type="radio" name="group-82x78" id="tab-PUEqA-a" checked="checked"><label for="tab-PUEqA-a">potato</label><input type="radio" name="group-82x78" id="tab-wboxqz5"><label for="tab-wboxqz5">pancakes</label></div><div class="blocks"><div class="language-md active"><button title="Copy Code" class="copy"></button><span class="lang">md</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">import constants from &quot;/.vitepress/versions/constants.js&quot;;</span></span></code></pre></div><div class="language-md"><button title="Copy Code" class="copy"></button><span class="lang">md</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">import constants from &quot;/.potato/pancakes/constants.js&quot;;</span></span></code></pre></div></div></div><h2 id="custom-code-block" tabindex="-1">custom code block <a class="header-anchor" href="#custom-code-block" aria-label="Permalink to &quot;custom code block&quot;">​</a></h2><p>This is the custom cude block with tabs, and variables from the constants.js file:</p><p>known issues</p><ul><li>there is not enough padding on the right side when text overflows</li><li>the clipboard icon moves when you scroll</li></ul>',8),x=a("h2",{id:"testing-frontmatter-variables",tabindex:"-1"},[t("testing frontmatter variables "),a("a",{class:"header-anchor",href:"#testing-frontmatter-variables","aria-label":'Permalink to "testing frontmatter variables"'},"​")],-1),P=a("p",null,"This is a section to test variables used in frontmatter. It is not possible to display variables in the native code blocks on Vitepress.",-1),D=a("code",null,"mochaChainId",-1),S=a("code",null,"arabicaChainId",-1),V=h('<div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;">{ $frontmatter.arabicaChainId }}</span></span></code></pre></div>',1),M=JSON.parse('{"title":"Celestia node","description":"","frontmatter":{"mochaChainId":"mocha-4","arabicaChainId":"arabica-10","head":[["meta",{"name":"og:title","content":"Celestia node | Celestia Docs"},{"name":"og:description","content":false}]]},"headers":[],"relativePath":"nodes/celestia-node.md","filePath":"nodes/celestia-node.md","lastUpdated":1696450038000}'),N={name:"nodes/celestia-node.md"},z=Object.assign(N,{setup(p){return(e,b)=>(n(),i("div",null,[q,C(A),x,P,a("pre",null,[a("code",null,`
const mochaChainId = "`+s(e.$frontmatter.mochaChainId)+`";
const arabicaChainId = "`+s(e.$frontmatter.arabicaChainId)+`";
`,1)]),a("p",null,[t("In this example, "),D,t(" and "),S,t(" are variables defined in the frontmatter. They are then accessed in the JavaScript code block using "),a("code",null,s(e.$frontmatter.mochaChainId),1),t(" and "),a("code",null,s(e.$frontmatter.arabicaChainId),1),t(".")]),V]))}});export{M as __pageData,z as default};
