//Given an array arr[], where each element is at most k positions away from its correct position in the sorted order.
//Your task is to restore the sorted order of arr[] by rearranging the elements in place.

Note:// Don't use any sort() method.

Examples:

Input: arr = [2, 3, 1, 4], k = 2
Output: [1, 2, 3, 4]
Explanation: //All elements are at most k = 2 positions away from their correct positions.
//Element 1 moves from index 2 to 0
//Element 2 moves from index 0 to 1
//Element 3 moves from index 1 to 2
//Element 4 stays at index 3
Input: arr= [7, 9, 14], k = 1
Output: [7, 9, 14]
Explanation:// All elements are already stored in the sorted order.
Constraints
//1 ≤ arr.size() ≤ 106
//0 ≤ k < arr.size()
//1 ≤ arr[i] ≤ 106

/**
 * @param {number[]} arr
 * @param {number} k
 * @returns {void}
 */

class MinHeap {
    constructor() {
        this.heap = [];
    }

    getParent(i) { return Math.floor((i - 1) / 2); }
    getLeft(i) { return 2 * i + 1; }
    getRight(i) { return 2 * i + 2; }

    insert(val) {
        this.heap.push(val);
        this.bubbleUp();
    }

    bubbleUp() {
        let index = this.heap.length - 1;
        while (index > 0) {
            let parent = this.getParent(index);
            if (this.heap[parent] > this.heap[index]) {
                [this.heap[parent], this.heap[index]] = [this.heap[index], this.heap[parent]];
                index = parent;
            } else break;
        }
    }

    extractMin() {
        if (this.heap.length === 0) return null;
        if (this.heap.length === 1) return this.heap.pop();

        const min = this.heap[0];
        this.heap[0] = this.heap.pop();
        this.heapify(0);
        return min;
    }

    heapify(i) {
        let smallest = i;
        let left = this.getLeft(i);
        let right = this.getRight(i);

        if (left < this.heap.length && this.heap[left] < this.heap[smallest]) smallest = left;
        if (right < this.heap.length && this.heap[right] < this.heap[smallest]) smallest = right;

        if (smallest !== i) {
            [this.heap[i], this.heap[smallest]] = [this.heap[smallest], this.heap[i]];
            this.heapify(smallest);
        }
    }

    size() {
        return this.heap.length;
    }
}

class Solution {
    nearlySorted(arr, k) {
        let heap = new MinHeap();
        let n = arr.length;
        let index = 0;

        // Build initial heap with first k+1 elements
        for (let i = 0; i < Math.min(k + 1, n); i++) {
            heap.insert(arr[i]);
        }

        // Process the rest of the array
        for (let i = k + 1; i < n; i++) {
            arr[index++] = heap.extractMin();
            heap.insert(arr[i]);
        }

        // Extract remaining elements
        while (heap.size() > 0) {
            arr[index++] = heap.extractMin();
        }

        return arr;
    }
}

