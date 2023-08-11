//For a given 3 digit number, find whether it is armstrong number or not. An Armstrong number of three digits is an integer such that the sum of the cubes of its digits is equal to the number itself. Return "Yes" if it is a armstrong number else return "No".
NOTE: 371 //is an Armstrong number since 33 + 73 + 13 = 371


Input: N = 153
Output: "Yes"
Explanation: 153 //is an Armstrong number
 //13 + 53 + 33 =153.
//Hence answer is "Yes".

class Solution{
    armstrongNumber(n){
        //code here
     let temp=n;
     let p=0;
     while(n>0){
         let rem=n%10;
         p=(p)+(rem*rem*rem);
         n=Math.floor(n/10);
     }
     if(temp==p){
         return "Yes"
     } else{
         return "No"
     }
    }
}



//Given a list of names, display the longest name.


Example:

Input:
N = 5
names = [ "Geek", "Geeks", "Geeksfor",
  "GeeksforGeek", "GeeksforGeeks" ]

Output:
GeeksforGeeks
 
class Solution {

    longest(names,n){
        //code here
        let max=0;
        for(let i=0;i<n;i++){
            if(names[i].length>names[max].length){
                max=i;
            }
        }
        return names[max];
    }
}

//Given an integer, check whether it is a palindrome or not.

Input: n = 555
Output: Yes

Input: n = 123
Output: No

class Solution{
    is_palindrome(n){
        //code here
      
  if (n < 0) {
    return "No";
  }

  let temp = n;
  let reverse = 0;

  while (n !== 0) {
    reverse = reverse * 10 + (n % 10);
    n = Math.floor(n / 10);
  }

  if (reverse === temp) {
    return "Yes";
  }

  return "No";


    }
}

