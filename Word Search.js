//given a matrix mat[][] of size n*m containing english alphabets and a string word. Check if the word exists on the mat[][] or not.
// The word can be constructed by using letters from adjacent cells, either horizontally or vertically. The same cell cannot be used
 // more than once.

Examples :

Input: mat = [['T', 'E', 'E'], ['S', 'G', 'K'], ['T', 'E', 'L']], word = "GEEK"
Output: true
Explanation// Word "GEEK" can be found in the given grid as follows.

Input: mat = [['T', 'E', 'U'], ['S', 'G', 'K'], ['T', 'E', 'L']], word = "GEEK"
Output: false
Explanation: //Word "GEEK" cannot be found in the given grid.

Input: mat = [['A', 'B', 'A'], ['B', 'A', 'B']], word = "AB"
Output: true
Explanation// There are multiple ways to construct the word "AB".

Constraints
//1 ≤ n, m ≤ 6
//1 ≤ word.size() ≤ 15
//mat and word consists of only lowercase and uppercase English letters.




// User function Template for javascript

/**
 * @param {string[]} mat
 * @param {string} word
 * @returns {boolean}
 */

class Solution {
    isWordExist(mat, word) {
        
        let n = mat.length;
        let m = mat[0].length;
        for(let i=0;i<n;i++){
            for(let j=0;j<m;j++){
               if (this.dfs(i, j, 0, word, mat, Array.from({ length: n }, () => Array(m).fill(false)))) {
                    return true 
            }
        }
    }
    return false;
}
 dfs(i, j, s, word, mat, vis) {
        if (s === word.length) {
            return true;
        }
        
        const n = mat.length;
        const m = mat[0].length;

        if (i < 0 || j < 0 || i >= n || j >= m || vis[i][j] || mat[i][j] !== word[s]) {
            return false;
        }
        
        vis[i][j] = true;
        
        const dir = [0, 1, 0, -1, 0];
        for (let d = 0; d < 4; d++) {
            const nI = dir[d] + i;
            const nJ = dir[d + 1] + j;
            if (this.dfs(nI, nJ, s + 1, word, mat, vis)) {
                return true;
            }
        }
        
        vis[i][j] = false; // backtrack
        return false;
    }
}

