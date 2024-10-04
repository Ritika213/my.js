//Given a Circular Linked List. The task is to delete the given node, key in the circular linked list, and reverse the circular linked list.

Note: //don't have to print anything, just return head of the modified list in each function.

Examples:

Input:// Linked List: 2->5->7->8->10, key = 8

Output: //10->7->5->2 

Explanation
//After deleting 8 from the given circular linked list, it has elements as 2, 5, 7, 10. Now, reversing this list will result in 10, 7, 5, 2.

Input:// Linked List: 1->7->8->10, key = 8

Output:// 10->7->1

Explanation: 
//After deleting 8 from the given circular linked list, it has elements as 1, 7,10. Now, reversing this list will result in 10, 7, 1.
//Expected Time Complexity: O(n)
//Expected Auxillary Space: O(1)

Constraints
//2 <= number of nodes, key  <= 105
//1 <= node -> data <= 105

class Solution {
    // Function to reverse a circular linked list
    reverse(head) {
        
        if (!head || head.next === head) {
            return head;  // Empty or single node circular linked list
        }

        let prev = null;
        let curr = head;
        let next;
        let tail = head;

        do {
            next = curr.next;
            curr.next = prev;
            prev = curr;
            curr = next;
        } while (curr !== head);

        // Re-establish circular link
        head.next = prev;
        head = prev;

        return head;
    }

    // Function to delete a node from the circular linked list
    deleteNode(head, key) {
        if (!head) return null;  // Empty list

        // If the head node is the one to be deleted
        if (head.data === key) {
            if (head.next === head) {
                // If it's the only node in the list
                return null;
            }

            let curr = head;
            while (curr.next !== head) {
                curr = curr.next;  // Find the last node
            }

            // Point the last node to the next node of head
            curr.next = head.next;
            head = head.next;

            return head;
        }

        // If the node to be deleted is not the head
        let prev = null;
        let curr = head;

        do {
            if (curr.data === key) {
                prev.next = curr.next;
                return head;
            }
            prev = curr;
            curr = curr.next;
        } while (curr !== head);

        // If key is not found
        return head;
    }
}