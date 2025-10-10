//Given the root of a binary tree. You have to find the zig-zag level order traversal of the binary tree.
Note:// In zig zag traversal we traverse the nodes from left to right for odd-numbered levels, and from right to left for even-numbered levels.

Examples:

Input: root = [1, 2, 3, 4, 5, 6, 7]
          
Output: [1, 3, 2, 4, 5, 6, 7]
Explanation
//Level 1 (left to right): [1]
//Level 2 (right to left): [3, 2]
//Level 3 (left to right): [4, 5, 6, 7]
//Final result: [1, 3, 2, 4, 5, 6, 7]

Input: root = [7, 9, 7, 8, 8, 6, N, 10, 9]
 
Output: [7, 7, 9, 8, 8, 6, 9, 10] 
Explanation:
//Level 1 (left to right): [7]
//Level 2 (right to left): [7, 9]
//Level 3 (left to right): [8, 8, 6]
//Level 4 (right to left): [9, 10]
//Final result: [7, 7, 9, 8, 8, 6, 9, 10]
Constraints
//1 ≤ number of nodes ≤ 105
//1 ≤ node->data ≤ 105

class Solution 
{
    //Function to store the zig zag order traversal of tree in a list.
    zigZagTraversal(root)
    {
        //your code here
        let ans =[];
    	let turn = false;
    	let q=[];
    	q.push(root);
    	while(q.length !==0){
    	    let size = q.length;
    	    let temp= new Array(size);
    	    for(let i=0;i<size;i++){
    	        let top = q.shift();
    	        if(turn) temp[size-i-1] = top.data;
    	        else temp[i] = top.data;
    	        if(top.left){
    	            q.push(top.left);
    	        }
    	        if(top.right){
    	            q.push(top.right);
    	        }
    	    }
    	    
	        for(let it of temp) ans.push(it);
    	    turn = !turn;
    	}
    	return ans;
    }
}