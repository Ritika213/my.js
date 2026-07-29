//Given an array arr[] of distinct positive numbers. Split the array into the minimum number of subsets such that each
//  subset contains consecutive numbers.

Examples:

Input: arr = [100, 56, 5, 6, 102, 58, 101, 57, 7, 103, 59]
Output: 3
Explanation: //[5, 6, 7], [56, 57, 58, 59], [100, 101, 102, 103] are 3 subsequences in which numbers are consecutive.
Input: arr = [10, 100, 105]
Output: 3
Explanation:// [10], [100] and [105] are 3 subset in which numbers are consecutive.
Constraints
//1 ≤ arr.size() ≤ 105
//0 ≤ arr[i] ≤ 109

/**
 * @param {number[]} arr
 * @return {number}
 */
class Solution {
    minSubsets(arr) {
        
        let n = arr.length;
        arr.sort((a,b)=>a-b);
        let cnt = 1;
        for(let i=1;i<n;i++){
            if(arr[i]-arr[i-1]>1) cnt++;   
        }
    return cnt;
    }
}
