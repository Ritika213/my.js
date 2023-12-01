//Given a Binary Search Tree that contains unique positive integer values greater than 0. The task is to complete the function isDeadEnd which 
//returns true if the BST contains a dead end else returns false. Here Dead End means a leaf node, at which no other node can be inserted.


Input :   
              // 8
            // /   \ 
          // 5      9
        // /  \     
        //2    7 
       ///
      //1     
          
Output : 
Yes
Explanation  
//Node 1 is a Dead End in the given BST.

class Solution{

    solve(root, check) {
   if (root === null) return false;
   if (check[root.data - 1] === true  && check[root.data + 1] === true) {
       return true;
   }

   check[root.data] = true;

   return this.solve(root.left, check) || this.solve(root.right, check);
}
   isDeadEnd(root){

     let check = new Array(10003).fill(false);
   check[0] = true;
   check[10002] = true;

   let res = this.solve(root, check);
   return res;
   }

} 


//check if two string arrays are equivalent

//Given two string arrays word1 and word2, return true if the two arrays represent the same string, and false otherwise.

//A string is represented by an array if the array elements concatenated in order forms the string.


Input: word1 = ["ab", "c"], word2 = ["a", "bc"]
Output: true
Explanation
//word1 represents string "ab" + "c" -> "abc"
//word2 represents string "a" + "bc" -> "abc"
//The strings are the same, so return true.

var arrayStringsAreEqual = function(word1, word2) {
    let join1=word1.join("")
    let join2=word2.join("")  
    if(join1===join2){
        return true;
    } {return false}
  };

  //reverse array in groups

  //Given an array arr[] of positive integers of size N. Reverse every sub-array group of size K.

Note: //If at any instance, there are no more subarrays of size greater than or equal to K, then reverse the last subarray 
//(irrespective of its size). You shouldn't return any array, modify the given array in-place.

Input:
N = 5, K = 3
arr = //{1,2,3,4,5}
Output// 3 2 1 5 4
Explanation //First group consists of elements
//1, 2, 3. Second group consists of 4,5.

class Solution {
    //Function to reverse every sub-array group of size k.
    reverseInGroups(arr, n, k){
       
        for(var i=0;i<n;i+=k){
           let left=i;
        let right=Math.min(i+k-1,n-1);
        let temp;
        while(left<right){
        temp=arr[left];
        arr[left]=arr[right];
        arr[right]=temp;
        left+=1;
        right-=1;
}
}
return arr;
}
}