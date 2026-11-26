//Given a string s and a 2D array queries[][], where each query consists of two integers l and r, find the
//  number of vowels in the substring s[l....r] for each query. The substring includes both indices l and r.

//Return an array containing the answers to all queries in the order they are given.

Examples:

Input: s = "geeksforgeeks", queries = [[1, 3], [2, 4], [1, 9]]
Output: [2, 1, 4]
Explanation:
//Query 1: "eek" has 2 vowels (e, e).
//Query 2: "eks" has 1 vowel (e).
//Query 3: "eeksforge" has 4 vowels (e, e, o, e).
Input: s = "helloworld", queries = [[0, 4], [5, 9], [0, 9]]
Output: [2, 1, 3]
Explanation
//Query 1: "hello" has 2 vowels (e, o).
//Query 2: "world" has 1 vowel (o).
//Query 3: "helloworld" has 3 vowels (e, o, o).


Constraints:

//1 ≤ s.size(), queries.size() ≤ 105
//s consists only of lowercase English alphabets
queries[i].size() = 2
//0 ≤ queries[i][0] ≤ queries[i][1] < s.size()



/**
 * @param {string} s
 * @param {number[][]} queries
 * @returns {number[]}
 */


class Solution {
    countVowels(s, queries) {
        let n = s.length;
        let cntVowels = 0;

        let vowelsCnt = new Array(n).fill(0);
        let st = new Set(['a', 'e', 'i', 'o', 'u']);

        for (let i = 0; i < n; i++) {
            let ch = s[i];

            if (st.has(ch)) {
                cntVowels++;
            }

            vowelsCnt[i] = cntVowels;
        }

        let result = [];

        for (let query of queries) {
            let l = query[0] - 1;
            let r = query[1];

            let rVowels = vowelsCnt[r];
            let lVowels = 0;

            if (l >= 0) {
                lVowels = vowelsCnt[l];
            }

            result.push(rVowels - lVowels);
        }

        return result;
    }
}
