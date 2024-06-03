//Given a number n, find the number of binary strings of length n that contain consecutive 1's in them. Since the number can be very large, 
//return the answer after modulo with 1e9+7.

//Example 1:

Input:
n = 2
Output:
1
Explanation
//There are 4 strings of length 2, the strings are 00, 01, 10, and 11. Only the string 11 has consecutive 1's.

//Example 2:

Input:
n = 5
Output:
19
Explanation://There are 19 strings having consecutive 1's.
 Task:

//don't need to read input or print anything. Your task is to complete the function numberOfConsecutiveOnes() which takes an integer
// n and returns the number of binary strings that contain consecutive 1's in them.

//Expected Time Complexity: O(n)
//Expected Auxiliary Space: O(n)

Constraints
2 <= n <= 105

class Solution {
    /**
    * @param number n

    * @returns number
    */
    numberOfConsecutiveOnes(n) {
        
        let mod= 1e9 + 7 , res=1, a=1, b=1;
        if(n===1 || n===2)
        return 1;
        for(let i=3;i<=n;i++){
            let c= (a+b) % mod;
            a= b;
            b = c;
            res= ((res*2) +a) % mod;
        }
        return res;
    }
}