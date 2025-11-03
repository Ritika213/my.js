//Given a directed graph with V vertices numbered from 0 to V-1 and E directed edges, represented as a 2D array edges[][], 
//where each element edges[i] = [u, v] represents a directed edge from vertex u to vertex v. Return all Safe Nodes of the graph.
//A vertex with no outgoing edges is called a terminal node. A vertex is considered safe if every path starting from it eventually
 //reaches a terminal node.

Examples: 

Input: V = 5, E = 6, edges = [[1, 0], [1, 2], [1, 3], [1, 4], [2, 3], [3, 4]]

Output: [0, 1, 2, 3, 4]
Explanation// 4 and 0 is the terminal node, and all the paths from 1, 2, 3 lead to terminal node, i.e., 4.


Input: V = 4, E = 3, edges = [[1, 2], [2, 3], [3, 2]]

Output: [0]
Explanation:// 0 is the terminal node, and no other node than 0 leads to 0.
Constraints
//1 ≤ V ≤ 105
//0 ≤ E ≤ 105
//0 ≤ edges[i][0], edges[i][1] < V



/**
 * @param {number} V
 * @param {number[][]} edges
 * @returns {number[]}
 */

class Solution {
    safeNodes(V, edges) {
        // Step 1: Initialize arrays
        let outDeg = new Array(V).fill(0);
        let adj = Array.from({ length: V }, () => []);

        // Step 2: Reverse the graph and count out-degrees
        for (let [u, v] of edges) {
            adj[v].push(u);   // Reverse edge direction
            outDeg[u]++;      // Count outgoing edges
        }

        // Step 3: Push all nodes with 0 out-degree into queue
        let q = [];
        for (let i = 0; i < V; i++) {
            if (outDeg[i] === 0) q.push(i);
        }

        // Step 4: BFS to find safe nodes
        let ans = [];
        while (q.length > 0) {
            let node = q.shift();
            ans.push(node);

            for (let nbr of adj[node]) {
                outDeg[nbr]--;
                if (outDeg[nbr] === 0) q.push(nbr);
            }
        }

        // Step 5: Sort for output consistency
        ans.sort((a, b) => a - b);
        return ans;
    }
}



