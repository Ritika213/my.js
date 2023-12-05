//You are given a number of sticks of varying lengths. You will iteratively cut the sticks into smaller sticks, discarding the shortest pieces
 //until there are none left. At each iteration you will determine the length of the shortest stick remaining, cut that length from each of the 
 //longer sticks and then discard all the pieces of that shortest length. When all the remaining sticks are the same length, they cannot be 
 //shortened so discard them.

//Given the lengths of n sticks, print the number of sticks that are left before each iteration until there are none left.

example: arr[1,2,3]

//The shortest stick length is 1, so cut that length from the longer two and discard the pieces of length 1. Now the lengths are arr[1,2]. Again, the 
//shortest stick is of length 1, so cut that amount from the longer stick and discard those pieces. There is only one stick left, arr[1], so discard 
//that stick. The number of sticks at each iteration are answer[3,2,1].

//Sample Input 0

//STDIN           Function
//-----           --------
//6               arr[] size n = 6
//5 4 4 2 2 8     arr = [5, 4, 4, 2, 2, 8]
//Sample Output 0

6
4
2
1
//Explanation 0

sticks-length        //length-of-cut   sticks-cut
//5 4 4 2 2 8             2               6
//3 2 2 _ _ 6             2               4
//1 _ _ _ _ 4             1               2
//_ _ _ _ _ 3             3               1
//_ _ _ _ _ _           DONE            DONE


function cutTheSticks(arr) {
    
const remainingSticks = [];

    while (arr.length > 0) {
        // Record the current number of sticks
        remainingSticks.push(arr.length);        

        // Remove sticks with the minimum length
        arr = arr.filter(length => length > Math.min(...arr));
    }

    return remainingSticks;
}


//count of match in tournament

//You are given an integer n, the number of teams in a tournament that has strange rules:

//If the current number of teams is even, each team gets paired with another team. A total of n / 2 matches are played, and n / 2 teams 
//advance to the next round.
//If the current number of teams is odd, one team randomly advances in the tournament, and the rest gets paired. A total of (n - 1) / 2
// matches are played, and (n - 1) / 2 + 1 teams advance to the next round.
//Return the number of matches played in the tournament until a winner is decided.

Input: n = 7
Output: 6
Explanation //Details of the tournament: 
 //1st Round: Teams = 7, Matches = 3, and 4 teams advance.
// 2nd Round: Teams = 4, Matches = 2, and 2 teams advance.
// 3rd Round: Teams = 2, Matches = 1, and 1 team is declared the winner.
//Total number of matches = 3 + 2 + 1 = 6.


var numberOfMatches = function (n) {
    let match = 0;
    while (n != 1) {
        if (n % 2 == 0) {
            match += n / 2;
            n = n / 2;
        } else {
            match += (n - 1) / 2;
            n = (n - 1) / 2 + 1;
        }
    }
    return match;
};

//minimize the height II

//Given an array arr[] denoting heights of N towers and a positive integer K.

//For each tower, you must perform exactly one of the following operations exactly once.

//Increase the height of the tower by K
//Decrease the height of the tower by K
//Find out the minimum possible difference between the height of the shortest and tallest towers after you have modified each tower.

//You can find a slight modification of the problem here.
Note: //It is compulsory to increase or decrease the height by K for each tower. After the operation, the resultant array should not 
//contain any negative integers.


Input
K = 2, N = 4
Arr= //{1, 5, 8, 10}
Output
5
Explanation//The array can be modified as {1+k, 5-k, 8-k, 10-k} = {3, 3, 6, 8}. The difference between the largest and the smallest is 8-3 = 5.

class Solution {
    //Function to get the minimum difference between the heights.
    getMinDiff(arr, n, k) {
        //your code here
        arr.sort((a, b) => a - b);
    
    // Initialize variables to store maximum and minimum elements
    let maxi = arr[n - 1];
    let mini = arr[0];
    
    // Initialize ans with the difference between the maximum and minimum elements
    let ans = maxi - mini;
    
    // Iterate through all elements and update possible maximum and minimum heights
    for (let i = 1; i < n; i++) {
        if (arr[i] - k < 0) {
            continue;
        }

        maxi = Math.max(arr[i - 1] + k, arr[n - 1] - k);
        mini = Math.min(arr[0] + k, arr[i] - k);
        
        ans = Math.min(ans, maxi - mini);
    }
    
    return ans;
    }
}




