//An IT company is working on a large project consisting of n modules.

//The given array time required (in months) to complete the ith module is stored in the array duration[].
//The array dependencies[][], where dependencies[i] = [u, v], indicates that module v can be started only
//  after module u is completed. 
//Multiple modules can be worked on simultaneously as long as all their dependencies have been completed.

//Find the minimum time required to complete the entire project.

//If the project cannot be completed due to a cyclic dependency, return -1.
//A module is never dependent on itself.
Examples

Input: duration = [10, 20, 30, 10, 30, 20], dependencies = [[5, 2], [5, 0], [4, 0], [4, 1], [2, 3], [3, 1]]
Output: 80
Explanation: 

//The Graph of dependency forms this and the project will be completed when Module 1 is completed. The minimum
//  taken time is 80 months, the maximum taken time is through the path 5 -> 2 -> 3 -> 1 which takes 20 + 30 + 10 + 20
Input: duration = [5, 5, 5], dependencies = [[0, 1], [1, 2], [2, 0]]
Output: -1
Explanation //There is a cycle in the dependency graph hence the project cannot be completed.

Constraints

//1 ≤ duration.size() ≤ 105
//0 ≤ duration[i] ≤ 105
//0 ≤ m ≤ 2*105
//0 ≤ dependencies[i][j] < 105


/**
 * @param {number[]} duration
 * @param {number[][]} dependencies
 * @returns {number}
 */

class Solution {
    minTime(duration, dependencies) {
        let n = duration.length;

        let adj = Array.from({ length: n }, () => []);
        let indeg = Array(n).fill(0);

        for (let d of dependencies) {
            adj[d[0]].push(d[1]);
            indeg[d[1]]++;
        }

        let finish = Array(n).fill(0);

        for (let i = 0; i < n; i++) {
            finish[i] = duration[i];
        }

        let q = [];

        for (let i = 0; i < n; i++) {
            if (indeg[i] === 0) {
                q.push(i);
            }
        }

        let front = 0;
        let cnt = 0;

        while (front < q.length) {
            let u = q[front++];
            cnt++;

            for (let v of adj[u]) {
                finish[v] = Math.max(
                    finish[v],
                    finish[u] + duration[v]
                );

                if (--indeg[v] === 0) {
                    q.push(v);
                }
            }
        }

        // Cycle exists
        if (cnt < n) return -1;

        let ans = 0;

        for (let t of finish) {
            ans = Math.max(ans, t);
        }

        return ans;
    }
}