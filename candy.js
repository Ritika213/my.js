//There are n children standing in a line. Each child is assigned a rating value given in the integer array arr[]. You are giving 
// candies to these children subjected to the following requirements:

//Each child must have at least one candy.
//Children with a higher rating than their neighbors get more candies than their neighbors.
//Return the minimum number of candies you need to have to distribute.

//Note: The answer will always fit into a 32-bit integer.

Examples:

Input: arr = [1, 0, 2]
Output: 5
Explanation: //Children at index 0 and 2 will get 2 candies each as their rating is higher than index 1, and index 1 will get 1 candy.
//  Thus total candies = 2 + 1 + 2 = 5.
Input: arr = [1, 2, 2]
Output: 4
Explanation// You can allocate to the first, second and third child with 1, 2, 1 candies respectively. The third child gets 1 candy
// because it satisfies the above two conditions.

Constraints
//1 ≤ arr.size() ≤ 105
//0 ≤ arr[i] ≤ 109

/**
 * @param {number[]} arr
 * @returns {number}
 */

class Solution {
    minCandy(arr) {
        
        let n= arr.length;
        let ans = new Array(n).fill(1);
        for(let i=1;i<arr.length;i++){
            if(arr[i]>arr[i-1]){
                ans[i]=ans[i-1]+1;
            }
        }
        for(let i=arr.length-2;i>=0;i--){
            if(arr[i]>arr[i+1]){
                ans[i]=Math.max(ans[i],ans[i+1]+1);
            }
        }
        let sum=0;
        for(let i of ans) sum+=i;
        return sum; 
    }
}