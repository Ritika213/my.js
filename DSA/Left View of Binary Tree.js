//Given a Binary Tree, return Left view of it. Left view of a Binary Tree is set of nodes visible when tree is visited from Left side. 
//The task is to complete the function leftView(), which accepts root of the tree as argument. If no left view is possible, return an empty tree.

//Left view of following tree is 1 2 4 8.

     //     1
    //   /     \
  //   2        3
 //  /     \    /    \
 // 4     5   6    7
//   \
     8   

//Examples :

Examples :

Input
 //  1
// /  \
//3    2
//Output: 1 3

//Input:

Output:// 10 20 40
//Expected Time Complexity: O(N).
//Expected Auxiliary Space: O(N).

Constraints
//0 <= Number of nodes <= 105
//0 <= Data of a node <= 105


class Solution {
    leftView(root) {
        let ans = [];
        this.leftViewUtil(root, 0, ans);
        return ans;
    }

    leftViewUtil(node, level, ans) {
        if (node === null) {
            return;
        }

        // If this is the first node of its level
        if (ans.length === level) {
            ans.push(node.data);
        }

        // Recursively visit the left subtree first, then the right subtree
        this.leftViewUtil(node.left, level + 1, ans);
        this.leftViewUtil(node.right, level + 1, ans);
    }
}
