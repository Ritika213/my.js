//Given a linked list sorted in ascending order and an integer called data, insert data in the linked list such that the list remains sorted.

Input:
LinkedList: //25->36->47->58->69->80
data: 19
Output: 
//19 25 36 47 58 69 80
Explanation
//After inserting 19 the sorted linked list will look like the one in the output.

class Solution {
    sortedInsert(node, data)
    {
        //your code here
        
        let temp1;
        let p=new Node(data);
        let temp2=head;
        if(temp2.data>=data){
            p.next=temp2;
           let head=p
           return head;
        }
        let temp=0;
        while(temp2!=null && temp2.data<=data){
            temp1=temp2;
            temp2=temp2;
            temp2=temp2.next;
        }
        p.next=temp2;
        temp1.next=p;
        return head;
    
    }
}



//Given a string S, the task is to change the complete string to Uppercase or Lowercase depending upon the case for the first character.


Input:
S = "abCD"
Output: abcd
Explanation //The first letter (a) is lowercase. Hence, the complete string is made lowercase.

class Solution{
    modify(s){
        //code here
     if (s[0] === s[0].toUpperCase()) {
        return s.toUpperCase();
    } else {
        return s.toLowerCase();
    }
  
    }
}

//Given two positive integers a and b, return the number of common factors of a and b.

//An integer x is a common factor of a and b if x divides both a and b.


Input: a = 12, b = 6
Output: 4
Explanation //The common factors of 12 and 6 are 1, 2, 3, 6.

var commonFactors = function(a, b) {
    let i = 1;
          let count = 0;
          while(a >= i && b >= i) {
              if(a % i == 0 && b % i == 0) {
                  count++;
              }
              i++;
          }
          return count;
      }  
  

