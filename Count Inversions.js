//Given an array of integers arr[]. You have to find the Inversion Count of the array. 
Note : //Inversion count is the number of pairs of elements (i, j) such that i < j and arr[i] > arr[j].

Examples:

Input: arr = [2, 4, 1, 3, 5]
Output: 3
Explanation:// The sequence 2, 4, 1, 3, 5 has three inversions (2, 1), (4, 1), (4, 3).
Input: arr = [2, 3, 4, 5, 6]
Output: 0
Explanation:// As the sequence is already sorted so there is no inversion count.
Input: arr= [10, 10, 10]
Output: 0
Explanation:// As all the elements of array are same, so there is no inversion count.
Constraints
//1 ≤ arr.size() ≤ 105
//1 ≤ arr[i] ≤ 104



// User function Template for javascript

/**
 * @param {number[]} arr
 * @returns {number}
 */

class Solution {
    // Function to merge two halves and count inversions
    countAndMerge(arr, l, m, r) {
        const n1 = m - l + 1;
        const n2 = r - m;

        // Create temporary arrays for the left and right subarrays
        const left = new Array(n1);
        const right = new Array(n2);

        for (let i = 0; i < n1; i++) {
            left[i] = arr[i + l];
        }
        for (let j = 0; j < n2; j++) {
            right[j] = arr[m + 1 + j];
        }

        // Initialize inversion count and indices
        let res = 0;
        let i = 0, j = 0, k = l;

        // Merge two halves while counting inversions
        while (i < n1 && j < n2) {
            if (left[i] <= right[j]) {
                arr[k++] = left[i++];
            } else {
                arr[k++] = right[j++];
                res += (n1 - i); // All remaining elements in left[] form inversions
            }
        }

        // Copy any remaining elements
        while (i < n1) {
            arr[k++] = left[i++];
        }
        while (j < n2) {
            arr[k++] = right[j++];
        }

        return res;
    }

    // Recursive function to count inversions in the array
    countInv(arr, l, r) {
        let res = 0;
        if (l < r) {
            const m = Math.floor((r + l) / 2);

            // Count inversions in left and right halves
            res += this.countInv(arr, l, m);
            res += this.countInv(arr, m + 1, r);

            // Count cross inversions
            res += this.countAndMerge(arr, l, m, r);
        }
        return res;
    }

    // Function to calculate inversion count in the array
    inversionCount(arr) {
        return this.countInv(arr, 0, arr.length - 1);
    }
}