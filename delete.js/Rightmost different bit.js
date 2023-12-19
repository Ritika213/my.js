//Rightmost different bit

//Given two numbers M and N. The task is to find the position of the rightmost different bit in the binary representation of numbers. 
//If both M and N are the same then return -1 in this case.

Input: 
M = 11, N = 9
Output: 
2
Explanation 
//Binary representation of the given numbers are: 1011 and 1001, 2nd bit from right is different.

class Solution 
{
    //Function to find the first position with different bits.
    posOfRightMostDiffBit(m, n)
    {
        if(m==n)

          return -1;

          let Xor=m^n;

        let pos=1;
//Agar xor ki pehli right most bit hi 1 hui 

         if(Xor&1)

            return 1;

                while(Xor){

            Xor=Xor>>1;

            pos++;

            

            if(Xor&1)

              break;

        }

        return pos;
    }
}


//Find Transition Point
//Given a sorted array containing only 0s and 1s, find the transition point, i.e., the first index where 1 was observed, and before that,
// only 0 was observed.

Input:
N = 5
arr = //{0,0,0,1,1}
Output// 3
Explanation //index 3 is the transition point where 1 begins.

class Solution {
    transitionPoint(arr, n) {
      //code here
      if(n==1 && (arr[0]==1))
      {
          return 0;
      }
     for(let i=0;i<n-1;i++)
     {
         if(arr[i]!=arr[i+1])
         {
             return i+1;
         }
     }
     if(arr[n-1]==1)
     {
      return 0;
     }
     return -1;
  
  
    }
  }

  //Arithmetic Number
//Given three integers  'A' denoting the first term of an arithmetic sequence , 'C' denoting the common difference of an arithmetic sequence and an integer 'B'. you need to tell whether 'B' exists in the arithmetic sequence or not. Return 1 if B is present in the sequence. Otherwise, returns 0.


Input: A = 1, B = 3, C = 2
Output: 1
Explaination// 3 is the second term of the sequence starting with 1 and having a common difference 2.

class Solution{
    inSequence(A, B, C){
        //code here
       if(C==0) return A==B ? 1 : 0;
        else return (B-A)%C == 0 && (B-A)/C >= 0 ? 1 : 0;
    }}