//Given an array A of n positive numbers. The task is to find the first equilibrium point in an array. 
//Equilibrium point in an array is a position such that the sum of elements before it is equal to the sum of elements after it.

Note: //Return equilibrium point in 1-based indexing. Return -1 if no such point exists. 

Input: 
n = 5 
A = [1,3,5,2,2] 
Output: 
3 
Explanation  //equilibrium point is at position 3 as sum of elements before it (1+3) = sum of elements after it (2+2). 

class Solution {
    // Function to find equilibrium point in the array.
    equilibriumPoint(a, n)
    {
        //your code here
        let sum=0,leftsum=0;

        for(let i=0;i<n;i++){

            sum+=a[i];

        }

        for(let i=0;i<n;i++){

            sum-=a[i];

            if(sum===leftsum){

                return i+1;

            }

            leftsum+=a[i];

        }

        return -1;
    

    }
}


//Given an array of even size N, task is to find minimum value that can be added to an element so that array become balanced. 
//An array is balanced if the sum of the left half of the array elements is equal to the sum of right half.

Input:
N = 4
arr = [1, 5, 3, 2]
Output: 1
Explanation: 
//Sum of first 2 elements is 1 + 5  = 6, 
//Sum of last 2 elements is 3 + 2  = 5,
//To make the array balanced you can add 1.

class Solution {
    
    minValueToBalance(arr,n){
        //code here
         let sum1=0,sum2=0;
       let mid=n/2,ans;
       for(let i=0;i<mid;i++)
           sum1=sum1+arr[i];
       for(let i=mid;i<n;i++)
           sum2+=arr[i];
        if(sum1!=sum2)
           {
             ans=Math.abs(sum1-sum2) ;
              return ans;
           }
        else
         return 0;
    }
}