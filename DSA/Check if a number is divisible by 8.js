//Given a string representation of a decimal number s, check whether it is divisible by 8.

//Example 1:

Input:
s = "16"
Output:
1
Explanation
//The given number is divisible by 8,so the driver code prints 1 as the output.

class Solution
{
    //Function to check whether the given number is divisible by 8.
    DivisibleByEight(s)
    {
        
     let len = s.length;
    
    if (len < 3) {
        let number = parseInt(s);
        return number % 8 === 0 ? 1 : -1;
    } else {
        let str = s.slice(len - 3, len);
        let number = parseInt(str);
        return number % 8 === 0 ? 1 : -1;
    }
    
    return -1;

    }
}