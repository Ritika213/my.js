// given a text document that is initially empty. You need to complete the following functions:

//void append(char x) - Append the character x to the end of the document.
//void undo() - Undo the most recent APPEND operation (remove the last appended character).
//void redo() - Reapply the most recent undone operation (restore the last character removed by UNDO).
//string read() - Return the current content of the document as a string.
//There will be a sequence of q queries arr[] on the document. The queries are represented in numeric form:

//1 x - Call append(x)
//2 - Call undo()
//3 - Call redo()
//4 - Call read()
//The driver code will process the queries, call the corresponding functions, and finally print the outputs of all READ() operations.
//You only need to implement the above four functions.

Examples:

Input:// arr = [[1 'A'], [1 'B'], [1 'C'], [2], [4], [3], [4]]
Output: ["AB", "ABC"]
Explanation:// For each query following changes are made into the document.
//1st query: Append('A'), Document contains "A".
//2nd query: Append('B'), Document contains "AB".
//3rd query: Append('C'), Document contains "ABC".
//4rth query: UNDO(), Last character is removed, Document contains "AB".
//5th query: READ(), Document content will be printed.
//6th query: REDO(), Document contains "ABC".
//7th query: READ(), Document content will be printed.
Input:// arr = [[1 'D'], [2], [4]]
Output: [""]
Explanation: //Queries will be processed as:
//1st query: Append('D'), Document contains "D".
//2nd query: UNDO(), Last character is removed, Document becomes empty.
//3rd query: READ(), Empty Document will be printed.
Constraints
//1 ≤ q ≤ 104

class Solution {
    constructor() {
        this.word = "";
        this.recent = []; // stack using array
    }

    append(x) {
        // append x into document
        this.word += x;
    }

    undo() {
        // undo last change
        if (this.word.length === 0) return;

        this.recent.push(this.word[this.word.length - 1]);
        this.word = this.word.slice(0, -1);
    }

    redo() {
        // redo changes
        if (this.recent.length === 0) return;

        const ch = this.recent.pop();
        this.word += ch;
    }

    read() {
        // read the document
        return this.word;
    }
}

