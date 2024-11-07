//Given an array, arr[], determine if arr can be split into three consecutive parts such that the sum of each part is equal. If possible,
// return any index pair(i, j) in an array such that sum(arr[0..i]) = sum(arr[i+1..j]) = sum(arr[j+1..n-1]), otherwise return an array {-1,-1}.

Note:// Since multiple answers are possible, return any of them. The driver code will print true if it is correct otherwise, it will print false.

Examples :

Input:  arr = [1, 3, 4, 0, 4]
Output: true
Explanation:// [1, 2] is valid pair as sum of subarray arr[0..1] is equal to sum of subarray arr[2..3] and also to sum of subarray arr[4..4]. 
//The sum is 4. 
Input: arr = [2, 3, 4]
Output: false
Explanation// No three subarrays exist which have equal sum.

Input:// arr[] = [0, 1, 1]
Output: false
Constraints
//3 ≤ arr.size() ≤ 106
//0 ≤ arr[i] ≤ 106

class Solution {

    findSplit(arr) {
        // Return an array of possible answer, driver code will judge and return true or
        // false based on
         let n = arr.length ;
        let sum = 0 ;
         // Calculate the total sum
        for (let i of arr) sum += i;
        
        // If the total sum is not divisible by 3, return [-1, -1]
        if (sum % 3 !== 0) return [-1, -1];
        
        let target = sum / 3;
        let ans = [];
        let curr = 0;
        
        // Iterate through the array to find split points
         for (let i = 0; i < n; i++) {
            curr += arr[i];
            
            if (curr === target) {
                curr = 0;
                ans.push(i);
                
                // Stop after finding two indices to divide into three parts
                if (ans.length === 2) break;
            }
        }
        
        // If we successfully found two split points, return them
        // Otherwise, return [-1, -1]
        return ans.length === 2 ? ans : [-1, -1];
    
    }
}