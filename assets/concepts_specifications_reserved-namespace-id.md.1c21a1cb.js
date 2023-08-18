import{_ as e,o as t,c as d,X as F}from"./chunks/framework.05326dcf.js";const h=JSON.parse('{"title":"Reserved Namespaces","description":"Reserved Namespaces on the Celestia Network.","frontmatter":{"description":"Reserved Namespaces on the Celestia Network."},"headers":[],"relativePath":"concepts/specifications/reserved-namespace-id.md","filePath":"concepts/specifications/reserved-namespace-id.md","lastUpdated":1692223386000}'),a={name:"concepts/specifications/reserved-namespace-id.md"},c=F('<h1 id="reserved-namespaces" tabindex="-1">Reserved Namespaces <a class="header-anchor" href="#reserved-namespaces" aria-label="Permalink to &quot;Reserved Namespaces&quot;">​</a></h1><p>This is a table of reserved namespaces on the Celestia Network.</p><p>You can learn more <a href="https://celestiaorg.github.io/celestia-app/specs/namespace.html#reserved-namespaces" target="_blank" rel="noreferrer">here</a> in the celestia-app specs.</p><table><thead><tr><th>name</th><th>type</th><th>category</th><th>value</th><th>description</th></tr></thead><tbody><tr><td><code>TRANSACTION_NAMESPACE</code></td><td><code>Namespace</code></td><td>Primary</td><td><code>0x0000000000000000000000000000000000000000000000000000000001</code></td><td>Namespace for ordinary Cosmos SDK transactions.</td></tr><tr><td><code>INTERMEDIATE_STATE_ROOT_NAMESPACE</code></td><td><code>Namespace</code></td><td>Primary</td><td><code>0x0000000000000000000000000000000000000000000000000000000002</code></td><td>Namespace for intermediate state roots (not currently utilized).</td></tr><tr><td><code>PAY_FOR_BLOB_NAMESPACE</code></td><td><code>Namespace</code></td><td>Primary</td><td><code>0x0000000000000000000000000000000000000000000000000000000004</code></td><td>Namespace for transactions that contain a PayForBlob.</td></tr><tr><td><code>PRIMARY_RESERVED_PADDING_NAMESPACE</code></td><td><code>Namespace</code></td><td>Primary</td><td><code>0x00000000000000000000000000000000000000000000000000000000FF</code></td><td>Namespace for padding after all primary reserved namespaces.</td></tr><tr><td><code>MAX_PRIMARY_RESERVED_NAMESPACE</code></td><td><code>Namespace</code></td><td>Primary</td><td><code>0x00000000000000000000000000000000000000000000000000000000FF</code></td><td>Namespace for the highest primary reserved namespace.</td></tr><tr><td><code>MIN_SECONDARY_RESERVED_NAMESPACE</code></td><td><code>Namespace</code></td><td>Secondary</td><td><code>0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF00</code></td><td>Namespace for the lowest secondary reserved namespace.</td></tr><tr><td><code>TAIL_PADDING_NAMESPACE</code></td><td><code>Namespace</code></td><td>Secondary</td><td><code>0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFE</code></td><td>Namespace for padding after all blobs to fill up the original data square.</td></tr><tr><td><code>PARITY_SHARE_NAMESPACE</code></td><td><code>Namespace</code></td><td>Secondary</td><td><code>0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF</code></td><td>Namespace for parity shares.</td></tr></tbody></table>',4),r=[c];function o(s,p,i,n,m,_){return t(),d("div",null,r)}const l=e(a,[["render",o]]);export{h as __pageData,l as default};
