//given an array of events where events[i] = [startDayi, endDayi]. Every event i starts at startDayi and ends at endDayi.

//You can attend an event i at any day d where startDayi <= d <= endDayi. You can only attend one event at any time d.

//Return the maximum number of events you can attend.

//Example 1:


Input: events = [[1,2],[2,3],[3,4]]
Output: 3
Explanation// You can attend all the three events.
//One way to attend them all is as shown.
//Attend the first event on day 1.
//Attend the second event on day 2.
//Attend the third event on day 3.

//Example 2:

Input: events= [[1,2],[2,3],[3,4],[1,2]]
Output: 4
 

Constraints:

1 <= events.length <= 105
events[i].length == 2
1 <= startDayi <= endDayi <= 105


var maxEvents = function(events) {
   events.sort((a, b) => a[0] - b[0]);
    const used = Array(100001).fill(false);
    let count = 0;
    for (const [s, e] of events) {
        for (let d = s; d <= e; d++) {
            if (!used[d]) {
                used[d] = true;
                count++;
                break;
            }
        }
    }
    return count; 
};

 