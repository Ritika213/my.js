//A frog jumps either 1, 2, or 3 steps to go to the top. In how many ways can it reach the top of Nth step. 
//As the answer will be large find the answer modulo 1000000007.

Input:
N = 1
Output: 1

class Solution 
{
    //Function to count the number of ways in which frog can reach the top.
    countWays(n)
    {
        // code here
        if(n == 1)  return 1;
        if(n == 2)  return 2;
        let f = 1, s = 1, t = 2, mod = 1e9 + 7;
        for(let i = 3 ; i <= n ; i++) {
            let cur = (f + s + t) % mod;
            f = s;
            s = t;
            t = cur;
        }
        return t;
    }
}

//Calculate the angle between the hour hand and minute hand.

Note: //There can be two angles between hands; we need to print a minimum of two. Also, we need to print the floor of the final result angle. 
//For example, if the final angle is 10.61, we need to print 10.

Input:
H = 9 , M = 0
Output:
90
Explanation:
//The minimum angle between hour and minute hand when the time is 9 is 90 degress.

class Solution {
    getAngle(H,M){
       //code here
  if (H < 0 || M < 0 || H > 12 || M > 60) {
    return "Invalid input";
  }

  if (H === 12) {
    H = 0;
  }

  if (M === 60) {
    M = 0;
    H = (H === 11) ? 0 : H + 1;
  }

  // Calculate the angles for hour and minute hands
  const hourAngle = 0.5 * (60 * H + M);
  const minuteAngle = 6 * M;

  // Calculate the absolute angle between the hands
  let angle = Math.abs(hourAngle - minuteAngle);

  // Take the smaller angle between the two possible angles
  angle = Math.min(360 - angle, angle);

  // Return the floor of the angle
  return Math.floor(angle);

    }
}

