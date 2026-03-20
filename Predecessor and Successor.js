//given the root of a BST and an integer key. You need to find the inorder predecessor and successor of the given key. If either 
// predecessor or successor is not found, then set it to NULL.

Note: //In an inorder traversal the number just smaller than the target is the predecessor and the number just greater than the
//  target is the successor. 

Examples :

Input: root = [50, 30, 70, 20, 40, 60, 80], key = 65
Output: [60, 70]
Explanation: //In the given BST the inorder predecessor of 65 is 60 and inorder successor of 65 is 70.

Input: root = [8, 1, 9, N, 4, N, 10, 3], key = 8
Output: [4, 9]
Explanation: //In the given BST the inorder predecessor of 8 is 4 and inorder successor of 8 is 9.

Constraints
//1 ≤ no. of nodes ≤ 105
//0 ≤ node->data ≤ 106
//1 ≤ key ≤ 106

/**
 * @param {Node} root
 * @param {number} key
 * @returns {number[]}
 */

/*
class Node {
    constructor(x) {
        this.data = x;
        this.left = null;
        this.right = null;
    }
}
*/

class Solution {
    findPreSuc(root, key) {
        
         let ans=[null, null];
        let node=root;
        while(node){
            if(node.data<key){
                ans[0]=node;
                node=node.right;
            }else node=node.left;
        }
        node=root;
        while(node){
            if(node.data>key){
                ans[1]=node;
                node=node.left;
            }else node=node.right;
        }
        return ans;
    }
}

