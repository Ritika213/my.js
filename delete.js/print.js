//Given an array Arr of size N, print all its elements.

Input:
N = 5
Arr= [1, 2, 3, 4, 5]
Output //1 2 3 4 5

class Solution {
    printArray(arr, n) {
        // code here
     console.log(arr.join(" "));


    }
}



//Given a array of length N, at each step it is reduced by 1 element. In the first step the maximum element would be removed,
// while in the second step minimum element of the remaining array would be removed, in the third step again the maximum and so on. 
//Continue this till the array contains only 1 element. And find the final element remaining in the array.

Input:
N = 7
A = [7, 8, 3, 4, 2, 9, 5]
Ouput:
5

class Solution {
    leftElement(arr, n) {
      //code here
      arr.sort((a, b) => a - b); // Sort the array in ascending order
      let mid = Math.floor((arr.length - 1) / 2);
      return arr[mid];
    }
  }