//Given two strings X and Y of lengths m and n respectively, find the length of the smallest string which has both, X and Y as its sub-sequences.

Note: //X and Y can have both uppercase and lowercase letters.

Input:
X = abcd, Y = xycd
Output: 6
Explanation //Shortest Common Supersequence would be abxycd which is of length 6 and has both the strings as its subsequences

class Solution
{
    //Function to find length of shortest common supersequence of two strings.
    shortestCommonSupersequence(X, Y, m, n)
    {
        // code here
        const dp = new Array(m + 1).fill(null).map(() => new Array(n + 1).fill(0));

        for (let i = 0; i <= m; i++) {
            for (let j = 0; j <= n; j++) {
                if (i === 0 || j === 0) {
                    dp[i][j] = 0;
                } else {
                    if (X[i - 1] === Y[j - 1]) {
                        dp[i][j] = 1 + dp[i - 1][j - 1];
                    } else {
                        dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
                    }
                }
            }
        }

        return m + n - dp[m][n];
    }
}


//missing number of aaray 

//Given an array of size N-1 such that it only contains distinct integers in the range of 1 to N. Find the missing element

Input:
N = 5
A = //{1,2,3,5}
Output// 4

class Solution{
    MissingNumber(array,n){
        //code here
        let i=0;
        let sum=0;
        sum=n*(n+1)/2;
        n--;
        for(i=0;i<n;i++){
            sum-=array[i];
        }
        return sum;
    }
}

//Distribute money to maximum children

//You are given an integer money denoting the amount of money (in dollars) that you have and another integer children denoting the number of 
//children that you must distribute the money to.

//You have to distribute the money according to the following rules:

//All money must be distributed.
//Everyone must receive at least 1 dollar.
//Nobody receives 4 dollars.
//Return the maximum number of children who may receive exactly 8 dollars if you distribute the money according to the aforementioned rules. 
//If there is no way to distribute the money, return -1.

Input: money = 20, children = 3
Output: 1
Explanation: 
//The maximum number of children with 8 dollars will be 1. One of the ways to distribute the money is:
//- 8 dollars to the first child.
//- 9 dollars to the second child. 
//- 3 dollars to the third child.
//It can be proven that no distribution exists such that number of children getting 8 dollars is greater than 1.


var distMoney = function(money, children) {
    let res=-1;
      money-=children;
      if(money>=0) res=0;
      while(money>6){
          money-=7;
          res++;
          if(money>0 && children==res){
              res--;
              money+=7;
              break;
          }
      }
      if(money==3 && children-res==1){
          res--;
      }
      return res;  
  };