//given a Linked List. Sort the given Linked List using quicksort. 

Examples:

Input:// Linked list: 1->6->2
Output:// 1->2->6

Explanation
//After sorting the nodes, we have 1, 2 and 6.

Input:// Linked list: 1->9->3->8
Output:// 1->3->8->9

Explanation:
//After sorting the nodes, we have 1, 3, 8 and 9. 
Constraints
//1<= size of linked list <= 105

class Solution {
    // Function to perform quicksort on a linked list
    quickSort(head) {
        // code here
         
        if(!head)
        return head;
        let i=0;
        let arr=[];
        let temp=head;
        while(temp!= null){
            arr.push(temp.data);
            temp=temp.next;
        }
        arr.sort((a,b)=>a-b);
        temp=head;
        while(temp!=null){
            temp.data=arr[i];
            i++;
            temp=temp.next;
        }
        return head;
    }
}