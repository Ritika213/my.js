//Given a number n, find a number in the range from 1 to n such that its digit sum is maximum. If there are multiple
//  such numbers, return the largest of them.

Examples:

Input: n = 48
Output: 48
Explanation: //There are two numbers with maximum digit sum = 12. The numbers are 48 and 39. Since 48 > 39, so 48
// is the answer.
Input: n = 90
Output: 89
Explanation: //89 gives us the largest digit sum in the range from 1 to n. Hence the answer is 89. 
Constraints

//1 ≤ n ≤ 109

/**
 * @param {number} n
 * @returns {number}
 */

class Solution {
    findMax(n) {
        let bestNumber = n;
        let bestSum = 0;

        // Digit sum of n
        let temp = n;

        while (temp > 0) {
            bestSum += temp % 10;
            temp = Math.floor(temp / 10);
        }

        // Number of digits
        let digits = n.toString().length;

        let power = Math.pow(10, digits - 1);

        let prefix = 0;
        let prefixSum = 0;

        temp = n;

        for (let i = 0; i < digits; i++) {

            let digit = Math.floor(temp / power) % 10;

            if (digit > 0) {
                let remaining = digits - i - 1;

                let candidateSum =
                    prefixSum + (digit - 1) + 9 * remaining;

                let candidate =
                    prefix * 10 * power +
                    (digit - 1) * power +
                    (power - 1);

                if (
                    candidateSum > bestSum ||
                    (candidateSum === bestSum && candidate > bestNumber)
                ) {
                    bestSum = candidateSum;
                    bestNumber = candidate;
                }
            }

            prefix = prefix * 10 + digit;
            prefixSum += digit;

            temp %= power;
            power = Math.floor(power / 10);
        }

        return bestNumber;
    }
}
