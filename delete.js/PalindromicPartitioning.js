//Given a string str, a partitioning of the string is a palindrome partitioning if every sub-string of the partition is a palindrome. 
//Determine the fewest cuts needed for palindrome partitioning of the given string.



Input: str = "ababbbabbababa"
Output: 3
Explaination //After 3 partitioning substrings are "a", "babbbab", "b", "ababa".

class Solution {
    
    palindromicPartition(S)
    {
        //your code here
         const n = S.length;
        const dp = Array.from({ length: n }, () => Array(n).fill(false));
        const cuts = new Array(n).fill(0);

        for (let j = 0; j < n; j++) {
            let minCuts = j;
            for (let i = 0; i <= j; i++) {
                if (S[i] === S[j] && (j - i <= 1 || dp[i + 1][j - 1])) {
                    dp[i][j] = true;
                    if (i > 0) {
                        minCuts = Math.min(minCuts, cuts[i - 1] + 1);
                    } else {
                        minCuts = 0;
                    }
                }
            }
            cuts[j] = minCuts;
        }

        return cuts[n - 1];
    }
}


//Red or Green


//Given a string of length N, made up of only uppercase characters 'R' and 'G', where 'R' stands for Red and 'G' stands for Green.
//Find out the minimum number of characters you need to change to make the whole string of the same colour.

Input:
N=5
S="RGRGR"
Output:
2
Explanation
//We need to change only the 2nd and 4th(1-index based) characters to 'R', so that the whole string becomes the same colour.


class Solution{
    RedOrGreen(n, str){
        //code here
        let count=0;
	for(let i=0; i<n; i++)
	if(str.charAt(i)=='G') {
	    count++;
	}
    return ((n-count)>count)?count:(n-count);
}
}


//You are given a 0-indexed circular string array words and a string target. A circular array means that the array's end connects to the 
//array's beginning.

//Formally, the next element of words[i] is words[(i + 1) % n] and the previous element of words[i] is words[(i - 1 + n) % n], where n is the length of words.
//Starting from startIndex, you can move to either the next word or the previous word with 1 step at a time.

//Return the shortest distance needed to reach the string target. If the string target does not exist in words, return -1.

 

//Example 1:

Input: words = ["hello","i","am","leetcode","hello"], target = "hello", startIndex = 1
Output: 1
Explanation:// We start from index 1 and can reach "hello" by
- moving// 3 units to the right to reach index 4.
- moving //2 units to the left to reach index 4.
- moving //4 units to the right to reach index 0.
- moving //1 unit to the left to reach index 0.
//The shortest distance to reach "hello" is 1.
//Example 2:

Input: words = ["a","b","leetcode"], target = "leetcode", startIndex = 0
Output: 1
Explanation //We start from index 0 and can reach "leetcode" by
// moving 2 units to the right to reach index 3.
 //moving 1 unit to the left to reach index 3.
//The shortest distance to reach "leetcode" is 1.
//Example 3:

//Input: words = ["i","eat","leetcode"], target = "ate", startIndex = 0
//Output: -1
//Explanation: Since "ate" does not exist in words, we return -1.

var closetTarget = function(words, target, startIndex) {
    if (!words.includes(target)) return -1
      let result = -1
      for (let i = startIndex; ; i++) {
          const index = i % words.length
          const el = words[index]
          result++
          if (el === target) break
      }
      let tempResult = -1
      for (let i = startIndex; ; i--) {
          const index = (words.length + i) % words.length
          const el = words[index]
          tempResult++
          if (el === target) break
      }
      return result >= tempResult ? tempResult : result  
  };
 

























