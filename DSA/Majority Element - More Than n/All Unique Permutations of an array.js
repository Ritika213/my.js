//Given an array arr[] that may contain duplicates. Find all possible distinct permutations of the array in sorted order.
Note: //A sequence A is greater than sequence B if there is an index i for which Aj = Bj for all j<i and Ai > Bi.

Examples:

Input: arr = [1, 3, 3]
Output: [[1, 3, 3], [3, 1, 3], [3, 3, 1]]
Explanation:// These are the only possible distinct permutations for the given array.
Input: arr = [2, 3]
Output: [[2, 3], [3, 2]]
Explanation:// These are the only possible distinct permutations for the given array.
Constraints
//1 ≤ arr.size() ≤ 9

class Solution {
    uniquePerms(arr) {
        let res = [];
        arr.sort((a, b) => a - b); // sort array to handle duplicates
        
        const used = new Array(arr.length).fill(false);
        
        const backtrack = (path) => {
            if (path.length === arr.length) {
                res.push([...path]);
                return;
            }
            
            for (let i = 0; i < arr.length; i++) {
                // Skip used elements
                if (used[i]) continue;

                // Skip duplicates (only the first unused duplicate should be used)
                if (i > 0 && arr[i] === arr[i - 1] && !used[i - 1]) continue;
                
                used[i] = true;
                path.push(arr[i]);
                backtrack(path);
                path.pop();
                used[i] = false;
            }
        };
        
        backtrack([]);
        return res;
    }
}
