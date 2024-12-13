//A sorted array of distinct elements arr[] is rotated at some unknown point, the task is to find the minimum element in it. 

Examples:

Input: arr = [5, 6, 1, 2, 3, 4]
Output: 1
Explanation: //1 is the minimum element in the array.
Input: arr = [3, 1, 2]
Output: 1
Explanation:// Here 1 is the minimum element.
Input: arr = [4, 2, 3]
Output: 2
Explanation:// Here 2 is the minimum element.
Constraints
//1 ≤ arr.size() ≤ 106
//1 ≤ arr[i] ≤ 109

class Solution {
    // Function to find the minimum element in a sorted and rotated array.
    findMin(arr) {
        
        let i=0;
        let j = arr.length-1;
        let n = arr.length;
        while(i <= j){
            let mid = (i+j) >> 1;
            let next = (mid+1) % n;
            let prev = (mid+n-1) % n;
            if(arr[mid] <= arr[next] && arr[prev] >= arr[mid]){
                return arr[mid];
            } else {
                if(arr[mid] < arr[j]){
                     j = mid-1;
                } else {
                    i= mid+1;
                }
            }
        }
        retrun -1;
    }
}