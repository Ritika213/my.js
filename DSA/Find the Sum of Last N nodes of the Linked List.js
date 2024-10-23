//Given a single linked list, calculate the sum of the last n nodes.

Note:// It is guaranteed that n <= number of nodes.

Examples:

Input:// Linked List: 5->9->6->3->4->10, n = 3

Output: 17
Explanation:// The sum of the last three nodes in the linked list is 3 + 4 + 10 = 17.
Input// Linked List: 1->2, n = 2

Output: 3
Explanation:// The sum of the last two nodes in the linked list is 2 + 1 = 3.
Constraints
//1 <= number of nodes, n <= 105
//1 <= node->data <= 103

class Solution {
    sumOfLastN_Nodes(head, n) {
        
         let curr= head;
      let tsum=0;
      let sum=0;
      
      let size=0;
      while(curr!=null)
      {
          tsum= tsum+curr.data;
          size++;
          curr=curr.next;
      }
      curr=head;
    let i= (size-n);
    while(i>0)
    {
        sum= sum + curr.data;
        curr=curr.next;
        i--;
        
    }
      return (tsum-sum);
    }
}

