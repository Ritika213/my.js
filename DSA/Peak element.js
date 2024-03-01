//Given an 0-indexed array of integers arr[] of size n, find its peak element. An element is considered to be peak if it's value is greater 
//than or equal to the values of its adjacent elements (if they exist). The array is guaranteed to be in ascending order before the peak element
// and in descending order after it.

Note: //The output will be 1 if the index returned by your function is correct; otherwise, it will be 0.


Input: 
n = 3
arr = //{1, 2, 3}
//Peak Element's Index: 2
Output// 1
Explanation //If the index returned is 2, then the output printed will be 1. Since arr[2] = 3 is greater than its adjacent elements, and 
//there is no element after it, we can consider it as a peak element. No other index satisfies the same property.

class Solution {
    
    peakElement(arr, n)
    {
        // code here
        if(n==1)
        return 0;
        if(arr[0]>=arr[1])
        return 0;
        if(arr[n-1]>arr[n-2])
        return n-1;
        for(let i=1;i<n-1;i++){
            if(arr[i]>=arr[i-1] && arr[i]>=arr[i+1]){
                return i;
            }
        }
        return 0;
    
    }
}