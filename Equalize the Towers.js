//given an array heights[] representing the heights of towers and another array cost[] where each element represents the cost 
// of modifying the height of respective tower.

//The goal is to make all towers of same height by either adding or removing blocks from each tower.
//Modifying the height of tower 'i' by 1 unit (add or remove) costs cost[i].
//Return the minimum cost to equalize the heights of all the towers.

Examples:

Input: heights = [1, 2, 3], cost = [10, 100, 1000]
Output: 120
Explanation:// The heights can be equalized by either "Removing one block from 3 and adding one in 1" or "Adding two blocks in 
//1 and adding one in 2". Since the cost of operation in tower 3 is 1000, the first process would yield 1010 while the second one yields 120.
Input: heights = [7, 1, 5], cost = [1, 1, 1]
Output: 6
Explanation //The minimum cost to equalize the towers is 6, achieved by setting all towers to height 5.

Constraints
//1 ≤ heights.size() = cost.size() ≤ 105
//1 ≤ heights[i] ≤ 104
//1 ≤ cost[i] ≤ 103


/**
 * @param {number[]} heights
 * @param {number} cost
 * @returns {number}
 */
class Solution {
    minCost(heights, cost) {
        
          const n = heights.length;

        // Function to calculate total cost for a target height
        const getCost = (target) => {
            let total = 0;
            for (let i = 0; i < n; i++) {
                total += Math.abs(heights[i] - target) * cost[i];
            }
            return total;
        };

        // Find min and max manually (no spread operator)
        let low = heights[0], high = heights[0];
        for (let i = 1; i < n; i++) {
            if (heights[i] < low) low = heights[i];
            if (heights[i] > high) high = heights[i];
        }
        let answer = Number.MAX_SAFE_INTEGER;

        while (low <= high) {
            let mid1 = Math.floor(low + (high - low) / 3);
            let mid2 = Math.floor(high - (high - low) / 3);

            let cost1 = getCost(mid1);
            let cost2 = getCost(mid2);
            answer = Math.min(answer, cost1, cost2);

            if (cost1 < cost2) {
                high = mid2 - 1;
            } else {
                low = mid1 + 1;
            }
        }

        return answer;
    }
}