import{m as s}from"./mocha_versions.d091215e.js";import{c as a}from"./constants.e90b75b1.js";import{_ as n,o as l,c,k as t,a as o,t as r}from"./framework.afb081b4.js";const i={name:"MochaVersionTags",data(){return{mochaVersions:s,constants:a}}},h=["href"],p=["href"],m=["href"],g=["href"];function _(f,u,k,V,e,b){return l(),c("ul",null,[t("li",null,[o(" Celestia chain ID - "),t("a",{href:`https://github.com/celestiaorg/networks/tree/master/${e.constants.mochaChainId}`,target:"_blank",rel:"noopener noreferrer"},r(e.constants.mochaChainId),9,h)]),t("li",null,[o(" celestia-node - "),t("a",{href:`https://github.com/celestiaorg/celestia-node/releases/tag/${e.mochaVersions["node-latest-tag"]}`,target:"_blank",rel:"noopener noreferrer"},r(e.mochaVersions["node-latest-tag"]),9,p)]),t("li",null,[o(" celestia-app - "),t("a",{href:`https://github.com/celestiaorg/celestia-app/releases/tag/${e.mochaVersions["app-latest-tag"]}`,target:"_blank",rel:"noopener noreferrer"},r(e.mochaVersions["app-latest-tag"]),9,m)]),t("li",null,[o(" Rollkit - "),t("a",{href:`https://github.com/rollkit/rollkit/releases/tag/${e.constants.mochaRollkitVersion}`,target:"_blank",rel:"noopener noreferrer"},r(e.constants.mochaRollkitVersion),9,g)])])}const C=n(i,[["render",_]]);export{C as M};
