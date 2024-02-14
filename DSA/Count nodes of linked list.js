//Given a singly linked list. The task is to find the length of the linked list, where length is defined as the number of nodes in the linked list.



Input:
LinkedList: //1->2->3->4->5
Output: 5
Explanation// Count of nodes in the linked list is 5, which is its length.

/*class Node{
    constructor(data){
        this.data = data;
        this.next = null;
    }
}
*/

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