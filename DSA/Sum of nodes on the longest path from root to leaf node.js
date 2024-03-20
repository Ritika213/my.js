//Given a binary tree having n nodes. Find the sum of all nodes on the longest path from root to any leaf node. If two or more paths compete 
//for the longest path, then the path having maximum sum of nodes will be considered.

//Example 1:

Input: 
      //  4        
      // /  \       
     // 2   5      
    // / \   /  \     
    //7  1 2  3    
    //  /
     6
Output: 
13
Explanation
       // 4        
      // /  \       
     // 2   5      
    /// \   /  \     
    //7  1 2  3 
    //  /
    // 6
//The highlighted nodes (4, 2, 1, 6) above are part of the longest root to leaf path having sum = (4 + 2 + 1 + 6) = 13

//Example 2:

Input: 
        //  1
       // /   \
      // 2    3
     // / \    /  \
    // 4   5 6   7
Output: 
11
Explanation:
//Use path 1->3->7, with sum 11.
Task
// don't need to read input or print anything. Your task is to complete the function sumOfLongRootToLeafPath() which takes root node
// of the tree as input parameter and returns an integer denoting the sum of the longest root to leaf path of the tree.

//Expected Time Complexity: O(n)
//Expected Auxiliary Space: O(n)

Constraints:
1 <= n <= 105
//0 <= data of each node <= 104

class Solution {
    sumOfLongRootToLeafPath(root) {
      
      let ans = 0;
      let q = [];
      q.push({node: root, sum: 0});
  
      while (q.length > 0) {
        let n = q.length;
        let p = 0;
  
        while (n--) {
          let { node, sum } = q.shift();
          let cs = sum + node.data;
          p = Math.max(p, cs);
  
          if (node.left) {
            q.push({node: node.left, sum: cs});
          }
          if (node.right) {
            q.push({node: node.right, sum: cs});
          }
        }
  
        ans = p;
      }
  
      return ans;
    }
  }
  