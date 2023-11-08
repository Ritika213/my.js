//Maria plays college basketball and wants to go pro. Each season she maintains a record of her play. She tabulates the number of times she 
//breaks her season record for most points and least points in a game. Points scored in the first game establish her record for the season, 
//and she begins counting from there.

Example

//Scores are in the same order as the games played. She tabulates her results as follows:

                                     Count
    //Game  Score  Minimum  Maximum   Min Max
    // 0      12     12       12       0   0
    // 1      24     12       24       0   1
    // 2      10     10       24       1   1
    // 3      24     10       24       1   1
//Given the scores for a season, determine the number of times Maria breaks her records for most and least points scored during the season

//Sample Input 0

9
//10 5 20 20 4 5 2 25 1
//Sample Output 0

//2 4

function breakingRecords(scores) {
    // Write your code here
 const results = [0, 0];
   let min = scores[0];
   let max = scores[0];
   
   for(const score of scores) {
       if(score > max) {
           max = score;
           results[0]++;
       }
       else if(score < min) {
            min = score;
            results[1]++;
       }
   }
   
   return results;
}


//Determine id cell is Reachable at given time

//You are given four integers sx, sy, fx, fy, and a non-negative integer t.

//In an infinite 2D grid, you start at the cell (sx, sy). Each second, you must move to any of its adjacent cells.

//Return true if you can reach cell (fx, fy) after exactly t seconds, or false otherwise.

//A cell's adjacent cells are the 8 cells around it that share at least one corner with it. You can visit the same cell several times.

Input: sx = 2, sy = 4, fx = 7, fy = 7, t = 6
Output: true
Explanation //Starting at cell (2, 4), we can reach cell (7, 7) in exactly 6 seconds by going through the cells depicted in the picture above. 


var isReachableAtTime = function(sx, sy, fx, fy, t) {
    const dx = Math.abs(fx - sx);
       const dy = Math.abs(fy - sy);
   
       if (dx === 0 && dy === 0 && t === 1) {
           return false
       }
       
       return Math.max(dx, dy) <= t;   
   };



   //Print Matrix in snake Pattern

   //Given a matrix of size N x N. Print the elements of the matrix in the snake like pattern depicted below.

   Input:
N = 3 
matrix = //{{45, 48, 54},
           //  {21, 89, 87}
            // {70, 78, 15}}
Output 
//45 48 54 87 89 21 70 78 15 
Explanation
//Matrix is as below:
//45 48 54
//21 89 87
//70 78 15
//Printing it in snake pattern will lead to 
//the output as 45 48 54 87 89 21 70 78 15.

class Solution 
{
    //Function to return list of integers visited in snake pattern in matrix.
    snakePattern(matrix)
    {
        // code here
        
       let ans=[]; 
       let n = matrix.length;
        for(let i = 0; i < n; i++){
            if(i % 2 == 0) for(let j = 0; j < n; j++) ans.push(matrix[i][j]);
            else for(let j = n - 1; j >= 0; j--) ans.push(matrix[i][j]);
        }
        return ans;
    } 
}



 