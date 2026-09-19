//Given two strings s1 and s2, and two integers costS1 and costS2, where costS1 is the cost of deleting one character
//  from s1 and costS2 is the cost of deleting one character from s2, find the minimum cost required to make the 
// two strings identical.

//You can delete any number of characters from either string, but the order of the remaining characters must be preserved.

Examples:

Input: s1 = "abcd", s2 = "acdb", costS1 = 10, costS2 = 20
Output: 30
Explanation:// Delete 'b' from both strings to obtain "acd". The total cost is 10 + 20 = 30.
Input: s1 = "ef", s2 = "gh", costS1 = 10, costS2 = 20
Output: 60
Explanation:// The two strings have no common characters, so delete all characters from both strings. The total
// cost is (2 × 10) + (2 × 20) = 60.
Constraints

//1 ≤ s1.size(), s2.size() ≤ 1000
//1 ≤ costS1, costS2 ≤ 105




// User function Template for javascript

/**
 * @param {string} X
 * @param {string} Y
 * @param {number} costX
 * @param {number} costY
 * @returns {number}
 */

class Solution {
  lcs(text1, text2) {
    let n = text1.length;
    let m = text2.length;
    let prev = new Array(m + 1).fill(0); 
    let cur = new Array(m + 1).fill(0);

    for (let idx1 = 1; idx1 < n + 1; idx1++) {
      for (let idx2 = 1; idx2 < m + 1; idx2++) {
        if (text1[idx1 - 1] === text2[idx2 - 1])
          cur[idx2] = 1 + prev[idx2 - 1];
        else
          cur[idx2] = Math.max(cur[idx2 - 1], prev[idx2]);
      }
      prev = cur.slice(); // Copy values to prev
    }

    return cur[m];
  }

  findMinCost(x, y, costX, costY) {
    let common = this.lcs(x, y);
    return (x.length - common) * costX + (y.length - common) * costY;
  }
}
