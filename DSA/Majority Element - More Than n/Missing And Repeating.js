//Given an unsorted array arr[] of size n, containing elements from the range 1 to n, it is known that one number in this
//  range is missing, and another number occurs twice in the array, find both the duplicate number and the missing number.

Examples:

Input: arr = [2, 2]
Output: [2, 1]
Explanation:// Repeating number is 2 and the missing number is 1.
Input: arr = [1, 3, 3] 
Output: [3, 2]
Explanation:// Repeating number is 3 and the missing number is 2.
Input: arr = [4, 3, 6, 2, 1, 1]
Output: [1, 5]
Explanation: //Repeating number is 1 and the missing number is 5.
Constraints
//2 ≤ n ≤ 106
//1 ≤ arr[i] ≤ n

/**
 * @param {number[]} arr
 * @returns {number[]}
 */

class Solution {
    findTwoElement(arr) {
        let n = arr.length;
        let xr = 0;

        // Step 1: XOR of all array elements and numbers 1..n
        for (let i = 0; i < n; i++) {
            xr ^= arr[i];
            xr ^= (i + 1);
        }
        // Now xr = missing ^ repeating

        // Step 2: Find rightmost set bit
        let setBit = xr & -xr;

        let x = 0, y = 0;

        // Step 3: Divide numbers into two groups
        for (let i = 0; i < n; i++) {
            if (arr[i] & setBit) x ^= arr[i];
            else y ^= arr[i];

            if ((i + 1) & setBit) x ^= (i + 1);
            else y ^= (i + 1);
        }

        // Step 4: Decide which is repeating & which is missing
        let repeating, missing;
        let count = 0;

        for (let i = 0; i < n; i++) {
            if (arr[i] === x) count++;
        }

        if (count === 2) {
            repeating = x;
            missing = y;
        } else {
            repeating = y;
            missing = x;
        }

        return [repeating, missing];
    }
}
