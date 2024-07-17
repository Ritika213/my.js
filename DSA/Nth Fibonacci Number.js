//Given a positive integer n, find the nth fibonacci number. Since the answer can be very large, return the answer modulo 1000000007.

Note: //for the reference of this question take first fibonacci number to be 1.

Examples :

Input: n = 2
Output: 1 
Explanation:// 1 is the 2nd number of fibonacci series.
Input: n = 5
Output: 5
Explanation: //5 is the 5th number of fibonacci series.
//Expected Time Complexity: O(n)
//Expected Auxiliary Space: O(n)

Constraints:
1<= n <=105

class Solution {
    
    nthFibonacci(n)
    {
        
        
     if (n <= 1) {
        return n;
    }

    const mod = 1000000007;
    const fib = new Array(n + 1).fill(0);
    fib[1] = 1;

    for (let i = 2; i <= n; i++) {
        fib[i] = (fib[i - 1] + fib[i - 2]) % mod;
    }

    return fib[n];
    }
}