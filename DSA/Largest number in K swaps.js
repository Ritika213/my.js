//Given a number k and string s of digits denoting a positive integer, build the largest number possible by performing swap operations
//  on the digits of s at most k times.

Examples :

Input: s = "1234567", k = 4
Output: 7654321
Explanation:// Three swaps can make the input 1234567 to 7654321, swapping 1 with 7, 2 with 6 and finally 3 with 5.
Input: s = "3435335", k = 3
Output: 5543333
Explanation: //Three swaps can make the input 3435335 to 5543333, swapping 3 with 5, 4 with 5 and finally 3 with 4.
Input: s = "1034", k = 2
Output: 4301
Explanation// Two swaps can make the input 1034 to 4301, swapping 1 with 4 and finally 0 with 3. 

Constraints
//1 ≤ s.size() ≤ 15
//1 ≤ k ≤ 7

class Solution {
    // Function to find the largest number after k swaps.
    findMaximumNum(s, k) {
        
        let maxStr = s;

        const swap = (str, i, j) => {
            let arr = str.split('');
            [arr[i], arr[j]] = [arr[j], arr[i]];
            return arr.join('');
        };

        const helper = (str, k, index) => {
            if (k === 0) return;

            let maxDigit = str[index];
            for (let i = index + 1; i < str.length; i++) {
                if (str[i] > maxDigit) {
                    maxDigit = str[i];
                }
            }
             if (maxDigit !== str[index]) k--;

            for (let i = str.length - 1; i >= index; i--) {
                if (str[i] === maxDigit) {
                    let swapped = swap(str, index, i);
                    if (swapped > maxStr) {
                        maxStr = swapped;
                    }
                    helper(swapped, k, index + 1);
                }
            }
        };

        helper(s, k, 0);
        return maxStr;
    }
}