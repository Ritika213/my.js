//Given a string s consisting of lowercase English letters and an integer k, your task is to remove exactly k characters from the string.
 //The resulting string must be the largest possible in lexicographical  order, while maintain the relative order of the remaining characters.

Examples:
Input: s = "ritz", k = 2
Output: tz 
Explaination:// By removing two characters in all possible ways, we get: "ri", "rt", "rz", "it", "iz", and "tz". Among these, "tz" is
 //lexicographically largest string.
Input: s = "zebra", k = 3
Output: zr 
Explaination:// Removing "e", "b", and "a" results in "zr", which is lexicographically largest string.
Constraints
//1 ≤ s.size() ≤ 105
//0  ≤  k < s.size()

class Solution {
    maxSubseq(s, k) {
        
         const stack = [];
    let toRemove = k;

    for (let ch of s) {
        while (stack.length > 0 && stack[stack.length - 1] < ch && toRemove > 0) {
            stack.pop();
            toRemove--;
        }
        stack.push(ch);
    }

    // Remove extra characters if needed
    return stack.slice(0, s.length - k).join('');
    }
}