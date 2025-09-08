//given the head of a linked list. You have to sort the given linked list using Merge Sort.

Examples:

Input:
    
Output:// 10 -> 20 -> 30 -> 40 -> 50 -> 60
Explanation:// After sorting the given linked list, the resultant list will be:
    
//Input:
    
//Output: 2 -> 5 -> 8 -> 9
Explanation// After sorting the given linked list, the resultant list will be:

Constraints
//1 ≤ number of nodes ≤ 105
//0 ≤ node->data ≤ 106

class Solution {
    mergeSort(head) {
        if (!head || !head.next) return head; // base case: 0 or 1 node

        // Step 1: Split the list into two halves
        let middle = this.getMiddle(head);
        let nextOfMiddle = middle.next;
        middle.next = null;

        // Step 2: Recursively sort each half
        let left = this.mergeSort(head);
        let right = this.mergeSort(nextOfMiddle);

        // Step 3: Merge the two sorted halves
        return this.sortedMerge(left, right);
    }

    // Helper: Merge two sorted linked lists
    sortedMerge(a, b) {
        if (!a) return b;
        if (!b) return a;

        if (a.data <= b.data) {
            a.next = this.sortedMerge(a.next, b);
            return a;
        } else {
            b.next = this.sortedMerge(a, b.next);
            return b;
        }
    }

    // Helper: Find the middle of the linked list
    getMiddle(head) {
        let slow = head, fast = head;
        while (fast.next && fast.next.next) {
            slow = slow.next;
            fast = fast.next.next;
        }
        return slow;
    }
}

    