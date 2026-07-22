//Given an array arr[], find the minimum number of elements to delete so that the remaining elements form a 
// strictly increasing sequence in the same order.

Examples:

Input: arr = [5, 6, 1, 7, 4]
Output: 2
Explanation: //Removing 1 and 4 leaves [5, 6, 7] which is strictly increasing.
Input: arr = [1, 1, 1]
Output: 2
Explanation:// Removing any 2 elements leaves [1] which is strictly increasing.
Constraints
//1 ≤ n ≤ 105 
//1 ≤ arr[i] ≤ 105

class Solution {
    minDeletions(arr) {
        
        let lis = [];

        for (let num of arr) {
            if (lis.length === 0 || num > lis[lis.length - 1]) {
                lis.push(num);
            } else {
                let l = 0, r = lis.length - 1;
                while (l <= r) {
                    let mid = Math.floor((l + r) / 2);
                    if (lis[mid] >= num) {
                        r = mid - 1;
                    } else {
                        l = mid + 1;
                    }
                }
                lis[l] = num;
            }
        }

        return arr.length - lis.length;
    }
}