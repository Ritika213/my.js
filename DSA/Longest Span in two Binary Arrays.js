//Given two binary arrays, a1[] and a2[]. Find the length of longest common span (i, j) where j>= i such that a1[i] + a1[i+1] 
//+ .... + a1[j] =  a2[i] + a2[i+1] + ... + a2[j].

Examples:

Input: a1 = [0, 1, 0, 0, 0, 0], a2 = [1, 0, 1, 0, 0, 1]
Output: 4
Explanation:// The longest span with same sum is from index 1 to 4 following zero based indexing.
Input: a1 = [0, 1, 0, 1, 1, 1, 1], a2 = [1, 1, 1, 1, 1, 0, 1]
Output: 6
Explanation:// The longest span with same sum is from index 1 to 6 following zero based indexing.
Constraints:
//1 <= a1.size() = a2.size() <= 106
0 <= a1[i], a2[i] <= 1

class Solution {
    longestCommonSum(a1, a2) {
        
        let n = a1.length;
        let sum1 = 0, sum2 = 0;
        
        let mp= new Map();
        let ans = 0;
        
        for(let i = 0; i < n; i++){
            sum1 += a1[i];
            sum2 += a2[i];
            
            if (sum1 === sum2) {
                ans = Math.max(ans, i + 1);
            } else {
                let diff = sum1 - sum2;
                if (mp.has(diff)) {
                    ans = Math.max(ans, i - mp.get(diff));
                } else {
                    mp.set(diff, i);
                }
            }
        }
        
        return ans;
    }
}