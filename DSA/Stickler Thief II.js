//given an array arr[] which represents houses arranged in a circle, where each house has a certain value. A thief aims to
 //maximize the total stolen value without robbing two adjacent houses.
//Determine the maximum amount the thief can steal.

Note: //Since the houses are in a circle, the first and last houses are also considered adjacent.

Examples:

Input: arr = [2, 3, 2]
Output: 3
Explanation:// arr[0] and arr[2] can't be robbed because they are adjacent houses. Thus, 3 is the maximum value thief can rob.
Input: arr = [1, 2, 3, 1]
Output: 4
Explanation// Maximum stolen value: arr[0] + arr[2] = 1 + 3 = 4

Input: arr = [2, 2, 3, 1, 2]
Output: 5
Explanation: //Maximum stolen value: arr[0] + arr[2] = 2 + 3 = 5 or arr[2] + arr[4] = 3 + 2 = 5
Constraints
//2 ≤ arr.size() ≤ 105
//0 ≤ arr[i] ≤ 104

class Solution {
    solve( lo, hi, arr){
        let prev2=0, prev=arr[lo], curr=0;
        for(let i=lo+2; i<=hi+1; i++){
            curr=Math.max(prev, arr[i-1]+prev2);
            prev2=prev;
            prev=curr;
        }
        return prev;
    }
    maxValue(arr) {
        // code here
       let n=arr.length;
        if (n === 0) return 0;
        if (n === 1) return arr[0];
        if (n === 2) return max(arr[0], arr[1]);
        return Math.max(this.solve(0, n-2, arr), this.solve(1, n-1, arr));  
    }
}
