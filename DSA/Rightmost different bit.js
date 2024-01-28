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
        // code here
        if(m==n)

          return -1;

          

        let Xor=m^n;

        let pos=1;

        

        //Agar xor ki pehli right most bit hi 1 hui 

         if(Xor&1)

            return 1;

               

        while(Xor)

        {

            Xor=Xor>>1;

            pos++;

            

            if(Xor&1)

              break;

        }

        return pos;
    }
}

