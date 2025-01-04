//Given a sorted array arr[] and a target value, the task is to count triplets (i, j, k) of valid indices, such that arr[i] + arr[j] + arr[k] = 
//target and i < j < k.

Examples:

Input: arr = [-3, -1, -1, 0, 1, 2], target = -2
Output: 4
Explanation:// Two triplets that add up to -2 are:
//arr[0] + arr[3] + arr[4] = (-3) + 0 + (1) = -2
//arr[0] + arr[1] + arr[5] = (-3) + (-1) + (2) = -2
//arr[0] + arr[2] + arr[5] = (-3) + (-1) + (2) = -2
//arr[1] + arr[2] + arr[3] = (-1) + (-1) + (0) = -2
Input: arr = [-2, 0, 1, 1, 5], target = 1
Output: 0
Explanation //There is no triplet whose sum is equal to 1. 

Constraints
//3 ≤ arr.size() ≤ 103
//-105 ≤ arr[i], target ≤ 105

class Solution {
    countTriplets(arr, target) {
        
        let ans = 0,n = arr.length;
        for(let i = 0;i<n-2;i++){
            let left = i+1,right = n-1;
            while(left<right){
                let sum = arr[i] + arr[left] + arr[right];
                if(sum<target) left++;
                else if(sum>target) right--;
                else{
                    let e1 = arr[left],e2 = arr[right],c1 = 0,c2 = 0;
                    while(left<=right && arr[left]===e1){
                        c1++;
                        left++;
                    }
                    while(left<=right && arr[right]===e2){
                    c2++;
                    right--;
                    }
                    if(e1 === e2) ans += (c1*(c1-1))/2;
                    else ans += c1*c2;
                }
            }
        }
        return ans;
    }
}