//Given a positive integer N, count all possible distinct binary strings of length N such that there are no consecutive 1’s. 
//Output your answer modulo 109 + 7.

Input:
N = 3
Output: 5
Explanation
//5 strings are (000,001, 010, 100, 101).

class Solution{
    countStrings(n){
        //code here
        let MOD = 1000000007;
        let zero = 1;
        let one = 1;
        
        for(let i=2;i<=n;i++) {
            let nZero = Math.floor(zero + one) % MOD;
            let nOne = zero;
            
            zero = nZero;
            one = nOne; 
        }
        return Math.floor(zero + one) %MOD;
    }
}


//special position in a binary matrix
//Given an m x n binary matrix mat, return the number of special positions in mat.

//A position (i, j) is called special if mat[i][j] == 1 and all other elements in row i and column j are 0 (rows and columns are 0-indexed).



Input: mat = [[1,0,0],[0,0,1],[1,0,0]]
Output: 1
Explanation: //(1, 2) is a special position because mat[1][2] == 1 and all other elements in row 1 and column 2 are 0.


Input: mat = [[1,0,0],[0,1,0],[0,0,1]]
Output: 3


var numSpecial = function(mat) {
    var count = 0
    var rl = mat.length

    for(var i = 0; i< rl; i++){
        var rowsum = mat[i].reduce(function(a,b){return a+b})

        if(rowsum == 1){
            var index = mat[i].indexOf(1)
            
            var colsum = 0;
            for (var j = 0; j < rl; j++){
                colsum = colsum + mat[j][index]
            }
            
            if (colsum == 1){
                count++
            }
        }
    }

    return count

};   


//picking number

//Given an array of integers, find the longest subarray where the absolute difference between any two elements is less than or equal to 1.

Example
a=[1,1,2,2,3,3,5,5,5]

//There are two subarrays meeting the criterion:[1,1,2,2]  and[4,4,5,5,5] . The maximum length subarray has 5 elements.
//Sample Input 0

6
//4 6 5 3 3 1
//Sample Output 0

3

function pickingNumbers(a) {
    // Write your code here
let sum , lengthSum = 0;
    a.sort();
    for(let i of a){
        sum = 0;
        for(let j of a ){
            if(i == j || j - i == 1){
                sum ++;
            }  
        }
        if(sum > lengthSum) {lengthSum = sum;}
    }
    return lengthSum;
}
