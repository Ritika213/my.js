//Given two integers a and b, write a function lcmAndGcd() to compute their LCM and GCD. The function takes two integers a and b as
// input and returns a list containing their LCM and GCD.

//Example 1:

Input: a = 5 , b = 10
Output: //10 5
Explanation:// LCM of 5 and 10 is 10, while their GCD is 5.
Input: a = 14 , b = 8
Output:// 56 2
Explanation:// LCM of 14 and 8 is 56, while their GCD is 2.
//Expected Time Complexity: O(log(min(a, b))
//Expected Auxiliary Space: O(1)

Constraints:
1 <= a, b <= 109

class Solution{
    lcmAndGcd(a, b){
        //code here
         function findGCD(x, y) {
      while (y !== 0) {
        const temp = y;
        y = x % y;
        x = temp;
      }
      return x;
    }

    // Function to find LCM (Least Common Multiple)
    function findLCM(x, y) {
      const gcd = findGCD(x, y);
      return (x * y) / gcd;
    }

    const gcd = findGCD(a, b);
    const lcm = findLCM(a, b);

    return [lcm, gcd];
  
    }
}