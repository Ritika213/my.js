//A Toeplitz (or diagonal-constant) matrix is a matrix in which each descending diagonal from left to right is constant,
// i.e., all elements in a diagonal are same.Given a matrix A of order N X M your task is to complete the function isToeplitz 
//which returns true if the matrix is Toeplitz otherwise returns false.

Input: //3 3 6 7 8 4 6 7 1 4 6 
Output: 1
Explanation://The test case represents a 3x3 matrix which looks like 
// 6 7 8 
 //4 6 7 
 //1 4 6
Output //1(True) as values in all diagonals are same.

class Solution {
    isToepliz(A, N, M) {
      //code here
      for(let i=0;i<N-1;i++){
      for(let j=0;j<M-1;j++){
          if(A[i][j]!=A[i+1][j+1]){
              return 0;
          }
      }
  }
  return 1;
    }
  }

  
  //Given n, a and d as the number of terms, first term and common difference respectively of an Arthimetic Series. 
  //Find the sum of the series upto nth term.

Input:// 5 1 3
Output: 35
Explanation:// Series upto 5th term is1 4 7 10 13, so sum will be 35.

class Solution{
    sum_of_ap(n, a, d){
        //code here
       return (n*(2*a+(n-1)*d))/2; 
    }
}
