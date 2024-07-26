//Given a string str and an integer k, return true if the string can be changed into a pangram after at most k operations, else return false.


//A single operation consists of swapping an existing alphabetic character with any other alphabetic character.

Note -// A pangram is a sentence containing every letter in the english alphabet.

Examples 

Input: str = "the quick brown fox jumps over the lazy dog", k = 0
Output: true
Explanation:// the sentence contains all 26 characters and is already a pangram.
Input: str = "aaaaaaaaaaaaaaaaaaaaaaaaaa", k = 25 
Output: true
Explanation// The word contains 26 instances of 'a'. Since only 25 operations are allowed. We can keep 1 instance and change all others to
// make str a pangram

Input: str = "a b c d e f g h i j k l m", k = 20
Output: false
//Expected Time Complexity: O(n)
//Expected Auxiliary Space: O(1)  

Constraints:
1<= str.size() <= 105
0<= k <= 50
//str may contain duplicate characters.
//str contains only lowercase alphabets or spaces.


class Solution {
    /**
    * @param string str
    * @param number k

    * @returns boolean
    */
    kPangram(str, k) {
        
         let set = new Set();
        let n = str.length;
        let count = 0;
        if (n < 26) return false;
        
        for (let i = 0; i < n; i++) {
            let ch = str.charAt(i);
            if (ch === ' ') continue;
            set.add(ch);
            count++;
        }
        
        if (count < 26) return false;
        if (k + set.size >= 26 || set.size === 26) return true;
        
        return false; 
    }
}
