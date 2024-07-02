//Given a linked list with string data, check whether the combined string formed is palindrome. If the combined string is palindrome then
// return true otherwise return false.

Example:

Input:

Output : true
Explanation:// As string "abcddcba" is palindrome the function should return true.
Input: //a->bc->d->dcb->a

Output : false
Explanation //As string "abcdba" is not palindrome the function should return false.
Input:

Output : false
Explanation: //As string "abcdba" is not palindrome the function should return false.
//Expected Time Complexity:  O(n)
//Expected Auxiliary Space: O(n)

Constraints:
1 <= Node.data.length<= 103
1<=list.length<=103

class Solution {
    compute(head) {
        
        let s="";
        let curr=head;
        while(curr!=null){
            s += curr.data;
            curr = curr.next;
        }
        
        let i = 0, j = s.length-1;
        
        while(i<=j){
            
        if(s[i]!=s[j]){
            
            return false;
        }
        
        i++;
        j--;
    }
    
    return true;
    }
}

