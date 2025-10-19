//Given the root of a Binary Search Tree, a target value, and an integer k. Your task is to find the k values in the BST that are closest 
// to the target.

//The closest value is taken by choosing the one that gives minimum absolute difference from target.

Note:// In case two values have same absolute difference from target, choose the smaller one. The target may or may not be present in BST.
//You can return the values in any order the driver code will print them in sorted order only.

Examples
Input: root = [20, 8, 22, 4, 12, N, N, N, N, 10, 14], target = 17, k = 3
     
Output: [14, 20, 12]
Explanation// Absolute difference of 17 wrt 14 and 20 is 3 and 3, but we choose the smaller value in case of same absolute difference.
 //So, 14 coes first and then 20. Then, 12 and 22 have same absolute difference, i.e., 5 from 17. But we choose the smaller value, i.e., 12.

 Input: root = [5, 4, 8, 1], target = 5, k = 2
     
Output: [5, 4]
Explanation:// The absolute difference of 5 wrt 5 is 0, and for 4, the absolute difference is 1.
    
Constraints
//1 ≤ number of nodes, k ≤ 104
//1 ≤ node->data, target ≤ 104

/**
 * @param {Node} root
 * @param {number} target
 * @param {number} k
 * @returns {number[]}
 */

/*
class Node{
    constructor(data){
        this.data = data;
        this.left = null;
        this.right = null;
    }
}
*/

function inorder(root, arr) {
    if (!root) return;
    inorder(root.left, arr);
    arr.push(root.data);
    inorder(root.right, arr);
}

class Solution {
    getKClosest(root, target, k) {
        
       const arr = [];
        inorder(root, arr);
        
        // Step 2: Find k closest elements
        const ans = [];
        
        while (k-- > 0) {
            let minDiff = Infinity;
            let index = -1;
            
            for (let i = 0; i < arr.length; i++) {
                const diff = Math.abs(arr[i] - target);
                if (diff < minDiff) {
                    minDiff = diff;
                    index = i;
                }
            }
            
            ans.push(arr[index]);
            arr.splice(index, 1); // remove the used element
        }
        
        return ans; 
    }
}
     