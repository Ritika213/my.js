//Given an array of integers and a positive integer k, determine the number of (i,j) pairs where i<j and ar[i] +ar[j]  is divisible by k.

Example

ar=[1,2,3,4,5,6]

//Three pairs meet the criteria: [1,4],[2,3] and [4,6].

//Sample Input

//STDIN           Function
//-----           --------
//6 3             n = 6, k = 3
//1 3 2 6 1 2     ar = [1, 3, 2, 6, 1, 2]
//Sample Output

 5

 function divisibleSumPairs(n, k, ar) {
    // Write your code here
let count = 0;
    for(let i=0;i<n;i++){
        for(let j=i+1;j<n;j++){
            if ((ar[i]+ar[j])%k==0){
                count+=1;
            }
        }
    }
    return count;
}


//shuffle intergers

//Given an array arr of n elements in the following format {a1, a2, a3, a4, ... , an/2, b1, b2, b3, b4, ... , bn/2}, the task is shuffle the
 //array to {a1, b1, a2, b2, a3, b3, ... , an/2, bn/2} without using extra space.Note that n is even.


Input: 
n = 4, arr =// {1, 2, 9, 15}
Output  
//1 9 2 15
Explanation: 
a1=1, a2=2, b1=9, b2=15.// So the final array will be: a1, b1, a2, b2 = {1,9,2,15}.

class Solution {
    shuffleArray(arr, n) {
        //code here
         let res=[];
        let i=0, mid=n/2;
        while(i<n/2 && mid<n)
        {
            res.push(arr[i]);
            res.push(arr[mid]);
            i++,mid++;
        }
        for(let i=0; i<n; i++)
            arr[i]=res[i];
    }
}

//Kadane's Algorithm

//Given an array Arr[] of N integers. Find the contiguous sub-array(containing at least one number) which has the maximum sum and return its sum.

//Example 1:

Input:
N = 5
Arr = //{1,2,3,-2,5}
Output
9
Explanation
//Max subarray sum is 9 of elements (1, 2, 3, -2, 5) which is a contiguous subarray.

class Solution {
    //Function to find the sum of contiguous subarray with maximum sum.
    maxSubarraySum(arr, N){
        // code here
       let maxh=0, maxf=arr[0];
        for(let i=0;i<N;i++) 
            {
                //Updating max sum till current index.
                maxh+=arr[i];
                //Storing max sum so far by choosing maximum between max 
                //sum so far and max till current index.
                if(maxf<maxh)
                maxf=maxh; 
                
                //If max sum at current index is negative, we do not need to add
                //it to result so we update it to zero.
                if(maxh<0)
                    maxh=0;
    
            }
            //returning the result.
            return maxf; 
    } 
}




