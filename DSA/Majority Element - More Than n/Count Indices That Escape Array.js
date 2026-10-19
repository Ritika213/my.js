//Given an array **arr[]**, where arr[i] represents the exact number of steps to move from index i. 
//  An index is considered good if repeatedly following the jumps eventually takes you outside the 
// array. Otherwise, if the jumps result in an infinite loop, the index is considered bad.

//- A positive value indicates a move to the right
//- A negative value indicates a move to the left.
//- A 0 value means no move and considered bad.

//Return the number of good indices.

//Examples:                                                                                                                                                        
//    Input:** [2, 3, -1, 2, -2, 4, 1]
//  **Output:&#x20;**&#x33; **Explanation:&#x20;**&#x49;ndices 3, 5, and 6 are good because their jump 
// sequences eventually leave the array. Indices 1, 2, and 4 form a cycle, while i
//index 0 eventually enters this cycle through index 2. Hence, the total number of good indices is 3. 
// [1, 0, -3, 0, -5, 0] **Output:** 2 **Explanation:&#x20;**&#x49;ndices 2 and 4 are good because their 
//jumps take them outside the array. Indices 1, 3, and 5 are bad because their jumps are zero. Index 0
// is also bad because it jumps to index 1, which is a dead end. Hence, the total number of good indices 
// // is 2. 

//Constraints:

//1 ≤ arr.size() ≤ 105\
//-105 ≤ arr[i] ≤ 105


/**
 * @param {number[]} arr
 * @return {number}
 */

class Solution {
    goodIndices(arr, n) {
        n = arr.length;

        let phase = new Array(n).fill(0);
        let cnt = 0;

        for (let i = 0; i < n; i++) {
            if (phase[i] !== 0) continue;

            let path = [];
            let curr = i;

            while (
                curr >= 0 &&
                curr < n &&
                phase[curr] === 0
            ) {
                phase[curr] = 1;
                path.push(curr);

                if (arr[curr] === 0) {
                    curr = -1;
                    break;
                }

                curr = curr + arr[curr];
            }

            let good = curr < 0 || curr >= n || phase[curr] === 2;

            for (let j = path.length - 1; j >= 0; j--) {
                phase[path[j]] = good ? 2 : 3;
            }
        }

        for (let i = 0; i < n; i++) {
            if (phase[i] === 2) cnt++;
        }

        return cnt;
    }
}