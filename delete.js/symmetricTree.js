//Given a Binary Tree. Check whether it is Symmetric or not, i.e. whether the binary tree is a Mirror image of itself or not.

//Example 1:

Input:
       //  5
      // /   \
      //1     1
     ///       \
   // 2         2
Output: 
True
Explanation: 
//Tree is mirror image of itself i.e. tree is symmetric
//Example 2:

Input:
         //5
      // /   \
      //10     10
     ///  \     \
    //20  20     30
Output: 
False
 Task:
//You don't need to read input or print anything. Your task is to complete the function isSymmetric() which takes the root of the Binary Tree as its 
//input and returns True if the given Binary Tree is the same as the Mirror image of itself. Else, it returns False.

//Expected Time Complexity: O(N).
//Expected Auxiliary Space: O(Height of the Tree).

Constraints:
0<=N<=105


class Solution {
    
    isSymmetric(root) {
        // If the tree is empty, it is symmetric
        if (root === null) {
            return true;
        }

        function isMirror(left, right) {
            // If both nodes are null, they are mirrors
            if (left === null && right === null) {
                return true;
            }

            // If one of the nodes is null or their keys are not equal, they are not mirrors
            if (left === null || right === null || left.key !== right.key) {
                return false;
            }

            // Check if the left subtree's left is a mirror of the right subtree's right
            // and the left subtree's right is a mirror of the right subtree's left
            return isMirror(left.left, right.right) && isMirror(left.right, right.left);
        }

        // Call the helper function to check if the whole tree is symmetric
        return isMirror(root.left, root.right);
    }
}

//This recursive approach checks if the left and right subtrees are mirrors of each other by comparing their values and recursively checking 
//the values of their children. This should have a time complexity of O(N), where N is the number of nodes in the tree.