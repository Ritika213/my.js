//Given a fence with n posts and k colors, find out the number of ways of painting the fence so that not more than two consecutive posts 
//have the same colors. Since the answer can be large return it modulo 109 + 7.

Input:
n = 3
k = 2 
Output: 6

class Solution{
    countWays(n, k){
        //code here
        if (n == 1) return k;
        if (n == 2) return k + k * (k - 1) % 1000000007;

        let mod = 1000000007;
        let same = k;
        let diff= (k%mod * (k - 1) % mod)%mod;
        let total = (same %mod+ diff%mod) % mod;

        for (let i = 3; i <= n; i++) {
            same = diff % mod;
            diff = (total % mod * (k - 1) % mod) % mod;
            total = (same%mod + diff%mod) % mod;
        }

        return total ;
    }
}


//Reverse words in a given string
//Given a String S, reverse the string without reversing its individual words. Words are separated by dots.


Input:
S = i.like.this.program.very.much
Output: much.very.program.this.like.i
Explanation: //After reversing the whole string(not individual words), the input string becomes
much.very.program.this.like.i

class Solution 
{
    //Function to reverse words in a given string.
    reverseWords(s)
    {
        // code here
      let ans = "";

        let word = "";

        for(let i=0;i<s.length;i++){

            if(s[i]=='.'){

                ans = '.'+ word +ans;

                word = "";

            }

            else{

                word+=s[i];

            }

        }

        //adding the last word

        ans = word+ans;

return ans;

    } 
    
    }

    //Find Transition Point
    //Given a sorted array containing only 0s and 1s, find the transition point, i.e., the first index where 1 was observed, and before that, 
    //only 0 was observed.
    
    Input:
    N = 5
    arr = //{0,0,0,1,1}
    Output// 3
    Explanation// index 3 is the transition point where 1 begins.

    class Solution {
        transitionPoint(arr, n) {
          //code here
          if(n==1 && (arr[0]==1))
          {
              return 0;
          }
         for(let i=0;i<n-1;i++)
         {
             if(arr[i]!=arr[i+1])
             {
                 return i+1;
             }
         }
         if(arr[n-1]==1)
         {
          return 0;
         }
         return -1;
      
      
        }
      }