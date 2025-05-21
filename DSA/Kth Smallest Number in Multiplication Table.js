//Given three integers m, n and k. Consider a grid of m * n, where mat[i][j] = i * j (1 based index). The task is to return the kth 
//smallest element in the m * n multiplication table.

Examples :

Input: m = 3, n = 3, k = 5
Output: 3
Explanation: 

//The 5th smallest element is 3. 
Input: m = 2, n = 3, k = 6
Output: 6 
Explanation// [1, 2, 3][2, 4, 6]. The 6th smallest element is 6.

Input: m = 2, n = 3, k = 6
Output: 6 
Explanation: //[1, 2, 3][2, 4, 6]. The 6th smallest element is 6.
Constraints:
1 <= m, n <= 3 * 104
1 <= k <= m * n

class Solution {
    kthSmallest(m, n, k) {
        
    let start = 1, end = m * n, ans;
        while(start <= end){
           let mid = Math.floor(start + (end - start) / 2);
            let cnt = 0;
            for(let i = 1; i <= m; i++){
                cnt += Math.min(n, Math.floor(mid/i));
            }
            if(cnt >= k){
                ans = mid;
                end = mid - 1;
            }
            else{
                start = mid + 1;
            }
        }
        return ans;
    }
}