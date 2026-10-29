//Given an integer array files[], where files[i] represents the size of the i-th file, merge all the files into
//  a single file with the minimum total computation cost.

//The cost of merging two files of sizes x and y is x + y. After merging, a new file of size x + y is created,
//  which can be merged further with other files.

//Return the minimum total cost required to merge all the files.

Note:// It is guaranteed that the minimum total computation cost fits within a 32-bit signed integer.

Examples
Input: files = [3, 2, 4]
Output: 14
Explanation:// There are different ways to combine these files. Optimal method is given below:
Lightbox
Input: files = [2, 3, 6, 5, 7, 4]
Output: 68
Explanation:// There are different ways to combine these files. Optimal method is given below:

Constraints

//1 ≤ files.size() ≤ 105
//1 ≤ files[i] ≤ 103


/**
 * @param {number[]} files
 * @return {number}
 */

class Solution {
    minComputation(files) {
        let heap = [...files];
        let n = heap.length;

        // Build min-heap
        for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
            this.heapify(heap, n, i);
        }

        let ans = 0;

        while (heap.length > 1) {
            let t1 = this.extractMin(heap);
            let t2 = this.extractMin(heap);

            let sum = t1 + t2;
            ans += sum;

            heap.push(sum);
            this.heapify(heap, heap.length, 0);
        }

        return ans;
    }

    heapify(heap, n, i) {
        let smallest = i;
        let left = 2 * i + 1;
        let right = 2 * i + 2;

        if (left < n && heap[left] < heap[smallest]) {
            smallest = left;
        }

        if (right < n && heap[right] < heap[smallest]) {
            smallest = right;
        }

        if (smallest !== i) {
            [heap[i], heap[smallest]] = [heap[smallest], heap[i]];
            this.heapify(heap, n, smallest);
        }
    }

    extractMin(heap) {
        let min = heap[0];
        let last = heap.pop();

        if (heap.length > 0) {
            heap[0] = last;
            this.heapify(heap, heap.length, 0);
        }

        return min;
    }
}