//Given a sorted array. Convert it into a Height Balanced Binary Search Tree (BST). Return the root of the BST.

//Height-balanced BST means a binary tree in which the depth of the left subtree and the right subtree of every node never differ by more than 1.

Note: //The driver code will check the BST, if it is a Height-balanced BST, the output will be true otherwise the output will be false.

Examples :

Input: nums = [1, 2, 3, 4]
Output: true
Explanation:// The preorder traversal of the following BST formed is [2, 1, 3, 4]:
           2
        // /   \
       // 1     3
        //       \
       //         4

       Input: nums = [1, 2, 3, 4, 5, 6, 7]
Ouput: true
Explanation: //The preorder traversal of the following BST formed is [4, 2, 1, 3, 6, 5, 7]:
        4
      // / \
    //  2   6
   //  / \   / \
   // 1 3  5 7
//Expected Time Complexity: O(n)
//Expected Auxillary Space: O(n)

Constraints
//1 ≤ nums.size() ≤ 105
//1 ≤ nums[i] ≤ 105


class Solution {
    sortedArrayToBST(nums) {
        // code here
        // Helper function to construct the BST
        const helper = (start, end) => {
            if (start > end) return null;
            const mid = start + Math.floor((end - start) / 2);
            const root = new Node(nums[mid]);
            root.left = helper(start, mid - 1); // Correcting the range for the left subtree
            root.right = helper(mid + 1, end); // Correcting the range for the right subtree
            return root; // Return the root after assigning left and right children
        };
        return helper(0, nums.length - 1);
     
        
    }
}

