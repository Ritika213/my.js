//Given the roots of two binary trees root1 and root2, check whether the nodes at every corresponding level of 
// the two trees are anagrams of each other.

//Two levels are considered anagrams if they contain the same node values with the same frequencies, 
// regardless of their order.

Examples:

Input: root1 = [1, 3, 2, N, N, 5, 4], root2 = [1, 2, 3, 4, 5, N, N]

Output: true
Explanation 
//Level 0: [1] and [1]
//Level 1: [3, 2] and [2, 3]
//Level 2: [5, 4] and [4, 5]
//The node values at every corresponding level are anagrams of each other. Hence, the answer is true.

Input: root1 = [1, 2, 3, 5, 4], root2 = [1, 2, 4, 5, 3]

Output: false
Explanation: 
//Level 0: [1] and [1]
//Level 1: [2, 3] and [2, 4]
//Since the node values at level 1 are not anagrams, the answer is false.
Constraints

//1 ≤ size of binary tree ≤ 105
//1 ≤ node.data ≤ 106
//The character N represents a null child.


/*
Structure of binary tree Node
class Node {
    constructor(data) {
        this.data = data;
        this.left = this.right = null;
    }
}
*/

/**
 * @param {Node} root1
 * @param {Node} root2
 * @return {boolean}
 */

class Solution {
    areAnagrams(root1, root2) {
        if (!root1 && !root2) return true;
        if (!root1 || !root2) return false;

        let q1 = [root1];
        let q2 = [root2];

        while (q1.length > 0 && q2.length > 0) {
            let sz1 = q1.length;
            let sz2 = q2.length;

            if (sz1 !== sz2) return false;

            let a = [];
            let b = [];

            for (let i = 0; i < sz1; i++) {
                let n1 = q1.shift();
                let n2 = q2.shift();

                a.push(n1.data);
                b.push(n2.data);

                if (n1.left) q1.push(n1.left);
                if (n1.right) q1.push(n1.right);

                if (n2.left) q2.push(n2.left);
                if (n2.right) q2.push(n2.right);
            }

            a.sort((x, y) => x - y);
            b.sort((x, y) => x - y);

            if (a.length !== b.length) return false;

            for (let i = 0; i < a.length; i++) {
                if (a[i] !== b[i]) return false;
            }
        }

        return q1.length === 0 && q2.length === 0;
    }
}

