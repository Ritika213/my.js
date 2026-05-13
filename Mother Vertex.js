//Given a directed graph with V vertices labeled from 0 to V-1 and a list of edges edges[][], where each edge is 
// represented as [u, v] indicating a directed edge from vertex u to vertex v, find a Mother Vertex of the graph.

//A Mother Vertex is a vertex from which all other vertices can be reached.

//If multiple such vertices exist, return the one with the smallest value.
//If no such vertex exists, return -1.
Examples:

Input: V = 5, edges = [[0, 2], [0, 3], [1, 0], [2, 1], [3, 4]]
Output: 0
Explanation:// Vertices 0, 1, and 2 can each reach all other vertices in the graph. Among them, 0 is the smallest, 
//so the output is 0.
  Input: V = 3, edges = [[0, 1], [2, 1]]
Output: -1
Explanation:// No vertex can reach all other vertices in the graph. Hence, there is no Mother Vertex, and the 
//output is -1.
 
Constraints
//1 ≤ V ≤ 105
//1 ≤ edges[i][0], edges[i][1] ≤ V-1



class Solution {
    findMotherVertex(V, edges) {
        let adj = Array.from({ length: V }, () => []);
        
        // Build graph
        for (let [u, v] of edges) {
            adj[u].push(v);
        }
        
        let visited = new Array(V).fill(false);
        let lastV = 0;
        
        const dfs = (node, vis) => {
            vis[node] = true;
            for (let nei of adj[node]) {
                if (!vis[nei]) dfs(nei, vis);
            }
        };
        
        // Step 1: Find candidate
        for (let i = 0; i < V; i++) {
            if (!visited[i]) {
                dfs(i, visited);
                lastV = i;
            }
        }
        
        // Step 2: Verify candidate
        let check = new Array(V).fill(false);
        dfs(lastV, check);
        
        if (check.every(v => v)) {
            return lastV;
        }
        
        return -1;
    }
}