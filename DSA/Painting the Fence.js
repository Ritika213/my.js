//Given a fence with n posts and k colors, find out the number of ways of painting the fence so that not more than two consecutive posts 
//have the same colors. Since the answer can be large return it modulo 109 + 7.

//Example 1:

Input:
n = 3
k = 2 
Output: 6
Explanation 
//Let the 2 colours be 'R' and 'B'.
//We have following possible combinations:
//1. RRB
//2. RBR
//3. RBB
//4. BRR
//5. BRB
//6. BBR
//Example 2:

Input:
n = 2
k = 4 
Output: 16
Explanation: 
//After coloring first post with 4 possible combinations, you can still color next posts with all 4 colors. Total possible combinations 
//will be 4x4=16
 Task:
//Since, this is a function problem. You don't need to take any input or print anything, as it is already accomplished by the driver code. 
//You just need to complete the function countWays() that takes n and k as parameters and returns the number of ways in which the fence can
// be painted (modulo 109 + 7).

//Expected Time Complexity: O(N).
//Expected Auxiliary Space: O(N).

Constraints

//1 ≤ N ≤ 105
//1 ≤ K ≤ 105


class Solution{
    countWays(n, k){
        
        if (n == 1) return k;
        if (n == 2) return k + k * (k - 1) % 1000000007;

        let mod = 1000000007;
        let same = k;
        let diff= (k%mod * (k - 1) % mod)%mod;
        let total = (same %mod+ diff%mod) % mod;

        for (let i = 3; i <= n; i++) {
            same = diff % mod;
            diff = (total % mod * (k - 1) % mod) % mod;
            total = (same%mod + diff%mod) % mod;
        }

        return total ;
    }
}

