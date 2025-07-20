//given an integer n representing the number of digits in a number, and an array arr[] containing digits from 0 to 9. 
// have to count how many n-digit positive integers can be formed such that at least one digit from the array arr[] appears in the number.

Examples:

Input: n = 1, arr = [1, 2, 3]
Output: 3
Explanation:// Only the single-digit numbers [1, 2, 3] satisfy the condition.
Input: n = 2, arr = [3, 5]
Output: 34
Explanation:// There are a total of 34  two digit numbers which contain atleast  one out of  [3, 5].
Constraints
  //1 ≤ n ≤ 9
  //1 ≤ arr.size() ≤ 10
 // 0 ≤ arr[i] ≤ 9

 class Solution {
    countValid(n, arr) {
        // Create a Set of banned digits
        let banned = new Set(arr);

        // Total n-digit positive integers = 9 * 10^(n - 1)
        let total = 9 * Math.pow(10, n - 1);

        // Digits not in banned (i.e., allowed)
        let allowed = [];
        for (let d = 0; d <= 9; d++) {
            if (!banned.has(d)) allowed.push(d);
        }

        if (allowed.length === 0) return total; // all digits banned, so all numbers invalid → return total

        // First digit cannot be 0
        let validFirstDigits = allowed.filter(d => d !== 0);

        if (validFirstDigits.length === 0) return total; // no valid first digit possible

        // Count how many numbers are formed using only allowed digits (and no banned digit)
        let count = validFirstDigits.length * Math.pow(allowed.length, n - 1);

        // Subtract from total to get how many numbers contain at least one banned digit
        return total - count;
    }
}


