//There is an array arr of heights of stone and Geek is standing at the first stone and can jump to one of the following: Stone i+1, 
//i+2, ... i+k stone, where k is the maximum number of steps that can be jumped and cost will be |hi-hj| is incurred, where j is the stone 
//to land on. Find the minimum possible total cost incurred before the Geek reaches the last stone.

Example:

Input: k = 3, arr= [10, 30, 40, 50, 20]
Output: 30
Explanation:// Geek will follow the path 1->2->5, the total cost would be | 10-30| + |30-20| = 30, which is minimum
Input: k = 1, arr= [10, 20, 10]
Output: 20
Explanation// Geek will follow the path 1->2->3, the total cost would be |10 - 20| + |20 - 10| = 20.
//Expected Time Complexity: O(n*k)
//Expected Auxilary Space: O(n)

Constraint:
1<= arr.size() <=104
1 <= k <= 100
1 <= arr[i] <= 104

class Solution {
    // Function to minimize the cost of reducing the heights.
    minimizeCost(k, arr) {
        
        let n = arr.length;
        
        // Create dp array with initial large values.
        let dp = new Array(n).fill(1e5);
        
        // Base case: Starting point has zero cost.
        dp[0] = 0;
        
        // Loop through the array.
        for (let i = 1; i < n; i++) {
            // Consider the last 'k' jumps to minimize the cost.
            for (let j = i - 1; j >= Math.max(0, i - k); j--) {
                dp[i] = Math.min(dp[i], dp[j] + Math.abs(arr[j] - arr[i]));
            }
        }
        
        // The minimum cost to reach the last element.
        return dp[n - 1];
    }
}