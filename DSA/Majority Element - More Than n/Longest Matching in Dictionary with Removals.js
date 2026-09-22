//Given a lowercase string s and a dictionary d[] containing lowercase words, find the longest word in 
// the dictionary that can be obtained by deleting some characters from s without changing the order of
//  the remaining characters.

Note:// If multiple words have the same maximum length, return the lexicographically smallest one.
// If no valid word exists, return an empty string.

Examples : 

Input: d = ["ale", "apple", "monkey", "plea"], s = "abpcplea"
Output: "apple" 
Explanation:// After deleting "b", "c", "a" s became "apple" which is present in d.
Input: d = ["a", "b", "c"], s = "abpcplea"
Output: "a"
Explanation// After deleting "b", "p", "c", "p", "l", "e", "a" s became "a" which is present in d.

Constraints
//1 ≤ |s| ≤ 5 * 105
//1 ≤ n ≤ 104, where n is the number of words in dictionary
//1 ≤ m ≤ 100, where m is the length of word in dictionary
//s and all words in dictionary consist only of lowercase English letters.

class Solution {
    findLongestWord(s, d) {
        let pos = Array.from({ length: 26 }, () => []);

        for (let i = 0; i < s.length; i++) {
            pos[s.charCodeAt(i) - 97].push(i);
        }

        let ans = "";

        for (let w of d) {
            let last = -1;
            let ok = true;

            for (let c of w) {
                let p = pos[c.charCodeAt(0) - 97];

                // Binary search for first position > last
                let lo = 0, hi = p.length;

                while (lo < hi) {
                    let mid = Math.floor((lo + hi) / 2);

                    if (p[mid] <= last) {
                        lo = mid + 1;
                    } else {
                        hi = mid;
                    }
                }

                if (lo === p.length) {
                    ok = false;
                    break;
                }

                last = p[lo];
            }

            if (ok) {
                if (
                    w.length > ans.length ||
                    (w.length === ans.length && w < ans)
                ) {
                    ans = w;
                }
            }
        }

        return ans;
    }
}
