//Given an array of integers arr[] representing a permutation, implement the next permutation that rearranges the numbers into the lexicographically
 //next greater permutation. If no such permutation exists, rearrange the numbers into the lowest possible order (i.e., sorted in ascending order). 

Note -// A permutation of an array of integers refers to a specific arrangement of its elements in a sequence or linear order.

Examples

Input: arr = [2, 4, 1, 7, 5, 0]
Output: [2, 4, 5, 0, 1, 7]
Explanation:// The next permutation of the given array is {2, 4, 5, 0, 1, 7}.
Input: arr = [3, 2, 1]
Output: [1, 2, 3]
Explanation// As arr[] is the last permutation, the next permutation is the lowest one.

Input: arr = [3, 4, 2, 5, 1]
Output: [3, 4, 5, 1, 2]
Explanation:// The next permutation of the given array is {3, 4, 5, 1, 2}.
Constraints
//1 ≤ arr.size() ≤ 105
//1 ≤ arr[i] ≤ 105

class Solution {
    nextPermutation(arr) {
        // code here
      const n = arr.length;
        let idx1 = n - 2;
        
        // Step 1: Find the first decreasing element from the right
        while (idx1 >= 0 && arr[idx1] >= arr[idx1 + 1]) {
            idx1--;
        }

        if (idx1 >= 0) {
            // Step 2: Find the next larger element to swap with
            let idx2 = n - 1;
            while (arr[idx2] <= arr[idx1]) {
                idx2--;
            }
            // Swap arr[idx1] and arr[idx2]
            this.swap(arr, idx1, idx2);
        }
        
        // Step 3: Reverse the elements to the right of idx1
        this.reverse(arr, idx1 + 1, n - 1);
    }
     swap(arr, i, j) {
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }

    reverse(arr, start, end) {
        while (start < end) {
            this.swap(arr, start, end);
            start++;
            end--;
        }
        
    }
}

