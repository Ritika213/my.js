//Given an array arr[] of integers and a range [l, r], count the number of subsets whose Minimum Excluded
//  (MEX) value lies within the given range, inclusive.

//Minimum Excluded (or MEX) of a subset is the smallest non-negative integer that is not present in the subset.
//An empty subset has Minimum Excluded as zero.
//Since the answer can be very large, return the answer modulo 109 + 7.

Examples:

Input: arr = [2, 0, 1, 0], l = 1, r = 2
Output: 9
Explanation:// The subsets whose MEX lies in the range [1, 2] are counted as follows:
MEX = //1: The subsets must contain at least one 0 and must not contain 1. These subsets are [0] (2 ways), 
//[2, 0] (2 ways), [0, 0] (1 way), and [2, 0, 0] (1 way). Total = 6.
MEX // 2: The subsets must contain both 0 and 1 but must not contain 2. These subsets are [0, 1] (2 ways)
// and [0, 1, 0] (1 way). Total = 3.
//The subsets [2, 0, 1] and [2, 0, 1, 0] have MEX = 3, which is outside the given range. Therefore, the total
//  number of valid subsets is 6 + 3 = 9.

Input: arr= [2, 0, 1], l = 1, r = 2
Output: 3
Explanation:// The subsets whose MEX lies in the range [1, 2] are [0] (MEX = 1), [2, 0] (MEX = 1), and [0, 1]
// (MEX = 2). Hence, the answer is 3.
Constraints

//2 ≤ arr.size() ≤ 105
//0 ≤ arr[i], r ≤ arr.size()
//0 ≤ l ≤ r



class Solution {
    cntSubsets(arr, l, r) {
        const MOD = 1000000007n;
        let n = arr.length;

        let freq = new Array(n + 2).fill(0);

        for (let x of arr) {
            if (x <= n) freq[x]++;
        }

        let pow2 = new Array(n + 1).fill(1n);

        for (let i = 1; i <= n; i++) {
            pow2[i] = (pow2[i - 1] * 2n) % MOD;
        }

        let suffix = new Array(n + 2).fill(0);

        for (let i = n; i >= 0; i--) {
            suffix[i] = suffix[i + 1] + freq[i];
        }

        let answer = 0n;
        let required = 1n;
        let possible = true;

        for (let k = 0; k <= r; k++) {
            if (k > 0) {
                if (freq[k - 1] === 0) {
                    possible = false;
                } else {
                    required = (required *
                        (pow2[freq[k - 1]] - 1n + MOD)) % MOD;
                }
            }

            if (k >= l && possible) {
                let unrestricted = pow2[suffix[k + 1]];
                answer = (answer + required * unrestricted) % MOD;
            }
        }

        return Number(answer);
    }
}