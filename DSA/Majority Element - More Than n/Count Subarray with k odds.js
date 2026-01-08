//given an array arr[] of positive integers and an integer k. You have to count the number of subarrays that contain exactly k odd numbers.

Examples:

Input: arr = [2, 5, 6, 9], k = 2
Output: 2
Explanation:// There are 2 subarrays with 2 odds: [2, 5, 6, 9] and [5, 6, 9].
Input: arr = [2, 2, 5, 6, 9, 2, 11], k = 2
Output: 8
Explanation: //There are 8 subarrays with 2 odds: [2, 2, 5, 6, 9], [2, 5, 6, 9], [5, 6, 9], [2, 2, 5, 6, 9, 2], [2, 5, 6, 9, 2], [5, 6, 9, 2],
//  [6, 9, 2, 11] and [9, 2, 11].
Constraint
//1 ≤ k ≤ arr.size() ≤ 105
//1 ≤ arr[i] ≤ 109

class Solution {
    countSubarrays(arr, k) {
        
         let lt = [];          // works like LinkedList
    let pr = -1;
    let ans = 0;
    let n = arr.length;

    for (let i = 0; i <= n; i++) {
        if (i === n || arr[i] % 2 === 1) {
            if (lt.length === k) {
                let f = lt[0] - pr;
                let s = i - lt[lt.length - 1];
                ans += f * s;
                pr = lt.shift(); // removeFirst()
            }
            lt.push(i);
        }
    }
    return ans;
    }
}