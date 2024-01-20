//Given an integer x, find the square root of x. If x is not a perfect square, then return floor(√x).

Input
x = 5
Output: 2
Explanation //Since, 5 is not a perfect square, floor of square_root of 5 is 2.

class Solution {
    
    floorSqrt(x)
    {
        
      
  if (x === 0 || x === 1) {
    return x;
  }

  let start = 1;
  let end = Math.floor(x / 2);
  let ans = 0;

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);

    if (mid * mid === x) {
      return mid;
    }

    if (mid * mid < x) {
      start = mid + 1;
      ans = mid;
    } else {
      end = mid - 1;
    }
  }

  return ans;

             
}
}
