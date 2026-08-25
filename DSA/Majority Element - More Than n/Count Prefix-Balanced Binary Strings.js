//Given an integer n, count the number of binary strings of length 2 * n that contain exactly n ones and n zeros
//  such that every prefix of the string contains at least as many ones as zeros. Since the answer can be very large,
//  return it modulo 109 + 7.

Examples:

Input: n = 2
Output: 2
Explanation:// "1100", "1010" are two such strings of size 4 which have exactly two 1's in each.
Input: n = 3
Output: 5
Explanation:// "111000", "101100", "101010", "110010", "110100" are such 5 strings which have exactly three 1's in each.
Constraints

//1 ≤ n ≤ 1000

/*
 * @param {number} n
 * @return {number}
 */

class Solution {

    power(base, exp, mod) {
        let result = 1n;

        while (exp > 0n) {
            if (exp % 2n === 1n) {
                result = (result * base) % mod;
            }

            base = (base * base) % mod;
            exp = exp / 2n;
        }

        return result;
    }

    prefixStrings(n) {
        const MOD = 1000000007n;

        let factN = 1n;
        let fact2N = 1n;

        for (let i = 1; i <= 2 * n; i++) {
            fact2N = (fact2N * BigInt(i)) % MOD;

            if (i <= n) {
                factN = (factN * BigInt(i)) % MOD;
            }
        }

        let inverseFactN = this.power(factN, MOD - 2n, MOD);
        let inverseNPlusOne = this.power(BigInt(n + 1), MOD - 2n, MOD);

        let answer = fact2N;

        answer = (answer * inverseFactN) % MOD;
        answer = (answer * inverseFactN) % MOD;
        answer = (answer * inverseNPlusOne) % MOD;

        return Number(answer);
    }
}
