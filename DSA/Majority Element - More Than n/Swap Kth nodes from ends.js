//Given the head of a singly linked list and an integer k. Swap the kth node (1-based index) from the beginning and the kth node
//  from the end of the linked list. Return the head of the final formed list and if it's not possible to swap the nodes return the 
// original list.

Examples:

Input: k = 1,
  
//Output: 5 -> 2 -> 3 -> 4 -> 1
Explanation// Here k = 1, hence after swapping the 1st node from the beginning and end the new list will be 5 -> 2 -> 3 -> 4 -> 1.

Input: k = 2,
  
Output//: 5 -> 9 -> 8 -> 5 -> 10 -> 3
Explanation:// Here k = 2, hence after swapping the 2nd node from the beginning and end the new list will be 5 -> 9 -> 8 -> 5 -> 10 -> 3.
  
Constraints
//1 ≤ list size ≤ 104
//1 ≤ node->data ≤ 106
//1 ≤ k ≤ 104

class Solution {
    swapKth(head, k) {
        if (!head) return head;

        // Step 1: Find length of the linked list
        let n = 0, temp = head;
        while (temp) {
            n++;
            temp = temp.next;
        }

        // If k is more than length, do nothing
        if (k > n) return head;

        // If kth node from start and end are the same, no need to swap
        if (2 * k - 1 === n) return head;

        // Step 2: Find kth node from start
        let first = head;
        for (let i = 1; i < k; i++) {
            first = first.next;
        }

        // Step 3: Find kth node from end (n - k + 1 from start)
        let second = head;
        for (let i = 1; i < n - k + 1; i++) {
            second = second.next;
        }

        // Step 4: Swap the data
        let tempData = first.data;
        first.data = second.data;
        second.data = tempData;

        return head;
    }
}


  