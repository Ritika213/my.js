//Given two numbers, num1 and num2, represented by linked lists of size n and m respectively. The task is to return a linked list that represents
// the sum of these two numbers.

//For example, the number 190 will be represented by the linked list, 1->9->0->null, similarly 25 by 2->5->null. Sum of these two numbers is
// 190 + 25 = 215, which will be represented by 2->1->5->null. You are required to return the head of the linked list 2->1->5->null.

Note// There can be leading zeros in the input lists, but there should not be any leading zeros in the output list.

//Example 1:

Input:
n = 2
num1 = 45 //(4->5->null)
m = 3
num2 = 345 //(3->4->5->null)
Output: 
//3->9->0->null  
Explanation 
//For the given two linked list (4 5) and (3 4 5), after adding the two linked list resultant linked list will be (3 9 0).

//Example 2:

Input:
n = 4
num1 = //0063 (0->0->6->3->null)
m = 2
num2 =// 07 (0->7->null)
Output 
//7->0->null
Explanation 
//For the given two linked list (0 0 6 3) and (0 7), after adding the two linked list resultant linked list will be (7 0).

Task:
//The task is to complete the function addTwoLists() which has node reference of both the linked lists and returns the head of the sum list.   

//Expected Time Complexity: O(n+m)
//Expected Auxiliary Space: O(max(n,m)) for the resultant list.

Constraints:
1 <= n, m <= 104





//User function Template for javascript

/**
 * @param {Node} first
 * @param {Node} second
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

