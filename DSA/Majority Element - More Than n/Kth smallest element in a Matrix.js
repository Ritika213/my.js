//Given a matrix mat[][] of size n*n, where each row and column is sorted in non-decreasing order. Find the kth smallest element
//  in the matrix.

Examples:
Input: mat = [[16, 28, 60, 64], k = 3
                [22, 41, 63, 91],
                [27, 50, 87, 93],
                [36, 78, 87, 94]]
Output: 27
Explanation: //27 is the 3rd smallest element.
Input: mat = [[10, 20, 30, 40], k = 7
                [15, 25, 35, 45],
                [24, 29, 37, 48],
                [32, 33, 39, 50]] 
Output: 30
Explanation:// 30 is the 7th smallest element.
Constraints
//1 ≤ n ≤ 500
//1 ≤ mat[i][j] ≤ 104
//1 ≤ k ≤ n*n

/**
 * @param {number[][]} matrix
 * @param {number} k
 * @returns {number}
 */

class Solution {
    kthSmallest(matrix, k) {
        
         let n = matrix.length;
        let l = matrix[0][0];
        let r = matrix[n - 1][n - 1];
        let ans = -1;

        while (l <= r) {
            let mid = Math.floor(l + (r - l) / 2);
            let cnt = 0;

            for (let i = 0; i < n; i++) {
                cnt += this.countLessEqual(matrix[i], mid);
            }

            if (cnt >= k) {
                ans = mid;
                r = mid - 1;
            } else {
                l = mid + 1;
            }
        }
         return ans;
    }

    countLessEqual(row, target) {
        // Binary search to find how many numbers are ≤ target in the sorted row
        let left = 0;
        let right = row.length;

        while (left < right) {
            let mid = Math.floor((left + right) / 2);
            if (row[mid] <= target) {
                left = mid + 1;
            } else {
                right = mid;
            }
        }

        return left; // number of elements ≤ target
    }
}