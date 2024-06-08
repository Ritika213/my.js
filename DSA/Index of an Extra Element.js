//given two sorted arrays arr1[] & arr2[] of distinct elements. The first array has one element extra added in between. 
//Return the index of the extra element.

Note:// 0-based indexing is followed.

Examples

Input: n = 7, arr1=// {2,4,6,8,9,10,12}, arr2[] = {2,4,6,8,10,12}
Output// 4
Explanation:// In the first array, 9 is extra added and it's index is 4.
Input: n = 6, arr1// = {3,5,7,8,11,13}, arr2[] = {3,5,7,11,13}
Output: 3
Explanation: //In the first array, 8 is extra and it's index is 3.
//Expected Time Complexity: O(log n).
//Expected Auxiliary Space: O(1).

Constraints:
2<=n<=105
1<=a[i],b[i]<=106

class Solution {
    findExtra(n, arr1, arr2) {
        
           let left =0, right = n-2, mid=0;
        while(left<=right){
            mid = Math.floor(left + (right - left)/2);
            if(arr1[mid] === arr2[mid]){
                left = mid+1;
            }
            else{
                right = mid-1;
            }
        }
        return left;
    }
}