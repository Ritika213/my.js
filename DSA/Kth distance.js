//Given an unsorted array arr and a number k which is smaller than size of the array. Find if the array contains duplicates within k distance.

Examples:

Input:// arr = [1, 2, 3, 4, 1, 2, 3, 4] and k = 3
Output: false
Explanation:// All duplicates are more than k distance away.
Input:// arr = [1, 2, 3, 1, 4, 5] and k = 3
Output: true
Explanation:// 1 is repeated at distance 3.
Constraints
//1 ≤ arr.size() ≤ 106
//1 ≤ k < arr.size()
//1 ≤ arr[i] ≤ 105

// User function Template for javascript
//Back-end complete function Template for javascript
class Solution {
    checkDuplicatesWithinK(arr, k) {
        
        for(let i=0;i<arr.length-1;i++){
            for(let j=i+1;j<arr.length;j++){
                if(arr[i]===arr[j] && j-i<=k){
                    return true;
                }
            }
        }
        
        return false;     

    }
}