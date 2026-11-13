//Given the roots r1 and r2 of two Binary Search Trees (BST), find all nodes that are present in both trees i.e.
//  the intersection nodes of the two BSTs.

//Return the common node values in sorted order.

Examples:

Input: r1 = [5, 1, 10, 0, 4, 7, N, N, N, N, N, N, 9], r2 = [10, 7, 20, 4, 9, N, N]  

Output: [4, 7, 9, 10]
Explanation// The values present in both BSTs are 4, 7, 9, and 10. Hence, the answer is [4, 7, 9, 10].

Input: r1 = [10, 2, 11, 1, 3, N, N], r2 = [2, 1, 3]

Output: [1, 2, 3]
Explanation: //The values 1, 2, and 3 are present in both BSTs. Hence, the answer is [1, 2, 3].
Constraints

//1 ≤ size of binary trees ≤ 105
//0 ≤ Node.data ≤ 109


class Solution {
    findCommon(r1, r2) {
        let ans = [];
        let s1 = [], s2 = [];

        while (true) {
            while (r1) {
                s1.push(r1);
                r1 = r1.left;
            }

            while (r2) {
                s2.push(r2);
                r2 = r2.left;
            }

            if (s1.length === 0 || s2.length === 0)
                return ans;

            let t1 = s1[s1.length - 1];
            let t2 = s2[s2.length - 1];

            if (t1.data === t2.data) {
                ans.push(t1.data);
                r1 = t1.right;
                r2 = t2.right;
                s1.pop();
                s2.pop();
            }
            else if (t1.data < t2.data) {
                r1 = t1.right;
                s1.pop();
            }
            else {
                r2 = t2.right;
                s2.pop();
            }
        }

        return ans;
    }
}