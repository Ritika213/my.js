//Given two strings 'str1' and 'str2', check if these two strings are isomorphic to each other.

//If the characters in str1 can be changed to get str2, then two strings, str1 and str2, are isomorphic. A character must be completely 
//swapped out for another character while maintaining the order of the characters. A character may map to itself, but no two characters may map 
//to the same character.


Input:
str1 = aab
str2 = xxy
Output: 
1
Explanation 
//There are two different characters in aab and xxy, i.e a and b with frequency 2 and 1 respectively.

class Solution
{
    //Function to check if two strings are isomorphic.
    areIsomorphic(str1, str2)
    {
        // code here
        if (str1.length !== str2.length) {
        return false;
    }

    let s1 = new Array(256).fill(-1);
    let s2 = new Array(256).fill(-1);

    for (let i = 0; i < str1.length; i++) {
        let ss = str1.charAt(i);
        let tt = str2.charAt(i);

        if (s1[ss.charCodeAt()] === -1 && s2[tt.charCodeAt()] === -1) {
            s1[ss.charCodeAt()] = tt;
            s2[tt.charCodeAt()] = ss;
        } else if (s1[ss.charCodeAt()] !== tt || s2[tt.charCodeAt()] !== ss) {
            return false;
        }
    }

    return true;

    }
}