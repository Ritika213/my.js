//Given a graph with n vertices (0 to n-1) and m edges. You can remove one edge from anywhere and add that edge between
//  any two vertices in one operation.

//Find the minimum number of operations required to connect the graph. If it is not possible to connect the graph, return -1.

Examples: 

Input: n = 4, edges = [[0, 1], [0, 2], [1, 2]]
Output: 1
Explanation: //Remove edge between vertices 1 and 2 and add between vertices 1 and 3.

Input: n = 6, edges = [[0,1], [0,2], [0,3], [1,2], [1,3]]
Output: 2
Explanation:// Remove edge between (1,2) and (0,3), and add edge between (1,4) and (3,5)

Constraints

//1 ≤ n ≤ 105
//1 ≤ m ≤ 105
//2 ≤ m (cols) ≤ 2
//edges[i][j] < n
//edges.rows ≤ m
//There are no multi-edges in the graph.


class Solution {
    minEdgesReq(n, edges) {
        
         let m = edges.length;
        
        // Not enough edges to connect the graph
        if (m < n - 1) {
            return -1;
        }
        
        let parent = new Array(n);
        for (let i = 0; i < n; i++) {
            parent[i] = i;
        }
        
        let components = n;
        
        for (let edge of edges) {
            let u = edge[0];
            let v = edge[1];
            
            let rootU = this.find(parent, u);
            let rootV = this.find(parent, v);
            
            if (rootU != rootV) {
                parent[rootU] = rootV;
                components--;
            }
        }
         // Operations needed = components - 1
        return components - 1;
    }
    
     find( parent, i) {
        if (parent[i] != i) {
            parent[i] = this.find(parent, parent[i]); // Path compression
        }
        return parent[i];
    }
}

