//given a set of activities, each with a start time and a finish time, represented by the arrays start[] and finish[], respectively. 
// A single person can perform only one activity at a time, meaning no two activities can overlap. Your task is to determine the maximum
//  number of activities that a person can complete in a day.

Examples:

Input: start = [1, 3, 0, 5, 8, 5], finish = [2, 4, 6, 7, 9, 9]
Output: 4
Explanation:// A person can perform at most four activities. The maximum set of activities that can be executed is {0, 1, 3, 4}
Input: start = [10, 12, 20], finish = [20, 25, 30]
Output: 1
Explanation// A person can perform at most one activity.

Input: start = [1, 3, 2, 5], finish = [2, 4, 3, 6]
Output: 3
Explanation:// A person can perform activities 0, 1 and 3.
Constraints
//1 ≤ start.size() = finish.size() ≤ 2*105
//1 ≤ start[i] ≤ finish[i] ≤ 109

class Solution {
    activitySelection(start, finish) {
        
        let n = start.length;
         // Pair up start and finish times
        let activities = [];
        for (let i = 0; i < n; i++) {
            activities.push({ start: start[i], finish: finish[i] });
        }

        // Sort by finish time
        activities.sort((a, b) => a.finish - b.finish);

        // Select activities
        let count = 1;  // The first activity is always selected
        let lastFinishTime = activities[0].finish;

        for (let i = 1; i < n; i++) {
            if (activities[i].start > lastFinishTime) {
                count++;
                lastFinishTime = activities[i].finish;
            }
        }

        return count;
    }
}
