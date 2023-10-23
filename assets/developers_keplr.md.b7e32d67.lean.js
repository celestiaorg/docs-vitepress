import{c as p}from"./chunks/constants.ad373f0f.js";import{_ as y,o as d,c as _,k as s,t as l,C as u,H as E,a as n,Q as o}from"./chunks/framework.2b941d6c.js";const F={props:["params"],methods:{async add(){if(!window.keplr)alert("Please install keplr extension");else{if(window.keplr.experimentalSuggestChain)try{await window.keplr.experimentalSuggestChain({chainId:this.params.chainId,chainName:this.params.chainName,rpc:this.params.rpc,rest:this.params.rest,bip44:{coinType:118},bech32Config:{bech32PrefixAccAddr:"celestia",bech32PrefixAccPub:"celestiapub",bech32PrefixValAddr:"celestiavaloper",bech32PrefixValPub:"celestiavaloperpub",bech32PrefixConsAddr:"celestiavalcons",bech32PrefixConsPub:"celestiavalconspub"},currencies:[{coinDenom:"TIA",coinMinimalDenom:"utia",coinDecimals:6,coinGeckoId:"celestia"}],feeCurrencies:[{coinDenom:"TIA",coinMinimalDenom:"utia",coinDecimals:6,coinGeckoId:"celestia",gasPriceStep:{low:.1,average:.2,high:.4}}],stakeCurrency:{coinDenom:"TIA",coinMinimalDenom:"utia",coinDecimals:6,coinGeckoId:"celestia"}})}catch{alert("Failed to suggest the chain")}const t=this.params.chainId;await window.keplr.enable(t)}}}},A={class:"center"};function m(t,c,i,h,a,r){return d(),_("div",A,[s("button",{class:"keplrButton",onClick:c[0]||(c[0]=(...e)=>r.add&&r.add(...e))},l(`Add/switch to ${i.params.chainName}`),1)])}const C=y(F,[["render",m],["__scopeId","data-v-0cb9ca4a"]]),w={components:{AddNetworkKeplr:C},data(){return{constants:p,ARABICA_PARAMS:{chainId:`${p.arabicaChainId}`,chainName:"Arabica devnet",rpc:`${p.arabicaRpcUrl}`,rest:`${p.arabicaRestUrl}`},MOCHA_PARAMS:{chainId:`${p.mochaChainId}`,chainName:"Mocha testnet",rpc:`${p.mochaRpcUrl}`,rest:`${p.mochaRestUrl}`}}}},Ms=JSON.parse('{"title":"Keplr integration with Celestia","description":"How you can add Celestia network parameters to Keplr.","frontmatter":{"description":"How you can add Celestia network parameters to Keplr.","next":{"text":"Integrating Leap for developers","link":"developers/leap"},"head":[["meta",{"name":"og:title","content":"Keplr integration with Celestia | Celestia Docs"},{"name":"og:description","content":false}]]},"headers":[],"relativePath":"developers/keplr.md","filePath":"developers/keplr.md","lastUpdated":1698080759000}'),q=o("",12),b=s("p",null,[n("Behind the scenes, here are the parameters we are passing to the "),s("code",null,"AddNetworkKeplr"),n(" function:")],-1),k={class:"vp-code-group vp-adaptive-theme"},g=o("",1),D={class:"blocks"},f={class:"language-js vp-adaptive-theme active"},T=s("button",{title:"Copy Code",class:"copy"},null,-1),B=s("span",{class:"lang"},"js",-1),I={class:"shiki github-dark vp-code-dark"},P=s("span",{class:"line"},[s("span",{style:{color:"#F97583"}},"import"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#9ECBFF"}},"'@site/src/components/AddNetworkKeplr'")],-1),v=s("span",{class:"line"},null,-1),S=o("",1),N={class:"line"},x={style:{color:"#9ECBFF"}},R=s("span",{class:"line"},[s("span",{style:{color:"#9ECBFF"}},"  chainName: 'Mocha testnet',")],-1),K={class:"line"},M={style:{color:"#9ECBFF"}},V={class:"line"},U={style:{color:"#9ECBFF"}},G=s("span",{class:"line"},[s("span",{style:{color:"#9ECBFF"}},"}`"),s("span",{style:{color:"#E1E4E8"}},"}")],-1),H=s("span",{class:"line"},null,-1),O=o("",1),j={class:"shiki github-light vp-code-light"},L=s("span",{class:"line"},[s("span",{style:{color:"#D73A49"}},"import"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#032F62"}},"'@site/src/components/AddNetworkKeplr'")],-1),J=s("span",{class:"line"},null,-1),Y=o("",1),Z={class:"line"},Q={style:{color:"#032F62"}},W=s("span",{class:"line"},[s("span",{style:{color:"#032F62"}},"  chainName: 'Mocha testnet',")],-1),$={class:"line"},z={style:{color:"#032F62"}},X={class:"line"},ss={style:{color:"#032F62"}},ns=s("span",{class:"line"},[s("span",{style:{color:"#032F62"}},"}`"),s("span",{style:{color:"#24292E"}},"}")],-1),as=s("span",{class:"line"},null,-1),ls=o("",1),os={class:"language-js vp-adaptive-theme"},ps=s("button",{title:"Copy Code",class:"copy"},null,-1),es=s("span",{class:"lang"},"js",-1),ts={class:"shiki github-dark vp-code-dark"},cs=s("span",{class:"line"},[s("span",{style:{color:"#F97583"}},"import"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#9ECBFF"}},"'@site/src/components/AddNetworkKeplr'")],-1),rs=s("span",{class:"line"},null,-1),is=o("",1),Es={class:"line"},ys={style:{color:"#9ECBFF"}},ds=s("span",{class:"line"},[s("span",{style:{color:"#9ECBFF"}},"  chainName: 'Arabica devnet',")],-1),_s={class:"line"},hs={style:{color:"#9ECBFF"}},us={class:"line"},Fs={style:{color:"#9ECBFF"}},As=s("span",{class:"line"},[s("span",{style:{color:"#9ECBFF"}},"}`"),s("span",{style:{color:"#E1E4E8"}},"}")],-1),ms=s("span",{class:"line"},null,-1),Cs=o("",1),ws={class:"shiki github-light vp-code-light"},qs=s("span",{class:"line"},[s("span",{style:{color:"#D73A49"}},"import"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#032F62"}},"'@site/src/components/AddNetworkKeplr'")],-1),bs=s("span",{class:"line"},null,-1),ks=o("",1),gs={class:"line"},Ds={style:{color:"#032F62"}},fs=s("span",{class:"line"},[s("span",{style:{color:"#032F62"}},"  chainName: 'Arabica devnet',")],-1),Ts={class:"line"},Bs={style:{color:"#032F62"}},Is={class:"line"},Ps={style:{color:"#032F62"}},vs=s("span",{class:"line"},[s("span",{style:{color:"#032F62"}},"}`"),s("span",{style:{color:"#24292E"}},"}")],-1),Ss=s("span",{class:"line"},null,-1),Ns=o("",1);function xs(t,c,i,h,a,r){const e=u("AddNetworkKeplr");return d(),_("div",null,[q,E(e,{params:a.ARABICA_PARAMS},null,8,["params"]),E(e,{params:a.MOCHA_PARAMS},null,8,["params"]),b,s("div",k,[g,s("div",D,[s("div",f,[T,B,s("pre",I,[s("code",null,[P,n(`
`),v,n(`
`),S,n(`
`),s("span",N,[s("span",x,"  chainId: '"+l(a.constants.mochaChainId)+"',",1)]),n(`
`),R,n(`
`),s("span",K,[s("span",M,"  rpc: '"+l(a.constants.mochaRpcUrl)+"',",1)]),n(`
`),s("span",V,[s("span",U,"  rest: '"+l(a.constants.mochaRestUrl)+"'",1)]),n(`
`),G,n(`
`),H,n(`
`),O])]),s("pre",j,[s("code",null,[L,n(`
`),J,n(`
`),Y,n(`
`),s("span",Z,[s("span",Q,"  chainId: '"+l(a.constants.mochaChainId)+"',",1)]),n(`
`),W,n(`
`),s("span",$,[s("span",z,"  rpc: '"+l(a.constants.mochaRpcUrl)+"',",1)]),n(`
`),s("span",X,[s("span",ss,"  rest: '"+l(a.constants.mochaRestUrl)+"'",1)]),n(`
`),ns,n(`
`),as,n(`
`),ls])])]),s("div",os,[ps,es,s("pre",ts,[s("code",null,[cs,n(`
`),rs,n(`
`),is,n(`
`),s("span",Es,[s("span",ys,"  chainId: '"+l(a.constants.arabicaChainId)+"',",1)]),n(`
`),ds,n(`
`),s("span",_s,[s("span",hs,"  rpc: '"+l(a.constants.arabicaRpcUrl)+"',",1)]),n(`
`),s("span",us,[s("span",Fs,"  rest: '"+l(a.constants.arabicaRestUrl)+"'",1)]),n(`
`),As,n(`
`),ms,n(`
`),Cs])]),s("pre",ws,[s("code",null,[qs,n(`
`),bs,n(`
`),ks,n(`
`),s("span",gs,[s("span",Ds,"  chainId: '"+l(a.constants.arabicaChainId)+"',",1)]),n(`
`),fs,n(`
`),s("span",Ts,[s("span",Bs,"  rpc: '"+l(a.constants.arabicaRpcUrl)+"',",1)]),n(`
`),s("span",Is,[s("span",Ps,"  rest: '"+l(a.constants.arabicaRestUrl)+"'",1)]),n(`
`),vs,n(`
`),Ss,n(`
`),Ns])])])])])])}const Vs=y(w,[["render",xs]]);export{Ms as __pageData,Vs as default};
