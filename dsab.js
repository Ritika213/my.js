//Given a number N, find the Nth term in the series 1, 3, 6, 10, 15, 21…
Input :
N = 4 
Output:
10
Explanation
//The 4th term of the Series is 10.

class Solution {
    findNthTerm(N){
       //code here
        let sum = 0;
      for ( let i = 1; i <= N; i++){
          sum += i;
      }
      return sum;
    }
}
