//Given a number, reverse it and add it to itself unless it becomes a palindrome or number of iterations becomes more than 5.

Input: n = 23
Output: 55 
Explanation: reverse(23) = 32,then// 32+23
= 55 //which is a palindrome. 

class Solution {
    isSumPalindrome(N) {
      //code here
      for (let i = 0; i <= 5; ++i) {
          let r = 0;
          let c = N;
          do {
              r = r * 10 + c % 10;
              c = Math.floor(c / 10);
          } while (c > 0);
  
          if (N === r) {
              return N;
          }
          N += r;
      }
      return -1;
    }
  }


 // Given a string S, write a program to count the occurrence of Lowercase characters, Uppercase characters,
 // Special characters and Numeric values in the string.
Note: //There are no white spaces in the string.
Input:
S = "#GeeKs01fOr@gEEks07"
Output:
5
8
4
2
Explanation: //There are 5 uppercase characters,
8 //lowercase characters, 4 numeric characters
//and 2 special characters.

class Solution{
    count(s){
        //code here
        let up = 0;
    let low = 0;
    let spe = 0;
    let num = 0;
    
    for (let i = 0; i < s.length; i++) {
        if (s[i] >= 'a' && s[i] <= 'z') {
            low++;
        } else if (s[i] >= 'A' && s[i] <= 'Z') {
            up++;
        } else if (s[i] >= '0' && s[i] <= '9') {
            num++;
        } else {
            spe++;
        }
    }
    
    return [up, low, num, spe];
    }
}


//Given an array of size N. The task is to rotate array by D elements where D ≤ N.
Input:
N = 7
Arr = [1, 2, 3, 4, 5, 6, 7]
D = 2
Output: //3 4 5 6 7 1 2
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
