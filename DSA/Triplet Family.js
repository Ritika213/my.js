//Given an array arr of integers. Find whether three numbers are such that the sum of two elements equals the third element.
Example:

Input: arr = [1, 2, 3, 4, 5]
Output: true
Explanation: //The pair (1, 2) sums to 3.
Input: arr = [5, 3, 4]
Output: false
Explanation:// No triplets satisfy the condition.
//Expected Time Complexity: O(n2)
//Expected Auxilary Space: O(1)

Constraints:
1 <= arr.size() <= 103
0 <= arr[i] <= 105

class Solution {
    findTriplet(arr) {
        
            
  arr.sort((a,b)=>a-b)
  let n = arr.length;
     for (let i = n - 1; i >= 2; i--) {
            let target = arr[i];
            let left = 0;
            let right = i - 1;
            
            // Use two-pointer approach to find if there's a pair (arr[left], arr[right]) with sum = target
            while (left < right) {
                let sum = arr[left] + arr[right];
                
                if (sum == target) {
                    return true; // Triplet found
                } else if (sum < target) {
                    left++;
                } else {
                    right--;
                }
            }
        }
        return false;

 
    }
}
