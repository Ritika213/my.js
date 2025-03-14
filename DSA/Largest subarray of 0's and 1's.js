//Given an array arr of 0s and 1s. Find and return the length of the longest subarray with equal number of 0s and 1s.

Examples:

Input: arr = [1, 0, 1, 1, 1, 0, 0]
Output: 6
Explanation:// arr[1...6] is the longest subarray with three 0s and three 1s.
Input: arr = [0, 0, 1, 1, 0]
Output: 4
Explnation:// arr[0...3] or arr[1...4] is the longest subarray with two 0s and two 1s.
Input: arr = [0]
Output: 0
Explnation: //There is no subarray with an equal number of 0s and 1s.
Constraints:
1 <= arr.size() <= 105
0 <= arr[i] <= 1


class Solution {
    maxLen(arr) {
        
          let map = {};
  map[0] = -1;
  let len = 0;
  let sum = 0;
  
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) {
      sum -= 1;
    } else {
      sum += 1;
    }
    
    if (map.hasOwnProperty(sum)) {
      len = Math.max(len, i - map[sum]);
    } else {
      map[sum] = i;
    }
  }
  
  return len;
    }
}