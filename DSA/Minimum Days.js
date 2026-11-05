//Given a string s of length n containing only lowercase English letters, and a permutation array p[] of length n
//  containing integers from 0 to n - 1.

//On the (i + 1)th day, the character at index p[i] in the string is replaced with '?'. For example:

//On day 1, replace s[p[0]] with '?'.
//On day 2, replace s[p[1]] with '?'.
//On day 3, replace s[p[2]] with '?'.
//And so on.
//Find the minimum number of days required so that no two adjacent characters in s are equal, unless at least 
// one of them is '?'.

//Formally, for every index i (0 <= i < n - 1), the string must satisfy: If s[i] != '?' and s[i+1] != '?', 
// then s[i] != s[i+1].

Examples:

Input: s = "aabb", p = [2, 1, 3, 0]
Output: 2
Explanation
//On Day 1, we replace s[p[0]] (index 2) with '?'. String becomes "aa?b". Index 0 and 1 still have equal
//  adjacent characters 'a'.
//On Day 2, we replace s[p[1]] (index 1) with '?'. String becomes "a??b". Now no two adjacent non-'?' 
// characters are equal.

nput: s = "abca", p = [3, 0, 2, 1]
Output: 0
Explanation:
//The initial string "abca" already satisfies the condition without replacing any characters.
Constraints:

//1 ≤ s.size() ≤ 105
//0 ≤ p[i] < s.size()
//s consists only of lowercase English alphabets
p.size() = s.size()



/**
 * @param {String} s
 * @param {number[]} p
 * @return {number}
 */

class Solution {
    getMinimumDays(s, p) {
        let n = s.length;
        let chars = s.split("");
        let equalPairs = 0;

        for (let i = 0; i < n - 1; i++) {
            if (chars[i] === chars[i + 1]) {
                equalPairs++;
            }
        }

        if (equalPairs === 0) return 0;

        for (let day = 0; day < n; day++) {
            let index = p[day];

            if (index > 0 && chars[index - 1] === chars[index]) {
                equalPairs--;
            }

            if (index + 1 < n && chars[index] === chars[index + 1]) {
                equalPairs--;
            }

            chars[index] = '?';

            if (equalPairs === 0) {
                return day + 1;
            }
        }

        return n;
    }
}