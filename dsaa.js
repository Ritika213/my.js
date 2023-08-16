//You are given a cubic dice with 6 faces. All the individual faces have a number printed on them. 
//The numbers are in the range of 1 to 6, like any ordinary dice. You will be provided with a face of 
//this cube, your task is to guess the number on the opposite face of the cube.

Input:
N = 6
Output:
1
Explanation
//For dice facing number 6 opposite face
//will have the number 1.

class Solution {
    oppositeFaceOfDice(N) {
      //code here
      if(N==1){
        return  6;
   } else if(N==6){
       return  1;
  }else if(N==2){
       return  5;
   }else if(N==5){
       return  2;
  }else if(N==3){
     return  4;
  }else {
   return  3;
  }
  }
  }

  //Given a number N. Your task is to check whether it is fascinating or not.
//Fascinating Number: When a number(should contain 3 digits or more) is multiplied by 2 and 3, 
//and when both these products are concatenated with the original number, then it results in all 
//digits from 1 to 9 present exactly once.

Input: 
N = 192
Output: Fascinating
Explanation: //After multiplication with 2
//and 3, and concatenating with original
//number, number will become 192384576 
//which contains all digits from 1 to 9.

class Solution {
    fascinating(N){
       //code here
       let two = N * 2;
    let three = N * 3;

    let s1 = String(N);
    let s2 = String(two);
    let s3 = String(three);

    let str = s1 + s2 + s3;

    let a = 123456789;
    let str2 = String(a);
    
    str = str.split('').sort().join(''); // Sort the string characters

    if (str === str2) {
        return 1;
    } else {
        return 0;
    }
    }
}


//Given a string S as input. Delete the characters at odd indices of the string.

Input: S = "Geeks"
Output: "Ges" 
Explanation //Deleted "e" at index 1
//and "k" at index 3.


class Solution{
    delAlternate(S){
        //code here
        let ans = "";
    
    for (let i = 0; i < S.length; i++) {
        if (i % 2 === 0) {
            ans += S[i];
        }
    }
    
    return ans;

    }
}
