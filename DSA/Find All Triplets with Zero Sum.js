//Given an array arr[], find all possible indices [i, j, k] of triplets [arr[i], arr[j], arr[k]] in the array whose sum is equal to zero. 
//Return indices of triplets in any order and all the returned triplets indices should also be internally sorted, i.e., for any triplet indices 
//[i, j, k], the condition i < j < k should hold.

Note:// Try to solve this using the O(n2) approach.

Examples:

Input: arr = [0, -1, 2, -3, 1]
Output: [[0, 1, 4], [2, 3, 4]]
Explanation:// Triplets with sum 0 are:
//arr[0] + arr[1] + arr[4] = 0 + (-1) + 1 = 0
//arr[2] + arr[3] + arr[4] = 2 + (-3) + 1 = 0
Input: arr= [1, -2, 1, 0, 5]
Output: [[0, 1, 2]]
Explanation //Only triplet which satisfies the condition is arr[0] + arr[1] + arr[2] = 1 + (-2) + 1 = 0

Input: arr = [2, 3, 1, 0, 5]
Output: [[]]
Explanation:// There is no triplet with sum 0.
Constraints:
3 <= arr.size() <= 103
-104 <= arr[i] <= 104


class Solution {
    /**
     * @param {number[]} arr
     * @return {number[][]}
     */
    findTriplets(arr) {
        // write your code here
        let n=arr.length;
    let mp=new Map();
        // Populate the map with indices for each number
        for (let i = 0; i < n; i++) {
            if (!mp.has(arr[i])) {
                mp.set(arr[i], []);
            }
            mp.get(arr[i]).push(i);
        }
        
        let ans = [];
        for (let i = 0; i < n - 2; i++) {
            let first = arr[i], firstInd = i;
            for (let j = i + 1; j < n - 1; j++) {
                let second = arr[j], secondInd = j;
                let third = -(first + second);
                // Check if 'third' exists in the map
                if (mp.has(third)) {
                    for (let it of mp.get(third)) {
                        if (it > j) {
                            ans.push([firstInd, secondInd, it]);
                        }
                    }
                }
            }
        }
        
        return ans;
    }
}

