//Given an unsorted array arr of of positive integers. One number 'A' from set {1, 2,....,n} is missing and one number 'B' occurs twice in array. 
//Find numbers A and B.

Examples

Input: arr = [2, 2]
Output: //2 1
Explanation:// Repeating number is 2 and smallest positive missing number is 1.
Input: arr = [1, 3, 3] 
Output:// 3 2
Explanation:// Repeating number is 3 and smallest positive missing number is 2.
//Expected Time Complexity: O(n)
//Expected Auxiliary Space: O(1)

Constraints
//2 ≤ n ≤ 105
//1 ≤ arr[i] ≤ n

class Solution {
    findTwoElement(arr) {
        let n = arr.length;

        // Step 1: Calculate the expected sum and sum of squares for numbers 1 to n
        let sumN = (n * (n + 1)) / 2;
        let sumSqN = (n * (n + 1) * (2 * n + 1)) / 6;

        // Step 2: Calculate the actual sum and sum of squares from the array
        let actualSum = 0, actualSumSq = 0;
        for (let i = 0; i < n; i++) {
            actualSum += arr[i];
            actualSumSq += arr[i] * arr[i];
        }

        // Step 3: Calculate the differences
        let diffSum = sumN - actualSum; // This is A - B
        let diffSumSq = sumSqN - actualSumSq; // This is A^2 - B^2

        // Step 4: A^2 - B^2 = (A - B) * (A + B)
        let sumAplusB = diffSumSq / diffSum; // This is A + B

        // Step 5: Solve for A and B
        let A = (diffSum + sumAplusB) / 2; // Missing number
        let B = sumAplusB - A; // Repeating number

        return [Math.round(B), Math.round(A)]; // Return [B, A]
    }
}