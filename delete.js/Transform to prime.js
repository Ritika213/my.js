//Given an array of n integers. Find the minimum positive number to be inserted in array, so that sum of all elements of array becomes prime.


Input:
N=5
arr = //{2, 4, 6, 8, 12}
Output  
5
Explanation 
//The sum of the array is 32 ,we can add 5 to this to make it 37 which is a prime number.

class Solution
{
    public
     minNumber( arr, N)
    {
         let sum = 0;
        for (let i=0;i<N;i++)
            sum += arr[i];
        let temp = true;
        for (let i=2;i*i<=sum;i++){
            if (sum%i == 0){
                temp = false;
                break;
            }
        }
        if (temp)
            return 0;
        let p = 1;
        while(true){
            let q = sum + p;
            temp = true;
            for (let i=2;i*i<=q;i++){
                if (q%i == 0){
                    temp = false;
                    break;
                }
            }
            if (temp)
                return p;
            p++;
        } 
    }
};


//Nth Fibonacci Number
//Given a positive integer n, find the nth fibonacci number. Since the answer can be very large, return the answer modulo 1000000007.


Input: 
n = 2
Output: 
1 
Explanation //1 is the 2nd number of fibonacci series.

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

//Rotate Array

//Given an unsorted array arr[] of size N. Rotate the array to the left (counter-clockwise direction) by D steps, where D is a positive integer. 

Input:
N = 5, D = 2
arr = //{1,2,3,4,5}
Output //3 4 5 1 2
Explanation //1 2 3 4 5  when rotated by 2 elements, it becomes 3 4 5 1 2.

class Solution {
    //Function to rotate an array by d elements in counter-clockwise direction. 
    rotateArr(arr, d, n){
        // code here
     d=d%n;

        let i,final=[n];

        let j=0;

        

        for(i=d;i<n;i++)

        {

            final[j]=arr[i];

            j++;

        }

        

        for(i=0;i<d;i++)

        {

            final[j]=arr[i];

            j++;

        }

        

        for(i=0;i<n;i++)

        arr[i]=final[i];

    }

};

 

    

