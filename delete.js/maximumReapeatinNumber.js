//Given an array Arr of size N, the array contains numbers in range from 0 to K-1 where K is a positive integer and K <= N.
// Find the maximum repeating number in this array. If there are two or more maximum repeating numbers return the element having least value.


Input:
N = 4, K = 3
Arr = //{2, 2, 1, 2}
Output// 2
Explanation //2 is the most frequent element.

class Solution{
    maxRepeating(arr,n,k){
        //code here
        let ans = 0;
        
        let brr =new Array(k).fill(0);  ;
        
        for(let x of arr){
            ++brr[x];
        }
        
        for(let i = 1; i<k; i++){
            if(brr[ans] < brr[i]){
                ans = i;
            }
        }
        
        return ans;
    }
}




//Given a Binary Search Tree, modify the given BST such that it is balanced and has minimum possible height. Return the balanced BST.

Example1:

Input:
       30
      /
     20
    /
   10
Output
    // 20
   ///   \
 //10     30


 class Solution
{ 
  buildBalancedTree(root){
     //code here
     let nodes = [];
        this.inOrder(root, nodes);
        return this.buildTree(nodes, 0, nodes.length - 1);
    }

    inOrder(root, nodes) {
        if (!root) return;
        this.inOrder(root.left, nodes);
        nodes.push(root);
        this.inOrder(root.right, nodes);
    }
    buildTree(nodes, start, end) {
        if (start > end) {
            return null;
        }

        let mid = Math.floor((start + end) / 2);
        let root = nodes[mid];

        root.left = this.buildTree(nodes, start, mid - 1);
        root.right = this.buildTree(nodes, mid + 1, end);

        return root;
  }
}  



//A valid cut in a circle can be:

//A cut that is represented by a straight line that touches two points on the edge of the circle and passes through its center, or
//A cut that is represented by a straight line that touches one point on the edge of the circle and its center.


//Given the integer n, return the minimum number of cuts needed to divide a circle into n equal slices.


var numberOfCuts = function(n) {
    if (n == 1) return 0;
           return n % 2 > 0 ? n : n / 2;   
   };



