//Given a string str without spaces, the task is to remove all duplicate characters from it, keeping only the first occurrence.

Note: //The original order of characters must be kept the same. 

Examples :

Input: str = "zvvo"
Output: "zvo"
Explanation:// Only keep the first occurrence
Input: str = "gfg"
Output: "gf"
Explanation// Only keep the first occurrence
//Expected Time Complexity: O(n)
//Expected Auxiliary Space: O(1)

Constraints
//1 <= |str| <= 105
//str contains lowercase English alphabets

class Solution {
    removeDups(str) {
        
        let hs= new Set();
        let str1="";
        for(let i=0;i<str.length;i++)
        {
            if(!hs.has(str[i])){
                hs.add(str[i]);
                str1=str1+str[i];
            }
        }
        return str1;
    }
}
