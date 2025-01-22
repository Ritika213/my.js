//Given the head of two singly linked lists num1 and num2 representing two non-negative integers. The task is to return the head 
//of the linked list representing the sum of these two numbers.

//For example, num1 represented by the linked list : 1 -> 9 -> 0, similarly num2 represented by the linked list: 2 -> 5. Sum of 
//these two numbers is represented by 2 -> 1 -> 5.

Note:// There can be leading zeros in the input lists, but there should not be any leading zeros in the output list.

Examples:

Input:// num1 = 4 - > 5, num2 = 3 -> 4 -> 5
Output//  3 -> 9 -> 0
Explanation:// Given numbers are 45 and 345. There sum is 390.
Input: num1 =// 0 -> 0 -> 6 -> 3, num2 = 0 -> 7 
Output// 7 -> 0 
 
Explanation:// Given numbers are 63 and 7. There sum is 70.
Constraints
//1 <= size of both linked lists <= 106
//0 <= elements of both linked lists <= 9

class Solution {
    //Function to add two numbers represented by linked list.
       rev( nw) {
        let prev = null;
        let next = null;
        let curr = nw;
        while (curr) {
            next = curr.next;
            curr.next = prev;
            prev = curr;
            curr = next;
        }
        return prev;
    }
    addTwoLists(num1, num2)
    {
        
          num1 = this.rev(num1);
        num2 = this.rev(num2);
        
        let nhead = new Node(-1);
        let temp = nhead;
        let carr = 0;
        
        while (num1 || num2 || carr) {
            let val = (num1 ? num1.data : 0) + (num2 ? num2.data : 0) + carr;
            carr = Math.floor(val / 10);
            temp.next = new Node(val % 10);
            temp = temp.next;
            num1 = num1 ? num1.next : null;
            num2 = num2 ? num2.next : null;
        }
        nhead = this.rev(nhead.next);
        // Remove leading zeros
        while (nhead && nhead.data === 0 && nhead.next) {
            nhead = nhead.next;
        }
        
        return nhead;
    }
}
 