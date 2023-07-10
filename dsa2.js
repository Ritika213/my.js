//1. Given An array of string and an interger len. Concate the string such whose length equal to len.
Input 
Arr = ["abc", "def", "xyzd", "Imm"]
Len = 3 
Output : "abcdeflmn"

Input: 
arr = ["hello", "world", "goodbye", "cruel", "world"]
Len = 5 
Output : "helloworldcruelworld"

let str = ["hello", "world", "goodbye", "cruel", "world"];
let len = 5;
let ans = "";

for(let i=0; i<str.length; i++){
  if(str[i].split('').length === len){
    ans += str[i];
  }
}

console.log(ans);



//2.Given an unsorted linked list of N nodes. The task is to remove duplicate elements from this unsorted Linked List. When a value appears in multiple nodes, the node which appeared first should be kept, all others duplicates are to be removed.

//Example 1:

Input:
N = 4
value = [5,2,2,4]
//Output: 5 2 4
//Explanation:Given linked list elements are
//5->2->2->4, in which 2 is repeated only.
//So, we will delete the extra repeated
//elements 2 from the linked list and the
//resultant linked list will contain 5->2->4

class Solution {
    //Function to remove duplicates from unsorted linked list.
    removeDuplicates(head)
    {
        //your code here
        let set = new Set();
let temp = head;
set.add(temp.data);

while (temp.next !== null) {
  if (set.has(temp.next.data)) {
    temp.next = temp.next.next;
  } else {
    temp = temp.next;
    set.add(temp.data);
  }
}

return head;

    }
}