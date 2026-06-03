//Given the head of a linked list, rotate the list to the right by k places.

 

//Example 1:


Input: head = [1,2,3,4,5], k = 2
Output: [4,5,1,2,3]
//Example 2:
Input: head = [0,1,2], k = 4
Output: [2,0,1]
 

Constraints:

//The number of nodes in the list is in the range [0, 500].
-100 <= Node.val <= 100
0 <= k <= 2 * 109

var rotateRight = function(head, k) {
   if(head===null) return head;
    let length=1;
    let tail=head;
    while(tail.next !==null){
        tail=tail.next;
        length++;
    }
    tail.next=head;
    let count=length-(k%length);
    while(count>0){
        head=head.next;
        tail=tail.next;
        count--;
    }
    tail.next=null;
            
        
    return head;
  
};

