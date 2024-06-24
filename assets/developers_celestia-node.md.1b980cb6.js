import{c as d}from"./chunks/constants.e90b75b1.js";import{_ as u,o as i,c as n,k as a,F as m,D as _,n as v,t as s,H as g,a as t,Q as p}from"./chunks/framework.2b941d6c.js";const f={data(){return{activeTab:0,tabs:[{name:"Mocha",content:`this is code with ${d.mochaChainId}<br/>more code<br/>and then this line is one that is going to overflow and we'll see what happens now`},{name:"Arabica",content:`this is code with ${d.arabicaChainId}`}]}},methods:{copyToClipboard(){navigator.clipboard.writeText(this.tabs[this.activeTab].content)}}},k={class:"tabs"},C=["onClick"],T={class:"tab-content"},y={class:"code-box"},I=["innerHTML"];function E(h,e,b,j,o,r){return i(),n("div",null,[a("div",k,[(i(!0),n(m,null,_(o.tabs,(c,l)=>(i(),n("div",{key:l,onClick:D=>o.activeTab=l,class:v({active:o.activeTab===l})},s(c.name),11,C))),128))]),a("div",T,[a("div",y,[a("pre",null,[a("code",{innerHTML:o.tabs[o.activeTab].content},null,8,I)]),a("i",{class:"fas fa-clipboard copy-icon",onClick:e[0]||(e[0]=(...c)=>r.copyToClipboard&&r.copyToClipboard(...c))})])])])}const q=u(f,[["render",E],["__scopeId","data-v-ad5f550c"]]),w=p('<h1 id="this-is-a-demo-page-for-testing" tabindex="-1">This is a demo page for testing <a class="header-anchor" href="#this-is-a-demo-page-for-testing" aria-label="Permalink to &quot;This is a demo page for testing&quot;">​</a></h1><h2 id="normal-code-block" tabindex="-1">normal code block <a class="header-anchor" href="#normal-code-block" aria-label="Permalink to &quot;normal code block&quot;">​</a></h2><p>Testing out variables in code blocks. This is the default code block with tabs, and no variables:</p><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-pEsti" id="tab-HFSFtMC" checked="checked"><label for="tab-HFSFtMC">potato</label><input type="radio" name="group-pEsti" id="tab-_h-z48r"><label for="tab-_h-z48r">pancakes</label></div><div class="blocks"><div class="language-md vp-adaptive-theme active"><button title="Copy Code" class="copy"></button><span class="lang">md</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">import constants from &quot;/.vitepress/constants/constants.js&quot;;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">import constants from &quot;/.vitepress/constants/constants.js&quot;;</span></span></code></pre></div><div class="language-md vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">md</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">import constants from &quot;/.potato/pancakes/constants.js&quot;;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">import constants from &quot;/.potato/pancakes/constants.js&quot;;</span></span></code></pre></div></div></div><h2 id="custom-code-block" tabindex="-1">custom code block <a class="header-anchor" href="#custom-code-block" aria-label="Permalink to &quot;custom code block&quot;">​</a></h2><p>This is the custom cude block with tabs, and variables from the <code>constants.js</code> file:</p><p>known issues</p><ul><li>there is not enough padding on the right side when text overflows</li><li>the clipboard icon moves when you scroll</li><li>oof. copies the html break tags when you copy multiple lines of code</li></ul>',8),S=a("h2",{id:"testing-frontmatter-variables",tabindex:"-1"},[t("testing frontmatter variables "),a("a",{class:"header-anchor",href:"#testing-frontmatter-variables","aria-label":'Permalink to "testing frontmatter variables"'},"​")],-1),V=a("p",null,"This is a section to test variables used in frontmatter. It is not possible to display variables in the native code blocks on Vitepress.",-1),P=a("code",null,"mochaChainId",-1),$=a("code",null,"arabicaChainId",-1),A=p('<div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">{{ $frontmatter.arabicaChainId }}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">{{ $frontmatter.arabicaChainId }}</span></span></code></pre></div><p>This is <a href="./v0.11.0-rc8">random value</a></p><h2 id="use-variables-like-this" tabindex="-1">use variables like this <a class="header-anchor" href="#use-variables-like-this" aria-label="Permalink to &quot;use variables like this&quot;">​</a></h2>',3),N=a("p",null,"git checkout $VERSION",-1),H=JSON.parse('{"title":"This is a demo page for testing","description":"","frontmatter":{"mochaChainId":"mocha-4","arabicaChainId":"arabica-10","head":[["meta",{"name":"og:title","content":"This is a demo page for testing | Celestia Docs"},{"name":"og:description","content":false}]]},"headers":[],"relativePath":"developers/celestia-node.md","filePath":"developers/celestia-node.md","lastUpdated":1697647221000}'),x={name:"developers/celestia-node.md"},z=Object.assign(x,{setup(h){return(e,b)=>(i(),n("div",null,[w,g(q),S,V,a("pre",null,[a("code",null,`
const mochaChainId = "`+s(e.$frontmatter.mochaChainId)+`";
const arabicaChainId = "`+s(e.$frontmatter.arabicaChainId)+`";
`,1)]),a("p",null,[t("In this example, "),P,t(" and "),$,t(" are variables defined in the frontmatter. They are then accessed in the JavaScript code block using "),a("code",null,s(e.$frontmatter.mochaChainId),1),t(" and "),a("code",null,s(e.$frontmatter.arabicaChainId),1),t(".")]),A,a("p",null,[t("Arabica Version: "),a("code",null,s(e.$frontmatter.arabicaChainId),1),t(" Mocha Version: `"+s(e.$frontmatter.mochaChainId)+"``",1)]),N]))}});export{H as __pageData,z as default};