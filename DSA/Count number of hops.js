//A frog jumps either 1, 2, or 3 steps to go to the top. In how many ways can it reach the top of Nth step. As the answer will be large find
// the answer modulo 1000000007.

//Example 1:

Input:
N = 1
Output: 1

Input:
N = 4
Output: 7
Explanation//Below are the 7 ways to reach 4
//1 step + 1 step + 1 step + 1 step
//1 step + 2 step + 1 step
//2 step + 1 step + 1 step
//1 step + 1 step + 2 step
//2 step + 2 step
//3 step + 1 step
//1 step + 3 step

class Solution 
{
    //Function to count the number of ways in which frog can reach the top.
    countWays(n)
    {
        
        if(n == 1)  return 1;
        if(n == 2)  return 2;
        let f = 1, s = 1, t = 2, mod = 1e9 + 7;
        for(let i = 3 ; i <= n ; i++) {
            let cur = (f + s + t) % mod;
            f = s;
            s = t;
            t = cur;
        }
        return t;
    }
}