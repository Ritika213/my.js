//given an integer array nums.

//Return the length of the longest subsequence in nums whose bitwise XOR is non-zero. If no such subsequence exists, return 0.

 

//Example 1:

Input: nums = [1,2,3]

Output: 2

Explanation:

//One longest subsequence is [2, 3]. The bitwise XOR is computed as 2 XOR 3 = 1, which is non-zero.

//Example 2:

Input: nums = [2,3,4]

Output: 3

Explanation

//The longest subsequence is [2, 3, 4]. The bitwise XOR is computed as 2 XOR 3 XOR 4 = 5, which is non-zero.

Constraints:

1 <= nums.length <= 105
0 <= nums[i] <= 109



var longestSubsequence = function(nums) {
   let xorValue = 0;
    let hasNonZero = false;

    for (const num of nums) {

        xorValue ^= num;

        if (num !== 0)
            hasNonZero = true;
    }

    // Entire array has non-zero XOR
    if (xorValue !== 0)
        return nums.length;

    // Remove one non-zero element
    if (hasNonZero)
        return nums.length - 1;

    // All elements are zero
    return 0; 
};