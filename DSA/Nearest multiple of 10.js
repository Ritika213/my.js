//A string str is given to represent a positive number. The task is to round str to the nearest multiple of 10.  If you have two multiples
// equally apart from str, choose the smallest element among them.

Examples:

Input: str = 29 
Output: 30
Explanation:// Close multiples are 20 and 30, and 30 is the nearest to 29. 
Input: str = 15
Output: 10
Explanation:// 10 and 20 are equally distant multiples from 20. The smallest of the two is 10.
//Expected Time Complexity: O(n).
//Expected Auxiliary Space: O(1).

Constraints:
1 <= str.size()<= 105

class Solution {
    roundToNearest(str) {
        
         let n=str.length;
        let arr = str.split(''); // Convert string to array for easy manipulation

        if (arr[n - 1] <= '5') {
            arr[n - 1] = '0';
            return arr.join(''); // Convert array back to string
        }

        arr[n - 1] = '0'; // Round up the last digit
        let i = n - 2;

        // Carry over if there are '9's in the number
        while (i >= 0 && arr[i] === '9') {
            arr[i] = '0';
            i--;
        }
         if (i < 0) {
            // All digits were 9, so we need to add '1' at the beginning
            return '1' + arr.join('');
        } else {
            arr[i] = (parseInt(arr[i]) + 1).toString(); // Increase the digit and handle it as a string
        }

        return arr.join('');
    }
}