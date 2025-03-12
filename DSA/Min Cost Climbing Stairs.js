//Given an array of integers cost[] where cost[i] is the cost of the ith step on a staircase. Once the cost is paid, you can either climb one or 
//two steps. Return the minimum cost to reach the top of the floor.
//Assume 0-based Indexing. You can either start from the step with index 0, or the step with index 1.

Examples
Input: cost = [10, 15, 20]
Output: 15
Explanation //Cheapest option is to start at cost[1], pay that cost, and go to the top.

Input: cost= [1, 100, 1, 1, 1, 100, 1, 1, 100, 1]
Output: 6
Explanation// Cheapest option is to start on cost[0], and only step on 1s, skipping cost[3].

Constraints
//2 ≤ cost.size() ≤ 105
//0 ≤ cost[i] ≤ 999

class Solution {
    minCostClimbingStairs(cost) {
        
         let n = cost.length;
        
        let prev = cost[0];
        let curr = cost[1];
        let next;
        
        for(let i=2; i<=n; i++){
            let costAtIndex = i===n? 0: cost[i];
            
            next = costAtIndex + Math.min(prev, curr);
            
            prev = curr;
            curr = next;
        }
        
        return curr;
    
    }
}



