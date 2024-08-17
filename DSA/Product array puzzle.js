//Given an array nums[], construct a Product Array nums[] such that nums[i] is equal to the product of all the elements of nums except nums[i].

Examples:

Input: //nums[] = [10, 3, 5, 6, 2]
Output: [180, 600, 360, 300, 900]
Explanation:// For i=0, P[i] = 3*5*6*2 = 180.
//For i=1, P[i] = 10*5*6*2 = 600.
//For i=2, P[i] = 10*3*6*2 = 360.
//For i=3, P[i] = 10*3*5*2 = 300.
//For i=4, P[i] = 10*3*5*6 = 900.
Input: //nums[] = [12,0]
Output: [0, 12]
//Expected Time Complexity: O(n)
//Expected Auxiliary Space: O(n)

Constraints:
1 <= nums.size() <= 1000
0 <= nums[i] <= 200
//nums[i] may contain duplicates.


class Solution {
    productExceptSelf(nums) {
        
        let n = nums.length;
        
        // Initialize the answer array with 1s
        let ans = new Array(n).fill(1);
        
        // Calculate the prefix product
        for (let i = 1; i < n; ++i) {
            ans[i] = ans[i - 1] * nums[i - 1];
        }
        
        let val = 1;
        
        // Calculate the suffix product and update the answer array
        for (let i = n - 2; i >= 0; --i) {
            val *= nums[i + 1];
            ans[i] *= val;
        }
        
        return ans;
    }
}