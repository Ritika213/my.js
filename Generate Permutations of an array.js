//Difficulty: MediumAccuracy: 85.48%Submissions: 4K+Points: 4
//Given an array arr[] of unique elements. Generate all possible permutations of the elements in the array.
Note:// You can return the permutations in any order, the driver code will print them in sorted order.

Examples:

Input: arr = [1, 2, 3]
Output: [[1, 2, 3], [1, 3, 2], [2, 1, 3], [2, 3, 1], [3, 1, 2], [3, 2, 1]]
Explanation:// There are 6 possible permutations (3! = 6) of the array.
Input: arr = [1, 3]
Output: [[1, 3], [3, 1]]
Explanation: //There are 2 possible permutations (2! = 2) of the array.
Constraints
//1 ≤ arr.size() ≤ 9

/**
 * @param {number[]} arr
 * @returns {number[][]}
 */
class Solution {
    permuteDist(arr) {
        let ans = [];
        arr.sort((a, b) => a - b);   // sort first
        let used = new Array(arr.length).fill(false);

        const backtrack = (path) => {
            if (path.length === arr.length) {
                ans.push([...path]);
                return;
            }

            for (let i = 0; i < arr.length; i++) {
                if (used[i]) continue;

                // skip duplicates
                if (i > 0 && arr[i] === arr[i - 1] && !used[i - 1]) continue;

                used[i] = true;
                path.push(arr[i]);

                backtrack(path);

                path.pop();
                used[i] = false;
            }
        };

        backtrack([]);
        return ans;
    }
}
