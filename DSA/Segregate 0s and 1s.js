//Given an array arr consisting of only 0's and 1's in random order. Modify the array in-place to segregate 0s onto the left side and 1s onto
// the right side of the array.

Examples :

Input: arr = [0, 0, 1, 1, 0]
Output: [0, 0, 0, 1, 1]
Explanation: // After segregation, all the 0's are on the left and 1's are on the right. Modified array will be [0, 0, 0, 1, 1].
Input: arr = [1, 1, 1, 1]
Output: [1, 1, 1, 1]
Explanation: //There are no 0s in the given array, so the modified array is [1, 1, 1, 1]
//Expected Time Complexity: O(n)
//Expected Auxiliary Space: O(1)

Constraints
//1 ≤ arr.size() ≤ 106
//0 ≤ arr[i] ≤ 1

class Solution {

    segregate0and1(arr) {

        // code here
      let i = 0;
    let j = arr.length - 1;

    while (i < j) {
        // Increment i until we find a 1
        while (arr[i] === 0 && i < j) {
            i++;
        }
        // Decrement j until we find a 0
        while (arr[j] === 1 && i < j) {
            j--;
        }
        // If i is still less than j, swap arr[i] and arr[j]
        if (i < j) {
            [arr[i], arr[j]] = [arr[j], arr[i]];
            i++;
            j--;
        }
    }
}
}