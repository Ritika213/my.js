//Given an array A of size N. The value of an array is denoted by the bit-wise XOR of all elements it contains. 
//Find the bit-wise XOR of the values of all subarrays of A.


Input: 
N = 3 
A = [1,2,3] 
Output: 
2
Explanation:
xor[1] = 1
xor[1, 2] = 3
xor[2, 3] = 1
xor[1, 2, 3] = 0
xor[2] = 2
xor[3] = 3
Result : 1 ^ 3 ^ 1 ^ 0 ^ 2 ^ 3 - 2

class Solution {
    gameOfXor(arr, n) {
          let c=0;
        if(n&1){
            for(let i=0; i<n; i+=2){
                c=c^arr[i];
            }
        }
        return c;
    }
}

//maximum product difference between two pairs

//The product difference between two pairs (a, b) and (c, d) is defined as (a * b) - (c * d).

//For example, the product difference between (5, 6) and (2, 7) is (5 * 6) - (2 * 7) = 16.
//Given an integer array nums, choose four distinct indices w, x, y, and z such that the product difference between pairs (nums[w], nums[x]) 
//and (nums[y], nums[z]) is maximized.

//Return the maximum such product difference.


Input: nums = [5,6,2,7,4]
Output: 34
Explanation //We can choose indices 1 and 3 for the first pair (6, 7) and indices 2 and 4 for the second pair (2, 4).
//The product difference is (6 * 7) - (2 * 4) = 34.

function maxProductDifference(nums) {
    nums.sort((a, b) => a - b);

    const n = nums.length;
    const product1 = nums[n - 1] * nums[n - 2];
    const product2 = nums[0] * nums[1];

    return product1 - product2;
}


//Triplet Sum in Array
//Given an array arr of size n and an integer X. Find if there's a triplet in the array which sums up to the given integer X.

Input:
n = 6, X = 13
arr = //[1 4 45 6 10 8]
Output
1
Explanation//The triplet {1, 4, 8} in the array sums up to 13.

class Solution {
    //Function to find if there exists a triplet in the 
    //array A[] which sums up to X.
    find3Numbers(A, n, X)
    {
        //your code here
       A.sort((a, b) => a - b);
       for(let i=0;i<n-2;i++){
           let l = i+1, r = n-1;
           while(l<r){
               if(A[i]+A[l]+A[r]==X) return true;
               else if(A[l]+A[r]<X-A[i]) l++;
               else if(A[l]+A[r]>X-A[i]) r--;
           }
       }
       return false;
    


    }
}