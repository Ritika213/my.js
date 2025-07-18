//Given a number n. Find the maximum possible LCM that can be obtained by selecting three numbers less than or equal to n.
Note :// LCM stands for Lowest Common Multiple.

Examples:

Input: n = 9
Output: 504
Explanation:// 504 is the maximum LCM that can be attained by any triplet of numbers less than or equal 9. The triplet which 
//has this LCM is {7, 8, 9}.
Input: n = 7
Output: 210
Explanation: //210 is the maximum LCM that can be attained by any triplet of numbers less than or equal 7. The triplet which 
//has this LCM is {5, 6, 7}.
Constraints
//1 ≤ n ≤ 103


class Solution {
    lcmTriplets(n) {
        
         // Small n can be answered immediately
        if (n <= 2) return n;      // {1} → 1, {2,1} → 2
        if (n === 3)  return 6;     // LCM(1,2,3) = 6

        // Case 1: n is odd → perfect trio n, n‑1, n‑2
        if (n & 1) {               // bit‑check for odd
            return n * (n - 1) * (n - 2);
        }

        // Case 2: n is even
        if (n % 3 != 0) {
            // Even but NOT divisible by 3 → use n, n‑1, n‑3
            return n * (n - 1) * (n - 3);
        }
        // Case 3: n is a multiple of 6 → step left to (n‑1, n‑2, n‑3)
        return (n - 1) * (n - 2) * (n - 3);
    
    }
}