//Given an array arr[] of positive integers. Your have to sort them so that the first part of the array contains odd numbers 
//sorted in descending order, and the rest of the portion contains even numbers sorted in ascending order.

Examples:

Input: arr = [1, 2, 3, 5, 4, 7, 10]
Output: [7, 5, 3, 1, 2, 4, 10]
Explanation:// 7, 5, 3, 1 are odd numbers in descending order and 2, 4, 10 are even numbers in ascending order.
Input: arr = [0, 4, 5, 3, 7, 2, 1]
Output: [7, 5, 3, 1, 0, 2, 4]
Explanation:// 7, 5, 3, 1 are odd numbers in descending order and 0, 2, 4 are even numbers in ascending order.
Constraints
//1 ≤ arr.size() ≤ 105
//0 ≤ arri ≤ 109


class Solution {
    sortIt(arr) {
        
        let i = 0;
        let n = arr.length;

        // Step 1: Move all odd numbers to the front
        for (let j = 0; j < n; j++) {
            if (arr[j] % 2 !== 0) {
                [arr[i], arr[j]] = [arr[j], arr[i]];
                i++;
            }
        }

        // Step 2: Sort odd part in descending order
        let oddPart = arr.slice(0, i).sort((a, b) => b - a);

        // Step 3: Sort even part in ascending order
        let evenPart = arr.slice(i).sort((a, b) => a - b);

        // Step 4: Combine back
        for (let k = 0; k < i; k++) {
            arr[k] = oddPart[k];
        }
        for (let k = i; k < n; k++) {
            arr[k] = evenPart[k - i];
        }
    }
}
