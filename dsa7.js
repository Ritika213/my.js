//Create the multiplication table of a given number N and return the table as an array.


Input:
N = 9

Output
//9 18 27 36 45 54 63 72 81 90

class Solution {
    getTable(N) {
      //code here
      let arr=[];
      for(let i=1;i<=10;i++){
          arr.push(N*i)
      }
      return arr;
    }
  }

  //Given a positive integer n, find the nth fibonacci number. Since the answer can be very large, return the answer modulo 1000000007.

Input: 
n = 2
Output: 
1 
Explanation 
//1 is the 2nd number of fibonacci series.

class Solution {
    
    nthFibonacci(n)
    {
        //your code here
        
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