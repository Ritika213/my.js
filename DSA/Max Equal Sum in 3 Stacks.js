//Given three stacks s1, s2, and s3, represented by arrays where the first element of each array represents
//  the top of the corresponding stack.

//Find the maximum possible equal sum(sum of all elements) of all three stacks by removing zero or more 
// elements from the top of each stack.

//If it is not possible to make the sum of all three stacks equal, return 0.

Examples:

Input: s1 = [3, 2, 1, 1, 1], s2 = [4, 3, 2], s3 = [2, 5, 4, 1]
Output: 5
Explanation:// Remove 3 from s1, 4 from s2, and 2, 5 from s3. The remaining sums of all three stacks are equal to 5.
Input: s1 = [4,7], s2 = [10], s3 = [1,2,3]
Output: 0
Explanation: //It is not possible to make the sums of all three stacks equal by removing elements from their tops.
Constraints

//1 ≤ s1.size(), s2.size(), s3.size() ≤ 5 * 105
//1 ≤ s1[i], s2[i], s3[i] ≤ 103


/**
 * @param {number[]} s1
 * @param {number[]} s2
 * @param {number[]} s3
 * @returns {number}
 */


class Solution {
    maxEqualSum(s1, s2, s3) {
        let sum1 = 0, sum2 = 0, sum3 = 0;

        for (let num of s1) sum1 += num;
        for (let num of s2) sum2 += num;
        for (let num of s3) sum3 += num;

        let i1 = 0, i2 = 0, i3 = 0;
        let n1 = s1.length, n2 = s2.length, n3 = s3.length;

        while (i1 < n1 && i2 < n2 && i3 < n3) {
            if (sum1 === sum2 && sum2 === sum3) {
                return sum1;
            }

            if (sum1 >= sum2 && sum1 >= sum3) {
                sum1 -= s1[i1++];
            } 
            else if (sum2 >= sum1 && sum2 >= sum3) {
                sum2 -= s2[i2++];
            } 
            else {
                sum3 -= s3[i3++];
            }
        }

        return (sum1 === sum2 && sum2 === sum3) ? sum1 : 0;
    }
}
