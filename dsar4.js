//You are given a string s. You need to reverse the string.

Input:
s = Geeks
Output: skeeG

class Solution {
    
    reverseWord(str){
        //Your code here
         let reversed = '';
    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }
    return reversed;


    }
}