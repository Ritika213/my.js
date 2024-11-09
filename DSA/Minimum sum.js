//Given an array arr[] such that each element is in the range [0 - 9], find the minimum possible sum of two numbers formed using the 
//elements of the array. All digits in the given array must be used to form the two numbers. Return a string without leading zeroes.

Examples :

Input: arr = [6, 8, 4, 5, 2, 3]
Output: 604
Explanation:// The minimum sum is formed by numbers 358 and 246.
Input: arr = [5, 3, 0, 7, 4]
Output: 82
Explanation:// The minimum sum is formed by numbers 35 and 047.
Input: arr = [9, 4]
Output: 13
Explanation //The minimum sum is formed by numbers 9 and 4.

Constraints
//1 ≤ arr.size() ≤ 106
//0 ≤ arr[i] ≤ 9

class Solution {
    minSum(arr) {
        
        let ans = '';
    let carry = 0;

    arr.sort((a, b) => a - b);

    for (let i = arr.length - 1; i >= 0; i -= 2) {
        let curr = arr[i] + carry + (i > 0 ? arr[i - 1] : 0);
        carry = Math.floor(curr / 10);
        ans += (curr % 10).toString();
    }

    if (carry) ans += carry.toString();

    // Remove leading zeros
    ans = ans.replace(/0+$/, '');

    return ans.split('').reverse().join('');
    }
}
