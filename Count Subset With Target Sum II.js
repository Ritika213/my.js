//Given an array arr[] and an integer k, find the count of subsets whose sum is equals to k.

Note: //It is guaranteed that the no of valid subsets will fit within a 32-bit integer.

Examples:

Input: arr = [1, 3, 2], k = 3
Output: 2
Explanation:// The two subsets whose sum is equals to k are [1, 2] and [3].
Input: arr = [4, 2, 3, 1, 2], k = 4
Output: 3
Explanation:// The three subsets whose sum is equals to k are [4], [2, 2] and [3, 1].
Input: arr = [10, 20, 30], k = 25
Output: 0
Explanation:// No subsets exits with sum equals to k.
Constraints
//1 ≤ arr.size() ≤ 40
//-107 ≤ arr[i], k ≤ 107


/**
 * @param {number[]} arr
 * @param {number} k
 * @returns {number}
 */

class Solution {
    subsetSum(i,r,sum,arr,mp){
        if(i===r){
            mp.set(sum,(mp.get(sum) || 0)+1);
            return;
        }
        this.subsetSum(i+1, r, sum+arr[i],arr,mp)
        this.subsetSum(i+1,r,sum,arr,mp)
        
    }
    countSubset(arr, k) {
        
        let n = arr.length;
        let mid= Math.floor(n/2)
        let lmp= new Map()
        let rmp = new Map()
        this.subsetSum(0,mid,0,arr,lmp)
        this.subsetSum(mid,n,0,arr,rmp)
        let cnt=0;
        for(let [sum,freq] of lmp){
            let need = k-sum;
            if(rmp.has(need)){
                cnt+= freq * rmp.get(need)
            }
        }
        return cnt;
    }
}
