//Difficulty: MediumAccuracy: 59.44%Submissions: 6K+Points: 4
//given a lowercase string s, determine the total number of distinct strings that can be formed using the following rules:

//Identify all unique vowels (a, e, i, o, u) present in the string.
//For each distinct vowel, choose exactly one of its occurrences from s. If a vowel appears multiple times, each occurrence represents 
//a unique selection choice.
//Generate all possible permutations of the selected vowels. Each unique arrangement counts as a distinct string.
//Return the total number of such distinct strings.

Examples:

Input: s = "aeiou"
Output: 120
Explanation:// Each vowel appears once, so the number of different strings can form is 5! = 120.
Input: s = "ae"
Output: 2
Explanation:// Pick a and e, make all orders → "ae", "ea".
Input: s = "aacidf"
Output: 4 
Explanation:// Vowels in s are 'a' and 'i', Pick each 'a' once with a single 'i', make all orders → "ai", "ia", "ai", "ia".
Constraints
//1 ≤ s.size() ≤ 100

class Solution {
    vowelCount(s) {
        // code here
        let arr = [0, 0, 0, 0, 0]; // a, e, i, o, u

        for (let i = 0; i < s.length; i++) {
            if (s[i] === 'a') arr[0]++;
            else if (s[i] === 'e') arr[1]++;
            else if (s[i] === 'i') arr[2]++;
            else if (s[i] === 'o') arr[3]++;
            else if (s[i] === 'u') arr[4]++;
        }

        let count = 0;
        for (let i = 0; i < 5; i++) {
            if (arr[i] !== 0) count++;
        }
         if (count === 0) return 0;

        let ans = 1;
        let temp = count;
        while (temp) {
            ans *= temp;
            temp--;
        }

        for (let i = 0; i < 5; i++) {
            if (arr[i] !== 0) {
                ans *= arr[i];
            }
        }

        return ans;
    }
}

