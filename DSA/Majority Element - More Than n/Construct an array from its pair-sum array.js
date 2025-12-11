//Given a pair-sum array arr[] construct the original array. A pair-sum array for an array is the array that contains sum of all
//  pairs in ordered form, i.e., arr[0] is sum of res[0] and res[1], arr[1] is sum of res[0] and res[2] and so on.

Note:// If the size of original array res[] is n, then the size of pair-sum array arr[] would be n * (n -1) /2. We may assume that 
//the pair-sum array arr[] is appropriate in size.
//Note that, if the original array is correct then the driver code will print true, else false;

Examples:

Input: arr= [4, 5, 3]
Output: true
Explanation: //A valid original array is [3, 1, 2], pairwise sums are (3 + 1), (3 + 2) and (1 + 2).
Input: arr = [3]
Output: true
Explanation:// One of the valid original array is [1, 2].
Constraints 
//1 ≤ n ≤ 103
//1 ≤ arr[i] ≤ 109

class Solution {
    constructArr(arr) {
        const m = arr.length;
        if (m === 0) return [];       // no pairs -> original array of size 0 or 1 (depending on driver)
        if (m === 1) {
            // only one pair -> n = 2; return any valid split, e.g. [1, arr[0]-1]
            return [1, arr[0] - 1];
        }

        // compute n from m = n*(n-1)/2  =>  n = (1 + sqrt(1+8m)) / 2
        const disc = 1 + 8 * m;
        const sqrtDisc = Math.sqrt(disc);
        const n = (1 + sqrtDisc) / 2;

        // guard: if n not integer, input malformed (but problem says input size is appropriate)
        if (!Number.isInteger(n)) return []; 

        // r0 = (arr[0] + arr[1] - arr[n-1]) / 2
        const r0 = (arr[0] + arr[1] - arr[n - 1]) / 2;

        // Optional: check r0 is an integer (if original values are integers)
        if (!Number.isFinite(r0)) return [];
        // Build result array
        const res = new Array(n);
        res[0] = r0;

        for (let i = 1; i < n; i++) {
            // arr[i-1] = r0 + r_i  => r_i = arr[i-1] - r0
            res[i] = arr[i - 1] - r0;
        }

        return res;
    }
}
