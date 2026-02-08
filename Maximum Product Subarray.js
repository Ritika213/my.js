//Given an array arr[] that contains positive and negative integers (may contain 0 as well). Find the maximum product that we 
// can get in a subarray of arr[].

Note: //It is guaranteed that the answer fits in a 32-bit integer.

Examples

Input: arr = [-2, 6, -3, -10, 0, 2]
Output: 180
Explanation:// The subarray with maximum product is [6, -3, -10] with product = 6 * (-3) * (-10) = 180.
Input: arr = [-1, -3, -10, 0, 6]
Output: 30
Explanation: //The subarray with maximum product is [-3, -10] with product = (-3) * (-10) = 30.
Input: arr = [2, 3, 4] 
Output: 24 
Explanation// For an array with all positive elements, the result is product of all elements. 

Constraints
//1 ≤ arr.size() ≤ 106
//-10  ≤  arr[i]  ≤  10



// User function Template for javascript

/**
 * @param {number[]} arr
 * @return {number}
 */

class Solution {
    maxProduct(arr) {
        
          let maxProduct = arr[0];
        let minProduct = arr[0];
        let result = arr[0];

        for (let i = 1; i < arr.length; i++) {
            if (arr[i] < 0) {
                [maxProduct, minProduct] = [minProduct, maxProduct]; 
                // Swap if the current element is negative
            }

            maxProduct = Math.max(arr[i], maxProduct * arr[i]);
            minProduct = Math.min(arr[i], minProduct * arr[i]);

            result = Math.max(result, maxProduct);
        }

        return result;
    
    }
}