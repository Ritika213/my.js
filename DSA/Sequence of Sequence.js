//Given two integers m and n, try making a special sequence of numbers seq of length n such that

seqi+1 >= 2*seqi 
seqi > 0
seqi <= m
//task is to determine total number of such special sequences possible.

Input: 
m = 10
n = 4
Output: 
4
Explaination 
//There should be n elements and value of last element should be at-most m. The sequences are {1, 2, 4, 8}, {1, 2, 4, 9}, {1, 2, 4, 10}, {1, 2, 5, 10}.

class Solution {
    numberSequence(m, n) {
      // code here
      if (n === 0) {
        return 0;
      }
  
      if (n === 1) {
        return m;
      }
  
      let sum = 0;
  
      for (let i = 1; i <= m; i++) {
        sum += this.numberSequence(Math.floor(i / 2), n - 1);
      }
  
      return sum;
    }
  }
