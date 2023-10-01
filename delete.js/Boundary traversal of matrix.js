//You are given a matrix of dimensions n x m. The task is to perform boundary traversal on the matrix in a clockwise manner.

Input:
n = 4, m = 4
matrix =// [{1, 2, 3, 4}
         //{5, 6, 7, 8}
         //{9, 10, 11, 12}
         //{13, 14, 15,16}]
Output// 1 2 3 4 8 12 16 15 14 13 9 5
Explanation
//The matrix is:
//1 2 3 4
//5 6 7 8
//9 10 11 12
//13 14 15 16
//The boundary traversal is:
//1 2 3 4 8 12 16 15 14 13 9 5


class Solution 
{
    //Function to return list of integers that form the boundary 
    //traversal of the matrix in a clockwise manner.
    boundaryTraversal(matrix, n, m)
    {
        // code here
         let v= [];
        
        if(n == 1) {
            for(let j = 0; j < m; j++)
                v.push(matrix[0][j]);
            
            return v;
        }
        
        if(m == 1) {
            for(let i = 0; i < n; i++)
                v.push(matrix[i][0]);
                
            return v;
        }
        
        for(let j = 0; j < m; j++)
            v.push(matrix[0][j]);
        
        for(let i = 1; i < n; i++)
            v.push(matrix[i][m - 1]);
            
        for(let j = m - 2; j >= 0; j--)
            v.push(matrix[n - 1][j]);
        
        for(let i = n - 2; i >= 1; i--)
            v.push(matrix[i][0]);
            
        return v;
    }
};



//Given a string s, reverse the order of characters in each word within a sentence while still preserving whitespace and initial word order.

 

Input: s = "Let's take LeetCode contest"
Output: "s'teL ekat edoCteeL tsetnoc"
 

Input: s = "God Ding"
Output: "doG gniD"


var reverseWords = function(s) {
  
    let res = '';
    let word = '';
    for (let c of s) {
        if (c === ' ') {
            res += word + c;
            word = '';
        } else {
            word = c + word;
        }
    }
    return res + word;
  
};


//You are given a string s, where every two consecutive vertical bars '|' are grouped into a pair. In other words, 
//the 1st and 2nd '|' make a pair, the 3rd and 4th '|' make a pair, and so forth.Return the number of '*' in s, excluding the '*' between
// each pair of '|'.

//Note that each '|' will belong to exactly one pair.

Input: s = "l|*e*et|c**o|*de|"
Output: 2
Explanation //The considered characters are underlined: "l|*e*et|c**o|*de|".
//The characters between the first and second '|' are excluded from the answer.
//Also, the characters between the third and fourth '|' are excluded from the answer.
//There are 2 asterisks considered. Therefore, we return 2.


var countAsterisks = function(s) {
    let pair=0, count=0;
      for(let c of s){
          if(c == '|')    pair++;
          if(pair % 2 == 0 && c == '*')    count++;
      }
      return count;
    
  };


