//Given two Singly Linked List of N and M nodes respectively. The task is to check whether two linked lists are identical or not. 
//Two Linked Lists are identical when they have same data and with same arrangement too.

//Example 1:

Input:
LinkedList1: //1->2->3->4->5->6
LinkedList2: //99->59->42->20
Output //Not identical 
//Example 2:

//Input:
//LinkedList1: 1->2->3->4->5
//LinkedList2: 1->2->3->4->5
//Output: Identical

class Solution {
    //Function to check whether two linked lists are identical or not.
    areIdentical(head1, head2)
    {
        //your code here
        while(head1 && head2){
            if(head1.data!=head2.data)
            return false;
            head1=head1.next;
            head2=head2.next;
        }
        if(head1 || head2)
        return false;
        return true;
    }
}


//Rotatin an array

//Given an array of size N. The task is to rotate array by D elements where D ≤ N.


Input:
N = 7
Arr= //{1, 2, 3, 4, 5, 6, 7}
D = 2
Output:// 3 4 5 6 7 1 2
Explanation 
//Rotate by 1: [2, 3, 4, 5, 6, 7, 1]
//Rotate by 2: [3, 4, 5, 6, 7, 1, 2]

class Solution{
    leftRotate(arr,n,d){
        //code here
    
    const temp = [];

    for (let i = 0; i < n; i++) {
        temp[i] = arr[i];
    }

    for (let i = 0; i < n; i++) {
        arr[i] = temp[(i + d) % n];
    }
     return arr;
    }
}

//third lagest element

//Given an array of distinct elements. Find the third largest element in it.

//Suppose you have A[] = {1, 2, 3, 4, 5, 6, 7}, its output will be 5 because it is the 3 largest element in the array A.

Input:
N = 5
A = //{2,4,1,3,5}
Output// 3

class Solution {
    
    thirdLargest(a, n)
    {
        //your code here
         if(n < 3){
             return "Invalid Input";
  }
 
  let [first, second, third] = Array(3).fill(Number.MIN_SAFE_INTEGER);
 
  for (let n of a) {
    if (n > first) {
      [third, second, first] = [second, first, n];
    } else if (n > second) {
      [third, second] = [second, n];
    } else if (n > third) {
      third = n;
    }
  }
 
  return third;

    }
    }