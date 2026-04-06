//Given a string s of distinct characters and their corresponding frequency f[ ] i.e. character s[i] has f[i] frequency. 
// You need to build the Huffman tree and return all the huffman codes in preorder traversal of the tree.
Note:// While merging if two nodes have the same value, then the node which occurs at first will be taken on the left of
// Binary Tree and the other one to the right, otherwise Node with less value will be taken on the left of the subtree and
//  other one to the right.

Examples:

Input: s = "abcdef", f =// {5, 9, 12, 13, 16, 45}
//Output: [0, 100, 101, 1100, 1101, 111]
Explanation
//HuffmanCodes will be:
f : 0
c : 100
d : 101
a : 1100
b : 1101
e : 111
Constraints
//1 ≤ s.size() = f.size() ≤ 26

class Node {
    constructor(freq, minIdx) {
        this.freq = freq;
        this.minIdx = minIdx;
        this.left = null;
        this.right = null;
    }
}

class Solution {
    // Helper function for preorder traversal
    preorder(root, curr, res) {
        if (!root) return;

        if (!root.left && !root.right) {
            res.push(curr);
            return;
        }

        this.preorder(root.left, curr + "0", res);
        this.preorder(root.right, curr + "1", res);
    }

    huffmanCodes(s, f) {
        // Simple priority queue using array
        let pq = [];
        
        for (let i = 0; i < s.length; i++) {
            pq.push(new Node(f[i], i));
        }

        if (pq.length === 1) return ["0"];

        // Comparator: smallest freq first, tie -> smaller index
        const compare = (a, b) => {
            if (a.freq === b.freq) return a.minIdx - b.minIdx;
            return a.freq - b.freq;
        };

        // Build Huffman tree
        while (pq.length > 1) {
            pq.sort(compare); // maintain min-heap property
            let left = pq.shift();
            let right = pq.shift();

            let parent = new Node(left.freq + right.freq, Math.min(left.minIdx, right.minIdx));
            parent.left = left;
            parent.right = right;

            pq.push(parent);
        }

        // Preorder traversal to get codes
        let res = [];
        this.preorder(pq[0], "", res);
        return res;
    }
}
