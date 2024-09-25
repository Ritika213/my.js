//Given a singly linked list of integers. The task is to check if the given linked list is palindrome or not.

Examples:

Input: LinkedList:// 1->2->1->1->2->1
Output: true
Explanation// The given linked list is 1->2->1->1->2->1 , which is a palindrome and Hence, the output is true.

Input: LinkedList:// 1->2->3->4
Output: false
Explanation:// The given linked list is 1->2->3->4, which is not a palindrome and Hence, the output is false.

//Expected Time Complexity: O(n)
//Expected Auxiliary Space: O(1) 
Note:// You should not use the recursive stack space as well

Constraints
//1 <= number of nodes <= 105
//1 ≤ node->data ≤ 103

/*
class Node{
    constructor(data){
        this.data = data;
        this.next = null;
    }
}
*/

class Solution {
    // Function to check whether the list is palindrome.
    isPalindrome(head) {
        
        let v =[];
        while(head != null){
            v.push(head.data);
            head = head.next;
        }
        for(let i=0; i<v.length/2; i++){
            if(v[i] != v[v.length-1-i]){
                return false;
            }
        }
        return true;
    }
}
