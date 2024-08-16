//Given an integer n denoting the Length of a line segment. You need to cut the line segment in such a way that the cut length of a line segment 
//each time is either x , y or z. Here x, y, and z are integers.
//After performing all the cut operations, your total number of cut segments must be maximum.

Note:// if no segment can be cut then return 0.

Examples:

Input: n = 4, x = 2, y = 1, z = 1
Output: 4
Explanation //Total length is 4, and the cut lengths are 2, 1 and 1.  We can make maximum 4 segments each of length 1.

Input: n = 5, x = 5, y = 3, z = 2
Output: 2
Explanation:// Here total length is 5, and the cut lengths are 5, 3 and 2. We can make two segments of lengths 3 and 2.
//Expected Time Complexity : O(n)
//Expected Auxiliary Space: O(n)

Constraints
1 <= n, x, y, z <= 104

class Solution
{
    //Function to find the maximum number of cuts.
     solve( n,x,y,z,dp){
     if (n < 0) {
            return Number.NEGATIVE_INFINITY;
        }
        if (n === 0) {
            return 0;
        }
        if (dp[n] !== -1) {
            return dp[n];
        }

        let t1 = this.solve(n - x, x, y, z, dp);
        let t2 = this.solve(n - y, x, y, z, dp);
        let t3 = this.solve(n - z, x, y, z, dp);

        dp[n] = 1 + Math.max(t1, t2, t3);
        return dp[n];
    
    }
    maximizeTheCuts(n, x, y, z)
    {
        
           let dp = new Array(n + 1).fill(-1);
        let ans = this.solve(n, x, y, z, dp);
        return Math.max(ans, 0);
    }
}