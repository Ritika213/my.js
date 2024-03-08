//Consider a sample space S consisting of all perfect squares starting from 1, 4, 9 and so on. You are given a number N, you have
// to output the number of integers less than N in the sample space S.


Input :
N = 9
Output:
2
Explanation
//1 and 4 are the only Perfect Squares less than 9. So, the Output is 2.

class Solution {
    
       countSquares( N) {
          // code here
       let temp=0;
          for(let i=1; i*i<N; i++)
          {
              temp++;
          }
          return temp;
      }
  };
      