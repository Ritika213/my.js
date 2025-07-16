//Given a positive integer n, you need to count the numbers less than or equal to n having exactly 9 divisors.

Examples :

Input: n = 100
Output: 2
Explanation:// Numbers which have exactly 9 divisors are 36 and 100.
Input: n = 200
Output: 3
Explanation:// Numbers which have exactly 9 divisors are 36, 100, 196. 
Constraints
//1 ≤ n ≤ 109

class Solution {
    countNumbers(n) {
        
        let ans = 0;
        for(let i=1;i*i<=n;i++){
            let ct = 0;
            for(let j=1;j*j<=i*i;j++){
                if((i*i)%j === 0){
                    ct++;
                    if(ct > 5)break;
                }
            }
            if(ct === 5){
                ans++;
            }
        }
        return ans;
    }
}