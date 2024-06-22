//Given a sentence containing several words and numbers. Find the largest number among them which does not contain 9. If no such number exists,
// return -1.

Examples :

Input: sentence="This is alpha 5057 and 97"
Output: 5057
Explanation:// 5057 is the only number that does not have a 9.
Input: sentence="Another input 9007"
Output: -1
Explanation //Since there is no number that does not contain a 9,output is -1.
//Expected Time Complexity: O(n)
//Expected Auxillary Space: O(n)

class Solution {
    /**
    * @param {string} sentence
    * @returns {number}
    */
    ExtractNumber(sentence) {
        // Split the sentence into words based on space
        let words = sentence.split(" ");
        let maxNumber = -1; // Initialize the maximum number as -1

        // Iterate through each word in the split sentence
        for (let i = 0; i < words.length; i++) {
            let word = words[i];

            // Check if the word is a valid number
            // The number should be purely numeric or prefixed with a '-'
            if (/^-?\d+$/.test(word)) {
                // Check if the word does not contain the digit '9'
                if (word.indexOf('9') === -1) {
                    // Convert the word to a number using parseInt
                    let num = parseInt(word, 10);

                    // Update maxNumber if the current number is greater
                    maxNumber = Math.max(maxNumber, num);
                }
            }
        }

        return maxNumber; // Return the largest valid number found
    }
}

// Example usage
let solution = new Solution();
console.log(solution.ExtractNumber("This is alpha 5057 and 97")); // Should output 5057
console.log(solution.ExtractNumber("Another input 9007")); // Should output -1
console.log(solution.ExtractNumber("Numbers: 88, 123, 456, 78.")); // Should output 456
console.log(solution.ExtractNumber("Negative and large: -88, -1234, 12345, 67890.")); // Should output 12345
console.log(solution.ExtractNumber("Mixed with text: text 123 text 456 text.")); // Should output 456
