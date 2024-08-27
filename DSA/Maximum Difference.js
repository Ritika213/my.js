//Given an integer array arr of integers, the task is to find the maximum absolute difference between the nearest left smaller element and 
//the nearest right smaller element of every element in array arr. If for any component of the arr, the nearest smaller element doesn't exist 
//then consider it as 0.

Examples :

Input: arr = [2, 1, 8]
Output: 1
Explanation:// left smaller array ls = [0, 0, 1], right smaller array rs = [1, 0, 0]. Maximum Diff of abs(ls[i] - rs[i]) = 1
Input: arr = [2, 4, 8, 7, 7, 9, 3]
Output: 4
Explanation //left smaller array ls = [0, 2, 4, 4, 4, 7, 2], right smaller rs = [0, 3, 7, 3, 3, 3, 0]. Maximum Diff of abs(ls[i] - rs[i]) = abs(7 - 3) = 4
//Expected Time Complexity: O(n)
//Expected Space Complexity: O(n)

Constraints:
1 <= arr.size() <= 106
1<= arr[i] <=109

class Solution {
    findMaxDiff(arr) {
        
          let n = arr.length;
        let ans = 0;
        let ls = new Array(n).fill(0);
        let st = [];

        for (let i = 0; i < n; i++) {
            while (st.length > 0 && st[st.length - 1] >= arr[i]) {
                st.pop();
            }
            ls[i] = st.length === 0 ? 0 : st[st.length - 1];
            st.push(arr[i]);
        }

        st = [];

        for (let i = n - 1; i >= 0; i--) {
            while (st.length > 0 && st[st.length - 1] >= arr[i]) {
                st.pop();
            }
            let rs = st.length === 0 ? 0 : st[st.length - 1];
             ans = Math.max(ans, Math.abs(ls[i] - rs));
            st.push(arr[i]);
        }

        return ans;
    
    }
}