//Given a singly linked list of size N. The task is to left-shift the linked list by k nodes, where k is a given positive integer
// smaller than or equal to length of the linked list.

//Example 1:

Input:
N = 5
value= //{2, 4, 7, 8, 9}
k = 3
Output:// 8 9 2 4 7
Explanation
//Rotate 1: 4 -> 7 -> 8 -> 9 -> 2
//Rotate 2: 7 -> 8 -> 9 -> 2 -> 4
//Rotate 3: 8 -> 9 -> 2 -> 4 -> 7

//Example 2:

Input:
N = 8
value = //{1, 2, 3, 4, 5, 6, 7, 8}
k = 4
Output: //5 6 7 8 1 2 3 4

 Task:
//don't need to read input or print anything. Your task is to complete the function rotate() which takes a head reference as the first argument and k as the second argument, and returns the head of the rotated linked list.

//Expected Time Complexity: O(N).
//Expected Auxiliary Space: O(1).

Constraints:
1 <= N <= 103
1 <= k <= N


class Solution {
    //Function to rotate a linked list.
    rotate(head, k)
    {
        
         if(head==null || head.next==null||k==0)
            return head;
            
        let curr = head;
        while(curr.next!=null){
            curr= curr.next;
        }
        
        curr.next = head;
        while(k--){
            curr= curr.next;
        }
        
        head = curr.next;
        curr.next = null;
        
        return head;


    }
}