//Given two strings str1 and str2. The task is to remove or insert the minimum number of characters from/in str1 so as to transform it into str2. 
//It could be possible that the same character needs to be removed/deleted from one point of str1 and inserted to some another point.

Examples :

Input: str1 = "heap", str2 = "pea"
Output: 3
Explanation //2 deletions and 1 insertion.
//p and h deleted from heap. Then, p is inserted at the beginning.
//One thing to note, though p was required yet it was removed/deleted first from its position and then it is inserted to some other position.
// Thus, p contributes one to the deletion_count and one to the insertion_count.

Input : str1 = "geeksforgeeks", str2 = "geeks"
Output: 8
Explanation:// 8 deletions, i.e. remove all characters of the string "forgeeks".
//Expected Time Complexity: O(|str1|*|str2|)
//Expected Space Complexity: O(|str1|*|str2|)

Constraints
//1 ≤ |str1|, |str2| ≤ 1000
//All the characters are lowercase English alphabets

class Solution {
    minOperations(str1, str2) {
      
      const n = str1.length;
          const m = str2.length;
          let prev = new Array(m + 1).fill(0);
          let cur = new Array(m + 1).fill(0);
  
          for (let j = 1; j <= m; j++) {
              prev[j] = 1 + prev[j - 1];
          }
  
          for (let i = 1; i <= n; i++) {
              cur[0] = 1 + prev[0];
              for (let j = 1; j <= m; j++) {
                  if (str1[i - 1] === str2[j - 1]) {
                      cur[j] = prev[j - 1];
                  } else {
                      cur[j] = 1 + Math.min(prev[j], cur[j - 1]);
                  }
              }
              prev = [...cur];
              cur.fill(0);
          }
  
          return prev[m];
    }
  }
  