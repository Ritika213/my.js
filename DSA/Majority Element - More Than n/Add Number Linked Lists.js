//given the head of two singly linked lists head1 and head2 representing two non-negative integers. You have to return the head
//  of the linked list representing the sum of these two numbers.

Note:// There can be leading zeros in the input lists, but there should not be any leading zeros in the output list.

Examples:

Input: 
    
Output: // 1 -> 1 -> 2 -> 2
Explanation// Given numbers are 123 and 999. There sum is 1122.

Input: 
    
Output:// 7 -> 0 
Explanation:// Given numbers are 63 and 7. There sum is 70.
    
Constraints
//1 ≤ Number of nodes in head1, head2 ≤ 105
//0 ≤ node->data ≤ 9

/**
 * @param {Node} head1
 * @param {Node} head2
 * @returns {Node}
 */

/*
class Node{
    constructor(data){
        this.data = data;
        this.next = null;
    }
}
*/

function reverse(head) {
    let prev = null, curr = head;
    while (curr) {
        let next = curr.next;
        curr.next = prev;
        prev = curr;
        curr = next;
    }
    return prev;
}

function removeLeadingZeros(head) {
    while (head && head.data === 0) {
        head = head.next;
    }
    return head || new Node(0);
}

class Solution {
    addTwoLists(head1, head2) {

        head1 = reverse(head1);
        head2 = reverse(head2);

        let carry = 0;
        let dummy = new Node(0);
        let temp = dummy;

        while (head1 || head2 || carry) {
            let sum = carry;

            if (head1) {
                sum += head1.data;
                head1 = head1.next;
            }
            if (head2) {
                sum += head2.data;
                head2 = head2.next;
            }

            carry = Math.floor(sum / 10);
            temp.next = new Node(sum % 10);
            temp = temp.next;
        }

        let result = reverse(dummy.next);
        return removeLeadingZeros(result);
    }
}

    