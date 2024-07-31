//Given an array of strings arr. Return the longest common prefix among all strings present in the array. If there's no prefix common in
// all the strings, return "-1".

Examples :

Input: //arr[] = ["geeksforgeeks", "geeks", "geek", "geezer"]
Output: gee
Explanation:// "gee" is the longest common prefix in all the given strings.
Input: //arr[] = ["hello", "world"]
Output: -1
Explanation:// There's no common prefix in the given strings.
//Expected Time Complexity: O(n*min(|arri|))
//Expected Space Complexity: O(min(|arri|))

Constraints
//1 ≤ |arr| ≤ 103
//1 ≤ |arr[i]| ≤ 103


class Solution {
    longestCommonPrefix(arr) {
    
     if (!arr || arr.length === 0) return "-1";
        
        let s = arr[0];  // Start with the first string as the common prefix
        for (let i = 1; i < arr.length; i++) {
            let j = 0;
            for (; j < s.length && j < arr[i].length; j++) {
                if (s[j] !== arr[i][j]) break;
            }
            s = s.substring(0, j);  // Update the common prefix
            if (s === "") return "-1";  // If there's no common prefix
        }
        return s;

    }
}