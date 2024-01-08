//Given a number N, find the first N Fibonacci numbers. The first two number of the series are 1 and 1.


Input:
N = 5
Output //1 1 2 3 5

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