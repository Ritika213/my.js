//Given a number N and a value K. From the right, set the Kth bit in the binary representation of N. The position of Least Significant Bit(or last bit) is 0, the second last bit is 1 and so on. 


Input:
N = 10 
K = 2
Output:
14
Explanation//Binary representation of the given number
//10 is: 1 0 1 0, number of bits in the binary reprsentation is 4. Thus 2nd bitfrom right is 0. The number after changing
//this bit to 1 is: 14(1 1 1 0).


class Solution{
    setKthBit(n, k){
        //code here
        return n | (1<<k)
    }
}


//For an input year N, find whether the year is a leap or not. 
 

Input:
N = 4
Output:
1
Explanation
//4 is not divisible by 100 and is divisible by 4 so its a leap year

class Solution{
    isLeap(n){
        //code here
     return n%4==0 && n%100!=0 ? 1: n%400==0 ? 1:0;   
    }
}

//Given a string s consisting of lowercase English letters, return the first letter to appear twice.

Note

//A letter a appears twice before another letter b if the second occurrence of a is before the second occurrence of b.
//s will contain at least one letter that appears twice.


var repeatedCharacter = function(s) {
    for(var i = 0; i < s.length; i++) {
        if(s.indexOf(s[i]) !== i) {
            return s[i];
        }
    }
};

