//given a special linked list with n nodes where each node has two pointers a next pointer that points to the next 
//node of the singly linked list, and a random pointer that points to the random node of the linked list.

//Construct a copy of this linked list. The copy should consist of the same number of new nodes, where each new node has the value
 //corresponding to its original node. Both the next and random pointer of the new nodes should point to new nodes in the copied list, 
 //such that it also represent the same list state. None of the pointers in the new list should point to nodes in the original list.

//Return the head of the copied linked list.

NOTE :// Original linked list should remain unchanged.

Examples

Examples:

Input: head = [[1, 3], [3, 3], [5, NULL], [9, 3]] 
      
Output: head = [[1, 3], [3, 3], [5, NULL], [9, 3]] 
Explanation
//Node 1 points to Node 2 as its NEXT and Node 3 as its RANDOM.
//Node 2 points to Node 3 as its NEXT and Node 3 as its RANDOM.
//Node 3 points to Node 4 as its NEXT and NULL as its RANDOM.
//Node 4 points to NULL as its NEXT and Node 3 as its RANDOM.
//Input: head = [[1, 3], [2, 1], [3, 5], [4, 3], [5, 2]]

Output: head = [[1, 3], [2, 1], [3, 5], [4, 3], [5, 2]]
Explanation: 
//Node 1 points to Node 2 as its NEXT and Node 3 as its RANDOM.
//Node 2 points to Node 3 as its NEXT and Node 1 as its RANDOM.
//Node 3 points to Node 4 as its NEXT and Node 5 as its RANDOM.
//Node 4 points to Node 5 as its NEXT and Node 3 as its RANDOM.
//Node 5 points to NULL as its NEXT and Node 2 as its RANDOM.
Input: head = [[7, NULL], [7, NULL]]
Output: head = [[7, NULL], [7, NULL]]
Explanation: 
//Node 1 points to Node 2 as its NEXT and NULL as its RANDOM.
//Node 2 points to NULL as its NEXT and NULL as its RANDOM.
Constraints:
1 <= n <= 100
//0 <= node->data <= 1000


class Solution {
    cloneLinkedList(head) {
        
        if (head === null) return null;  // If the list is empty, return null

        // Step 1: Clone each node and insert it next to the original node
        let current = head;
        while (current !== null) {
            let newNode = new Node(current.data);  // Create a new node
            newNode.next = current.next;           // Link new node's next to current's next
            current.next = newNode;                // Place new node next to the original node
            current = newNode.next;                // Move to the next original node
        }

        // Step 2: Set the random pointers for the cloned nodes
        current = head;
        while (current !== null) {
            if (current.random !== null) {
                current.next.random = current.random.next;  // Set the random pointer
            }
            current = current.next.next;  // Move to the next original node
        }

        // Step 3: Separate the original and cloned lists
        let original = head;
        let cloneHead = head.next;
        let clone = cloneHead;

        while (original !== null) {
            original.next = original.next.next;  // Restore the original list
            if (clone.next !== null) {
                clone.next = clone.next.next;    // Fix the cloned list
            }
            original = original.next;
            clone = clone.next;
        }

        return cloneHead;  // Return the head of the cloned list

    }
}
  