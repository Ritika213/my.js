//Given a string s check if it is "Panagram" or not.

//A "Panagram" is a sentence containing every letter in the English Alphabet.


Input:
s = "Bawds jog, flick quartz, vex nymph"
Output: 
1
Explanation //In the given input, there are all the letters of the English alphabet. Hence, the output is 1.

class Solution
{
    //Function to check if a string is Pangram or not.
    checkPangram(s)
    {
        
        s = s.toLowerCase();
        const present = new Array(26).fill(false);

        for (let i = 0; i < s.length; i++) {
            const c = s.charAt(i);
            if (c >= 'a' && c <= 'z') {
                present[c.charCodeAt(0) - 'a'.charCodeAt(0)] = true;
            }
        }

        for (const p of present) {
            if (!p) {
                return false;
            }
        }

        return true;
    }
}