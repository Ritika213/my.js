//Given an array Arr of size N containing positive integers. Find the maximum sum of a any possible subsequence such that no two numbers in 
//the subsequence should be adjacent in Arr.

Input:
N = 6
Arr= //{5, 5, 10, 100, 10, 5}
Output// 110
Explanation //If you take indices 0, 3and 5, then Arr[0]+Arr[3]+Arr[5] =5+100+5 = 110.

class Solution {
    findMaxSum(arr,n){
      //code here
      let preMax = 0;
          let ans = 0;
          let current = 0;
          for (let i = 0; i < n; i++) {
              current = preMax + arr[i];
              preMax = ans;
              ans = Math.max(current, ans);
          }
          return ans;
    }
  }

  
  //Cyclically rotate an array by one

  //Given an array, rotate the array by one position in clock-wise direction.


Input:
N = 5
A = //{1, 2, 3, 4, 5}
Output
//5 1 2 3 4

class Solution{
    rotate(arr,n){
        //code here
    const lastElement = arr[n - 1];
        
        for (let i = n - 1; i > 0; i--) {
            arr[i] = arr[i - 1];
        }
        
        arr[0] = lastElement;
        return arr;
    

     
    }
}

//Wave Array
//Given a sorted array arr[] of distinct integers. Sort the array into a wave-like array(In Place).
//In other words, arrange the elements into a sequence such that arr[1] >= arr[2] <= arr[3] >= arr[4] <= arr[5].....

//If there are multiple solutions, find the lexicographically smallest one.

Note://The given array is sorted in ascending order, and you don't need to return anything to make changes in the original array itself.

Input:
n = 5
arr = //{1,2,3,4,5}
Output// 2 1 4 3 5
Explanation //Array elements after sorting it in wave form are 2 1 4 3 5.

class Solution {
    // arr: input array
    // n: size of array
    //Function to sort the array into a wave-like array.
    convertToWave(n, arr)
    {
        //your code here
        for(let i = 0; i < arr.length; i = i+2) {

            if(arr[i+1]) {

                const t= arr[i + 1];

                arr[i + 1] = arr[i];

                arr[i] = t;

            }

        }

return arr;
    
    }
}