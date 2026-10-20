//Given an array arr[], you are allowed to swap two adjacent elements, arr[i] and arr[i + 1] only if their sum is even.
//  Find the lexicographically largest array that can be obtained by performing this operation any number of times,
//  including zero times. 

Note: //An array X is lexicographically larger than another array Y if, at the first position where they differ, 
//X has the larger element.

Examples:

Input: arr = [1, 3, 5]
Output: [5, 3, 1]
Explanation:// We can swap any adjacent pair as all have even sum. All possible obtainable arrays are [1, 3, 5], 
//[1, 5, 3], [3, 1, 5], [3, 5, 1], [5, 1, 3] and [5, 3, 1] The array [5, 3, 1] is lexicographically largest.
Input: arr = [1, 3, 4, 2]
Output: [3, 1, 4, 2]
Explanation// [1, 3, 4, 2], [1, 3, 2, 4], [3, 1, 2, 4] and [3, 1, 4, 2] are all possible, among which the
// last one is lexicographically largest one.

Constraints

//1 ≤ arr.size() ≤ 105
//0 ≤ arr[i] ≤ 105
//Array may contain duplicate elements.


/**
 * @param {number[]} arr
 * @return {number[]}
 */
 
 class Solution {
     lexicographicallyLargest(arr) {
         let i = 0;

         while (i < arr.length) {
             let j = i;

             while (
                 j + 1 < arr.length &&
                 (arr[j] + arr[j + 1]) % 2 === 0
             ) {
                 j++;
             }

             arr.splice(
                 i,
                 j - i + 1,
                 ...arr.slice(i, j + 1).sort((a, b) => b - a)
             );

             i = j + 1;
         }

         return arr;
     }
 }
