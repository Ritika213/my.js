//Given an undirected graph with V vertices numbered from 0 to V - 1, represented by an adjacency list adj[][],
//  where adj[i] contains all vertices adjacent to vertex i. Also given two vertices u and v, check whether a path 
// exists between them.

//Return true if a path exists, otherwise return false.

Examples:


Input: adj = [[2, 3], [2], [0, 1], [0], [5], [4]], u = 1, v = 5
420046859
Output: false
Explanation //There is no path from vertex 1 to vertex 5.


Input: adj = [[2, 3], [2], [0, 1], [0], [5], [4]], u = 2, v = 3
420046859
Output: true
Explanation// We can reach vertex 3 from vertex 2 via vertex 0.



Constraints:

//2 ≤ adj.size() ≤ 105
//0 ≤ adj[i][j], u, v < adj.size()
u != v


/**
 * @param {number[][]} adj
 * @param {number} u
 * @param {number} v
 * @returns {boolean}
 */

class Solution {
    checkPath(adj, u, v) {
        
        let n = adj.length;
        let vis = new Array(n).fill(false);
        let q = [];

        q.push(u);
        vis[u] = true;

        while (q.length > 0) {
            let curr = q.shift();

            if (curr === v) return true;

            for (let nei of adj[curr]) {
                if (!vis[nei]) {
                    vis[nei] = true;
                    q.push(nei);
                }
            }
        }

        return false;
    }
}

