//A celebrity is a person who is known to all but does not know anyone at a party. A party is being organized by some people.  A square matrix
 //mat is used to represent people at the party such that if an element of row i and column j is set to 1 it means ith person knows jth person. 
 //You need to return the index of the celebrity in the party, if the celebrity does not exist, return -1.

Note: //Follow 0-based indexing.

Examples:

Input:// mat[][] = [[0 1 0],
               // [0 0 0], 
               // [0 1 0]]
Output: 1
Explanation// 0th and 2nd person both know 1. Therefore, 1 is the celebrity. 

Input: //mat[][] = [[0 1],
               // [1 0]]
Output: -1
Explanation:// The two people at the party both know each other. None of them is a celebrity.
//Expected Time Complexity: O(n2)
//Expected Auxiliary Space: O(1)

Constraints:
1 <= mat.size()<= 3000
0 <= mat[i][j]<= 1

class Solution {
    // Function to find the celebrity.
    celebrity(mat) {
        
          let n = mat.length;
        if (n === 0) return -1; // No people in the matrix
        if (n === 1) return 0; // Only one person, they are the celebrity by default

        let adj = Array.from({ length: n }, () => []); // Array to store adjacency list
        let cnt = Array(n).fill(0); // Array to count number of people who know each person

        for (let i = 0; i < n; i++) {
            for (let j = 0; j < n; j++) { // m should be n, as mat is n x n matrix
                if (mat[i][j]) {
                    adj[i].push(j);
                    cnt[j]++;
                }
            }
        }

        for (let i = 0; i < n; i++) {
            if (cnt[i] === n - 1 && adj[i].length === 0) {
                return i; // This person is the celebrity
            }
        }
         return -1; // No celebrity found
    }
}