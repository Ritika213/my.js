//Given two strings s and t, consisting of lowercase English letters. You are also given, a 2D array transform[][], where each entry
 //[x, y] means that you are allowed to transform character x into character y and an array cost[], where cost[i] is the cost of transforming
  //transform[i][0] into transform[i][1]. You can apply any transformation any number of times on either string.

//task is to find the minimum total cost required to make the strings identical. If it is impossible to make the two strings identical
// using the available transformations, return -1.

Examples:

Input: s = "abcc", t = "bccc", transform = [['a', 'b'], ['b', 'c'], ['c', 'a']], cost = [2, 1, 4]
Output: 3
Explanation// We can convert both strings into "bccc" with a cost of 3 using these operations:
//transform at Position 0 in s: a -> b (cost 2)
//transform at Position 1 in s: b -> c (cost 1)
//Other characters already match.

Input: s = "az", t = "dc", transform = [['a', 'b'], ['b', 'c'], ['c', 'd'], ['a', 'd'], ['z', 'c']], cos = [5, 3, 2, 50, 10]
Output: 20
Explanation:// We can convert both strings into "dc" with a cost of 20 using these operations:
//transform at Position 0 in s: a -> d by path a -> b -> c -> d (cost 5 + 3 + 2 = 10)
//transform at Position 1 in s: z -> c (cost 10)
Input: s = "xyz", t = "xzy", transform = [['x', 'y'], ['x', 'z']], cost = [3, 3]
Output: -1
Explanation:// It is not possible to make the two strings equal.
Constraints
//1 ≤ s.size() = t.size() ≤ 105
//1 ≤ transform.size() = cost.size() ≤ 500
//'a' ≤ transform[i][0], transform[i][1] ≤ 'z'
//1 ≤ cost[i] ≤ 500



/**
 * @param {string} s
 * @param {string} t
 * @param {char[][]} transform
 * @param {number[]} cost
 * @returns {number}
 */

class Solution {
    minCost(s, t, transform, cost) {
        // code here
        const INF = 1e12;
        const dist = Array.from({ length: 26 }, () => Array(26).fill(INF));
        for (let i = 0; i < 26; i++) dist[i][i] = 0;
        for (let i = 0; i < transform.length; i++) {
            const u = transform[i][0].charCodeAt(0) - 97;
            const v = transform[i][1].charCodeAt(0) - 97;
            dist[u][v] = Math.min(dist[u][v], cost[i]);
        }
        for (let k = 0; k < 26; k++) {
            for (let i = 0; i < 26; i++) {
                if (dist[i][k] === INF) continue;
                for (let j = 0; j < 26; j++) {
                    if (dist[k][j] === INF) continue;
                    const newCost = dist[i][k] + dist[k][j];
                    if (newCost < dist[i][j]) dist[i][j] = newCost;
                }
            }
        }
         let total = 0;
        for (let i = 0; i < s.length; i++) {
            let a = s.charCodeAt(i) - 97;
            let b = t.charCodeAt(i) - 97;
            if (a === b) continue;
            let best = INF;
            for (let c = 0; c < 26; c++) {
                if (dist[a][c] < INF && dist[b][c] < INF) {
                    best = Math.min(best, dist[a][c] + dist[b][c]);
                }
            }
            if (best === INF) return -1;
            total += best;
        }
        return total;
    }
}