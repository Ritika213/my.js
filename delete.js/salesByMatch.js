//There is a large pile of socks that must be paired by color. Given an array of integers representing the color of each sock, 
//determine how many pairs of socks with matching colors there are.

Example
n=7;
ar=[1,2,1,2,1,3,2]


//There is one pair of color 1 and one of color 2. There are three odd socks left, one of each color. The number of pairs is 2.

//Sample Input

//STDIN                       Function
//-----                       --------
9                           //n = 9
//10 20 20 10 10 30 50 10 20  ar = [10, 20, 20, 10, 10, 30, 50, 10, 20]
//Sample Output

3
Explanation

function sockMerchant(n, ar) {
    // Write your code here
let pairs=0;
let search= new Set()
for(const sock of ar){
    if(search.has(sock)){
        pairs++;
        search.delete(sock);
    }
    else {
        search.add(sock);
    }
}
  return pairs;      

}

//Find all factorial numbers less than or equal to N

//A number N is called a factorial number if it is the factorial of a positive integer. For example, the first few factorial numbers are 
//1, 2, 6, 24, 120,
//Given a number N, the task is to return the list/vector of the factorial numbers smaller than or equal to N

Input: N = 3
Output:// 1 2
Explanation //The first factorial number is 1 which is less than equal to N. The second number is 2 which is less than equal to N,
//but the third factorial number is 6 which is greater than N. So we print only 1 and 2.

class Solution
{
    //Function to calculate the factorial of a number.
    factorialNumbers(N)
    {
        //your code here
        const result = [];
  let i = 1;
  let f = 1;

  while (f <= N) {
    result.push(f);
    f *= ++i;
  }

  return result;
    }
}

//k sum paths

//Given a binary tree and an integer K. Find the number of paths in the tree which have their sum equal to K.
//A path may start from any node and end at any node in the downward direction.
//Since the answer may be very large, compute it modulo 109+7.


Input:      
Tree = 
          //1                               
        ///   \                          
       //2     3
K = 3
Output: 
2
Explanation
//Path 1 : 1 + 2 = 3
//Path 2 : only leaf node 3
//Example 2:
//treeNode class
class TreeNode {
    constructor(val) {
      this.val = val;
      this.left = this.right = null;
      //This class defines a basic structure for a binary tree node, with a value (val) and left and right child pointers.
    }
  }
  
  function func(node, mp, k, sum) {
    if (!node) {
      return 0;
    }
  
    sum += node.val;
    let count = mp.get(sum - k) || 0;
    mp.set(sum, (mp.get(sum) || 0) + 1);
  
    const leftCount = func(node.left, mp, k, sum);
    const rightCount = func(node.right, mp, k, sum);
  
    mp.set(sum, mp.get(sum) - 1);
  
    return count + leftCount + rightCount;
    //This function recursively traverses the binary tree, keeping track of the prefix sum (sum) and using a Map (mp) to store the 
    //frequency of prefix sums. It counts the number of paths whose sum is equal to the target k. The logic involves updating the prefix
    // sum map and recursively exploring the left and right subtrees.
  }
  
  function sumK(root, k) {
    const mp = new Map();
    mp.set(0, 1);
    return func(root, mp, k, 0);
    //This function initializes the prefix sum map with a single entry, mp.set(0, 1), and then calls the func function to compute the 
    //total number of paths with a sum equal to k.

  }
  
  // Example usage:
  const root = new TreeNode(1);
  root.left = new TreeNode(2);
  root.right = new TreeNode(3);
  const K = 3;
  const result = sumK(root, K);
  console.log(result);
  


