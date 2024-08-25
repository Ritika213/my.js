//Given two positive integer arrays arr and brr, find the number of pairs such that xy > yx (raised to power of) where x is an element from arr 
//and y is an element from brr.

Examples :

Input:// arr[] = [2, 1, 6], brr[] = [1, 5]
Output: 3
Explanation: //The pairs which follow xy > yx are: 21 > 12,  25 > 52 and 61 > 16 .
Input:// arr[] = [2 3 4 5], brr[] = [1 2 3]
Output: 5
Explanation// The pairs which follow xy > yx are: 21 > 12 , 31 > 13 , 32 > 23 , 41 > 14 , 51 > 15 .
//Expected Time Complexity: O((N + M)log(N)).
//Expected Auxiliary Space: O(1).

Constraints
//1 ≤ arr.size(), brr.size() ≤ 105
//1 ≤ brr[i], arr[i] ≤ 103

class Solution {
    // Function to count number of pairs such that x^y is greater than y^x.
    countPairs(arr, brr) {
        
         let a = arr.map(x => Math.log(x) / x);
        let b = brr.map(y => Math.log(y) / y);

        // Sort arrays in descending order
        a.sort((x, y) => y - x);
        b.sort((x, y) => y - x);

        let i = 0, j = 0, n = a.length, m = b.length;
        let x = 0;

        // Count pairs
        while (i < n && j < m) {
            if (a[i] > b[j]) {
                x += (m - j);
                i++;
            } else {
                j++;
            }
        }
        return x;
    }
}

