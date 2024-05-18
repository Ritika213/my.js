//Given an integer array a[] of size n, find the highest element of the array. The array will either be strictly increasing or strictly
// increasing and then strictly decreasing.

Note: a[i] != a[i+1] 

//Example 1:

Input:
11
//1 2 3 4 5 6 5 4 3 2 1
Output: 
6
Explanation 
//Highest element of array a[] is 6.

//Example 2:

Input:
5
//1 2 3 4 5
Output:
5
Explanation: 
//Highest element of array a[] is 5.
Task
//don't need to read or print anything. Your task is to complete the function findPeakElement() which takes integer n,
//and the array a[] as the input parameters and returns the highest element of the array.

//Expected Time Complexity: O(log(n))
//Expected Space Complexity: O(1)

Constraints:
2 <= n <= 106
1 <= a[i] <= 106

class Solution {
    findPeakElement(a){
       //code here
       // Initialize two pointers: 'left' starting at the beginning of the array
        // and 'right' starting at the end of the array.
        let left = 0;
        let right = a.length - 1;
        
        // Perform a binary search.
        while (left < right) {
            // Find the middle index to divide the array into two halves.
            let mid = Math.floor(left + (right - left) / 2);
         // Compare the middle element with its next element to decide which half to keep.
            // If the middle element is greater than the next element, the peak is in the left half (including mid).
            if (a[mid] > a[mid + 1]) {
                right = mid; // Move the 'right' pointer to 'mid'.
            } else {
                // If the middle element is less than the next element, the peak is in the right half.
                left = mid + 1; // Move the 'left' pointer to 'mid + 1'.
            }
        }
        
        // When the pointers converge, 'left' will be pointing to the peak element.
        return a[left];
        
    }
}