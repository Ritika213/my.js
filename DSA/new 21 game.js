//Alice plays the following game, loosely based on the card game "21".

//Alice starts with 0 points and draws numbers while she has less than k points. During each draw, she gains an integer number 
//of points randomly from the range [1, maxPts], where maxPts is an integer. Each draw is independent and the outcomes have equal probabilities.

//Alice stops drawing numbers when she gets k or more points.

//Return the probability that Alice has n or fewer points.

//Answers within 10-5 of the actual answer are considered accepted.

 

//Example 1:

Input: n = 10, k = 1, maxPts = 10
Output: 1.00000
Explanation// Alice gets a single card, then stops.

//Example 2:

Input: n = 6, k = 1, maxPts = 10
Output: 0.60000
Explanation:// Alice gets a single card, then stops.
//In 6 out of 10 possibilities, she is at or below 6 points.
//Example 3:

Input: n = 21, k = 17, maxPts = 10
Output: 0.73278
 

Constraints:

0 <= k <= n <= 104
1 <= maxPts <= 104

var new21Game = function(n, k, maxPts) {
let dp = new Array(k+maxPts).fill(0)
let s=0;
for(let i=k;i<k+maxPts;i++){
//fill (k~k+w), there is no chamnce of drwaing at this, just compare whether it is
//les  than or equal to n
if(i <= n){
    dp[i]=1;
} else {
    dp[i]=0;
}
s+= dp[i]
}
for(let i=k-1;i>=0;i--){
    dp[i]= s/maxPts
    s=s + dp[i] - dp[i+maxPts]
}
return dp[0]
};