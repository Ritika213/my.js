//Given a string s, which may contain duplicate characters, your task is to generate and return an array of all unique permutations 
//of the string. You can return your answer in any order.

Examples:

Input: s = "ABC"
Output: ["ABC", "ACB", "BAC", "BCA", "CAB", "CBA"]
Explanation:// Given string ABC has 6 unique permutations.
Input: s = "ABSG"
Output: ["ABGS", "ABSG", "AGBS", "AGSB", "ASBG", "ASGB", "BAGS", "BASG", "BGAS", "BGSA", "BSAG", "BSGA", "GABS", "GASB", "GBAS", 
    "GBSA", "GSAB", "GSBA", "SABG", "SAGB", "SBAG", "SBGA", "SGAB", "SGBA"]
Explanation:// Given string ABSG has 24 unique permutations.
Input: s = "AAA"

Output: ["AAA"]
Explanation:// No other unique permutations can be formed as all the characters are same.
Constraints:
1 <= s.size() <= 9
//s contains only Uppercase english alphabets


class Solution {
    findPermutation(s) {
        const res = [];
        const arr = s.split('').sort(); // Sort characters of the string

        do {
            res.push(arr.join('')); // Push current permutation
        } while (this.nextPermutation(arr)); // Generate next permutation

        return res;
    }

    nextPermutation(arr) {
        let i = arr.length - 2;

        // Find the first index `i` such that arr[i] < arr[i + 1]
        while (i >= 0 && arr[i] >= arr[i + 1]) i--;

        if (i < 0) return false; // No more permutations possible

        // Find the smallest element in arr[i+1:] that is greater than arr[i]
        let j = arr.length - 1;
        while (arr[j] <= arr[i]) j--;

        // Swap arr[i] and arr[j]
        [arr[i], arr[j]] = [arr[j], arr[i]];

        // Reverse the elements from arr[i+1] to the end
        let left = i + 1, right = arr.length - 1;
        while (left < right) {
            [arr[left], arr[right]] = [arr[right], arr[left]];
            left++;
            right--;
        }

        return true;
    }
}


