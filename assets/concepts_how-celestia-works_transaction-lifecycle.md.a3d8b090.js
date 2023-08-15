import{_ as e,o as t,c as a,X as o}from"./chunks/framework.de55ab8c.js";const b=JSON.parse('{"title":"The lifecycle of a Celestia App transaction","description":"Learn what is the lifecycle of a Celestia App transaction.","frontmatter":{"description":"Learn what is the lifecycle of a Celestia App transaction."},"headers":[],"relativePath":"concepts/how-celestia-works/transaction-lifecycle.md","filePath":"concepts/how-celestia-works/transaction-lifecycle.md","lastUpdated":1692138970000}'),i={name:"concepts/how-celestia-works/transaction-lifecycle.md"},s=o('<h1 id="the-lifecycle-of-a-celestia-app-transaction" tabindex="-1">The lifecycle of a Celestia App transaction <a class="header-anchor" href="#the-lifecycle-of-a-celestia-app-transaction" aria-label="Permalink to &quot;The lifecycle of a Celestia App transaction&quot;">​</a></h1><p>Users request the <code>celestia-app</code> to make data available by sending <code>PayForBlob</code> transactions. Every such transaction consists of the identity of the sender, the data to be made available, also referred to as the message, the data size, the namespace ID, and a signature. Every block producer batches multiple <code>PayForBlob</code> transactions into a block.</p><p>Before proposing the block though, the producer passes it to the state machine via ABCI++, where each <code>PayForBlob</code> transaction is split into a namespaced message (denoted by <code>Msg</code> in the figure below), i.e., the data together with the namespace ID, and an executable transaction (denoted by <code>e-Tx</code> in the figure below) that does not contain the data, but only a commitment that can be used at a later time to prove that the data was indeed made available.</p><p>Thus, the block data consists of data partitioned into namespaces and executable transactions. Note that only these transactions are executed by the Celestia state machine once the block is committed.</p><p>Next, the block producer adds to the block header a commitment of the block data. As described <a href="./../data-availability-layer">here</a>, the commitment is the Merkle root of the 4k intermediate Merkle roots (i.e., one for each row and column of the extended matrix). To compute this commitment, the block producer performs the following operations:</p><ul><li>It splits the executable transactions and the namespaced data into shares. Every share consists of some bytes prefixed by a namespace ID. To this end, the executable transactions are associated with a reserved namespace.</li><li>It arranges these shares into a square matrix (row-wise). Note that the shares are padded to the next power of two. The outcome square of size k × k is referred to as the original data.</li><li>It extends the original data to a 2k × 2k square matrix using the 2-dimensional Reed-Solomon encoding scheme described above. The extended shares (i.e., containing erasure data) are associated with another reserved namespace.</li><li>It computes a commitment for every row and column of the extended matrix using the NMTs described above.</li></ul><p>Thus, the commitment of the block data is the root of a Merkle tree with the leaves the roots of a forest of Namespaced Merkle subtrees, one for every row and column of the extended matrix.</p><h2 id="checking-data-availability" tabindex="-1">Checking data availability <a class="header-anchor" href="#checking-data-availability" aria-label="Permalink to &quot;Checking data availability&quot;">​</a></h2><p>To enhance connectivity, the celestia-node augments the <code>celestia-app</code> with a separate libp2p network, i.e., the so-called <em>DA network</em>, that serves DAS requests.</p><p>Light nodes connect to a celestia-node in the DA network, listen to extended block headers (i.e., the block headers together with the relevant DA metadata, such as the 4k intermediate Merkle roots), and perform DAS on the received headers (i.e., ask for random data chunks).</p><p>Note that although it is recommended, performing DAS is optional -- light nodes could just trust that the data corresponding to the commitments in the block headers was indeed made available by the Celestia DA layer. In addition, light nodes can also submit transactions to the <code>celestia-app</code>, i.e., <code>PayForBlob</code> transactions.</p><p>While performing DAS for a block header, every light node queries Celestia Nodes for a number of random data chunks from the extended matrix and the corresponding Merkle proofs. If all the queries are successful, then the light node accepts the block header as valid (from a DA perspective).</p><p>If at least one of the queries fails (i.e., either the data chunk is not received or the Merkle proof is invalid), then the light node rejects the block header and tries again later. The retrial is necessary to deal with false negatives, i.e., block headers being rejected although the block data is available. This may happen due to network congestion for example.</p><p>Alternatively, light nodes may accept a block header although the data is not available, i.e., a <em>false positive</em>. This is possible since the soundness property (i.e., if an honest light node accepts a block as available, then at least one honest full node will eventually have the entire block data) is probabilistically guaranteed (for more details, take a look at the <a href="https://arxiv.org/abs/1809.09044" target="_blank" rel="noreferrer">original paper</a>).</p><p>By fine tuning Celestia&#39;s parameters (e.g., the number of data chunks sampled by each light node) the likelihood of false positives can be sufficiently reduced such that block producers have no incentive to withhold the block data.</p>',15),n=[s];function r(c,l,h,d,p,m){return t(),a("div",null,n)}const u=e(i,[["render",r]]);export{b as __pageData,u as default};
