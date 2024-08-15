//given a linked list where each element in the list is a node and have an integer data. You need to add 1 to the number
// formed by concatinating all the list node numbers together and return the head of the modified linked list. 

Note: //The head represents the first element of the given array.

Examples :

Input: LinkedList:// 4->5->6
Output: 457

Explanation:// 4->5->6 represents 456 and when 1 is added it becomes 457. 
Input: LinkedList:// 1->2->3
Output: 124

Explanation: // 1->2->3 represents 123 and when 1 is added it becomes 124. 
//Expected Time Complexity: O(n)
//Expected Auxiliary Space: O(1)

Constraints:
1 <= len(list) <= 105
0 <= list[i] <= 105


class Solution {
    // Method to reverse the linked list
    rev(h) {
        let curr = h, next = null, prev = null;
        while (curr != null) {
            next = curr.next; // Store next node
            curr.next = prev; // Reverse the current node's pointer
            prev = curr;      // Move prev to current node
            curr = next;      // Move to next node
        }
        return prev; // Return the new head (prev will be at the last node)
    }

    // Method to add one to the linked list
    addOne(head) {
        // Reverse the linked list to make addition easier
        let r = this.rev(head);

        let carry = 1; // Start with a carry of 1 (since we are adding 1)
        let curr = r, pre = null;

        // Traverse the reversed list to perform the addition
        while (curr != null) {
            curr.data += carry;        // Add carry to the current node's data
            carry = Math.floor(curr.data / 10); // Calculate the new carry
            curr.data = curr.data % 10;         // Update the node's data
            pre = curr;               // Update pre to the current node
            curr = curr.next;         // Move to the next node
        }

        // If there's still a carry left, add a new node at the end
        if (carry > 0) {
            pre.next = new Node(carry);
        }

        // Reverse the list back to its original order
        return this.rev(r);
    }
}


