//Given an array of n distinct elements. Find the minimum number of swaps required to sort the array in strictly increasing order.


//Example 1:

Input:
nums =// {2, 8, 5, 4}
Output
1
Explanation//swap 8 with 4.
//Example 2:

Input:
nums = [10, 19, 6, 3, 5]
Output:
2
Explanation:
//swap 10 with 3 and swap 19 with 5.

 Task
//You do not need to read input or print anything. Your task is to complete the function minSwaps() which takes the nums as input parameter 
//and returns an integer denoting the minimum number of swaps required to sort the array.
//If the array is already sorted, return 0. 

//Expected Time Complexity: O(nlogn)
//Expected Auxiliary Space: O(n)


Constraints
//1 ≤ n ≤ 105
//1 ≤ numsi ≤ 106

class Solution
{
    //Function to find the minimum number of swaps required to sort the array.
	minSwaps(nums)
	{
 const m = new Map();
  const n = nums.length;

  for (let i = 0; i < n; i++) {
    m.set(nums[i], i);
  }

  nums.sort((a, b) => a - b);

  let ans = 0;
  for (let i = 0; i < n; i++) {
    if (m.get(nums[i]) !== i) {
      const a = m.get(nums[i]);
      [nums[i], nums[a]] = [nums[a], nums[i]];
      ans++;
      i--;
    }
  }

  return ans;

	}
}



