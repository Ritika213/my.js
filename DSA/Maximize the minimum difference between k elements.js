//Given an array arr[] of integers and an integer k, select k elements from the array such that the minimum absolute difference 
//between any two of the selected elements is maximized. Return this maximum possible minimum difference.

Examples:

Input: arr = [2, 6, 2, 5], k = 3
Output: 1
Explanation:// 3 elements out of 4 elements are to be selected with a minimum difference as large as possible. Selecting 2, 2, 
//5 will result in minimum difference as 0. Selecting 2, 5, 6 will result in minimum difference as 6 - 5 = 1.
Input: arr = [1, 4, 9, 0, 2, 13, 3], k = 4
Output: 4
Explanation:// Selecting 0, 4, 9, 13 will result in minimum difference of 4, which is the largest minimum difference possible.
Constraints
//1 ≤ arr.size() ≤ 105
//0 ≤ arr[i] ≤ 106
//2 ≤ k ≤ arr.size() 

class Solution {
      solve( arr, mid,  k){
        let n = arr.length;
        let cnt = 1;
        let prev = arr[0];
        for(let i=1;i<n;i++){
            if(arr[i] - prev >= mid){
                cnt++;
                prev = arr[i];
            }
            if(cnt >= k) return true;
        }
        return false;
    }
    maxMinDiff(arr, k) {
        
        arr.sort((a,b)=>a-b);
        let n = arr.length;
        let s = 0;
        let e = arr[n-1] - arr[0];
        let ans = 0;
        while(s <= e){
            let mid =Math.floor( s + (e-s) / 2);
            if(this.solve(arr, mid, k)){
                ans = mid;
                s = mid + 1;
            }
            else{
                e = mid - 1;
            }
        }
        return ans; 
    }
}