//Given an array arr of distinct integers. Rearrange the array in such a way that the first element is the largest and the second element 
//is the smallest, the third element is the second largest and the fourth element is the second smallest, and so on.

Examples:

Input: arr = [7, 1, 2, 3, 4, 5, 6]
Output: [7, 1, 6, 2, 5, 3, 4]
Explanation:// The first element is first maximum and second element is first minimum and so on.
Input: arr = [1, 6, 9, 4, 3, 7, 8, 2]
Output: [9, 1, 8, 2, 7, 3, 6, 4]
Explanation// The first element is first maximum and second element is first minimum and so on.
//Expected Time Complexity: O(nlogn).
//Expected Auxiliary Space: O(n).

//Expected Time Complexity: O(nlogn).
//Expected Auxiliary Space: O(n).

Constraints
//1 ≤ arr.size() ≤ 105
//1 ≤ arr[i] ≤ 105

class Solution {
    alternateSort(arr) {
        
        arr.sort((a,b)=>a-b)
        let ans = [];
        let i=0, j=arr.length-1;
        while(i<=j){
            if(ans.length % 2 ===0){
                ans.push(arr[j]);
                j--;
            }else{
                ans.push(arr[i])
                i++;
        }
    }
    return ans;
}
}
