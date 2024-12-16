//Given two numbers n and s , find the largest number that can be formed with n digits and whose sum of digits should be equals to s.
// Return -1 if it is not possible.

Examples :

Input: n = 2, s = 9
Output: 90
Explaination:// It is the biggest number with sum of digits equals to 9.
Input: n = 3, s = 20
Output: 992
Explaination:// It is the biggest number with sum of digits equals to 20.
Input: n = 1, s = 0
Output: 0
Constraints
//1 ≤ n ≤ 105
//0 ≤ s ≤ 105

class Solution{
    findLargest(n,s){
        
        if (s == 0 && n > 1) return "-1";
        let digit = 0, sum = 0, firstD = 9;
        let ans = "";

        // Check if it's possible to construct a number with n digits and sum s
        if (s > 9 * n) return "-1";

        while (digit < n) {
            while (firstD > 0 && s - (sum + firstD) < 0) {
                firstD--;
            }
            sum += firstD;
            ans += firstD;
            digit++;
        }

        return ans;
    

    }
}
