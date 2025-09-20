//given an array of integers arr[]. Your task is to find the length of the longest subarray such that all the elements of the subarray
//  are smaller than or equal to the length of the subarray.

Examples:

Input: arr = [1, 2, 3]
Output: 3
Explanation://The longest subarray is the entire array itself, which has a length of 3. All elements in the subarray are less than or
// equal to 3.
Input: arr = [6, 4, 2, 5]
Output: 0
Explanation:// There is no subarray where all elements are less than or equal to the length of the subarray. The longest subarray is empty, 
//which has a length of 0.
Constraints
//1 ≤ arr.size() ≤ 105
//1 ≤ arr[i] ≤ 109

class Solution {
    longestSubarray(arr) {
        
         let n = arr.length;
        let res = 0;
        let st = [];

        for (let i = 0; i <= n; i++) {
            let curr = (i === n) ? Infinity : arr[i];

            while (st.length > 0 && arr[st[st.length - 1]] < curr) {
                let j = st.pop();
                let prevIndex = st.length === 0 ? -1 : st[st.length - 1];
                let len = i - 1 - prevIndex;

                if (arr[j] <= len) {
                    res = Math.max(res, len);
                }
            }

            if (i < n) st.push(i);
        }
        return res;
    }
}

