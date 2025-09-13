//Given a board of dimensions n × m that needs to be cut into n*m squares. The cost of making a cut along a horizontal or vertical edge 
//is provided in two arrays:

//x[]: Cutting costs along the vertical edges (length-wise).
//y[]: Cutting costs along the horizontal edges (width-wise).
//Find the minimum total cost required to cut the board into squares optimally.

Examples:

Input:// n = 4, m = 6, x[] = [2, 1, 3, 1, 4], y[] = [4, 1, 2]
Output: 42
Explanation
//Initially no. of horizontal segments = 1 & no. of vertical segments = 1.
//Optimal way to cut into square is:
//• Pick 4 (from x) -> vertical cut, Cost = 4 × horizontal segments = 4,
 // Now vertical segments = 2, Total Cost = 4.
//• Pick 4 (from y) -> horizontal cut, Cost = 4 × vertical segments = 8,
 // Now horizontal segments = 2, Total Cost = 12.
//• Pick 3 (from x) -> vertical cut, Cost = 3 × horizontal segments = 6,
//  Now vertical segments = 3, Total Cost = 18. 
//• Pick 2 (from x) -> vertical cut, Cost = 2 × horizontal segments = 4,
 // Now vertical segments = 4, Total Cost = 22.
//• Pick 2 (from y) -> horizontal cut, Cost = 2 × vertical segments = 8,
 // Now horizontal segments = 3, Total Cost = 30.
//• Pick 1 (from x) -> vertical cut, Cost = 1 × horizontal segments = 3,
//  Now vertical segments = 5, Total Cost = 33.
//• Pick 1 (from x) -> vertical cut, Cost = 1 × horizontal segments = 3,
 // Now vertical segments = 6, Total Cost = 36.
//• Pick 1 (from y) -> horizontal cut, Cost = 1 × vertical segments = 6,
//  Now horizontal segments = 4, Total Cost = 42.
Input: n = 4, m = 4, x = [1, 1, 1], y = [1, 1, 1]
Output: 15
Explanation

Input: n = 4, m = 4, x = [1, 1, 1], y = [1, 1, 1]
Output: 15
Explanation 

//Initially no. of horizontal segments = 1 & no. of vertical segments = 1.
//Optimal way to cut into square is: 
//• Pick 1 (from y) -> horizontal cut, Cost = 1 × vertical segments = 1,
//  Now horizontal segments = 2, Total Cost = 1.
//• Pick 1 (from y) -> horizontal cut, Cost = 1 × vertical segments = 1,
 // Now horizontal segments = 3, Total Cost = 2.
//• Pick 1 (from y) -> horizontal cut, Cost = 1 × vertical segments = 1,
 // Now horizontal segments = 4, Total Cost = 3.
//• Pick 1 (from x) -> vertical cut, Cost = 1 × horizontal segments = 4,
//  Now vertical segments = 2, Total Cost = 7.
 // Now vertical segments = 2, Total Cost = 7.
//• Pick 1 (from x) -> vertical cut, Cost = 1 × horizontal segments = 4,
 // Now vertical segments = 3, Total Cost = 11.
//• Pick 1 (from x) -> vertical cut, Cost = 1 × horizontal segments = 4,
//  Now vertical segments = 4, Total Cost = 15.
Constraints
//2 ≤ n, m ≤ 103
//1 ≤ x[i], y[j] ≤103


class Solution {
    minCost(n, m, x, y) {
        let st = [];

        for (let it of x) {
            st.push({ val: it, dir: 1 }); // 1 for vertical
        }

        for (let it of y) {
            st.push({ val: it, dir: 0 }); // 0 for horizontal
        }

        // Sort descending by cost
        st.sort((a, b) => b.val - a.val);

        let vrt = 1; // vertical segments
        let hrz = 1; // horizontal segments
        let ans = 0;

        for (let it of st) {
            if (it.dir === 1) { // vertical cut
                ans += it.val * hrz;
                vrt++;
            } else { // horizontal cut
                ans += it.val * vrt;
                hrz++;
            }
        }

        return ans;
    }
}
