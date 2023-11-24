//The Utopian Tree goes through 2 cycles of growth every year. Each spring, it doubles in height. Each summer, its height increases by 1 meter.

//A Utopian Tree sapling with a height of 1 meter is planted at the onset of spring. How tall will the tree be after n growth cycles?

//For example, if the number of growth cycles is n=5, the calculations are as follows:

//Period  Height
//0          1
//1          2
//2          3
//3          6
//4          7
//5          14

//Sample Input

3
0
1
4
//Sample Output

1
2
7

function utopianTree(n) {
let hight=1;
for(let i=0;i<n;i++){
    if(i%2==0){
        hight *=2;
    } else {
        hight+=1;
    }
}
return hight;
}

//maximim number of coins you can get 

//There are 3n piles of coins of varying size, you and your friends will take piles of coins as follows:

//In each step, you will choose any 3 piles of coins (not necessarily consecutive).
//Of your choice, Alice will pick the pile with the maximum number of coins.
//You will pick the next pile with the maximum number of coins.
//Your friend Bob will pick the last pile.
//Repeat until there are no more piles of coins.
//Given an array of integers piles where piles[i] is the number of coins in the ith pile.

//Return the maximum number of coins that you can have.


Input: piles = [2,4,1,2,7,8]
Output: 9
Explanation// Choose the triplet (2, 7, 8), Alice Pick the pile with 8 coins, you the pile with 7 coins and Bob the last one.
//Choose the triplet (1, 2, 4), Alice Pick the pile with 4 coins, you the pile with 2 coins and Bob the last one.
//The maximum number of coins which you can have are: 7 + 2 = 9.
//On the other hand if we choose this arrangement (1, 2, 8), (2, 4, 7) you only get 2 + 4 = 6 coins which is not optimal.

var maxCoins = function(piles) {
    piles.sort((a, b) => b - a);
   
       let ans = 0, len = piles.length / 3;
       
       for (let i = 1; i < piles.length - len; i += 2) {
           ans += piles[i];
       }
       return ans;   
   };

   //pascal triangle

   //Given a positive integer N, return the Nth row of pascal's triangle.
//Pascal's triangle is a triangular array of the binomial coefficients formed by summing up the elements of previous row.
//The elements can be large so return it modulo 109 + 7.

Input:
N = 4
Output: 
//1 3 3 1
Explanation 
//4th row of pascal's triangle is 1 3 3 1.

class Solution {
    nthRowOfPascalTriangle(N){
        //code here
        let prev=[1]
        let mod = 1e9+7;
        
        for(let i=0; i<N; i++) {
            let curr= Array(i+1).fill(1);
            for(let j=1; j<i; j++) {
                curr[j] = (prev[j-1]+prev[j])%mod;
            }
            
            prev = curr;
        }
        
        return prev;
    }
}




