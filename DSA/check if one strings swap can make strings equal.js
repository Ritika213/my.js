//given two strings s1 and s2 of equal length. A string swap is an operation where you choose two indices in a string(not necessarily different)
//  and swap the characters at these indices.

//Return true if it is possible to make both strings equal by performing at most one string swap on exactly one of the strings. 
//Otherwise, return false.

 

//Example 1:

Input: s1 = "bank", s2 = "kanb"
Output: true
Explanation:// For example, swap the first character with the last character of s2 to make "bank".
//Example 2:

Input: s1 = "attack", s2 = "defend"
Output: false
Explanation: //It is impossible to make them equal with one string swap.
//Example 3:

Input: s1 = "kelb", s2 = "kelb"
Output: true
Explanation// The two strings are already equal, so no string swap operation is required.

Constraints:

1 <= s1.length, s2.length <= 100
s1.length == s2.length
//s1 and s2 consist of only lowercase English letters.


var areAlmostEqual = function(s1, s2) {
    let diff=0;
    let di1=0;
    let di2=0;
    for(let i=0;i<s1.length;i++){
        if(s1[i]===s2[i]) continue;
        if(++diff>2) return false;
        diff===1  ? (di1=i) : (di2=i);
    }
    return (diff===0 || diff===2) && s1[di1] ===s2[di2] && s1[di2] ===s2[di1]
};