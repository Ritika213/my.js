//Given a Binary Tree of n nodes, find all the nodes that don't have any siblings. You need to return a list of integers containing 
//all the nodes that don't have a sibling in sorted order (Increasing).

//Two nodes are said to be siblings if they are present at the same level, and their parents are the same.

Note// The root node can not have a sibling so it cannot be included in our answer.

//Example 1:

Input :
       37
      /   
    20
    /     
  113 

Output: 
//20 113
Explanation 
//Nodes 20 and 113 dont have any siblings.

//Example 2:

Input :
      // 1
    //  / \
   //  2   3 

Output: 
-1
Explanation: 
//Every node has a sibling.
Task  
//don't need to read input or print anything. Complete the function noSibling() which takes the root of the tree as input parameter and 
//returns a list of integers containing all the nodes that don't have a sibling in sorted order. If all nodes have a sibling, then the 
//returning list should contain only one element -1.

//Expected Time Complexity: O(nlogn)
//Expected Auxiliary Space: O(Height of the tree)

Constraints
//1 ≤ n ≤ 104

class Solution {
    noSibling(root){
        
       let ans = [];
      let queue = [root]; // Initialize the queue with the root node

      while (queue.length > 0) {
          let frontNode = queue.shift(); // Dequeue the front node
          
          if (frontNode.left && !frontNode.right) {
              ans.push(frontNode.left.data);
          }
          if (frontNode.right && !frontNode.left) {
              ans.push(frontNode.right.data);
          }
          if (frontNode.left) queue.push(frontNode.left); // Enqueue left child if exists
          if (frontNode.right) queue.push(frontNode.right); // Enqueue right child if exists
      }

      ans.sort((a, b) => a - b); // Sort the answer array in ascending order
      if (ans.length > 0) return ans;
      return [-1]; // Return [-1] if no such node is found	
    }
}