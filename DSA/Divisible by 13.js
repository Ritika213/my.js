//Given a number represented as a string s (which may be very large), check whether it is divisible by 13 or not.

Examples:

Input : s = "2911285"
Output : true
Explanation: //2911285 / 13 = 223945, which is a whole number with no remainder.
Input //: s = "27"
Output : false
Explanation:// 27 / 13 ≈ 2.0769..., which is not a whole number (there is a remainder).
Constraints
//1 ≤  s.size()  ≤ 105

class Solution {
    divby13(s) {
        
       let rem =0;
       for(let i=0;i<s.length;i++){
           if(rem !=0){
               let value= rem*10+(s[i]-'0')
               rem = value%13;
           } else {
               rem=(s[i]-'0')
           }
       }
       return rem ===0;
    }
}