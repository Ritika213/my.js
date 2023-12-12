//Given a gold mine called M of (n x m) dimensions. Each field in this mine contains a positive integer which is the amount of gold in tons. 
//Initially the miner can start from any row in the first column. From a given cell, the miner can move

//to the cell diagonally up towards the right 
//to the right
//to the cell diagonally down towards the right Find out maximum amount of gold which he can collect until he can no longer move.

Input: n = 3, m = 3
M =// {{1, 3, 3},
    // {2, 1, 4},
    // {0, 6, 4}};
Output// 12
Explaination 
//The path is {(1,0) -> (2,1) -> (2,2)}.

class Solution {
    constructor() {
        this.ans = 0;
        this.dp = [];
    }

     help(i, j, n, m, M) {
        if (i < 0 || i >= n) return Number.MIN_SAFE_INTEGER;
        if (j === m) return 0;
        if (this.dp[i][j] !== -1) return this.dp[i][j];
        return this.dp[i][j] = M[i][j] + Math.max(
            this.help(i - 1, j + 1, n, m, M),
            this.help(i, j + 1, n, m, M),
            this.help(i + 1, j + 1, n, m, M)
        );
    }
  maxGold(n,m,M){
    //code her
    for (let i = 0; i <= n; i++) {
            this.dp[i] = Array(m + 1).fill(-1);
        }

        for (let i = 0; i < n; i++) {
            this.ans = Math.max(this.ans, this.help(i, 0, n, m, M));
        }
        return this.ans;
  }
}


//maximum product of two element of  an array

//Given the array of integers nums, you will choose two different indices i and j of that array. Return the maximum value of
// (nums[i]-1)*(nums[j]-1).
 
//Example 1:

Input: nums = [3,4,5,2]
Output: 12 
Explanation: //If you choose the indices i=1 and j=2 (indexed from 0), you will get the maximum value, that is, (nums[1]-1)*(nums[2]-1) = (4-1)*(5-1) = 3*4 = 12. 
//Example 2:

Input: nums = [1,5,4,5]
Output: 16
Explanation: //Choosing the indices i=1 and j=3 (indexed from 0), you will get the maximum value of (5-1)*(5-1) = 16.
//Example 3:

Input: nums = [3,7]
Output: 12

var maxProduct = function(nums) {

    let max = 0;
    for(let i =0; i<nums.length; i++){
      for(let k =i+1; k<nums.length; k++){
        let product = (nums[i]-1) * (nums[k]-1)
        if(product > max){
            max = product
        }
      }
    }
    return max
  };  

  
  //union of two arrays

 // Given two arrays a[] and b[] of size n and m respectively. The task is to find the number of elements in the union between these two arrays.

//Union of the two arrays can be defined as the set containing distinct elements from both the arrays. If there are repetitions, then only
// one occurrence of element should be printed in the union.

Note :// Elements are not necessarily distinct.

Input:
//5 3
//1 2 3 4 5
//1 2 3
Output: 
5
Explanation 
//1, 2, 3, 4 and 5 are the elements which comes in the union set of both arrays. So count is 5.

class Solution {
    //Function to return the count of number of elements in union of two arrays.
    doUnion(a, n, b, m){
        // code here
         const v = [...a]; // Create a new array and copy elements from 'a'
    let cnt = 0;

    for (let i = 0; i < b.length; i++) {
        v.push(b[i]); // Append elements from 'b' to the array 'v'
    }

    v.sort((x, y) => x - y); // Sort the array in ascending order

    for (let i = 0; i < v.length; i++) {
        if (v[i] !== v[i + 1]) {
            cnt++;
        }
    }

    return cnt;

    }
    
}