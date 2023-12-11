//Given an array of integers Arr of size N and a number K. Return the maximum sum of a subarray of size K.

//NOTE*: A subarray is a contiguous part of any given array.

Input:
N = 4, K = 2
Arr = [100, 200, 300, 400]
Output:
700
Explanation
//Arr3  + Arr4 =700,which is maximum.

class Solution {
    maximumSumSubarray(K, Arr, N) {
      //code here
      let sum=0;
      for(let i=0;i<K;i++){
          sum+=Arr[i]
      }
      let maxSum=sum;
      for(let i=K;i<N;i++){
          sum+=Arr[i];
          sum-=Arr[i-K]
          maxSum= Math.max(maxSum,sum)
      }
      return maxSum;
    }
  }

  
  //Element appearing more than 25% in sorted array

  //Given an integer array sorted in non-decreasing order, there is exactly one integer in the array that occurs more than 25% of the time, 
  //return that integer.

 //Example 1:

Input: arr = [1,2,2,6,6,6,6,7,10]
Output: 6
//Example 2:

Input: arr = [1,1]
Output: 1

var findSpecialInteger = function(arr) {
    let n = arr.length, t = Math.floor(n / 4);

    for (let i = 0; i < n - t; i++) {
        if (arr[i] === arr[i + t]) {
            return arr[i];
        }
    }
    return -1;
  
};


//First and last occurrences of x
//Given a sorted array arr containing n elements with possibly some duplicate, the task is to find the first and last occurrences of
// an element x in the given array.
Note: //If the number x is not found in the array then return both the indices as -1

Input:
n=9, x=5
arr= //{ 1, 3, 5, 5, 5, 5, 67, 123, 125 }
Output  
//2 5
Explanation 
//First occurrence of 5 is at index 2 and last occurrence of 5 is at index 5. 

class Solution {
    find(arr,n,x){
       //code here
      let low = 0, high = n - 1;
        let start = -1, end = -1;

        while (low <= high) {
            let mid = low + Math.floor((high - low) / 2);

            if (arr[mid] === x) {
                start = mid;
                end = mid;

                while (start >= 0 && arr[start] === x) {
                    start--;
                }

                while (end < n && arr[end] === x) {
                    end++;
                }
 return [start + 1, end - 1];
            } else if (arr[mid] > x) {
                high = mid - 1;
            } else {
                low = mid + 1;
            }
        }

        return [start, end];
    
    }
}
