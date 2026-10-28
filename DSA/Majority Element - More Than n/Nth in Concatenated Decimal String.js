//Consider a string s formed by concatenating the decimal representations of all positive integers in order:

s = "12345678910111213141516171819202122232425262728293031..."

//Given an integer n, find the nth character (1-based indexing) in the string s.

Examples:

Input: n = 10
Output: '1'
Explanation:// The 10th in "1234567891.." character is '1'.
Input: n = 11
Output: '0'
Explanation:// The 11th character in "12345678910.."  is '0'.
Constraints

//1 ≤ n ≤ 109

/**
 * @param {number} n
 * @return {string}
 */

class Solution {
    nthCharacter(n) {
        let length = 1;
        let count = 9;
        let start = 1;

        while (n > length * count) {
            n -= length * count;
            length++;
            count *= 10;
            start *= 10;
        }

        let targetNumber = start + Math.floor((n - 1) / length);

        let numberStr = String(targetNumber);
        let digitIndex = (n - 1) % length;

        return numberStr[digitIndex];
    }
}