//Given a Binary Tree of nodes, you need to find all the possible paths from the root node to all the leaf nodes of the binary tree.

//Example 1:

Input:
 //      1
//    /     \
//   2       3
Output: 
//1 2 
//1 3 
Explanation 
//All possible paths:
//1->2
//1->3

//Example 2:

Input:
      //   10
    //   /    \
   //   20    30
  //   /  \
 //   40   60
Output: 
//10 20 40 
//10 20 60 
//10 30 
 Task
//Your task is to complete the function Paths() which takes the root node as an argument and returns all the possible paths.
// (All the paths are printed in new lines by the driver's code.)

//Expected Time Complexity: O(n)
//Expected Auxiliary Space: O(height of the tree)

Constraints:
1<=n<=104

class Solution {
    /**
    * @param Node root
    
    * @returns number[][]
    */
      findingPaths(root,paths,path){
             if (root === null)
                return;
    
            path.push(root.data);
    
            if (root.left === null && root.right === null)
                paths.push([...path]);
    
            this.findingPaths(root.left, paths, path);
            this.findingPaths(root.right, paths, path);
    
            path.pop();
        }
        Paths(root) {
            
            let paths=[];
            let path=[];
            
            this.findingPaths(root, paths, path);
            
            return paths;
        
        }
    }
            