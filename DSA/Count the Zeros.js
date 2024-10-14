//Given an array arr of only 0's and 1's. The array is sorted in such a manner that all the 1's are placed first and then 
//they are followed by all the 0's. Find the count of all the 0's.

Examples:

Input: arr = [1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0]
Output: 3
Explanation: //There are 3 0's in the given array.
Input: arr = [0, 0, 0, 0, 0]
Output: 5
Explanation:// There are 5 0's in the array.
//Expected Time Complexity: O(logn)
//Expected Space Complexity: O(1)

Constraints:
1 <= arr.size <= 105
0 <= arr[i] <= 1

class Solution {
    countZeroes(arr, n) {
        // write your code here
      let zeros = 0;
        while (n>0) {
            if (arr[--n] === 1) break;
            zeros++;
        }
        return zeros;
  

    }

    }