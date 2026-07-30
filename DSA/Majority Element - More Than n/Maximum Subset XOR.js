//Given an array arr[], choose any subset of elements (possibly all elements) such that the XOR of the chosen elements
//  is maximized.

Examples:

Input : arr = [2, 4, 5]
Output: 7
Explanation:// The subset {2, 5} has the maximum XOR value.
Input : arr= [9, 8, 5]
Output: 13
Explanation: //The subset {8, 5} has the maximum XOR value.
Constraints

//1 ≤ arr.size() ≤ 105
//1 ≤ arr[i] ≤ 106

class Solution {
    maxSubsetXOR(arr) {
        let n = arr.length;
        let index = 0;

        for (let bit = 31; bit >= 0; bit--) {

            let maxIndex = -1;

            for (let i = index; i < n; i++) {
                if ((arr[i] & (1 << bit)) !== 0) {
                    maxIndex = i;
                    break;
                }
            }

            if (maxIndex === -1) continue;

            // Swap
            [arr[index], arr[maxIndex]] = [arr[maxIndex], arr[index]];

            // Eliminate current bit from all other elements
            for (let i = 0; i < n; i++) {
                if (i !== index && (arr[i] & (1 << bit))) {
                    arr[i] ^= arr[index];
                }
            }

            index++;
        }

        let ans = 0;

        for (let i = 0; i < index; i++) {
            ans = Math.max(ans, ans ^ arr[i]);
        }

        return ans;
    }
}