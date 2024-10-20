//Given a doubly linked list, each node is at most k-indices away from its target position. The problem is to sort the given doubly linked list. 
//The distance can be assumed in either of the directions (left and right).

Examples :

Input:// Doubly Linked List : 3 <-> 2 <-> 1 <-> 5 <-> 6 <-> 4 , k = 2
Output:// 1 <-> 2 <-> 3 <-> 4 <-> 5 <-> 6

Explanation:// After sorting the given 2-sorted list is 1 <-> 2 <-> 3 <-> 4 <-> 5 <-> 6.

Input// Doubly Linked List : 5 <-> 6 <-> 7 <-> 3 <-> 4 <-> 4 , k = 3
Output// 3 <-> 4 <-> 4 <-> 5 <-> 6 <-> 7

Explanation:// After sorting the given 3-sorted list is 3 <-> 4 <-> 4 <-> 5 <-> 6 <-> 7.
//Expected Time Complexity: O(n*logk)
//Expected Auxiliary Space: O(k)
Constraints
//1 <= number of nodes <= 105
//1 <= k < number of nodes
//1 <= node->data <= 109

class DLLNode {
    constructor(val) {
        this.data = val;
        this.next = null;
        this.prev = null;
    }
}

class Solution {
    // function to sort a k-sorted doubly linked list
    sortAKSortedDLL(head, k) {
        let pq = new MinPriorityQueue(); // priority queue (min-heap)
        let head1 = head;
        let head2 = head;

        // Traverse the list and use the min-heap to sort nodes
        while (head1) {
            pq.enqueue(head1.data);
            if (pq.size() === k + 1) {
                head2.data = pq.dequeue().element;
                head2 = head2.next;
            }
            head1 = head1.next;
        }

        // Empty the remaining elements in the min-heap
        while (!pq.isEmpty()) {
            head2.data = pq.dequeue().element;
            head2 = head2.next;
        }

        return head;
    }
}

