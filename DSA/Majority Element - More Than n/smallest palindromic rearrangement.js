//given a palindromic string s.

//Return the lexicographically smallest palindromic permutation of s.

 

//Example 1:

Input: s = "z"

Output: "z"

Explanation:

//A string of only one character is already the lexicographically smallest palindrome.

//Example 2:

Input: s = "babab"

Output: "abbba"

Explanation

//Rearranging "babab" → "abbba" gives the smallest lexicographic palindrome.

//Example 3:

Input: s = "daccad"

Output: "acddca"

Explanation:

//Rearranging "daccad" → "acddca" gives the smallest lexicographic palindrome.

 

Constraints:

1 <= s.length <= 105
//s consists of lowercase English letters.
//s is guaranteed to be palindromic.


var smallestPalindrome = function(s) {
    const freq = new Array(26).fill(0);

    for (const ch of s)
        freq[ch.charCodeAt(0) - 97]++;

    let left = "";
    let middle = "";

    for (let i = 0; i < 26; i++) {

        left += String.fromCharCode(97 + i).repeat(Math.floor(freq[i] / 2));

        if (freq[i] % 2)
            middle = String.fromCharCode(97 + i);
    }

    const right = left.split("").reverse().join("");

    return left + middle + right;
};