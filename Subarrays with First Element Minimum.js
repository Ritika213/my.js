//given an integer array arr[ ]. Your task is to count the number of subarrays where the first element is the minimum element of that subarray.

Note:// A subarray is valid if its first element is not greater than any other element in that subarray.

Examples:

Input: arr = [1, 2, 1]
Output: 5
Explanation:
//All possible subarrays are:
[1], [1, 2], [1, 2, 1], [2], [2, 1], [1]
//Valid subarrays are:
//[1], [1, 2], [1, 2, 1], [2], [1] -> total 5
Input: arr = [1, 3, 5, 2]
Output: 8
Explanation:
//Valid subarrays are: [1], [1, 3], [1, 3, 5], [1, 3, 5, 2], [3], [3, 5], [5], [2] -> total 8
Constraints
//1 ≤ arr.size() ≤ 5*104
//1 ≤ arr[i] ≤ 105


/**
 * @param {number[]} arr
 * @returns {number}
 */
class Solution {
    countSubarrays(arr) {
        // code here
         let n = arr.length;
        
        let nse = new Array(n).fill(n);
        let st = [];

        st.push(n - 1);

        for (let i = n - 2; i >= 0; i--) {
            while (st.length && arr[i] <= arr[st[st.length - 1]]) {
                st.pop();
            }

            if (st.length === 0) {
                nse[i] = n;
            } else {
                nse[i] = st[st.length - 1];
            }

            st.push(i);
        }
         let cnt = 0;

        for (let i = 0; i < n; i++) {
            cnt += (nse[i] - i);
        }

        return cnt;
    

    }
}