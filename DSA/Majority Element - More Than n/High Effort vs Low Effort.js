//Given two integer arrays h[] and l[], where h[i] and l[i] denote the number of tasks that can be completed on 
// the i-th day by performing a high-effort task and a low-effort task, respectively.

//For each day, you may choose exactly one of the following:

//Perform no task.
//Perform a low-effort task.
//Perform a high-effort task, which can only be performed on the first day or if no task was performed on the previous day.
//Return the maximum total number of tasks that can be completed over all days.

Examples:

Input: h = [2, 8, 1], l = [1, 2, 1]
Output: 9
Explanation //Pick the high-effort task on day 1 and the low-effort task on day 2. Total = 8 + 1 = 9.

Input: h = [3, 6, 8, 7, 6], l = [1, 5, 4, 5, 3]
Output: 20
Explanation:// Pick the high-effort task on day 0 and low-effort tasks on all remaining days. Total = 3 + 5 + 4 + 5 + 3 = 20.

Constraints:

//1 ≤ h.size() ≤ 105
//0 ≤ h[i] ≤ 103
//1 ≤ l.size() ≤ 105
//0 ≤ l[i] ≤ 103
l.size() = h.size()


class Solution {
    maxTask(h, l) {
        
        let n = h.length;

        let prev1 = Math.max(h[0], l[0]);

        let prev2 = 0;

        for (let i = 1; i < n; i++) {
            let lowChoice = prev1 + l[i];

            let highChoice = prev2 + h[i];

            let current = Math.max(lowChoice, highChoice);

            prev2 = prev1;
            prev1 = current;
        }

        return prev1;
    }
}

