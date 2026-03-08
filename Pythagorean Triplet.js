//Given an array arr[], return true if there is a triplet (a, b, c) from the array (where a, b, and c are on different indexes)
// that satisfies a2 + b2 = c2, otherwise return false.

Examples:

Input: arr = [3, 2, 4, 6, 5]
Output: true
Explanation: //a=3, b=4, and c=5 forms a pythagorean triplet.
Input: arr = [3, 8, 5]
Output: false
Explanation:// No such triplet possible.
Input: arr = [1, 1, 1]
Output: false
Constraints:
1 <= arr.size() <= 105
1 <= arr[i] <= 103

class Solution {
    pythagoreanTriplet(arr) {
        
        const n = arr.length;
    const mp = new Map();

    // Store squares of all numbers in the map
    for (const num of arr) {
        const square = num * num;
        mp.set(square, (mp.get(square) || 0) + 1);
    }

    // Check all pairs
    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            const num1 = arr[i] * arr[i];
            const num2 = arr[j] * arr[j];
            if (mp.has(num1 + num2)) {
                return true;
            }
        }
    }

    return false;

    }
}