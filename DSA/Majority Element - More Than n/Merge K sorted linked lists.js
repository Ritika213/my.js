//Given an array arr[] of n sorted linked lists of different sizes. Your task is to merge all these lists into a single sorted 
// linked list and return the head of the merged list.

Examples:

Input:
   
Output: //1 -> 2 -> 3 -> 4 -> 7 -> 8 -> 9
Explanation// The arr[] has 3 sorted linked list of size 3, 3, 1.
//1st list: 1 -> 3 -> 7
//2nd list: 2 -> 4 -> 8
//3rd list: 9
//The merged list will be: 

Input:
   
Output:// 1 -> 3 -> 4 -> 5 -> 6 -> 8
Explanation:// The arr[] has 3 sorted linked list of size 2, 1, 3.
//1st list: 1 -> 3
//2nd list: 8
//3rd list: 4 -> 5 -> 6
//The merged list will be: 
    
Constraints
//1 ≤ total no. of nodes ≤ 105
//1 ≤ node->data ≤ 103

class Solution {
    mergeKLists(arr) {
        
        let res = new Node(-1);
        let minHeap = [];
        
        for (let node of arr) {
            while (node) {
                minHeap.push(node.data);
                node = node.next;
            }
        }
        
        minHeap.sort((a, b) => a - b);
        let temp = res;
        
        while (minHeap.length > 0) {
            let node = new Node(minHeap.shift());
            temp.next = node;
            temp = temp.next;
        }
        
        return res.next;
    }
}
    