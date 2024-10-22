//Given an array arr[] and two integers say, x and y, find the number of sub-arrays in which the number of occurrences of x 
//is equal to the number of occurrences of y.

Examples:

Input: arr = [1, 2, 1] , x= 1 , y = 2
Output: 2
Explanation: //The possible sub-arrays have same equal number of occurrences of x and y are:
//1) [1, 2], x and y have same occurrence(1).
//2) [2, 1], x and y have same occurrence(1).
Input: arr = [1, 2, 1] , x = 4 , y = 6
Output: 6
Explanation// The possible sub-arrays have same equal number of occurrences of x and y are:
//1) [1], x and y have same occurrence(0).
//2) [2], x and y have same occurrence(0).
//3) [1], x and y have same occurrence(0).
//4) [1, 2], x and y have same occurrence(0).
//5) [2, 1], x and y have same occurrence(0).
//6) [1, 2, 1], x and y have same occurrence(0).
Input: arr = [1, 2, 1] , x= 1 , y = 4
Output: 1
Explanation: //The possible sub-array have same equal number of occurrences of x and y is: [2], x and y have same occurrence(1)
Constraints: 
1 <= arr.size() <= 106
1 <= arr[i], x, y<=106

class Solution {
    // Function to find the first element in the array.
    sameOccurrence(arr, x, y) {
        // your code here
         let n = arr.length;
        
        // Step 1: Modify array to replace occurrences of x with 1, y with -1, and others with 0
        for (let i = 0; i < n; i++) {
            if (arr[i] === x) arr[i] = 1;
            else if (arr[i] === y) arr[i] = -1;
            else arr[i] = 0;
        }

        // Step 2: Initialize a map to store cumulative sum frequencies
        let mp = new Map();
        mp.set(0, 1);  // We start by considering an empty subarray with a sum of 0
        
        let sum = 0;
        let ans = 0;
        
        // Step 3: Traverse the array and calculate cumulative sum
        for (let i of arr) {
            sum += i;
             // Step 4: If the current sum has been seen before, it means a valid subarray exists
            if (mp.has(sum)) {
                ans += mp.get(sum);
            }
            
            // Step 5: Increment the count of this sum in the map
            mp.set(sum, (mp.get(sum) || 0) + 1);
        }
        
        return ans;
    }
}
