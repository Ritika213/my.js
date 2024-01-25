//Your task is to implement the function strstr. The function takes two strings as arguments (s,x) and  locates the occurrence of the string x 
//in the string s. The function returns an integer denoting the first occurrence of the string x in s (0 based indexing).

Note:// You are not allowed to use inbuilt function.


Input:
s = GeeksForGeeks, x = Fr
Output: -1
Explanation// Fr is not present in the string GeeksForGeeks as substring.

class Solution 
{
    //Function to locate the occurrence of the string x in the string s.
    strstr(s, x)
    {
    
         let i=0;
     let loop = s.length-x.length;
     let str = "";
     while(i <= loop){
         for(let j = i; j < x.length+i; j++)
            str+=s[j];
         if(str == x)return i;
         else{
             str = "";
             i++;
         }
     }
     return -1;
}
    }