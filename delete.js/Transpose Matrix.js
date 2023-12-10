//Given a 2D integer array matrix, return the transpose of matrix.

//The transpose of a matrix is the matrix flipped over its main diagonal, switching the matrix's row and column indices

Input: matrix = [[1,2,3],[4,5,6],[7,8,9]]
Output: [[1,4,7],[2,5,8],[3,6,9]]

var transpose = function(matrix) {
    var result=[];
    var row=matrix.length;
    var col=matrix[0].length;
    for(var i=0;i<row;i++){
        for(var j=0;j<col;j++){
            if(! result[j]){
                result[j]=[i];
            }
            result [j] [i]=matrix[i][j];
        }
    }
    return result;
 
 };



 //subarray eith zero sum

 //Given an array of integers. Find if there is a subarray (of size at-least one) with 0 sum. You just need to return true/false depending 
 //upon whether there is a subarray present with 0-sum or not. Printing will be taken care by the driver code.

Input:
n = 5
arr = //{4,2,-3,1,6}
Output 
Yes
Explanation 
//2, -3, 1 is the subarray with sum 0.

class Solution {
    //Function to check whether there is a subarray present with 0-sum or not.
    subArrayExists(arr, n){
        // code here
        
        let mp = new Map();
    let sum = 0;

    for (let i = 0; i < n; i++) {
        sum += arr[i];
        if (mp.has(sum)) {
            mp.set(sum, mp.get(sum) + 1);
        } else {
            mp.set(sum, 1);
        }
    }

    if (mp.has(0)) {
        return true;
    }

    for (let val of mp.entries()) {
        if (val[1] > 1) {
            return true;
        }
    }

    return false;
    }
    
}


