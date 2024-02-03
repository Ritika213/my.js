//Three 90 Challenge Extended On Popular Demand! Don't Miss Out Now 

banner
//Given a singly linked list of length n. The link list represents a binary number, ie- it contains only 0s and 1s. Find its decimal equivalent.
//The significance of the bits decreases with the increasing index in the linked list.
//An empty linked list is considered to represent the decimal value 0. 

//Since the answer can be very large, answer modulo 109+7 should be printed.
Input:
n = 3
//Linked List = {0, 1, 1}
Output:
3
Explanation
//0*22 + 1*21 + 1*20 =  1 + 2 + 0 = 3

class Solution {
    decimalValue(head){
      
      const mod = 1e9 + 7;
          let decimal_value = 0;
  
          while (head !== null) {
              decimal_value = (decimal_value * 2 + head.data) % mod;
              head = head.next;
          }
  
          return decimal_value;
    }
  }
  