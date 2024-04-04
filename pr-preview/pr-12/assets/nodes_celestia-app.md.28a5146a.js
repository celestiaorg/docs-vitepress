import{a}from"./chunks/arabica_versions.24daccca.js";import{m as l}from"./chunks/mocha_versions.d091215e.js";import{o as c,c as p,k as s,t,l as e,a as o,Q as n}from"./chunks/framework.6e3b93cd.js";const i=s("h1",{id:"install-celestia-app",tabindex:"-1"},[o("Install celestia-app "),s("a",{class:"header-anchor",href:"#install-celestia-app","aria-label":'Permalink to "Install celestia-app"'},"​")],-1),d=s("p",null,[o("This tutorial will guide you through installing celestia-app. This tutorial presumes you completed the steps in "),s("a",{href:"./environment"},"setting up your own environment"),o(".")],-1),r=s("p",null,[o("The steps below will create a binary file named "),s("code",null,"celestia-appd"),o(" inside "),s("code",null,"$HOME/go/bin"),o(" folder which will be used later to run the node. Be sure to select the correct network to install the binary for.")],-1),h=n(`<li><p>Remove any existing copy of celestia-app, clone the repository, and change into the directory:</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#79B8FF;">cd</span><span style="color:#E1E4E8;"> $HOME</span></span>
<span class="line"><span style="color:#B392F0;">rm</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-rf</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">celestia-app</span></span>
<span class="line"><span style="color:#B392F0;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">clone</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">https://github.com/celestiaorg/celestia-app.git</span></span>
<span class="line"><span style="color:#79B8FF;">cd</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">celestia-app</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#005CC5;">cd</span><span style="color:#24292E;"> $HOME</span></span>
<span class="line"><span style="color:#6F42C1;">rm</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-rf</span><span style="color:#24292E;"> </span><span style="color:#032F62;">celestia-app</span></span>
<span class="line"><span style="color:#6F42C1;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">clone</span><span style="color:#24292E;"> </span><span style="color:#032F62;">https://github.com/celestiaorg/celestia-app.git</span></span>
<span class="line"><span style="color:#005CC5;">cd</span><span style="color:#24292E;"> </span><span style="color:#032F62;">celestia-app</span></span></code></pre></div></li>`,1),_=s("p",null,"Check out to the desired version, based on the network you will use:",-1),y={class:"vp-code-group vp-adaptive-theme"},u=n('<div class="tabs"><input type="radio" name="group-07sWn" id="tab-rhCkL3l" checked="checked"><label for="tab-rhCkL3l">Mocha</label><input type="radio" name="group-07sWn" id="tab-lU5YG9E"><label for="tab-lU5YG9E">Arabica</label></div>',1),g={class:"blocks"},E={class:"language-bash vp-adaptive-theme active"},b=s("button",{title:"Copy Code",class:"copy"},null,-1),F=s("span",{class:"lang"},"bash",-1),C={class:"shiki github-dark vp-code-dark"},m={class:"line"},v=s("span",{style:{color:"#B392F0"}},"git",-1),k=s("span",{style:{color:"#E1E4E8"}}," ",-1),f=s("span",{style:{color:"#9ECBFF"}},"checkout",-1),T=s("span",{style:{color:"#E1E4E8"}}," ",-1),B={style:{color:"#9ECBFF"}},P=s("span",{style:{color:"#E1E4E8"}}," ",-1),w=s("span",{style:{color:"#79B8FF"}},"-b",-1),I=s("span",{style:{color:"#E1E4E8"}}," ",-1),A={style:{color:"#9ECBFF"}},S={class:"shiki github-light vp-code-light"},V={class:"line"},D=s("span",{style:{color:"#6F42C1"}},"git",-1),N=s("span",{style:{color:"#24292E"}}," ",-1),x=s("span",{style:{color:"#032F62"}},"checkout",-1),R=s("span",{style:{color:"#24292E"}}," ",-1),L={style:{color:"#032F62"}},M=s("span",{style:{color:"#24292E"}}," ",-1),O=s("span",{style:{color:"#005CC5"}},"-b",-1),H=s("span",{style:{color:"#24292E"}}," ",-1),U={style:{color:"#032F62"}},q={class:"language-bash vp-adaptive-theme"},W=s("button",{title:"Copy Code",class:"copy"},null,-1),Y=s("span",{class:"lang"},"bash",-1),$={class:"shiki github-dark vp-code-dark"},G={class:"line"},j=s("span",{style:{color:"#B392F0"}},"git",-1),J=s("span",{style:{color:"#E1E4E8"}}," ",-1),Q=s("span",{style:{color:"#9ECBFF"}},"checkout",-1),z=s("span",{style:{color:"#E1E4E8"}}," ",-1),K={style:{color:"#9ECBFF"}},X=s("span",{style:{color:"#E1E4E8"}}," ",-1),Z=s("span",{style:{color:"#79B8FF"}},"-b",-1),ss=s("span",{style:{color:"#E1E4E8"}}," ",-1),ts={style:{color:"#9ECBFF"}},es={class:"shiki github-light vp-code-light"},os={class:"line"},as=s("span",{style:{color:"#6F42C1"}},"git",-1),ls=s("span",{style:{color:"#24292E"}}," ",-1),ns=s("span",{style:{color:"#032F62"}},"checkout",-1),cs=s("span",{style:{color:"#24292E"}}," ",-1),ps={style:{color:"#032F62"}},is=s("span",{style:{color:"#24292E"}}," ",-1),ds=s("span",{style:{color:"#005CC5"}},"-b",-1),rs=s("span",{style:{color:"#24292E"}}," ",-1),hs={style:{color:"#032F62"}},_s=n('<li><p>Build and install the <code>celestia-appd</code> binary:</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">make</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">build</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">make</span><span style="color:#24292E;"> </span><span style="color:#032F62;">build</span></span></code></pre></div></li><li><p>To check if the binary was successfully installed you can run the binary using the <code>--help</code> flag:</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">celestia-appd</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--help</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">celestia-appd</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--help</span></span></code></pre></div></li>',2),ys=n('<p>You will see an output with the menu for <code>celestia-appd</code>. Learn more on the <a href="./celestia-app-commands">helpful CLI commands page</a></p><h2 id="ports" tabindex="-1">Ports <a class="header-anchor" href="#ports" aria-label="Permalink to &quot;Ports&quot;">​</a></h2><p>When interacting with a consensus node, you may need to open ports on your machine to allow communication between nodes, such as bridge nodes. It is essential that specific ports are accessible. Make sure that your firewall allows connections to the correct ports.</p><p>If you run a node on a cloud server, make sure that the ports are open on the server&#39;s firewall. If you run a node at home, make sure that your router allows connections to the correct ports.</p><p>For example, validator ports 9090 and 26657 need to be accessible by the bridge, and port 2121 is required for P2P connections for all node types.</p><p>The following ports are used by Celestia app nodes:</p><table><thead><tr><th>Port</th><th>Protocol</th><th>Address</th><th>Description</th><th>Enabled by default on node</th><th>Flag</th></tr></thead><tbody><tr><td>2121</td><td>TCP/UDP</td><td>localhost</td><td>P2P</td><td>true</td><td>N/A</td></tr><tr><td>9090</td><td>HTTP</td><td>0.0.0.0</td><td>gRPC</td><td>true</td><td><code>--grpc.address string</code></td></tr><tr><td>26657</td><td>TCP</td><td>localhost</td><td>RPC</td><td>false (only open to localhost)</td><td><code>--rpc.laddr string</code></td></tr></tbody></table>',7),vs=JSON.parse('{"title":"Install celestia-app","description":"Learn how you can build celestia-app.","frontmatter":{"description":"Learn how you can build celestia-app.","head":[["meta",{"name":"og:title","content":"Install celestia-app | Celestia Docs"},{"name":"og:description","content":false}]]},"headers":[],"relativePath":"nodes/celestia-app.md","filePath":"nodes/celestia-app.md","lastUpdated":1712192838000}'),us={name:"nodes/celestia-app.md"},ks=Object.assign(us,{setup(gs){return(Es,bs)=>(c(),p("div",null,[i,d,r,s("ol",null,[h,s("li",null,[_,s("div",y,[u,s("div",g,[s("div",E,[b,F,s("pre",C,[s("code",null,[s("span",m,[v,k,f,T,s("span",B,"tags/"+t(e(l)["app-latest-tag"]),1),P,w,I,s("span",A,t(e(l)["app-latest-tag"]),1)])])]),s("pre",S,[s("code",null,[s("span",V,[D,N,x,R,s("span",L,"tags/"+t(e(l)["app-latest-tag"]),1),M,O,H,s("span",U,t(e(l)["app-latest-tag"]),1)])])])]),s("div",q,[W,Y,s("pre",$,[s("code",null,[s("span",G,[j,J,Q,z,s("span",K,"tags/"+t(e(a)["app-latest-tag"]),1),X,Z,ss,s("span",ts,t(e(a)["app-latest-tag"]),1)])])]),s("pre",es,[s("code",null,[s("span",os,[as,ls,ns,cs,s("span",ps,"tags/"+t(e(a)["app-latest-tag"]),1),is,ds,rs,s("span",hs,t(e(a)["app-latest-tag"]),1)])])])])])])]),_s]),ys]))}});export{vs as __pageData,ks as default};
