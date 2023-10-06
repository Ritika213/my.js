//Given a linked list, you have to perform the following task:

//Extract the alternative nodes starting from second node.Reverse the extracted list.Append the extracted list at the end of the original list.
Note: //Try to solve the problem without using any extra memory.

//Example 1:

Input:
LinkedList =// 10->4->9->1->3->5->9->4
Output 
//10 9 3 9 4 5 1 4
Explanation: 
//Alternative nodes in the given linked list are 4,1,5,4. Reversing the alternative nodes from the given list, and then appending them to
// the end of the list results in a list 10->9->3->9->4->5->1->4.
//Example 2:

Input:
LinkedList = //1->2->3->4->5
Output 
//1 3 5 4 2 
Explanation:
//Alternative nodes in the given linked list are 2 and 4. Reversing the alternative nodes from the given list, and then appending 
//them to the end of the list results in a list 1->3->5->4->2.
//Your Task:
//You don't have to read input or print anything. Your task is to complete the function rearrange() which takes the head of the linked 
//list as input and rearranges the list as required.

//Expected Time Complexity: O(N)
//Expected Auxiliary Space: O(1)

Constraints:
1 <= N <= 105
0 <= Node_value <= 109


class Solution {
    
    rearrange(head)
    {
        //your code here
         if(head.next==null)return ;
        let dummy=null;
        let curr=head,tmp=head.next;
        while(tmp!=null){
            curr.next=tmp.next;
            tmp.next=dummy;
            dummy=tmp;
            if(curr.next==null)break;
            curr=curr.next;
            tmp=curr.next;
        }
        curr.next=dummy;
    }
}



//Given an array and an integer B, traverse the array (from the beginning) and if the element in array is B, double B and continue traversal.
// Find the value of B after the complete traversal.


Input:
N = 5, B = 2
arr =// [1 2 3 4 8]
Output// 16
Explanation// B is initially 2. We get 2 at the 1st index, hence B becomes 4. 
//Next, we get B at the 3rd index, hence B becomes 8. Next, we get B at 4-th index, hence B becomes 16.



class Solution {
    solve(arr,b,n){
       //code here
       for(let i=0;i<n;i++){
           if(arr[i]==b) b=b*2;
       }
       return b;
    }
}



//Given an array A of size N, the task is to check if the given array represents a Binary Max Heap.


Input:  arr = //{90, 15, 10, 7, 12, 2}
Output// True
//The given array represents below tree
     //  90
    // /    \
   //15      10
 // /  \     /
//7    12  2
//The tree follows max-heap property as every node is greater than all of its descendants.


class Solution{
    isMaxHeap(n,arr){
        //code here
        if(n==1) return true;
        if(n==2) return arr[0]>arr[1];
        
        for(let i=0;i<=n/2-1;i++){
            let l=2*i+1;
            let r=2*i+2;
            if(arr[i]<arr[l] || arr[i]<arr[r]) return false;
        }
        return true;
    }
}






