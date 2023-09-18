//Given a non-negative integer N. The task is to check if N is a power of 2. More formally, 
//check if N can be expressed as 2x for some integer x.
Input: 
N = 8
Output: 
YES
Explanation
//8 is equal to 2 raised to 3 (23 = 8).

class Solution {
    // Function to check if given number n is a power of two.
    isPowerofTwo(n)
    {
        // code here
         if(n==0)
        return false;
        
        if(n==1)
        return true;
        
        while(n%2==0)
        {
            n=n/2;
            if(n==1)
            return true;
        }
        return false;
    
    }
}

//You are given an integer N. You need to convert all zeroes of N to 5.

Input:
N = 1004
Output: 1554
Explanation: //There are two zeroes in 1004 on replacing all zeroes with "5", the new number will be "1554".



class Solution {
    
    convertFive(num)
    {
        // code here
         let res=0;
    let x=0;
    while(num!=0)
    {
        let digit=num%10;
        if(digit==0)
         digit=5;
        res=res+digit*Math.pow(10,x);
        num = Math.floor(num / 10); // Use Math.floor for integer division
        x++;
    }
    return res;
    }
    
}
