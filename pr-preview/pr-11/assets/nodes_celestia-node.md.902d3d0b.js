import{a as n}from"./chunks/arabica_versions.24daccca.js";import{m as l}from"./chunks/mocha_versions.d091215e.js";import{o as c,c as i,k as s,t as e,l as a,a as t,Q as o}from"./chunks/framework.afb081b4.js";const p=s("h1",{id:"install-celestia-node",tabindex:"-1"},[t("Install celestia-node "),s("a",{class:"header-anchor",href:"#install-celestia-node","aria-label":'Permalink to "Install celestia-node"'},"​")],-1),d=s("p",null,[t("This tutorial goes over building and installing celestia-node. This tutorial assumes you completed the steps in "),s("a",{href:"./environment"},"setting up your development environment"),t(".")],-1),r=s("p",null,"Install the celestia-node binary by running the following commands:",-1),h=o(`<li><p>Remove any existing copy of celestia-node, clone the repository, and change into the directory:</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#79B8FF;">cd</span><span style="color:#E1E4E8;"> $HOME</span></span>
<span class="line"><span style="color:#B392F0;">rm</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-rf</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">celestia-node</span></span>
<span class="line"><span style="color:#B392F0;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">clone</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">https://github.com/celestiaorg/celestia-node.git</span></span>
<span class="line"><span style="color:#79B8FF;">cd</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">celestia-node/</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#005CC5;">cd</span><span style="color:#24292E;"> $HOME</span></span>
<span class="line"><span style="color:#6F42C1;">rm</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-rf</span><span style="color:#24292E;"> </span><span style="color:#032F62;">celestia-node</span></span>
<span class="line"><span style="color:#6F42C1;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">clone</span><span style="color:#24292E;"> </span><span style="color:#032F62;">https://github.com/celestiaorg/celestia-node.git</span></span>
<span class="line"><span style="color:#005CC5;">cd</span><span style="color:#24292E;"> </span><span style="color:#032F62;">celestia-node/</span></span></code></pre></div></li>`,1),_=s("p",null,"Check out to the desired version, based on the network you will use:",-1),y={class:"vp-code-group vp-adaptive-theme"},u=o('<div class="tabs"><input type="radio" name="group-BHDO_" id="tab-NLnnywh" checked="checked"><label for="tab-NLnnywh">Mocha</label><input type="radio" name="group-BHDO_" id="tab-cPeAAvd"><label for="tab-cPeAAvd">Arabica</label></div>',1),g={class:"blocks"},b={class:"language-bash vp-adaptive-theme active"},v=s("button",{title:"Copy Code",class:"copy"},null,-1),E=s("span",{class:"lang"},"bash",-1),m={class:"shiki github-dark vp-code-dark"},k={class:"line"},F=s("span",{style:{color:"#B392F0"}},"git",-1),C=s("span",{style:{color:"#E1E4E8"}}," ",-1),f=s("span",{style:{color:"#9ECBFF"}},"checkout",-1),B=s("span",{style:{color:"#E1E4E8"}}," ",-1),T={style:{color:"#9ECBFF"}},A={class:"shiki github-light vp-code-light"},I={class:"line"},N=s("span",{style:{color:"#6F42C1"}},"git",-1),P=s("span",{style:{color:"#24292E"}}," ",-1),w=s("span",{style:{color:"#032F62"}},"checkout",-1),S=s("span",{style:{color:"#24292E"}}," ",-1),V={style:{color:"#032F62"}},x={class:"language-bash vp-adaptive-theme"},D=s("button",{title:"Copy Code",class:"copy"},null,-1),R=s("span",{class:"lang"},"bash",-1),O={class:"shiki github-dark vp-code-dark"},L={class:"line"},q=s("span",{style:{color:"#B392F0"}},"git",-1),H=s("span",{style:{color:"#E1E4E8"}}," ",-1),M=s("span",{style:{color:"#9ECBFF"}},"checkout",-1),U=s("span",{style:{color:"#E1E4E8"}}," ",-1),X={style:{color:"#9ECBFF"}},Z={class:"shiki github-light vp-code-light"},$={class:"line"},j=s("span",{style:{color:"#6F42C1"}},"git",-1),G=s("span",{style:{color:"#24292E"}}," ",-1),J=s("span",{style:{color:"#032F62"}},"checkout",-1),Q=s("span",{style:{color:"#24292E"}}," ",-1),z={style:{color:"#032F62"}},K=o('<li><p>Build the <code>celestia</code> binary:</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">make</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">build</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">make</span><span style="color:#24292E;"> </span><span style="color:#032F62;">build</span></span></code></pre></div></li><li><p>Install the binary:</p><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-sa-mZ" id="tab-lX7l0gv" checked="checked"><label for="tab-lX7l0gv">Ubuntu</label><input type="radio" name="group-sa-mZ" id="tab-oaicNpw"><label for="tab-oaicNpw">Mac</label></div><div class="blocks"><div class="language-bash vp-adaptive-theme active"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">make</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">install</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">make</span><span style="color:#24292E;"> </span><span style="color:#032F62;">install</span></span></code></pre></div><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">make</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">go-install</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">make</span><span style="color:#24292E;"> </span><span style="color:#032F62;">go-install</span></span></code></pre></div></div></div></li><li><p>Build the <code>cel-key</code> utility:</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">make</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">cel-key</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">make</span><span style="color:#24292E;"> </span><span style="color:#032F62;">cel-key</span></span></code></pre></div></li><li><p>Verify that the binary is working and check the version:</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">celestia</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">version</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">celestia</span><span style="color:#24292E;"> </span><span style="color:#032F62;">version</span></span></code></pre></div></li>',4),W=o('<p>The output will show the semantic version of celestia-node, commit hash, build date, system version, and Golang version.</p><h2 id="next-steps" tabindex="-1">Next steps <a class="header-anchor" href="#next-steps" aria-label="Permalink to &quot;Next steps&quot;">​</a></h2><p>First, we recommend <a href="./overview">reading the overview</a> of our node types, if you haven&#39;t yet.</p><p>Now that you&#39;ve installed Celestia Node, it&#39;s time to <a href="./decide-node">pick your node type</a> and run your node!</p><p>If you&#39;re planning to run a light node, we recommend the <a href="./../developers/node-tutorial">node RPC CLI tutorial</a>.</p><h2 id="upgrading-your-binary" tabindex="-1">Upgrading your binary <a class="header-anchor" href="#upgrading-your-binary" aria-label="Permalink to &quot;Upgrading your binary&quot;">​</a></h2><p>To upgrade your binary, you can install the latest version from the instructions above and restart your node. If you run into any issues, Refer to the <a href="./celestia-node-troubleshooting">troubleshooting section</a>.</p>',7),ls=JSON.parse('{"title":"Install celestia-node","description":"Learn to build and install celestia-node.","frontmatter":{"description":"Learn to build and install celestia-node.","head":[["meta",{"name":"og:title","content":"Install celestia-node | Celestia Docs"},{"name":"og:description","content":false}]]},"headers":[],"relativePath":"nodes/celestia-node.md","filePath":"nodes/celestia-node.md","lastUpdated":1705728970000}'),Y={name:"nodes/celestia-node.md"},cs=Object.assign(Y,{setup(ss){return(es,as)=>(c(),i("div",null,[p,d,r,s("ol",null,[h,s("li",null,[_,s("div",y,[u,s("div",g,[s("div",b,[v,E,s("pre",m,[s("code",null,[s("span",k,[F,C,f,B,s("span",T,"tags/"+e(a(l)["node-latest-tag"]),1)])])]),s("pre",A,[s("code",null,[s("span",I,[N,P,w,S,s("span",V,"tags/"+e(a(l)["node-latest-tag"]),1)])])])]),s("div",x,[D,R,s("pre",O,[s("code",null,[s("span",L,[q,H,M,U,s("span",X,"tags/"+e(a(n)["node-latest-tag"]),1)])])]),s("pre",Z,[s("code",null,[s("span",$,[j,G,J,Q,s("span",z,"tags/"+e(a(n)["node-latest-tag"]),1)])])])])])])]),K]),W]))}});export{ls as __pageData,cs as default};
