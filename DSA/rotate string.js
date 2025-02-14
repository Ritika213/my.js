//Given two strings s and goal, return true if and only if s can become goal after some number of shifts on s.

//A shift on s consists of moving the leftmost character of s to the rightmost position.

//For example, if s = "abcde", then it will be "bcdea" after one shift.
 

//Example 1:

Input: s = "abcde", goal = "cdeab"
Output: true
//Example 2:

Input: s = "abcde", goal = "abced"
Output: false
 

Constraints:

1 <= s.length, goal.length <= 100
//s and goal consist of lowercase English letters.

var rotateString = function(s, goal) {

    let arr = s.split('');
    let len = s.length;
    let i, j, t, str;

    i = 0;

    while (i < len) {
        t = arr[len - 1];
        j = len - 1;

        while (j >= 0) {
            arr[j] = arr[j - 1];
            j--;
        }

        arr[0] = t;
        str = arr.join('');

        if (str === goal) {
            return true;
        }

        i++;
    }

    return false;
}
    
