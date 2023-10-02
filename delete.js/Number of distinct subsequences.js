//Given a string consisting of lower case English alphabets, the task is to find the number of distinct subsequences of the string
Note: //Answer can be very large, so, ouput will be answer modulo 109+7.


Input: 
s = "gfg"
Output: 
7
Explanation 
//The seven distinct subsequences are "", "g", "f", "gf", "fg", "gg" and "gfg" .

class Solution {
    /**
    * @param string str
    
    * @returns number
    */
        distinctSubsequences(str) {
            // code here
            const n = str.length;
            const dp = new Array(n + 1).fill(0);
            dp[0] = 1;
            const lastOccurrence = new Array(256).fill(-1);
    
            for (let i = 1; i <= n; i++) {
                const char = str[i - 1];
                dp[i] = (dp[i - 1] * 2) % 1000000007;
    
                if (lastOccurrence[char.charCodeAt(0)] !== -1) {
                    const idx = lastOccurrence[char.charCodeAt(0)];
                    dp[i] = (dp[i] - dp[idx - 1] + 1000000007) % 1000000007;
                }
    
                lastOccurrence[char.charCodeAt(0)] = i;
            }
    
            return dp[n];
        
        }
    }
            

    

    //You are given an array arr[], you have to re-construct an array arr[].
//The values in arr[] are obtained by doing OR(bitwise or) of consecutive elements in the array.


Input : arr = [10, 11, 1, 2, 3]
Output : //11 11 3 3 3
Explanation
//At index 0, arr[0] or arr[1] = 11
//At index 1, arr[1] or arr[2] = 11
//At index 2, arr[2] or arr[3] = 3
//At index 4, No element is left So, it will remain as it is.
//New Array will be {11, 11, 3, 3, 3}.


class Solution{
    game_with_number(arr,n){
        //code here
        for(let i = 0; i<n-1; i++){
        arr[i] = arr[i] | arr[i+1];
    }
    return arr;
    }
}

//Given a matrix of size N x N. Print the elements of the matrix in the snake like pattern depicted below.


Input:
N = 3 
matrix =// [{45 48 54}
            // {21 89 87}
             //{70 78 15}]
Output //45 48 54 87 89 21 70 78 15 
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
        let n = matrix.length;
        let res=[];
        let j = 0;
        for (let i = 0; i < n; i++) {
            if (j == 0) {
                while (j < n) {
                    res.push(matrix[i][j]);
                    j++;
                }
                j = n-1;
            } else {
                while (j >= 0) {
                    res.push(matrix[i][j]);
                    j--;
                }
                j = 0;
            }
        }
        return res;
    } 
}
