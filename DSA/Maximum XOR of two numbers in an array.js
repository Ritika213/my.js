
//Given an array arr[] of non-negative integers of size n. Find the maximum possible XOR between two numbers present in the array.
Examples:

Input: arr = [25, 10, 2, 8, 5, 3]
Output: 28
Explanation:// The maximum possible XOR is 5 ^ 25 = 28.
Input: arr = [1, 2, 3, 4, 5, 6, 7]
Output: 7
Explanation :// The maximum possible XOR is 1 ^ 6 = 7.
Constraints
//2 ≤ arr.size() ≤ 5*104
//1 ≤ arr[i] ≤ 106


class Solution {
    maxXOR(arr) {
    
        let x=0;
    for(let i=0;i<arr.length-1;i++){
        for(let j=i+1;j<arr.length;j++){
            let o= arr[i] ^ arr[j]
            x = Math.max(x,o)
        }
    }
    return x;
    }
}
