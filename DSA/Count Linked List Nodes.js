//Given a singly linked list. The task is to find the length of the linked list, where length is defined as the number of nodes in the linked list.

Examples :

Input: LinkedList :// 1->2->3->4->5

Output: 5
Explanation:// Count of nodes in the linked list is 5, which is its length.
Input: LinkedList :// 2->4->6->7->5->1->0
 
Output: 7
Explanation// Count of nodes in the linked list is 7. Hence, the output is 7.

//Expected Time Complexity: O(n)
//Expected Auxilliary Space: O(1)

Constraints
//1 <= number of nodes <= 105
//1 <= node->data <= 103

class Solution {
    //Function to count nodes of a linked list.
    getCount(head)
    {
        
        let p=head;
        let count=1;
        while(p.next!=null){
            p=p.next;
            count++;
        }
        return count;
    }
}
