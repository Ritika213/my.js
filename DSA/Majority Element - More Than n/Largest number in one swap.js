//Given a string s, return the lexicographically largest string that can be obtained by swapping at most one pair of characters in s.

Examples:

Input: s = "768"
Output: "867"
Explanation:// Swapping the 1st and 3rd characters(7 and 8 respectively), gives the lexicographically largest string.
Input: s = "333"
Output: "333"
Explanation:// Performing any swaps gives the same result i.e "333".
Constraints
//1 ≤ |s| ≤ 105
//'0' ≤ s[i] ≤ '9'

class Solution {
    largestSwap(s) {
        
        let n = s.length;
        let maxIndex = n - 1;
        let left = -1, right = -1;

        // Traverse from right to left
        for (let i = n - 2; i >= 0; i--) {
            if (s[i] > s[maxIndex]) {
                maxIndex = i;
            } else if (s[i] < s[maxIndex]) {
                left = i;
                right = maxIndex;
            }
        }

        // If a valid swap was found
        if (left !== -1) {
            let arr = s.split("");   // convert to array
            [arr[left], arr[right]] = [arr[right], arr[left]]; // swap
            return arr.join("");     // convert back to string
        }

        return s; // already largest
    }
}