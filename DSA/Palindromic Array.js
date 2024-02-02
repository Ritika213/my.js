//Given a Integer array A[] of n elements. Your task is to complete the function PalinArray. Which will return 1 if all the elements of
// the Array are palindrome otherwise it will return 0.


Input:
5
//111 222 333 444 555

Output:
1
Explanation:
A[0] = 111 //which is a palindrome number.
A[1] = 222 //which is a palindrome number.
A[2] = 333 //which is a palindrome number.
A[3] = 444 //which is a palindrome number.
A[4] = 555 //which is a palindrome number.
//As all numbers are palindrome so This will return 1.

class Solution {
    
    PalinArray(arr,n){
        
         for (let i = 0; i < arr.length; i++) {
        let reverse = 0;
        let original = arr[i];
        let num = arr[i];

        while (num !== 0) {
            reverse = (reverse * 10) + num % 10;
            num = Math.floor(num / 10);
        }

        if (original !== reverse) {
            return 0;
        }
    }
    return 1;


    
    }
}