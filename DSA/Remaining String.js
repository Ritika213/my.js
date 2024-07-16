//Given a string s without spaces, a character ch and an integer count. Your task is to return the substring that remains after the character ch 
//has appeared count number of times.
Note: // Assume upper case and lower case alphabets are different. “”(Empty string) should be returned if it is not possible, or the remaining 
//substring is empty.

Examples:

Input: s = "Thisisdemostring", ch = 'i', count = 3
Output: ng
Explanation: //The remaining substring of s after the 3rd occurrence of 'i' is "ng", hence the output is ng.
Input: s = "Thisisdemostri", ch = 'i', count = 3
Output: ""
Explanation //The 3rd occurence of 'i' is at the last index. In this case the remaining substring is empty, hence we return empty string.

//Expected Time Complexity: O(|s|)
//Expected Auxiliary Space: O(1)

Constraints:
1<= s.length()<=105
1<=count<=s.length()
//s[i] is both upper case and lower case

class Solution {
    printString(s, ch, count) {
        
        let ans = 0;
        let n= s.length;
        for(let i=0;i<n;i++){
            if(s[i] === ch) ans++;
            if(ans === count) return s.substr(i+1,n-1)
        }
        return "";
    }
}