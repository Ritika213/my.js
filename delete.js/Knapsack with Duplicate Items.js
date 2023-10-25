//Given a set of N items, each with a weight and a value, represented by the array w and val respectively. Also, a knapsack with weight limit W.
//The task is to fill the knapsack in such a way that we can get the maximum profit. Return the maximum profit.
Note: //Each item can be taken any number of times.

Input: 
N = 2
W = 3
val = //{1, 1}
wt = //{2, 1}
Output //3
Explanation: 
1.//Pick the 2nd element thrice.
2.//Total profit = 1 + 1 + 1 = 3. Also the total weight = 1 + 1 + 1  = 3 which is <= 3.


class Solution {

    knapSack(N,W,val,wt){
        //code here
        let dp = Array(W + 1).fill(0); // Create a 1D array to store the maximum value for each weight

    for (let w = 1; w <= W; w++) {
        for (let i = 0; i < N; i++) {
            if (wt[i] <= w) {
                dp[w] = Math.max(dp[w], dp[w - wt[i]] + val[i]);
            }
        }
    }

    return dp[W]; 
    }
}


//We build a table of n rows (1-indexed). We start by writing 0 in the 1st row. Now in every subsequent row, we look at the previous row and replace each occurrence of 0 with 01, and each occurrence of 1 with 10.

//For example, for n = 3, the 1st row is 0, the 2nd row is 01, and the 3rd row is 0110.
//Given two integer n and k, return the kth (1-indexed) symbol in the nth row of a table of n rows.


Input: n = 1, k = 1
Output: 0
Explanation: //row 1: 0

Input: n = 2, k = 1
Output: 0
Explanation 
//row 1: 0
//row 2: 01

var kthGrammar = function(n, k) {
    if(n==1 && k==1)
     return 0;
     const mid = Math.pow(2, n-1)/2;
     if(k<=mid){
         return kthGrammar(n-1, k)
     }
     else{
         return !kthGrammar(n-1, k-mid)
     } 
 };



 //stack designer

 //You are given an array arr of size N. You need to push the elements of the array into a stack and then print them while popping.


Input:
n = 5
arr = //{1 2 3 4 5}
Output //5 4 3 2 1

function pushAndPop(arr) {
    const stack = [];

    // Push elements into the stack
    for (let i = 0; i < arr.length; i++) {
        stack.push(arr[i]);
    }

    // Print elements while popping from the stack
    while (stack.length > 0) {
        console.log(stack.pop());
    }
}

// Example usage
const arr = [1, 2, 3, 4, 5];
pushAndPop(arr);
