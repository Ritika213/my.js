//Given the head of a Singly Linked List and a value x, insert that value x at the end of the LinkedList and return the modified Linked List.

Examples :

Input: LinkedList:// 1->2->3->4->5 , x = 6
Output:// 1->2->3->4->5->6
Explanation: 
//1 ->2->3->4->5->6

//We can see that 6 is inserted at the end of the linkedlist.
//Input: LinkedList: 5->4 , x = 1
//Output: 5->4->1
Explanation 
//5->4->1

//We can see that 1 is inserted at the end of the linkedlist.
//Expected Time Complexity: O(n)
//Expected Auxiliary Space: O(1)

Constraints
//0 <= number of nodes <= 105
//1 <= node->data , x <= 103

class Solution {
    //Function to insert a node at the beginning of the linked list.
    insertAtBegining(head, newData)
    {
        
        let temp=new Node(newData);
        temp.next=head;
        return temp;
    }
    //Function to insert a node at the end of the linked list.
    insertAtEnd(head, newData)
    {
        
      if(!head){
          return new Node(newData);
      }
      let temp=head;
      let end=new Node(newData);
      while(temp.next){
          temp=temp.next;
      }
      temp.next=end;
    return head;
       
    }
}




