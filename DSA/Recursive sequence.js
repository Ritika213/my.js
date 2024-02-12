//A function F is defined as follows F(n)= (1) +(2*3) + (4*5*6) ... upto n terms (look at the examples for better clarity). Given an integer n, 
//determine the F(n).

Note: //As the answer can be very large, return the answer modulo 109+7.

Input: n = 5
Output: 365527
Explanation: 
F(5) = 1 + 2*3 + 4*5*6 + 7*8*9*10 + 11*12*13*14*15 - 365527.

class Solution {
    //Function to find the nth term of the sequence.
    sequence(n)
    {
        
        
         let k = 0;
      
        let j  = 1;
         let mod = 1000000007;
        for(let i = 1 ; i <=n ;i++)
        {  
            let s = 1;
            let c = 0;
          
            while(c < i)
            {
                s = (s * j) %mod;
                j++;
                c++;
            }
            k = (k+ s) %mod;
        }
        return k %mod;
    }
}