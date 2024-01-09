//Given two strings, one is a text string, txt and other is a pattern string, pat. The task is to print the indexes of all the occurences of pattern
// string in the text string. Use one-based indexing while returing the indices. 
Note: //Return an empty list incase of no occurences of pattern. Driver will print -1 in this case.

Input:
txt = "geeksforgeeks"
pat = "geek"
Output: 
//1 9
Explanation: 
//The string "geek" occurs twice in txt, one starts are index 1 and the other at index 9. 




class Solution {
    
    search(pat, txt)
    {
        //your code here
        let ans=[];
            let found = txt.indexOf(pat);
            while(found!==-1){
                ans.push(found+1)
                found= txt.indexOf(pat,found+1)
            }
            if(ans.length===0){
                return [-1]
            }
            
           return ans;     
    }
}