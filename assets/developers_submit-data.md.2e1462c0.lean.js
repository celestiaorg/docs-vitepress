import{_ as n,o as e,c as o,Q as a,k as s}from"./chunks/framework.25fa9d36.js";const f=JSON.parse('{"title":"Submitting data blobs to Celestia","description":"","frontmatter":{"head":[["meta",{"name":"og:title","content":"Submitting data blobs to Celestia | Celestia Docs"},{"name":"og:description","content":false}]]},"headers":[],"relativePath":"developers/submit-data.md","filePath":"developers/submit-data.md","lastUpdated":1697826708000}'),l={name:"developers/submit-data.md"},p=a("",17),t=s("p",{Gas:"",Price:""},"\\(\\text{Total Fee} = \\text{Gas Limit} \\times \\text\\)",-1),c=s("p",null,"The gas limit for a transaction is the maximum amount of gas that a user is willing to spend on a transaction. It is determined by both a static fixed cost and a variable dynamic cost based on the size of each blob involved in the transaction:",-1),r=s("p",{Gas:"",Cost:"",Per:"",Blob:"",Byte:""},"\\(\\text{Gas Limit} = \\text{Fixed Cost} + \\sum_{i=1}^{n} \\text{SparseSharesNeeded(Blob}_i) \\times \\text{Share Size} \\times \\text\\)",-1),i=a("",27),y=[p,t,c,r,i];function E(d,u,h,b,m,g){return e(),o("div",null,y)}const C=n(l,[["render",E]]);export{f as __pageData,C as default};
