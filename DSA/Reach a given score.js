//Consider a game where a player can score 3 or 5 or 10 points in a move. Given a total score n, find number of distinct combinations to reach the 
//given score

Input
n = 10
Output
2
Explanation //There are two ways {5,5} and {10}.

class Solution{
    count(n){
        
        let dp = new Array(n + 1).fill(0);
        dp[0] = 1;

        for (let score of [3, 5, 10]) {
            for (let i = score; i <= n; i++) {
                dp[i] += dp[i - score];
            }
        }

        return dp[n];
    }
}
