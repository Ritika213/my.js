//Given an array arr[ ] consisting of distinct integers, check if the given array can represent preorder traversal of a BST.

Examples :

Input: arr = [2, 4, 3]
Output: true
Explaination:// Given arr[] can represent preorder traversal of following BST:
 
Input: arr = [2, 4, 1]
Output: false
Explaination:// Given arr[] cannot represent preorder traversal of a BST.
Constraints
//1 ≤ arr.size() ≤ 105
//0 ≤ arr[i] ≤ 105

class Solution {
    canRepresentBST(arr) {
        
      let st = [];
        let lowerBound = -Infinity;

        for (let value of arr) {

            if (value < lowerBound)
                return false;

            while (st.length > 0 && value > st[st.length - 1]) {
                lowerBound = st.pop();
            }

            st.push(value);
        }

        return true;  
    }
}