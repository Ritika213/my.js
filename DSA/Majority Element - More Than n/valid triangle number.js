//Given an integer array nums, return the number of triplets chosen from the array that can make triangles if we take them as side lengths 
// of a triangle.

 

//Example 1:

Input: nums = [2,2,3,4]
Output: 3
Explanation:// Valid combinations are: 
//2,3,4 (using the first 2)
//2,3,4 (using the second 2)
2,2,3
//Example 2:

Input: nums = [4,2,3,4]
Output: 4
 

Constraints:

1 <= nums.length <= 1000
0 <= nums[i] <= 1000


var triangleNumber = function(nums) {
   nums.sort((a, b) => a - b);
    let count = 0;
    const n = nums.length;

    // Iterate through the array, fixing the largest side c
    for (let c = n - 1; c > 1; c--) {
        let a = 0;
        let b = c - 1;
        while (a < b) {
            // Check if nums[a] + nums[b] > nums[c]
            if (nums[a] + nums[b] > nums[c]) {
                // If it is valid, all pairs (a, a+1, ..., b) with b are valid
                count += (b - a);
                b--; // Move the upper pointer down
            } else {
                a++; // Move the lower pointer up
            }
        }
    }

    return count;  
};