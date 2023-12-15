//There are N points on the road, you can step ahead by 1 or 2 . If you start from a point 0, and can only move from point i to point i+1 
//after taking a step of length one, find the number of ways you can reach at point N. 


Input: 
N = 4
Output: 
5
Explanation //Three ways to reach at 4th point. They are {1, 1, 1, 1}, {1, 1, 2},{1, 2, 1} {2, 1, 1}, {2, 2}.

class Solution {
    nthPoint(N){
       //code here
       let x1 = 1;
        let x2 = 2;
        let sum = 0;

        if (N === 1 || N === 2) {
            return N;
        } else {
            for (let i = 3; i <= N; i++) {
                sum = (x1 + x2) % 1000000007;
                x1 = x2;
                x2 = sum;
            }
        }

        return sum % 1000000007;
    }
}

