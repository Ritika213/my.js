//Given a singly linked list consisting of N nodes. The task is to remove duplicates (nodes with duplicate values) from the given list (if exists).
Note: //Try not to use extra space. The nodes are arranged in a sorted way.
Input:
LinkedList: //2->2->4->5
Output: //2 4 5
Explanation //In the given linked list 
//2 ->2 -> 4-> 5, only 2 occurs more 
//than 1 time. So we need to remove it once.

class Solution {
    //Function to remove duplicates from sorted linked list.
    removeDuplicates(head)
    {
        //your code here
        let temp=head;
        while(head!=null && head.next!=null){
            if(head.data==head.next.data){
                head.next=head.next.next;
            } else{
                head=head.next;
            }
        }
        return temp;
    }
}

//Remove all characters except the numeric characters from an alphanumeric string.


Input: S = "AA1d23cBB4"
Output: 1234
Explanation //Remove all characters other than numbers

class Solution {
    removeCharacters(s) {
      //code here
      let ans = "";
          for(let i = 0; i < s.length; i++)
              if(s[i] >= '0' && s[i] <= '9')
                   ans += s[i];
         
          return ans;
    }
  }