//You are given timings of n meetings in the form of (start[i], end[i]) where start[i] is the start time of meeting i and end[i] is the finish 
//time of meeting i. Return the maximum number of meetings that can be accommodated in a single meeting room, when only one meeting can be held
// in the meeting room at a particular time. 

Note: //The start time of one chosen meeting can't be equal to the end time of the other chosen meeting.

Examples :

Input:// n = 6, start[] = [1, 3, 0, 5, 8, 5], end[] =  [2, 4, 6, 7, 9, 9]
Output: 4
Explanation: //Maximum four meetings can be held with given start and end timings. The meetings are - (1, 2), (3, 4), (5,7) and (8,9)
Input:// n = 3, start[] = [10, 12, 20], end[] = [20, 25, 30]
Output: 1
Explanation:// Only one meetings can be held with given start and end timings.
//Expected Time Complexity: O(n*logn)
//Expected Auxilliary Space: O(n)

Constraints
//1 ≤ n ≤ 105
//0 ≤ start[i] < end[i] ≤ 106

class Solution {
    // Function to find the maximum number of meetings that can
    // be performed in a meeting room.
    maxMeetings(n, start, end) {
        
        let meetings = [];
        for (let i = 0; i < n; ++i) {
            meetings.push({ end: end[i], start: start[i] });
        }

        // Sort meetings by end time
        meetings.sort((a, b) => a.end - b.end);

        let count = 0;
        let last_end_time = -1;

        // Iterate through the sorted meetings
        for (const meeting of meetings) {
            let s = meeting.start;
            let e = meeting.end;

            // If the meeting starts after the last meeting ends
            if (s > last_end_time) {
                count++;
                last_end_time = e;
            }
        }
        return count;
    }
}



