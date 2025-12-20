//Given a sorted array arr[] (0-index based) of distinct integers and an integer k, find the index of k if it is present 
// in the arr[]. If not, return the index where k should be inserted to maintain the sorted order.

Examples :

Input: arr = [1, 3, 5, 6], k = 5
Output: 2
Explanation:// Since 5 is found at index 2 as arr[2] = 5, the output is 2.
Input: arr = [1, 3, 5, 6], k = 2
Output: 1
Explanation:// The element 2 is not present in the array, but inserting it at index 1 will maintain the sorted order.
Input: arr = [2, 6, 7, 10, 14], k = 15
Output: 5
Explanation //The element 15 is not present in the array, but inserting it after index 4 will maintain the sorted order.

Constraints
//1 ≤ arr.size() ≤ 104
//-103 ≤ arr[i] ≤ 103
//-103 ≤ k ≤ 103

class Solution {
    searchInsertK(arr, k) {
        
         let n=arr.length;
        let idx=-1;
        for(let i=0;i<n;i++){
            if(i===0 && arr[i]>k){
                idx=i;
                break;
            }else if(i-1>=0 && arr[i]>k && arr[i-1]<k){
                idx=i;
                break;
            }else if(arr[i]===k){
                idx=i;
                break;
            }else if(i===n-1 && arr[i]<k){
                idx=i+1;
                break;
            }
        }
        
        return idx;
    }
}