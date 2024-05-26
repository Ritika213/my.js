//Given two strings x and y, and two values costX and costY, the task is to find the minimum cost required to make the given two strings identical.
//You can delete characters from both the strings. The cost of deleting a character from string X is costX and from Y is costY. The cost of removing
//all characters from a string is the same.

//Example 1:

Input: x = "abcd", y = "acdb", costX = 10 
       costY = 20.
Output: 30
Explanation// For Making both strings identical we have to delete character 'b' from both the string, hence cost will be = 10 + 20 = 30.

//Example 2:

Input : x = "ef", y = "gh", costX = 10
        costY = 20.
Output: 60
Explanation//For making both strings identical, we have to delete 2-2 characters from both the strings, hence cost will be = 10 + 10 + 20 + 20 = 60.

Task:
//don't need to read or print anything. Your task is to complete the function findMinCost() which takes both strings and the costs as input 
//parameters and returns the minimum cost.

//Expected Time Complexity: O(|x|*|y|)
//Expected Space Complexity: O(|x|*|y|)

Constraints
//1 ≤ |x|, |y| ≤ 1000
//1<= costX, costY <= 105

class Solution {
    lcs(text1, text2) {
      let n = text1.length;
      let m = text2.length;
      let prev = new Array(m + 1).fill(0); 
      let cur = new Array(m + 1).fill(0);
  
      for (let idx1 = 1; idx1 < n + 1; idx1++) {
        for (let idx2 = 1; idx2 < m + 1; idx2++) {
          if (text1[idx1 - 1] === text2[idx2 - 1])
            cur[idx2] = 1 + prev[idx2 - 1];
          else
            cur[idx2] = Math.max(cur[idx2 - 1], prev[idx2]);
        }
        prev = cur.slice(); // Copy values to prev
      }
  
      return cur[m];
    }
  
    findMinCost(x, y, costX, costY) {
      let common = this.lcs(x, y);
      return (x.length - common) * costX + (y.length - common) * costY;
    }
  }
  

