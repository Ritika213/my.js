//Given inorder and postorder traversals of a binary tree(having n nodes) in the arrays in[] and post[] respectively. The task 
//is to construct a binary tree from these traversals.Driver code will print the preorder traversal of the constructed tree.

Input:
n = 8
in //= {4, 8, 2, 5, 1, 6, 3, 7}
post// = {8, 4, 5, 2, 6, 7, 3, 1}
Output: 
//1 2 4 8 5 3 6 7
Explanation 
//For the given postorder and inorder traversal of tree the  resultant binary tree will be
       //   1
     //  /      \
   //  2        3
  // /  \      /  \
 // 4   5    6   7
//   \
 //   8

// Example 2:

Input:
n = 5
in// = {9, 5, 2, 3, 4}
post// = {5, 9, 3, 4, 2}
Output: 
//2 9 5 4 3
Explanation  
//The  resultant binary tree will be
          // 2
       // /     \
      // 9      4
      //  \     /
     //    5   3

    //Task:
    // You do not need to read input or print anything. Complete the function buildTree() which takes the inorder, postorder traversals
    // and the number of nodes in the tree as input parameters and returns the root node of the newly constructed Binary Tree.
     
     //Expected Time Complexity: O(n2)
    // Expected Auxiliary Space: O(n)
     
     Constraints:
     1 <= n <= 103
    // 1 <= in[i], post[i] <= 106   



    class Solution 
{
    //Function to return a tree created from postorder and inoreder traversals.
    buildTree(ino, post, n)
    {
        //your code here
    if (n === 0) {
            return null;
        }

        // Find the root node index in inorder traversal
        let rootIndex = ino.indexOf(post[n - 1]);

        // Create the root node with the value from postorder traversal
        let root = new Node(post[n - 1]);

        // Recursively build left subtree using elements before root in inorder traversal
        let leftSubtree = this.buildTree(ino.slice(0, rootIndex), post.slice(0, rootIndex), rootIndex);

        // Recursively build right subtree using elements after root in inorder traversal
        let rightSubtree = this.buildTree(ino.slice(rootIndex + 1), post.slice(rootIndex, n - 1), n - rootIndex - 1);
        
        // Connect left and right subtrees to the root node
        root.left = leftSubtree;
        root.right = rightSubtree;

        return root;
    
    }
}