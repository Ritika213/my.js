//Given an integer rowIndex, return the rowIndexth (0-indexed) row of the Pascal's triangle.

//In Pascal's triangle, each number is the sum of the two numbers directly above .

Input: rowIndex = 3
Output: [1,3,3,1]

var getRow = function(rowIndex) {
    let res = [];
    for(let i=0;i<=rowIndex;i++){
        res[i] = [];
        res[i][0] = 1;
        for(let j=1;j<i;j++){
            res[i][j] = res[i-1][j-1]+ res[i-1][j];
        }
        res[i][i] = 1;
    }
    return res[rowIndex];
  
};


//Given an unsorted array arr of size N, rearrange the elements of array such that number at the odd index is greater than
// the number at the previous even index. The task is to complete the function formatArray() which will return formatted array.

NOTE:
//If the returned array formed is according to rules, 1 will be printed else 0 will be printed.

//Example 1:

Input:
n = 5
arr = //{5, 4, 3, 2, 1}

Output
1
Explanation://The given array after modification will be as such: 4 5 2 3 1.

//Example 2:

Input:
n = 4
arr = //{4, 3, 2, 1}

Output
1

       
class Solution{
    formatArray(arr,n){
        //code here
       let temp;
       for(let i=0;i<n;i++){
           if(i%2!=0){
               if(arr[i]<arr[i-1]){
                   temp=arr[i];
                   arr[i]=arr[i-1];
                   arr[i-1]=temp;
               }
           }
       }
       return arr;
    }
}



//Given a positive integer n, find the pivot integer x such that:

//The sum of all elements between 1 and x inclusively equals the sum of all elements between x and n inclusively.
//Return the pivot integer x. If no such integer exists, return -1. It is guaranteed that there will be at most one pivot
// index for the given input.


Input: n = 8
Output: 6
Explanation //6 is the pivot integer since: 1 + 2 + 3 + 4 + 5 + 6 = 6 + 7 + 8 = 21.

var pivotInteger = function(n) {
    let sum = n*(n+1)/2;
  
      let leftSum = 0;
      let rightSum = 0;
  
      for (let i = 1; i <= n; i++)
      {
          rightSum = sum  - i - leftSum;
          if (leftSum == rightSum)
          {
              return i;
          }
          leftSum += i;
      }
      return -1;  
  };