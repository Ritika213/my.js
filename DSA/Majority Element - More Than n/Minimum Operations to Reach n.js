//Given a number n. Find the minimum number of operations required to reach n starting from 0.

//You have two operations available:

//Double the number
//Add one to the number
Examples:

Input: n = 8
Output: 4
Explanation: //0 + 1 = 1 --> 1 + 1 = 2 --> 2 * 2 = 4 --> 4 * 2 = 8.
Input: n = 7
Output: 5
Explanation: //0 + 1 = 1 --> 1 + 1 = 2 --> 1 + 2 = 3 --> 3 * 2 = 6 --> 6 + 1 = 7.
Constraints

//1 ≤ n ≤ 106




//User function Template for javascript


/**
 * @param {number} n
 * @return {number}
*/

class Solution {

    minOperation(n){
        
        
        if(n===1) return 1;
        else if(n===2) return 2;
        let ans=0;
        let val=n;
        while(val>0){
            if(val%2===0) val/=2;
            else val-=1;
            ans++;
        }
        return ans;  
    
        
    }
}