//given an undirected weighted graph with V vertices numbered from 0 to V-1 and E edges, represented as a 2D array edges[][], 
// where edges[i] = [ui, vi, timei] means that there is an undirected edge between nodes ui and vi that takes timei minutes to reach.
//task is to return in how many ways you can travel from node 0 to node V - 1 in the shortest amount of time.

Examples:

Input: V = 4, edges = [[0, 1, 2], [1, 2, 3], [0, 3, 5], [1, 3, 3], [2, 3, 4]]
    
Output: 2
Explanation// The shortest path from 0 to 3 is 5.
//Two ways to reach 3 in 5 minutes are:
//0 -> 3
//0 -> 1 -> 3

Input: V = 6, edges = [[0, 2, 3], [0, 4, 2], [0, 5, 7], [2, 3, 1], [2, 5, 5], [5, 3, 3], [5, 1, 4], [1, 4, 1], [4, 5, 5]]
    
Output: 4
Explanation //The shortest path from 0 to 5 is 7.
//Four ways to reach 5 in 7 minutes are:
//0 -> 5
//0 -> 4 -> 5
//0 -> 4 -> 1 -> 5
//0 -> 2 -> 3 -> 5

Constraints:
//1 ≤ V ≤ 200
//V - 1 ≤ edges.size() ≤ V * (V - 1) / 2
//0 ≤ ui, vi ≤ V - 1
//1 ≤ timei ≤ 105
ui != vi


/**
 * @param {number} V
 * @param {number[][]} edges
 * @returns {number}
 */

class PriorityQueue {
    constructor() {
        this.data = [];
    }

    enqueue(element) {
        this.data.push(element);
        this.data.sort((a, b) => a[1] - b[1]); 
    }

    dequeue() {
        return this.data.shift();
    }

    isEmpty() {
        return this.data.length === 0;
    }
}

class Solution {
    countPaths(V, edges) {
        const graph = Array.from({ length: V }, () => []);

        for (let [u, v, w] of edges) {
            graph[u].push([v, w]);
            graph[v].push([u, w]);
        }

        const dist = Array(V).fill(Infinity);
        const ways = Array(V).fill(0);

        const pq = new PriorityQueue(); // custom PQ

        dist[0] = 0;
        ways[0] = 1;
        pq.enqueue([0, 0]);  // [node, distance]

        while (!pq.isEmpty()) {
            const [node, d] = pq.dequeue();

            if (d > dist[node]) continue;

            for (let [next, time] of graph[node]) {
                let newDist = d + time;

                if (newDist < dist[next]) {
                    dist[next] = newDist;
                    ways[next] = ways[node];
                    pq.enqueue([next, newDist]);
                } 
                else if (newDist === dist[next]) {
                    ways[next] += ways[node];
                }
            }
        }

        return ways[V - 1];
    }
}
