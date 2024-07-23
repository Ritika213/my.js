//Given a number N, find the first N Fibonacci numbers. The first two number of the series are 1 and 1.

//Example 1:

Input:
N = 5
Output:// 1 1 2 3 5
//Example 2:

Input:
N = 7
Output:// 1 1 2 3 5 8 13
 Task:
//task is to complete printFibb() which takes single argument N and returns a list of first N Fibonacci numbers.
//Expected Time Complexity: O(N).
//Expected Auxiliary Space: O(N).
Note:// This space is used to store and return the answer for printing purpose.

Constraints:
1<= N <=84



class Solution
{
    //Function to return list containing first n fibonacci numbers.
    printFibb(N)
    {
        // code here
let ans = new Array();
        let a= BigInt(1), b= BigInt(1);
        if(N>=1)
            ans.push(BigInt(1));
        if(N>=2) 
            ans.push(BigInt(1));
        for(let i=2;i<N;++i){
            ans.push(a+b);
            let c=a+b;
            a=b;
            b=c;
        }
        return ans;

    
    }
}