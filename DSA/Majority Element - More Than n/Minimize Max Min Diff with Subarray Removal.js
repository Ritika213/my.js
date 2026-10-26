//given an array **arr[]** of size **n**. You need to remove a subarra&#x79;**&#x20;**&#x6F;f size **k** , 
// such that the difference between the maximum and minimum values of the remaining array is minimized.
//  Find the minimum value obtained after performing the operation of the removal of the subarray.
//Examples:
//Input: arr = [1, 2, 3, 4, 5], k = 3 \
//Output: 1\
//Explanation:&#x20;**&#x57;e remove first subarray of length 3, the remaining array is [4,5] and the 
// difference of maximum and minimum elemen&#x74;**&#x20;**&#x69;&#x73;**&#x20;**&#x31; i.e 5 - 4 = 1
//Input: arr = [2, 3, 1, 4, 6, 7], k = 3\
//Output: 2\
//Explanation:&#x20;
//If we remove the subarray [2,3,1] then remaining array is [4,6,7] and the difference  = 7-4 = 3\
//If we remove the subarray [3,1,4] then remaining array is [2,6,7] and the difference  = 7-2 = 5\
//If we remove the subarray [1,4,6] then remaining array is [2,3,7] and the difference  = 7-2 = 5\
//If we remove the subarray [4,6,7] then remaining array is [2,3,1] and the difference  = 3-1 = 2\
//So the answer is min(3,5,5,2) = 2                                                                                                                    
//Constraints:
//1 ≤ arr.size() ≤ 105\
//1 ≤ arr[i] ≤ 109\
//0 ≤ k < arr.size()


/**
 * @param {number} k
 * @param {number[]} arr
 * @returns {number}
 */

class Solution {
    minDiff(k, arr) {
        let n = arr.length;

        if (k === 0) {
            return Math.max(...arr) - Math.min(...arr);
        }

        let ans = Infinity;

        let prefixMin = new Array(n);
        let prefixMax = new Array(n);
        let suffixMin = new Array(n);
        let suffixMax = new Array(n);

        prefixMin[0] = prefixMax[0] = arr[0];

        for (let i = 1; i < n; i++) {
            prefixMin[i] = Math.min(prefixMin[i - 1], arr[i]);
            prefixMax[i] = Math.max(prefixMax[i - 1], arr[i]);
        }

        suffixMin[n - 1] = suffixMax[n - 1] = arr[n - 1];

        for (let i = n - 2; i >= 0; i--) {
            suffixMin[i] = Math.min(suffixMin[i + 1], arr[i]);
            suffixMax[i] = Math.max(suffixMax[i + 1], arr[i]);
        }

        for (let i = 0; i <= n - k; i++) {
            let left = i - 1;
            let right = i + k;

            let mn = Infinity;
            let mx = -Infinity;

            if (left >= 0) {
                mn = Math.min(mn, prefixMin[left]);
                mx = Math.max(mx, prefixMax[left]);
            }

            if (right < n) {
                mn = Math.min(mn, suffixMin[right]);
                mx = Math.max(mx, suffixMax[right]);
            }

            if (mn !== Infinity) {
                ans = Math.min(ans, mx - mn);
            }
        }

        return ans;
    }
}