//Given a sorted circular linked list, the task is to insert a new node in this circular linked list so that it remains a sorted circular
// linked list.

Examples:

Input:// head = 1->2->4, data = 2
Output:// 1->2->2->4
Explanation// We can add 2 after the second node.

Input: head =// 1->4->7->9, data = 5
Output//: 1->4->5->7->9
Explanation:// We can add 5 after the second node.

Constraints:
//2 <= number of nodes <= 106
//0 <= node->data <= 106
0 <= data <= 106




//User function Template for javascript


/**
 * @param {Node} head
 * @param {number} data
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

class Solution {
    
    sortedInsert(head, data)
    {
        //your code here
        let newNode = new Node(data);
        
        if (head === null) {
            newNode.next = newNode;
            return newNode;
        }
        
        let curr = head;
        let next = curr.next;
        
        // Case 1: Insert at the beginning
        if (data <= curr.data) {
            newNode.next = head;
            while (curr.next != head) {
                curr = curr.next;
            }
            curr.next = newNode;
            return newNode;
        }
        // Case 2: Insert in the middle or at the end
        while (next != head && data > next.data) {
            curr = next;
            next = next.next;
        }
        
        curr.next = newNode;
        newNode.next = next;
        
        return head;
    }
    
}
