//Given two strings s and t of length n and m respectively. Find the count of distinct occurrences of t in s as a sub-sequence modulo 109 + 7.


Input:
s = "banana" , t = "ban"
Output: 
3
Explanation 
//There are 3 sub-sequences:[ban], [ba n], [b an].

class Solution {
    subsequenceCount(S,T){
      
        let n = S.length;
      let m  = T.length;
   
      let mod = (1e9 + 7);
   
      let dp = new Array(n + 1).fill().map(() => new Array(m + 1).fill(0))
      for(let i = 0;i <=n;i++)
      {
          dp[i][0] = 1;
      }
      for(let i = 1;i <=n;i++)
      {
          for(let j =1;j <=m;j++)
          {
              if(S.charAt(i -1) == T.charAt(j -1 ))
              {
                  dp[i][j] = (dp[i -1][j -1] + dp[i -1][j] )%mod; 
              }else
              {
                  dp[i][j] = dp[i-1][j] %mod;
              }
          }
      }
      return dp[n][m];
    }
  }