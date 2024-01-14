//Stickler the thief wants to loot money from a society having n houses in a single line. He is a weird person and follows a certain rule when 
//looting the houses. According to the rule, he will never loot two consecutive houses. At the same time, he wants to maximize the amount he loots.
// The thief knows which house has what amount of money but is unable to come up with an optimal looting strategy. He asks for your help to find the
// maximum money he can get if he strictly follows the rule. ith house has a[i] amount of money present in it.


Input:
n = 5
a = //{6,5,5,7,4}
Output 
15
Explanation //Maximum amount he can get by looting 1st, 3rd and 5th house. Which is 6+5+4=15.

class Solution
{
    //Function to find the maximum money the thief can get.
    findMaxSum(arr, n)
    { 
        // code here
    const dp = new Array(n + 1).fill(0);
    for (let i = 0; i < n; i++) {
        dp[i + 1] = Math.max(arr[i] + (i >= 1 ? dp[i - 1] : 0), dp[i]);
    }
    return dp[n];

        
    }
}