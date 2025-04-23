//Given an array arr[] containing 2*n + 2 positive numbers, out of which 2*n numbers exist in pairs whereas the other two number occur exactly
// once and are distinct. Find the other two numbers. Return the answer in increasing order.

Examples:

Input: arr = [1, 2, 3, 2, 1, 4]
Output: [3, 4] 
Explanation:// 3 and 4 occur exactly once.
Input: arr= [2, 1, 3, 2]
Output: [1, 3]
Explanation:// 1 and 3 occur exactly once.
Input: arr = [2, 1, 3, 3]
Output: [1, 2]
Explanation:// 1 and 2 occur exactly once.
Constraints
//2 ≤ arr.size() ≤ 106 
//1 ≤ arr[i] ≤ 5 * 106
//arr.size() is even


class Solution {
    singleNum(arr) {
        
        let xorResult = 0;

    // Calculate the XOR of all elements in the array
    for (const num of arr) {
        xorResult ^= num;
    }

    // Find the rightmost set bit in the XOR result
    let rightmostBit = xorResult & -xorResult;

    let num1 = 0;
    let num2 = 0;

    // Divide the array into two groups based on the rightmost bit
    for (const num of arr) {
        if ((num & rightmostBit) === 0) {
            num1 ^= num;
        } else {
            num2 ^= num;
        }
    }

    // Return the two distinct numbers in increasing order
    return [Math.min(num1, num2), Math.max(num1, num2)];

    }
}