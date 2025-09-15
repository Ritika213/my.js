//given two strings pat and tar consisting of lowercase English characters. You can construct a new string s by performing any one of 
// the following operation for each character in pat:

//Append the character pat[i] to the string s.
//Delete the last character of s (if s is empty do nothing).
//After performing operations on every character of pat exactly once, your goal is to determine if it is possible to make the string s 
//equal to string tar.

Examples:

Input: pat = "geuaek", tar = "geek"
Output: true
Explanation: //Append the first three characters of pat to s, resulting in s = "geu". Delete the last character for 'a', leaving s = "ge".
// Then, append the last two characters 'e' and 'k' from pat to s, resulting in s = "geek", which matches tar.
Input: pat = "agiffghd", tar = "gfg"
Output: true
Explanation// Skip the first character 'a' in pat. Append 'g' and 'i' to s, resulting in s = "gi". Delete the last character for 'f', leaving 
//s = "g". Append 'f', 'g', and 'h' to s, resulting in s = "gfgh". Finally, delete the last character for 'd', leaving s = "gfg", which matches
// tar.

Input: pat = "ufahs", tar = "aus"
Output: false
Explanation:// It is impossible to construct the string tar from pat with the given operations.
Constraints
//1 ≤ pat.size(), tar.size() ≤ 105


class Solution {
    stringStack(pat, tar) {
        
        let i = tar.length - 1;
        let j = pat.length - 1;

        if (pat.length < tar.length) return false;

        while (j >= 0 && i >= 0) {
            if (tar[i] === pat[j]) {
                i--;
                j--;
            } else {
                j-=2;
            }
            if(j<=-1 && i<0) return true;
            
        }
        return i<0?true:false;
    
    }
}