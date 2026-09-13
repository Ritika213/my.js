//Geek Town has n houses numbered from 1 to n, choose a house to host a party such that its distance from its 
// farthest house is as small as possible. Return this minimum possible distance.
//The houses are connected by n − 1 bidirectional roads, forming a tree. 
//The connections are given as an adjacency list adj, where adj[i] contains all houses directly connected to house i + 1. 
Examples:

Input: adj = [[2], [1, 4, 3], [2], [2]] 

Output: 1
Explanation// Party should take place at house number 2. Maximum distance from house number 2 is 1.
Input: adj = [[2], [1, 3], [4, 2], [3]]

Output: 2
Explanation: //Party should take place at house number 2 or 3. The minimum distance is 2.
Constraints:

//1 ≤ n ≤ 105
//1 ≤ adj[i][j]
adj.size() = n

/*
 * @param {number[][]} adj
 * @return {number}
 */
class Solution {
    partyHouse(adj) {
        let n = adj.length;

        if (n === 1) return 0;

        const bfs = (start) => {
            let dist = new Array(n).fill(-1);
            let q = [start];
            let front = 0;

            dist[start] = 0;
            let far = start;

            while (front < q.length) {
                let u = q[front++];

                for (let v of adj[u]) {
                    let idx = v - 1;

                    if (dist[idx] === -1) {
                        dist[idx] = dist[u] + 1;
                        q.push(idx);

                        if (dist[idx] > dist[far]) {
                            far = idx;
                        }
                    }
                }
            }

            return [far, dist[far]];
        };

        let [u, temp] = bfs(0);
        let [v, diameter] = bfs(u);

        return Math.floor((diameter + 1) / 2);
    }
}