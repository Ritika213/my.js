//Given a string s consisting of lowercase English letters, for every character whose first and last occurrences are at different
// positions, calculate the sum of ASCII values of characters strictly between its first and last occurrence.
//Return all such non-zero sums (order does not matter).

Examples:

Input: s = "abacab"
Output: [293, 294]
Explanation:// characters 'a' and 'b' appear more than once:
//'a' : between positions 1 and 5 → characters are b, a, c and ascii sum is 98 + 97 + 99 = 294.
//'b' : between positions 2 and 6 → characters are a, c, a and ascii sum is 97 + 99 + 97 = 293.
Input: s = "acdac"
Output: [197, 199]
Explanation //characters 'a' and 'c' appear more than once:
//'a' : between positions 1 and 4 → characters are c, d and ascii sum is 99 + 100 = 199.
//'c' : between positions 2 and 5 → characters are d, a and ascii sum is 100 + 97 = 197.
Constraints
//1 ≤ s.size() ≤ 105


class Solution {
    asciirange(s) {
        let mp = new Map();
        let n = s.length;
        let ans = [];

        // Store all indices for each character
        for (let i = 0; i < n; i++) {
            if (!mp.has(s[i])) {
                mp.set(s[i], []);
            }
            mp.get(s[i]).push(i);
        }

        // Loop from 'a' to 'z'
        for (let code = 97; code <= 122; code++) {
            let ch = String.fromCharCode(code);
            if (mp.has(ch) && mp.get(ch).length >= 2) {
                let positions = mp.get(ch);
                let f = positions[0];
                let l = positions[positions.length - 1];
                let sum = 0;
                for (let i = f + 1; i < l; i++) {
                    sum += s.charCodeAt(i);
                }
                if (sum !== 0) {
                    ans.push(sum);
                }
            }
        }

        return ans;
    }
}