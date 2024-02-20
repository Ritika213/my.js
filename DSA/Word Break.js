//Given a string A and a dictionary of n words B, find out if A can be segmented into a space-separated sequence of dictionary words. Return 1 
//if it is possible to break A into sequence of dictionary words, else return 0. 

Note: //From the dictionary B each word can be taken any number of times and in any order.

Input:
n = 6
B =// { "i", "like", "sam", "sung", "samsung", "mobile"}
A = "ilike"
Output:
1
Explanation //The string can be segmented as "i like".

class Solution {
    wordBreak(A,B){
      
      let n= A.length;
      let dp= new Array(n+1).fill(false)
      dp[0] = true;
      for(let i=1;i<=n;i++){
          for(let j=0;j<i;j++){
              if(dp[j] && B.includes(A.substring(j,i))){
                  dp[i]= true;
                  break;
              }
          }
      }
      return dp[n] ? 1 : 0;
    }
  }