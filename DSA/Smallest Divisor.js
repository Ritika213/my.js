//Given an integer array arr[] and an integer k (where k ≥ arr.length), find the smallest positive integer divisor such that the sum of 
// the ceiling values of each element in arr[] divided by this divisor is less than or equal to k.

Examples:

Input: arr = [1, 2, 5, 9], k = 6
Output: 5
Explanation:// 5 is the smallest divisor having sum of quotients (1 + 1 + 1 + 2 = 5) less than or equal to 6.
Input: arr = [1, 1, 1, 1], k = 4
Output: 1
Explanation:// 1 is the smallest divisor having sum of quotients (1 + 1 + 1 + 1 = 4) less than or equal to 4.
Constraints
//1  ≤  arr.size()  ≤ 105
//1  ≤  arr[i]  ≤ 106
//arr.size()  ≤ k  ≤ 106     


function smallestDivisor(arr, k) {
    // Helper function to calculate sum of ceilings for a given divisor
    const getSum = (divisor) => {
        return arr.reduce((sum, num) => sum + Math.ceil(num / divisor), 0);
    };

    let left = 1;
    let right = Math.max(...arr);
    let result = right;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        const sum = getSum(mid);

        if (sum <= k) {
            result = mid; // try smaller divisor
            right = mid - 1;
        } else {
            left = mid + 1; // try bigger divisor
        }
    }

    return result;
}
