//given an array arr[]. For each element at index i (0-based indexing), find the farthest index j to the right
// (i.e., j > i) such that arr[j] < arr[i]. If no such index exists for a given position, return -1 for that index. Return 
// the resulting array of answers.

Examples:

Input: arr = [2, 5, 1, 3, 2]
Output: [2, 4, -1, 4, -1]
Explanation:// arr[0] = 2: Farthest smaller element to the right is arr[2] = 1.
//arr[1] = 5: Farthest smaller element to the right is arr[4] = 2.
//arr[2] = 1: No smaller element to the right → -1.
//arr[3] = 3: Farthest smaller element to the right is arr[4] = 2.
//arr[4] = 2: No elements to the right → -1.
Input: arr = [2, 3, 5, 4, 1] 
Output: [4, 4, 4, 4, -1]
Explanation:// arr[4] is the farthest smallest element to the right for arr[0], arr[1], arr[2] and arr[3].
Constraints
//1 ≤ arr.size() ≤ 106
//1 ≤ arr[i] ≤ 106


class Solution {
    farMin(arr) {
        // Create array of objects: {value, index}
        let vp = [];
        for (let i = 0; i < arr.length; i++) {
            vp.push({ value: arr[i], index: i });
        }

        // Sort by value
        vp.sort((a, b) => a.value - b.value);

        // We'll maintain a max index seen so far
        let ans = Array.from(arr); 
        let maxIndex = vp[0].index;

        ans[vp[0].index] = -1;

        for (let i = 1; i < vp.length; i++) {
            if (maxIndex > vp[i].index) {
                ans[vp[i].index] = maxIndex;
            } else {
                ans[vp[i].index] = -1;
            }
            maxIndex = Math.max(maxIndex, vp[i].index);
        }

        return ans;
    }
}