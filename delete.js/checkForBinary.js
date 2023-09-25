//Given a non-empty sequence of characters str, return true if sequence is Binary, else return false


Input:
str = 101
Output:
1
Explanation//Since string contains only 0 and 1, output is 1.

class Solution{
    isBinary(str){
        //code here
      for (let i = 0; i < str.length; i++) {
    const char = str.charAt(i);
    if (char !== '0' && char !== '1') {
      return false;
    }
  }
  return true;

    }
}


//Given an array A of N integers. Your task is to write a program to find the maximum value of ∑arr[i]*i, where i = 0, 1, 2,., n 1.
//You are allowed to rearrange the elements of the array.
Note: //Since output could be large, hence module 109+7 and then print answer.



Input : Arr = [5, 3, 2, 4, 1]
Output : 40
Explanation//If we arrange the array as 1 2 3 4 5 then we can see that the minimum index will multiply
//with minimum number and maximum index will multiply with maximum number. 
//So 1*0+2*1+3*2+4*3+5*4=0+2+6+12+20 = 40 mod(109+7) = 40

class Solution {
    Maximize(arr,n){
       //code here
       let c=0;
       arr.sort(function(a,b){return a-b});
       for(let i=0;i<n;i++){
           c+=arr[i]*i;
       }
       return (c%(Math.pow(10,9)+7));
    }
}





