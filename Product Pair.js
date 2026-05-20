//Given an integer array arr[] and an integer target, determine whether there exists a pair of elements in the array 
// whose product is equal to target.

//Return true if such a pair exists; otherwise, return false.

Examples:

Input: arr = [10, 20, 9, 40], target = 400
Output: true
Explanation:// As 10 * 40 = 400, the answer is true.
Input: arr = [-10, 20, 9, -40], target = 30
Output: false
Explanation:// No pair exists with product 30.
Input: arr= [-10, 0, 9, -40], target = 0
Output: true
Explanation:// As -10 * 0 = 0, the answer is true.
Constraints
//2 ≤ arr.size ≤ 105
//-108 ≤ arr[i] ≤ 108
//-1018 ≤ target ≤ 1018


/**
 * @param {number[]} arr
 * @param {number} target
 * @returns {boolean}
 */

class Solution {
    isProduct(arr, target) {
        
       let viewed = new Set();
        
        for (let num of arr) {
            
            if (num === 0) {
                if (target === 0) return true;
            } 
            else if (target % num === 0) {
                
                let needed = target / num;
                
                if (viewed.has(needed)) {
                    return true;
                }
                
                viewed.add(num);
            }
        }
        
        return false; 
    }
};