//Given an integer N, find the number of divisors of N that are divisible by 3.


Input : 6
Output: 2
Explanation: 1, 2, 3, 6 //are divisors 
//of 6 out of which 3 and 6 are divisible by 3.

class Solution {
    count_divisors(N) {
      //code here
      if (N % 3 !== 0) return 0;
      let c = 0;
      const r = Math.sqrt(N);
      for (let i = 1; i <= r; ++i) {
          if (N % i === 0) {
              if (i % 3 === 0) c++;
              if (N / i !== i && (N / i) % 3 === 0) c++;
          }
      }
      return c;
  
  
  }
  
    }
  
// Given a string you need to print the size of the longest possible substring that has exactly K unique characters. If there is no possible substring then print -1.

Input:
S = "aabacbebebe", K = 3
Output: 
7
Explanation: 
"cbebebe" //is the longest substring with 3 distinct characters. 

class Solution {
    longestKSubstr(s, k) {
        //code here
    let ans = -1;
    const mp = new Map();
    let i = 0;
    let j = 0;
    
    while (j < s.length) {
        if (!mp.has(s[j])) {
            mp.set(s[j], 1);
        } else {
            mp.set(s[j], mp.get(s[j]) + 1);
        }
        
        while (mp.size > k) {
            mp.set(s[i], mp.get(s[i]) - 1);
            if (mp.get(s[i]) === 0) {
                mp.delete(s[i]);
            }
            i++;
        }
        
        if (mp.size === k) {
            ans = Math.max(ans, j - i + 1);
        }
        
        j++;
    }
    
    return ans;


    }
}
