//Given a string s, your task is to find the longest palindromic substring within s.

//A substring is a contiguous sequence of characters within a string, defined as s[i...j] where 0 ≤ i ≤ j < len(s).

//A palindrome is a string that reads the same forward and backward. More formally, s is a palindrome if reverse(s) == s.

Note:// If there are multiple palindromic substrings with the same length, return the first occurrence of the longest palindromic substring 
//from left to right.

Examples :

Input: s = //“forgeeksskeegfor” 
Output// “geeksskeeg”
Explanation //There are several possible palindromic substrings like “kssk”, “ss”, “eeksskee” etc. But the substring “geeksskeeg” is the 
//longest among all.
Input:// s = “Geeks” 
Output:// “ee”
Explanation:// "ee" is the longest palindromic substring of "Geeks". 
//Input: s = “abc” 
//Output: “a”
//Explanation: "a", "b" and "c" are longest palindromic substrings of same length. So, the first occurrence is returned.
Constraints
//1 ≤ s.size() ≤ 103
//s consist of only lowercase English letters.

class Solution {
    longestPalindrome(s) {
        // code here
         let n=s.length;
        let start=0,end=0,maxl=1;
        
        //odd length
        for(let i=0;i<n;i++){
            let l=i,r=i;
            while(l>=0 && r<n){
                if(s[l]!=s[r]){
                    break;
                }
                l--;
                r++;
            }
            let len=r-l-1;
            if(len>maxl){
                maxl=len;
                start=l+1;
                end=r-1;
            }
        }
         //even length
        for(let i=0;i<n;i++){
            let l=i,r=i+1;
            while(l>=0 && r<n){
                if(s[l]!=s[r]){
                    break;
                }
                l--;
                r++;
            }
            let len=r-l-1;
            if(len>maxl){
                maxl=len;
                start=l+1;
                end=r-1;
            }
        }
        
        return s.substr(start,maxl);
    }
}