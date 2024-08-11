//Given a set of n jobs where each jobi has a deadline and profit associated with it.

//Each job takes 1 unit of time to complete and only one job can be scheduled at a time. We earn the profit associated with a job if and only 
//if the job is completed by its deadline.

//Find the number of jobs done and the maximum profit.

Note: //Jobs will be given in the form (Jobid, Deadline, Profit) associated with that Job. Deadline of the job is the time on or before which 
//job needs to be completed to earn the profit.

Examples :

Input: Jobs = [[1,4,20],[2,1,1],[3,1,40],[4,1,30]]
Output:// 2 60
Explanation: //Job1 and Job3 can be done with maximum profit of 60 (20+40).
Input: Jobs = [[1,2,100],[2,1,19],[3,2,27],[4,1,25],[5,1,15]]
Output:// 2 127
Explanation//: 2 jobs can be done with maximum profit of 127 (100+27).

//Expected Time Complexity: O(nlogn)
//Expected Auxilliary Space: O(n)

Constraints:
1 <= n <= 105
1 <= Deadline,id <= n
1 <= Profit <= 500


class Solution {
    JobScheduling(arr, n) {
        // Create a max heap by sorting jobs based on profit in descending order
        arr.sort((a, b) => b.profit - a.profit);

        // Initialize the time slots array
        let slots = new Array(n + 1).fill(0).map((_, index) => index);

        let countJobs = 0;
        let totalProfit = 0;

        // Helper function to find the topmost available time slot
        function findSlot(x) {
            if (slots[x] === x) return x;
            return slots[x] = findSlot(slots[x]);
        }

        for (let i = 0; i < n; i++) {
            let job = arr[i];
            let availableSlot = findSlot(job.dead);

            if (availableSlot > 0) {
                countJobs++;
                totalProfit += job.profit;
                slots[availableSlot] = findSlot(availableSlot - 1);
            }
        }

        return [countJobs, totalProfit];
    }
}