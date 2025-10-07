//given the root of a binary tree, and your task is to return its bottom view. The bottom view of a binary tree is the set of nodes
//  visible when the tree is viewed from the bottom.

Note:// If there are multiple bottom-most nodes for a horizontal distance from the root, then the latter one in the level order 
//traversal is considered.

Examples :

Input: root = [1, 2, 3, 4, 5, N, 6]
    
Output: [4, 2, 5, 3, 6]                                                                                                                                               
Output: [4, 2, 5, 3, 6]
Explanation:// The Green nodes represent the bottom view of below binary tree.
    
Input: root = [20, 8, 22, 5, 3, 4, 25, N, N, 10, 14, N, N, 28, N]
    
Output: [5, 10, 4, 28, 25]
Explanation: //The Green nodes represent the bottom view of below binary tree.                                               
Constraints
//1 ≤ number of nodes ≤ 105
//1 ≤ node->data ≤ 105  



/*
class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}
*/

class Solution {
    bottomView(root) {
        if (!root) return [];

        // Map to store horizontal distance -> node value
        let hdMap = new Map();

        // Queue for level order traversal: stores pair [node, horizontalDistance]
        let queue = [[root, 0]];

        while (queue.length > 0) {
            let [node, hd] = queue.shift();

            // Update the map with the current node (later nodes override earlier ones)
            hdMap.set(hd, node.data);

            // Enqueue left and right children with updated horizontal distances
            if (node.left) queue.push([node.left, hd - 1]);
            if (node.right) queue.push([node.right, hd + 1]);
        }

        // Sort the map by horizontal distance and extract the node values
        let sortedKeys = Array.from(hdMap.keys()).sort((a, b) => a - b);
        let result = sortedKeys.map(key => hdMap.get(key));

        return result;
    }
}

