//Given a queue q[] of even size. Your task is to rearrange the queue by interleaving its first half with the second half.

//Interleaving is the process of mixing two sequences by alternating their elements while preserving their relative order.
//In other words, Interleaving means place the first element from the first half and then first element from the 2nd half and again
// second element from the first half and then second element from the 2nd half and so on....

Examples:

Input: q = [2, 4, 3, 1]
Output: [2, 3, 4, 1]
Explanation:// We place the first element of the first half 2 and after that 
//place the first element of second half 3 and after that repeat
//the same process one more time so the resulting queue will be [2, 3, 4, 1]
Input: q = [3, 5]
Output: [3, 5]
Explanation //We place the first element of the first half 3 and first element
//of the second half 5 so the resulting queue is [3, 5]

Constraints
//1 ≤ queue.size() ≤ 103
//1 ≤ queue[i] ≤ 105

/**
 * @param {queue[]} q
 * @returns {void}
 */

class Solution {
    rearrangeQueue(q) {
        
        let n = Math.floor(q.len() / 2);
        let firstHalf = [];

        // Step 1: first half nikaalo
        for (let i = 0; i < n; i++) {
            firstHalf.push(q.peek());
            q.dequeue();
        }

        // Step 2: interleave
        for (let i = 0; i < n; i++) {
            q.enqueue(firstHalf.shift());
            q.enqueue(q.peek());
            q.dequeue();
        }
    
    }
}

/**
// Node class
class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

// Custom Queue class
class Queue {
    constructor() {
        this.front = this.rear = null;
        this.size = 0;
    }

    isEmpty() { return this.front === null; }

    enqueue(data) {
        const node = new Node(data);
        if (this.isEmpty()) {
            this.front = this.rear = node;
        } else {
            this.rear.next = node;
            this.rear = node;
        }
        this.size++;
    }

    dequeue() {
        if (this.isEmpty()) return null;
        this.front = this.front.next;
        if (!this.front) this.rear = null;
        this.size--;
    }

    peek() { return this.front ? this.front.data : null; }

    len() { return this.size; }
}

*/
