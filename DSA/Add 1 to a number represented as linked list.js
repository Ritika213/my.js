//A number N is represented in Linked List such that each digit corresponds to a node in linked list. You need to add 1 to it.


Input:
LinkedList: //4->5->6
Output: 457
Explanation:// 4->5->6 represents 456 and when 1 is added it becomes 457. 
//Example 2:

Input:
LinkedList:// 1->2->3
Output: 124 
 Task:
//task is to complete the function addOne() which takes the head of the linked list as the only argument and returns the head of the 
//modified linked list. The driver code prints the number.
Note: //The head represents the left-most digit of the number.

//Expected Time Complexity: O(N).
//Expected Auxiliary Space: O(1).

Constraints:
1 <= N <= 1021

class Solution {
    addOne(node)
    {
        
        let t = head;
        let r = head;
        while(t != null){
            if(t.data != 9){
                r = t;
            }
            t = t.next;
        }
        r.data = r.data + 1;
        r = r.next;
        while(r != null){
            r.data = 0;
            r = r.next;
        }
        return head;
    }
    }