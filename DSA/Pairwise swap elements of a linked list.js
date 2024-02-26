//Given a singly linked list of size N. The task is to swap elements in the linked list pairwise.
//For example, if the input list is 1 2 3 4, the resulting list after swaps will be 2 1 4 3.
Note: //You need to swap the nodes, not only the data. If only data is swapped then driver will print -1.



Input:
LinkedList:// 1->2->2->4->5->6->7->8
Output: 
//2 1 4 2 6 5 8 7
Explanation 
//After swapping each pair considering (1,2), (2, 4), (5, 6).. so on as pairs, we get 2, 1, 4, 2, 6, 5, 8, 7 as a new linked list.

class Solution {
    pairWiseSwap(node)
    {
        //your code here
        if(node.next==null)
         return head;
        let start=head,ans=node.next,prev=null;
        while(start!= null && start.next!=null)
        {
            let temp=start.next;
            start.next=start.next.next;
            temp.next=start;
            if(prev!=null)
             prev.next=temp;
            prev=start;
            start=start.next;
        }
        return ans;
    }
}