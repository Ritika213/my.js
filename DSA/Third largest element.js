//Given an array, arr of positive integers. Find the third largest element in it. Return -1 if the third largest element is not found.

Examples:

Input: arr = [2, 4, 1, 3, 5]
Output: 3
Explanation:// The third largest element in the array [2, 4, 1, 3, 5] is 3.
Input: arr = [10, 2]
Output: -1
Explanation: //There are less than three elements in the array, so the third largest element cannot be determined.
Input: arr = [5, 5, 5]
Output: 5
Explanation// In the array [5, 5, 5], the third largest element can be considered 5, as there are no other distinct elements.

//Expected Time Complexity: O(n)
//Expected Space Complexity: O(1)

Constraints
//1 ≤ arr.size ≤ 105
//1 ≤ arr[i] ≤ 105

class Solution {
    
    thirdLargest(a, n)
    {
        
         if(n < 3){
             return "Invalid Input";
  }
 
  let [first, second, third] = Array(3).fill(Number.MIN_SAFE_INTEGER);
 
  for (let n of a) {
    if (n > first) {
      [third, second, first] = [second, first, n];
    } else if (n > second) {
      [third, second] = [second, n];
    } else if (n > third) {
      third = n;
    }
  }
 
  return third;

    }
    }