//You are given a pointer/ reference to the node which is to be deleted from the linked list of N nodes. The task is to delete the node. 
//Pointer/ reference to head node is not given. 
Note: //No head reference is given to you. It is guaranteed that the node to be deleted is not a tail node in the linked list.


Input:
N = 2
value= //{1,2}
node = 1
Output: 2
Explanation //After deleting 1 from the linked list, we have remaining nodes as 2.

class Solution {
    
    deleteNode(del)
    {
        
    let temp=del;
    temp.data=del.next.data;
    temp.next=del.next.next;
    
    }

}