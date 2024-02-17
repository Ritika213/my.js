//Given an array arr of size n, the task is to check if the given array can be a level order representation of a Max Heap.


Input:
n = 6
arr = //{90, 15, 10, 7, 12, 2}
Output 
1
Explanation 
//The given array represents below tree
      // 90
     ///    \
   //15      10
 // /  \     /
//7    12  2
//The tree follows max-heap property as ever node is greater than all of its descendants.

class Solution{
    isMaxHeap(n,arr){
        
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