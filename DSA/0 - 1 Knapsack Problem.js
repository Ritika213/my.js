//given weights and values of items, and put these items in a knapsack of capacity W to get the maximum total value in the knapsack.Note that
// we have only one quantity of each item.
//In other words, given two integer arrays val and wt which represent values and weights associated with items respectively. Also given an 
//integer W which represents knapsack capacity, find out the maximum sum values subset of val[] such that the sum of the weights of the 
//corresponding subset is smaller than or equal to W. You cannot break an item, either pick the complete item or don't pick it (0-1 property).

Examples :

Input:// W = 4, val[] = {1,2,3}, wt[] = {4,5,1}
Output: 3
Explanation:// Choose the last item that weighs 1 unit and holds a value of 3. 
Input:// W = 3, val[] = {1,2,3}, wt[] = {4,5,6}
Output: 0
Explanation //Every item has a weight exceeding the knapsack's capacity (3).

//Expected Time Complexity: O(N*W).
//Expected Auxiliary Space: O(N*W)

Constraints
//2 ≤ N ≤ 1000
//1 ≤ W ≤ 1000
//1 ≤ wt[i] ≤ 1000
//1 ≤ val[i] ≤ 1000

class Solution {
    // Function to return max value that can be put in knapsack of capacity W.
    knapSack(W, wt, val) {
        
        let n = val.length;
        let dp = Array.from({ length: n + 1 }, () => new Array(W + 1).fill(0));

        for (let i = 1; i <= n; i++) {
            for (let w = 1; w <= W; w++) {
                if (wt[i - 1] <= w) {
                    dp[i][w] = Math.max(dp[i - 1][w], val[i - 1] + dp[i - 1][w - wt[i - 1]]);
                } else {
                    dp[i][w] = dp[i - 1][w];
                }
            }
        }
        return dp[n][W];
    }
}