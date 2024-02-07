//Given an array arr[] of n positive integers. Push all the zeros of the given array to the right end of the array while maintaining the order 
//of non-zero elements. Do the mentioned change in the array in-place.


Input:
N = 5
Arr = //{3, 5, 0, 0, 4}
Output// 3 5 4 0 0
Explanation //The non-zero elements preserve their order while the 0 elements are moved to the right.

class Solution {
    pushZerosToEnd(arr,n){
        //code here
         let nonZeroIndex = 0;

    // Traverse the array, if element is non-zero, move it to the nonZeroIndex position
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== 0) {
            [arr[nonZeroIndex], arr[i]] = [arr[i], arr[nonZeroIndex]];
            nonZeroIndex++;
        }
    }
return nonZeroIndex;
    }
}