//Given three numbers n, x, and y, Geek and his friend are playing a coin game. In the beginning, there are n coins. In each move, a player can 
//pick x, y, or 1 coin. Geek always starts the game. The player who picks the last coin wins the game. The task is to determine whether Geek 
//will win the game or not if both players play optimally.

//Example 1:

Input: 
n = 5
x = 3
y = 4
Output: 
1
Explanation
//There are 5 coins, every player can pick 1 or 3 or 4 coins on his/her turn. Geek can win by picking 3 coins in first chance. Now 2 coins
// will be left so his friend will pick one coin and now Geek can win by picking the last coin.

//Example 2:
Input:
n = 2
x = 3
y = 4
Output:
0
Explanation: 
//Geek picks 1 coin and then his friend picks 1 coin.
Task 
//You don't need to read input or print anything. Complete the function findWinner() which takes n, x, and y as input parameters and returns 
//1 if Geek can win otherwise 0.

//Expected Time Complexity: O(n)
//Expected Auxiliary Space: O(n)

Constraints
//1 ≤ n, x, y ≤ 105

class Solution {
    /**
    * @param number n
    * @param number x
    * @param number y

    * @returns number
    */
    findWinner(n, x, y) {
    
         // Create a dp array of size n+1 and initialize all values to false
        let dp = new Array(n + 1).fill(false);
        
        // Base cases
        dp[0] = false; // If n is 0, the first player loses
        dp[1] = true;  // If n is 1, the first player wins

        // Fill the dp array
        for (let i = 2; i <= n; i++) {
            if (i - 1 >= 0 && dp[i - 1] === false) dp[i] = true;
            else if (i - x >= 0 && dp[i - x] === false) dp[i] = true;
            else if (i - y >= 0 && dp[i - y] === false) dp[i] = true;
            else dp[i] = false;
        }
        
        // Return the result for dp[n]
        return dp[n] ? 1 : 0;
    
    }
}