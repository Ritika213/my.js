//Given an array arr[], determine whether it represents the level-order traversal of a valid max heap. Return true if it does; otherwise,
//  return false.

Examples :

Input: arr = [90, 15, 10, 7, 12, 2]
Output: true
Explanation:// The given array represents the following tree. Each parent node is greater than or equal to its children, so the max-heap
// property holds.
 
Input: arr = [9, 15, 10, 7, 12, 11]
Output: false
Explanation// The given array represents the following tree. It does not satisfy the max-heap property, as 9 is smaller than 15 and 10,
//  and 10 is smaller than 11.

Constraints
//1 ≤ n ≤ 105
//1 ≤ arr[i] ≤ 105

class Solution {
    isMaxHeap(arr) {
        
          let n = arr.length;
        let a = Math.floor(n/2);
        let bl = false;
        for(let i = a-1;i>=0;i--){
            let x = (2*i)+1;
            let y = (2*i)+2;
            if(x < n){
                if(arr[i] < arr[x]){
                    return false;
                }
            }
            if(y < n){
                if(arr[i] < arr[y]){
                    return false;
                }
            }
        }
        return true;
    }
}
 