import{a as l}from"./chunks/arabica_versions.24daccca.js";import{m as t}from"./chunks/mocha_versions.d091215e.js";import{o as p,c,k as s,a,t as n,l as e,Q as o}from"./chunks/framework.2b941d6c.js";const r=o('<h1 id="🐳-docker-setup" tabindex="-1">🐳 Docker setup <a class="header-anchor" href="#🐳-docker-setup" aria-label="Permalink to &quot;🐳 Docker setup&quot;">​</a></h1><p>This page has instructions to run celestia-node using Docker. If you are looking for instructions to run celestia-node using a binary, please refer to the <a href="./celestia-node">celestia-node page</a>.</p><p>Using Docker is the easiest way to run celestia-node for most users. Docker is a containerization platform that allows you to run celestia-node in an isolated environment.</p><p>This means that you can run celestia-node on your machine without having to worry about installing and configuring all of the dependencies required to run the node.</p><p>If you would like to learn more about key management in Docker, visit the <a href="./../developers/celestia-node-key#docker-and-cel-key">Docker and <code>cel-key</code> section</a>.</p><p>The easiest way to install Docker is to use the Docker Desktop installer or Ubuntu. You can <a href="https://docs.docker.com/engine/install" target="_blank" rel="noreferrer">follow the instructions for your operating system</a>.</p><h2 id="prerequisites" tabindex="-1">Prerequisites <a class="header-anchor" href="#prerequisites" aria-label="Permalink to &quot;Prerequisites&quot;">​</a></h2><ul><li><a href="https://docs.docker.com/get-docker" target="_blank" rel="noreferrer">Docker</a> and basic understanding of Docker</li></ul><h2 id="quick-start" tabindex="-1">Quick start <a class="header-anchor" href="#quick-start" aria-label="Permalink to &quot;Quick start&quot;">​</a></h2>',9),i=o('<li><p>Set <a href="./participate">the network</a> you would like to run your node on:</p><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-EhWoX" id="tab-FrNMIWp" checked="checked"><label for="tab-FrNMIWp">Arabica</label><input type="radio" name="group-EhWoX" id="tab-abEnWav"><label for="tab-abEnWav">Mocha</label></div><div class="blocks"><div class="language-bash vp-adaptive-theme active"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> NETWORK</span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;">arabica</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> NETWORK</span><span style="color:#D73A49;">=</span><span style="color:#032F62;">arabica</span></span></code></pre></div><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> NETWORK</span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;">mocha</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> NETWORK</span><span style="color:#D73A49;">=</span><span style="color:#032F62;">mocha</span></span></code></pre></div></div></div></li><li><p>Set the node type</p><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-FPiwJ" id="tab-r-2LkXe" checked="checked"><label for="tab-r-2LkXe">Light</label><input type="radio" name="group-FPiwJ" id="tab-QpvqKkF"><label for="tab-QpvqKkF">Bridge</label><input type="radio" name="group-FPiwJ" id="tab-XivUbL2"><label for="tab-XivUbL2">Full</label></div><div class="blocks"><div class="language-bash vp-adaptive-theme active"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> NODE_TYPE</span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;">light</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> NODE_TYPE</span><span style="color:#D73A49;">=</span><span style="color:#032F62;">light</span></span></code></pre></div><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> NODE_TYPE</span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;">bridge</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> NODE_TYPE</span><span style="color:#D73A49;">=</span><span style="color:#032F62;">bridge</span></span></code></pre></div><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> NODE_TYPE</span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;">full</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> NODE_TYPE</span><span style="color:#D73A49;">=</span><span style="color:#032F62;">full</span></span></code></pre></div></div></div></li><li><p>Set an RPC endpoint for either <a href="./arabica-devnet#rpc-endpoints">Arabica</a> or <a href="./mocha-testnet#rpc-endpoints">Mocha</a> using the bare URL (without http or https):</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> RPC_URL</span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;">this-is-an-rpc-url.com</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> RPC_URL</span><span style="color:#D73A49;">=</span><span style="color:#032F62;">this-is-an-rpc-url.com</span></span></code></pre></div></li>',3),_=s("p",null,"Run the image from the command line:",-1),E={class:"vp-code-group vp-adaptive-theme"},d=o('<div class="tabs"><input type="radio" name="group--LGn_" id="tab-p2nupVL" checked="checked"><label for="tab-p2nupVL">Arabica</label><input type="radio" name="group--LGn_" id="tab-4gV117g"><label for="tab-4gV117g">Mocha</label></div>',1),y={class:"blocks"},h={class:"language-bash vp-adaptive-theme active"},T=s("button",{title:"Copy Code",class:"copy"},null,-1),u=s("span",{class:"lang"},"bash",-1),F={class:"shiki github-dark vp-code-dark"},C=o('<span class="line"><span style="color:#B392F0;">docker</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">run</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-e</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">NODE_TYPE=</span><span style="color:#E1E4E8;">$NODE_TYPE </span><span style="color:#79B8FF;">-e</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">P2P_NETWORK=</span><span style="color:#E1E4E8;">$NETWORK </span><span style="color:#79B8FF;">\\</span></span>',1),g={class:"line"},b=s("span",{style:{color:"#E1E4E8"}},"    ",-1),v={style:{color:"#9ECBFF"}},k=s("span",{style:{color:"#E1E4E8"}}," ",-1),m=s("span",{style:{color:"#79B8FF"}},"\\",-1),P=o('<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#9ECBFF;">celestia</span><span style="color:#E1E4E8;"> $NODE_TYPE </span><span style="color:#9ECBFF;">start</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--core.ip</span><span style="color:#E1E4E8;"> $RPC_URL </span><span style="color:#79B8FF;">--p2p.network</span><span style="color:#E1E4E8;"> $NETWORK</span></span>',1),A={class:"shiki github-light vp-code-light"},N=o('<span class="line"><span style="color:#6F42C1;">docker</span><span style="color:#24292E;"> </span><span style="color:#032F62;">run</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-e</span><span style="color:#24292E;"> </span><span style="color:#032F62;">NODE_TYPE=</span><span style="color:#24292E;">$NODE_TYPE </span><span style="color:#005CC5;">-e</span><span style="color:#24292E;"> </span><span style="color:#032F62;">P2P_NETWORK=</span><span style="color:#24292E;">$NETWORK </span><span style="color:#005CC5;">\\</span></span>',1),S={class:"line"},B=s("span",{style:{color:"#24292E"}},"    ",-1),D={style:{color:"#032F62"}},R=s("span",{style:{color:"#24292E"}}," ",-1),O=s("span",{style:{color:"#005CC5"}},"\\",-1),V=o('<span class="line"><span style="color:#24292E;">    </span><span style="color:#032F62;">celestia</span><span style="color:#24292E;"> $NODE_TYPE </span><span style="color:#032F62;">start</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--core.ip</span><span style="color:#24292E;"> $RPC_URL </span><span style="color:#005CC5;">--p2p.network</span><span style="color:#24292E;"> $NETWORK</span></span>',1),I={class:"language-bash vp-adaptive-theme"},f=s("button",{title:"Copy Code",class:"copy"},null,-1),w=s("span",{class:"lang"},"bash",-1),$={class:"shiki github-dark vp-code-dark"},W=o('<span class="line"><span style="color:#B392F0;">docker</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">run</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-e</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">NODE_TYPE=</span><span style="color:#E1E4E8;">$NODE_TYPE </span><span style="color:#79B8FF;">-e</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">P2P_NETWORK=</span><span style="color:#E1E4E8;">$NETWORK </span><span style="color:#79B8FF;">\\</span></span>',1),K={class:"line"},Y=s("span",{style:{color:"#E1E4E8"}},"    ",-1),M={style:{color:"#9ECBFF"}},x=s("span",{style:{color:"#E1E4E8"}}," ",-1),q=s("span",{style:{color:"#79B8FF"}},"\\",-1),L=o('<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#9ECBFF;">celestia</span><span style="color:#E1E4E8;"> $NODE_TYPE </span><span style="color:#9ECBFF;">start</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--core.ip</span><span style="color:#E1E4E8;"> $RPC_URL </span><span style="color:#79B8FF;">--p2p.network</span><span style="color:#E1E4E8;"> $NETWORK</span></span>',1),H={class:"shiki github-light vp-code-light"},U=o('<span class="line"><span style="color:#6F42C1;">docker</span><span style="color:#24292E;"> </span><span style="color:#032F62;">run</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-e</span><span style="color:#24292E;"> </span><span style="color:#032F62;">NODE_TYPE=</span><span style="color:#24292E;">$NODE_TYPE </span><span style="color:#005CC5;">-e</span><span style="color:#24292E;"> </span><span style="color:#032F62;">P2P_NETWORK=</span><span style="color:#24292E;">$NETWORK </span><span style="color:#005CC5;">\\</span></span>',1),z={class:"line"},X=s("span",{style:{color:"#24292E"}},"    ",-1),Q={style:{color:"#032F62"}},Z=s("span",{style:{color:"#24292E"}}," ",-1),J=s("span",{style:{color:"#005CC5"}},"\\",-1),G=o('<span class="line"><span style="color:#24292E;">    </span><span style="color:#032F62;">celestia</span><span style="color:#24292E;"> $NODE_TYPE </span><span style="color:#032F62;">start</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--core.ip</span><span style="color:#24292E;"> $RPC_URL </span><span style="color:#005CC5;">--p2p.network</span><span style="color:#24292E;"> $NETWORK</span></span>',1),j=o(`<p>Congratulations! You now have a celestia-node running!</p><p>If you would like to run the node with custom flags, you can refer to the <a href="./../developers/node-tutorial#connect-to-a-public-core-endpoint">celestia-node tutorial</a> page. Refer to <a href="./celestia-node-troubleshooting#ports">the ports section of the celestia-node troubleshooting page</a> for information on which ports are required to be open on your machine.</p><h2 id="light-node-setup-with-persistent-storage" tabindex="-1">Light node setup with persistent storage <a class="header-anchor" href="#light-node-setup-with-persistent-storage" aria-label="Permalink to &quot;Light node setup with persistent storage&quot;">​</a></h2><p>If you delete a container that you started above, all data will be lost. To avoid this, you can mount a volume to the container. This will allow you to persist data even after the container is deleted.</p><p>First, you will need to create a directory on your host machine. This directory will be used to store the data for the container. Create a directory on your host machine and give it a name. For example, you can name it <code>my-node-store</code>:</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#79B8FF;">cd</span><span style="color:#E1E4E8;"> $HOME</span></span>
<span class="line"><span style="color:#B392F0;">mkdir</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">my-node-store</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#005CC5;">cd</span><span style="color:#24292E;"> $HOME</span></span>
<span class="line"><span style="color:#6F42C1;">mkdir</span><span style="color:#24292E;"> </span><span style="color:#032F62;">my-node-store</span></span></code></pre></div><p>Now, you can mount this directory to the container. Before mounting a volume, you <em>may</em> need to set permissions for the user on the host machine by running:</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">sudo</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">chown</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">10001</span><span style="color:#9ECBFF;">:10001</span><span style="color:#E1E4E8;"> $HOME</span><span style="color:#9ECBFF;">/my-node-store</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">sudo</span><span style="color:#24292E;"> </span><span style="color:#032F62;">chown</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">10001</span><span style="color:#032F62;">:10001</span><span style="color:#24292E;"> $HOME</span><span style="color:#032F62;">/my-node-store</span></span></code></pre></div><h3 id="initialize-the-node-store-and-key" tabindex="-1">Initialize the node store and key <a class="header-anchor" href="#initialize-the-node-store-and-key" aria-label="Permalink to &quot;Initialize the node store and key&quot;">​</a></h3><p>In order to mount a volume to the container, you need to specify the path to the volume. When you run your container, you can specify the path to the volume using the <code>--volume</code> (or <code>-v</code> for short) flag. In this command, we&#39;ll create our key and initialize the node store, using the variables we set in the <a href="#quick-start">quick start</a> section:</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;"># --volume == -v [local path]:[container path]</span></span>
<span class="line"><span style="color:#B392F0;">docker</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">run</span><span style="color:#E1E4E8;"> [args...] -v $HOME/my-node-store:/home/celestia \\</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">celestia</span><span style="color:#E1E4E8;"> $NODE_TYPE </span><span style="color:#9ECBFF;">init</span><span style="color:#E1E4E8;"> [args...]</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;"># --volume == -v [local path]:[container path]</span></span>
<span class="line"><span style="color:#6F42C1;">docker</span><span style="color:#24292E;"> </span><span style="color:#032F62;">run</span><span style="color:#24292E;"> [args...] -v $HOME/my-node-store:/home/celestia \\</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">celestia</span><span style="color:#24292E;"> $NODE_TYPE </span><span style="color:#032F62;">init</span><span style="color:#24292E;"> [args...]</span></span></code></pre></div><p>An example init command will look similar to below:</p>`,12),ss={class:"vp-code-group vp-adaptive-theme"},os=o('<div class="tabs"><input type="radio" name="group-se81b" id="tab-0zO2fM2" checked="checked"><label for="tab-0zO2fM2">Arabica</label><input type="radio" name="group-se81b" id="tab-urfltLu"><label for="tab-urfltLu">Mocha</label></div>',1),as={class:"blocks"},ns={class:"language-bash vp-adaptive-theme active"},es=s("button",{title:"Copy Code",class:"copy"},null,-1),ls=s("span",{class:"lang"},"bash",-1),ts={class:"shiki github-dark vp-code-dark"},ps=o('<span class="line"><span style="color:#B392F0;">docker</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">run</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-e</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">NODE_TYPE=</span><span style="color:#E1E4E8;">$NODE_TYPE </span><span style="color:#79B8FF;">-e</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">P2P_NETWORK=</span><span style="color:#E1E4E8;">$NETWORK </span><span style="color:#79B8FF;">\\</span></span>',1),cs=o('<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">-v</span><span style="color:#E1E4E8;"> $HOME</span><span style="color:#9ECBFF;">/my-node-store:/home/celestia</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">\\</span></span>',1),rs={class:"line"},is=s("span",{style:{color:"#E1E4E8"}},"    ",-1),_s={style:{color:"#9ECBFF"}},Es=s("span",{style:{color:"#E1E4E8"}}," ",-1),ds=s("span",{style:{color:"#79B8FF"}},"\\",-1),ys=o('<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#9ECBFF;">celestia</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">light</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">init</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--p2p.network</span><span style="color:#E1E4E8;"> $NETWORK</span></span>',1),hs={class:"shiki github-light vp-code-light"},Ts=o('<span class="line"><span style="color:#6F42C1;">docker</span><span style="color:#24292E;"> </span><span style="color:#032F62;">run</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-e</span><span style="color:#24292E;"> </span><span style="color:#032F62;">NODE_TYPE=</span><span style="color:#24292E;">$NODE_TYPE </span><span style="color:#005CC5;">-e</span><span style="color:#24292E;"> </span><span style="color:#032F62;">P2P_NETWORK=</span><span style="color:#24292E;">$NETWORK </span><span style="color:#005CC5;">\\</span></span>',1),us=o('<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">-v</span><span style="color:#24292E;"> $HOME</span><span style="color:#032F62;">/my-node-store:/home/celestia</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">\\</span></span>',1),Fs={class:"line"},Cs=s("span",{style:{color:"#24292E"}},"    ",-1),gs={style:{color:"#032F62"}},bs=s("span",{style:{color:"#24292E"}}," ",-1),vs=s("span",{style:{color:"#005CC5"}},"\\",-1),ks=o('<span class="line"><span style="color:#24292E;">    </span><span style="color:#032F62;">celestia</span><span style="color:#24292E;"> </span><span style="color:#032F62;">light</span><span style="color:#24292E;"> </span><span style="color:#032F62;">init</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--p2p.network</span><span style="color:#24292E;"> $NETWORK</span></span>',1),ms={class:"language-bash vp-adaptive-theme"},Ps=s("button",{title:"Copy Code",class:"copy"},null,-1),As=s("span",{class:"lang"},"bash",-1),Ns={class:"shiki github-dark vp-code-dark"},Ss=o('<span class="line"><span style="color:#B392F0;">docker</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">run</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-e</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">NODE_TYPE=</span><span style="color:#E1E4E8;">$NODE_TYPE </span><span style="color:#79B8FF;">-e</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">P2P_NETWORK=</span><span style="color:#E1E4E8;">$NETWORK </span><span style="color:#79B8FF;">\\</span></span>',1),Bs=o('<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">-v</span><span style="color:#E1E4E8;"> $HOME</span><span style="color:#9ECBFF;">/my-node-store:/home/celestia</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">\\</span></span>',1),Ds={class:"line"},Rs=s("span",{style:{color:"#E1E4E8"}},"    ",-1),Os={style:{color:"#9ECBFF"}},Vs=s("span",{style:{color:"#E1E4E8"}}," ",-1),Is=s("span",{style:{color:"#79B8FF"}},"\\",-1),fs=o('<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#9ECBFF;">celestia</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">light</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">init</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--p2p.network</span><span style="color:#E1E4E8;"> $NETWORK</span></span>',1),ws={class:"shiki github-light vp-code-light"},$s=o('<span class="line"><span style="color:#6F42C1;">docker</span><span style="color:#24292E;"> </span><span style="color:#032F62;">run</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-e</span><span style="color:#24292E;"> </span><span style="color:#032F62;">NODE_TYPE=</span><span style="color:#24292E;">$NODE_TYPE </span><span style="color:#005CC5;">-e</span><span style="color:#24292E;"> </span><span style="color:#032F62;">P2P_NETWORK=</span><span style="color:#24292E;">$NETWORK </span><span style="color:#005CC5;">\\</span></span>',1),Ws=o('<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">-v</span><span style="color:#24292E;"> $HOME</span><span style="color:#032F62;">/my-node-store:/home/celestia</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">\\</span></span>',1),Ks={class:"line"},Ys=s("span",{style:{color:"#24292E"}},"    ",-1),Ms={style:{color:"#032F62"}},xs=s("span",{style:{color:"#24292E"}}," ",-1),qs=s("span",{style:{color:"#005CC5"}},"\\",-1),Ls=o('<span class="line"><span style="color:#24292E;">    </span><span style="color:#032F62;">celestia</span><span style="color:#24292E;"> </span><span style="color:#032F62;">light</span><span style="color:#24292E;"> </span><span style="color:#032F62;">init</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--p2p.network</span><span style="color:#24292E;"> $NETWORK</span></span>',1),Hs=o(`<h3 id="start-the-node" tabindex="-1">Start the node <a class="header-anchor" href="#start-the-node" aria-label="Permalink to &quot;Start the node&quot;">​</a></h3><p>Run the following command to start the node:</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;"># --volume == -v [local path]:[container path]</span></span>
<span class="line"><span style="color:#B392F0;">docker</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">run</span><span style="color:#E1E4E8;"> [...args] -v $HOME/my-node-store:/home/celestia \\</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">celestia</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">&lt;</span><span style="color:#9ECBFF;">node-typ</span><span style="color:#E1E4E8;">e</span><span style="color:#F97583;">&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">start</span><span style="color:#E1E4E8;"> [...args]</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;"># --volume == -v [local path]:[container path]</span></span>
<span class="line"><span style="color:#6F42C1;">docker</span><span style="color:#24292E;"> </span><span style="color:#032F62;">run</span><span style="color:#24292E;"> [...args] -v $HOME/my-node-store:/home/celestia \\</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">celestia</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">&lt;</span><span style="color:#032F62;">node-typ</span><span style="color:#24292E;">e</span><span style="color:#D73A49;">&gt;</span><span style="color:#24292E;"> </span><span style="color:#032F62;">start</span><span style="color:#24292E;"> [...args]</span></span></code></pre></div><p>A full start command will look similar to below.</p>`,4),Us={class:"vp-code-group vp-adaptive-theme"},zs=o('<div class="tabs"><input type="radio" name="group-XyPNE" id="tab-ZvwHZwB" checked="checked"><label for="tab-ZvwHZwB">Arabica</label><input type="radio" name="group-XyPNE" id="tab-9k6Rum8"><label for="tab-9k6Rum8">Mocha</label></div>',1),Xs={class:"blocks"},Qs={class:"language-bash vp-adaptive-theme active"},Zs=s("button",{title:"Copy Code",class:"copy"},null,-1),Js=s("span",{class:"lang"},"bash",-1),Gs={class:"shiki github-dark vp-code-dark"},js=o('<span class="line"><span style="color:#B392F0;">docker</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">run</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-e</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">NODE_TYPE=</span><span style="color:#E1E4E8;">$NODE_TYPE </span><span style="color:#79B8FF;">-e</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">P2P_NETWORK=</span><span style="color:#E1E4E8;">$NETWORK </span><span style="color:#79B8FF;">\\</span></span>',1),so=o('<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">-v</span><span style="color:#E1E4E8;"> $HOME</span><span style="color:#9ECBFF;">/my-node-store:/home/celestia</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">\\</span></span>',1),oo={class:"line"},ao=s("span",{style:{color:"#E1E4E8"}},"    ",-1),no={style:{color:"#9ECBFF"}},eo=s("span",{style:{color:"#E1E4E8"}}," ",-1),lo=s("span",{style:{color:"#79B8FF"}},"\\",-1),to=o('<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#9ECBFF;">celestia</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">light</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">init</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--p2p.network</span><span style="color:#E1E4E8;"> $NETWORK</span></span>',1),po={class:"shiki github-light vp-code-light"},co=o('<span class="line"><span style="color:#6F42C1;">docker</span><span style="color:#24292E;"> </span><span style="color:#032F62;">run</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-e</span><span style="color:#24292E;"> </span><span style="color:#032F62;">NODE_TYPE=</span><span style="color:#24292E;">$NODE_TYPE </span><span style="color:#005CC5;">-e</span><span style="color:#24292E;"> </span><span style="color:#032F62;">P2P_NETWORK=</span><span style="color:#24292E;">$NETWORK </span><span style="color:#005CC5;">\\</span></span>',1),ro=o('<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">-v</span><span style="color:#24292E;"> $HOME</span><span style="color:#032F62;">/my-node-store:/home/celestia</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">\\</span></span>',1),io={class:"line"},_o=s("span",{style:{color:"#24292E"}},"    ",-1),Eo={style:{color:"#032F62"}},yo=s("span",{style:{color:"#24292E"}}," ",-1),ho=s("span",{style:{color:"#005CC5"}},"\\",-1),To=o('<span class="line"><span style="color:#24292E;">    </span><span style="color:#032F62;">celestia</span><span style="color:#24292E;"> </span><span style="color:#032F62;">light</span><span style="color:#24292E;"> </span><span style="color:#032F62;">init</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--p2p.network</span><span style="color:#24292E;"> $NETWORK</span></span>',1),uo={class:"language-bash vp-adaptive-theme"},Fo=s("button",{title:"Copy Code",class:"copy"},null,-1),Co=s("span",{class:"lang"},"bash",-1),go={class:"shiki github-dark vp-code-dark"},bo=o('<span class="line"><span style="color:#B392F0;">docker</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">run</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-e</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">NODE_TYPE=</span><span style="color:#E1E4E8;">$NODE_TYPE </span><span style="color:#79B8FF;">-e</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">P2P_NETWORK=</span><span style="color:#E1E4E8;">$NETWORK </span><span style="color:#79B8FF;">\\</span></span>',1),vo=o('<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">-v</span><span style="color:#E1E4E8;"> $HOME</span><span style="color:#9ECBFF;">/my-node-store:/home/celestia</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">\\</span></span>',1),ko={class:"line"},mo=s("span",{style:{color:"#E1E4E8"}},"    ",-1),Po={style:{color:"#9ECBFF"}},Ao=s("span",{style:{color:"#E1E4E8"}}," ",-1),No=s("span",{style:{color:"#79B8FF"}},"\\",-1),So=o('<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#9ECBFF;">celestia</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">light</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">init</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--p2p.network</span><span style="color:#E1E4E8;"> $NETWORK</span></span>',1),Bo={class:"shiki github-light vp-code-light"},Do=o('<span class="line"><span style="color:#6F42C1;">docker</span><span style="color:#24292E;"> </span><span style="color:#032F62;">run</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-e</span><span style="color:#24292E;"> </span><span style="color:#032F62;">NODE_TYPE=</span><span style="color:#24292E;">$NODE_TYPE </span><span style="color:#005CC5;">-e</span><span style="color:#24292E;"> </span><span style="color:#032F62;">P2P_NETWORK=</span><span style="color:#24292E;">$NETWORK </span><span style="color:#005CC5;">\\</span></span>',1),Ro=o('<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">-v</span><span style="color:#24292E;"> $HOME</span><span style="color:#032F62;">/my-node-store:/home/celestia</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">\\</span></span>',1),Oo={class:"line"},Vo=s("span",{style:{color:"#24292E"}},"    ",-1),Io={style:{color:"#032F62"}},fo=s("span",{style:{color:"#24292E"}}," ",-1),wo=s("span",{style:{color:"#005CC5"}},"\\",-1),$o=o('<span class="line"><span style="color:#24292E;">    </span><span style="color:#032F62;">celestia</span><span style="color:#24292E;"> </span><span style="color:#032F62;">light</span><span style="color:#24292E;"> </span><span style="color:#032F62;">init</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--p2p.network</span><span style="color:#24292E;"> $NETWORK</span></span>',1),Wo=s("p",null,"Congratulations! You now have a node running with persistent storage.",-1),Ko=s("h2",{id:"video-walkthrough",tabindex:"-1"},[a("Video walkthrough "),s("a",{class:"header-anchor",href:"#video-walkthrough","aria-label":'Permalink to "Video walkthrough"'},"​")],-1),Yo=s("div",{class:"youtube-wrapper"},[s("iframe",{class:"youtube-video",title:"Running a Celestia light node",src:"https://youtube.com/embed/WFubhQc8tGk",allowfullscreen:""})],-1),Mo=s("h3",{id:"_2-5-minute-version",tabindex:"-1"},[a("2.5 minute version "),s("a",{class:"header-anchor",href:"#_2-5-minute-version","aria-label":'Permalink to "2.5 minute version"'},"​")],-1),xo=s("div",{class:"youtube-wrapper"},[s("iframe",{class:"youtube-video",title:"Running a Celestia light node",src:"https://youtube.com/embed/ROZv871Q7RM",allowfullscreen:""})],-1),Zo=JSON.parse('{"title":"🐳 Docker setup","description":"Running Celestia Node using Docker.","frontmatter":{"sidebar_label":"Docker images","description":"Running Celestia Node using Docker.","head":[["meta",{"name":"og:title","content":"🐳 Docker setup | Celestia Docs"},{"name":"og:description","content":false}]]},"headers":[],"relativePath":"nodes/docker-images.md","filePath":"nodes/docker-images.md","lastUpdated":1697826708000}'),qo={name:"nodes/docker-images.md"},Jo=Object.assign(qo,{setup(Lo){return(Ho,Uo)=>(p(),c("div",null,[r,s("ol",null,[i,s("li",null,[_,s("div",E,[d,s("div",y,[s("div",h,[T,u,s("pre",F,[s("code",null,[C,a(`
`),s("span",g,[b,s("span",v,"ghcr.io/celestiaorg/celestia-node:"+n(e(l)["node-latest-tag"]),1),k,m]),a(`
`),P])]),s("pre",A,[s("code",null,[N,a(`
`),s("span",S,[B,s("span",D,"ghcr.io/celestiaorg/celestia-node:"+n(e(l)["node-latest-tag"]),1),R,O]),a(`
`),V])])]),s("div",I,[f,w,s("pre",$,[s("code",null,[W,a(`
`),s("span",K,[Y,s("span",M,"ghcr.io/celestiaorg/celestia-node:"+n(e(t)["node-latest-tag"]),1),x,q]),a(`
`),L])]),s("pre",H,[s("code",null,[U,a(`
`),s("span",z,[X,s("span",Q,"ghcr.io/celestiaorg/celestia-node:"+n(e(t)["node-latest-tag"]),1),Z,J]),a(`
`),G])])])])])])]),j,s("div",ss,[os,s("div",as,[s("div",ns,[es,ls,s("pre",ts,[s("code",null,[ps,a(`
`),cs,a(`
`),s("span",rs,[is,s("span",_s,"ghcr.io/celestiaorg/celestia-node:"+n(e(l)["node-latest-tag"]),1),Es,ds]),a(`
`),ys])]),s("pre",hs,[s("code",null,[Ts,a(`
`),us,a(`
`),s("span",Fs,[Cs,s("span",gs,"ghcr.io/celestiaorg/celestia-node:"+n(e(l)["node-latest-tag"]),1),bs,vs]),a(`
`),ks])])]),s("div",ms,[Ps,As,s("pre",Ns,[s("code",null,[Ss,a(`
`),Bs,a(`
`),s("span",Ds,[Rs,s("span",Os,"ghcr.io/celestiaorg/celestia-node:"+n(e(t)["node-latest-tag"]),1),Vs,Is]),a(`
`),fs])]),s("pre",ws,[s("code",null,[$s,a(`
`),Ws,a(`
`),s("span",Ks,[Ys,s("span",Ms,"ghcr.io/celestiaorg/celestia-node:"+n(e(t)["node-latest-tag"]),1),xs,qs]),a(`
`),Ls])])])])]),Hs,s("div",Us,[zs,s("div",Xs,[s("div",Qs,[Zs,Js,s("pre",Gs,[s("code",null,[js,a(`
`),so,a(`
`),s("span",oo,[ao,s("span",no,"ghcr.io/celestiaorg/celestia-node:"+n(e(l)["node-latest-tag"]),1),eo,lo]),a(`
`),to])]),s("pre",po,[s("code",null,[co,a(`
`),ro,a(`
`),s("span",io,[_o,s("span",Eo,"ghcr.io/celestiaorg/celestia-node:"+n(e(l)["node-latest-tag"]),1),yo,ho]),a(`
`),To])])]),s("div",uo,[Fo,Co,s("pre",go,[s("code",null,[bo,a(`
`),vo,a(`
`),s("span",ko,[mo,s("span",Po,"ghcr.io/celestiaorg/celestia-node:"+n(e(t)["node-latest-tag"]),1),Ao,No]),a(`
`),So])]),s("pre",Bo,[s("code",null,[Do,a(`
`),Ro,a(`
`),s("span",Oo,[Vo,s("span",Io,"ghcr.io/celestiaorg/celestia-node:"+n(e(t)["node-latest-tag"]),1),fo,wo]),a(`
`),$o])])])])]),Wo,Ko,Yo,Mo,xo]))}});export{Zo as __pageData,Jo as default};