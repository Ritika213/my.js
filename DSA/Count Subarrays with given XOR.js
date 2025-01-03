//Given an array of integers arr[] and a number k, count the number of subarrays having XOR of their elements as k.

Examples: 

Input: arr = [4, 2, 2, 6, 4], k = 6
Output: 4
Explanation:// The subarrays having XOR of their elements as 6 are [4, 2], [4, 2, 2, 6, 4], [2, 2, 6], and [6]. Hence, the answer is 4.
Input: arr = [5, 6, 7, 8, 9], k = 5
Output: 2
Explanation //The subarrays having XOR of their elements as 5 are [5] and [5, 6, 7, 8, 9]. Hence, the answer is 2.

Input: arr = [1, 1, 1, 1], k = 0
Output: 4
Explanation:// The subarrays are [1, 1], [1, 1], [1, 1] and [1, 1, 1, 1] 
 

Constraints

//1 ≤ arr.size() ≤ 105
//0 ≤ arr[i] ≤105
//0 ≤ k ≤ 105

class Solution {
    subarrayXor(arr, k) {
        
        let n = arr.length;
        let xor = 0; // Prefix XOR
        let count = 0;
        let freqMap = new Map(); // To store the frequency of XOR values
        
        for (let i = 0; i < n; i++) {
            // Calculate the prefix XOR up to index i
            xor ^= arr[i];
            
            // If the prefix XOR itself is equal to k, increment count
            if (xor === k) {
                count++;
            }
            
            // Check if there exists a prefix XOR such that
            // (prefix XOR ^ k) = current XOR
            let targetXor = xor ^ k;
            if (freqMap.has(targetXor)) {
                count += freqMap.get(targetXor);
            }
            // Update the frequency of the current prefix XOR in the map
            freqMap.set(xor, (freqMap.get(xor) || 0) + 1);
        }
        
        return count;
    }
}