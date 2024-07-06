//Given a Binary Tree, complete the function to populate the next pointer for all nodes. The next pointer for every node should point to the Inorder 
//successor of the node.
//You do not have to return or print anything. Just make changes in the root node given to you.

Note: //The node having no in-order successor will be pointed to -1. You don't have to add -1 explicitly, the driver code will take care of this.

Examples :

Input:
     //  10
     //  /  \
    //  8   12
    // /
    //3
Output:// 3->8 8->10 10->12 12->-1
Explanation// The inorder of the above tree is : 3 8 10 12. So the next pointer of node 3 is pointing to 8 , next pointer of 8 is pointing to 
//10 and so on.And next pointer of 12 is pointing to -1 as there is no inorder successor of 12.

Input:
       1
      /  
     2 
   /
 3  
Output:// 3->2 2->1 1->-1
Explanation: //The inorder of the above tree is: 3 2 1. So the next pointer of node 3 is pointing to 2 , next pointer of 2 is pointing to 1. 
//And next pointer of 1 is pointing to -1 as there is no inorder successor of 1.
//Expected Time Complexity: O(n)
//Expected Auxiliary Space: O(1)

Constraints
//1<= no. of nodes <=105
//1<= data of the node <=105

class Solution {
    /**
    * @param Node root

    * @returns none
    */
    populateNext(root) {
        
      let stack = []; // Initialize the stack as an array
        let current = root; // Start from the root
        let prev = null; // To keep track of the previous node

        // Traverse the tree in in-order (left, root, right)
        while (stack.length > 0 || current !== null) {
            // Reach the leftmost node of the current node
            while (current !== null) {
                stack.push(current);
                current = current.left;
            }

            // Current is now null, process the node on the top of the stack
            current = stack.pop();

            // If there was a previous node, link its next to the current node
            if (prev !== null) {
                prev.next = current;
            }
             // Update the previous node to be the current one
            prev = current;

            // Move to the right subtree
            current = current.right;
        }

        // The last node's next will be null (already the case in JavaScript)
    
    }
}