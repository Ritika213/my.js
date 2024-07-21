//Given an array arr. The task is to find and return the maximum product possible with the subset of elements present in the array.

Note:

//The maximum product can be a single element also.
//Since the product can be large, return it modulo 109 + 7.
Examples:

Input: arr = [-1, 0, -2, 4, 3]
Output: 24
Explanation:// Maximum product will be ( -1 * -2 * 4 * 3 ) = 24
Input: arr = [-1, 0]
Output: 0
Explanation //Maximum product will be ( -1 * 0) = 0

Input: arr = [5]
Output: 5
Explanation: //Maximum product will be 5.
//Expected Time Complexity: O(n)
//Expected Auxiliary Space: O(1)

Constraints:
1 <= arr.size() <= 2 * 104
-10 <= arr[i] <= 10

class Solution {
    /**
    * @param number[] a

    * @returns number
    */
    findMaxProduct(arr) {
        // code here
     const MOD = 1000000007;
        if (arr.length === 0) return 0;

        let ans = 1;
        let maxNeg = -Infinity;
        let negCount = 0;
        let hasZero = false;

        for (let i of arr) {
            if (i === 0) {
                hasZero = true;
                continue;
            }

            if (i < 0) {
                negCount++;
                maxNeg = Math.max(maxNeg, i);
            }
             ans = (ans * i) % MOD;
        }

        // If all elements are zero
        if (hasZero && ans === 1 && negCount === 0) return 0;

        // If the product is negative and there are an odd number of negative numbers
        if (negCount % 2 !== 0) {
            if (negCount === 1 && !hasZero && arr.length === 1) {
                // Special case: only one negative number and it's the only element
                return arr[0];
            } else {
                ans = Math.floor(ans / maxNeg);
                ans = ans % MOD;
            }
        }
          return (ans + MOD) % MOD;  // Ensure the result is positive
    }
}
