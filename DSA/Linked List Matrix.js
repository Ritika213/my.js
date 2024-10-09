//Given a Matrix mat of n*n size. Your task is constructing a 2D linked list representation of the given matrix.

Input: mat = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
Output: 
         
        // 1-> 2-> 3->null
        // |   |   |
       //  4-> 5-> 6->null
       //  |   |   |
       //  7-> 8-> 9->null
       //  |   |   |
       // null null null

Input: mat = [[23, 28], [23, 28]]
Output:

        // 23->28->null
        //  |  |
        // 23  28->null
       //   |  |
       // null null

//Expected Time Complexity: O(n2)
//Expected Space Complexity: O(n2)

Constraints:
1 <= mat.size() <=15
1 <= mat[i][j] <=104

class Solution {
    constructLinkedMatrix(mat) {
        
        let n = mat.length;
        let m = mat[0].length;

        // Create a 2D array to store the Node objects
        let temp = Array.from({ length: n }, () => Array(m).fill(null));

        // Create nodes and link them
        for (let i = 0; i < n; i++) {
            for (let j = 0; j < m; j++) {
                temp[i][j] = new Node(mat[i][j]);

                // Link to the right neighbor
                if (j > 0) {
                    temp[i][j - 1].right = temp[i][j];
                }

                // Link to the down neighbor
                if (i > 0) {
                    temp[i - 1][j].down = temp[i][j];
                }
            }
        }
          // Return the head node (top-left corner of the matrix)
        return temp[0][0];
    }
}

