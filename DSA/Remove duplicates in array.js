//Given an array arr consisting of positive integer numbers, remove all duplicate numbers.

Example:

Input: arr = [2, 2, 3, 3, 7, 5] 
Output: [2, 3, 7, 5]
Explanation:// After removing the duplicates 2 and 3 we get 2 3 7 5.
Input: arr = [2, 2, 5, 5, 7, 7] 
Output: [2, 5, 7]
Input: arr = [8, 7] 
Output: [8, 7]
Constraints:
1<= arr.size() <=106
2<= arr[i] <=100

class Solution {

    removeDuplicate(arr) {
    
        let v = [];
        let mp = new Map();

        for (let i = 0; i < arr.length; i++) {
            if (mp.get(arr[i]) > 0) {
                continue;
            } else {
                v.push(arr[i]);
            }
            mp.set(arr[i], (mp.get(arr[i]) || 0) + 1);
        }
        
        return v;
    }
}