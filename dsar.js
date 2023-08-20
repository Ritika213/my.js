//Given a sorted array Arr of size N and a number X, you need to find the number of occurrences of X in Arr.

Input:
N = 7, X = 2
Arr= [1, 1, 2, 2, 2, 2, 3]
Output: 4
Explanation: 2 //occurs 4 times in the given array.

class Solution {
    
    count(arr,n,x){
        //code here
        let ans=0;
        for(let i=0;i<n;i++){
            if(arr[i]===x){
            ans++;
        }
        }
        return ans;
    }
}

//Given two positive integers num1 and num2, the task is to find the remainder when num1 is divided by num2.

Input:
num1 = 5
num2 = 3

Output:
2

Explanation
//The remainder after dividing 5 by 3 is: 2.

class Solution{
    findRemainder(num1, num2){
        //code here
        let rem= Math.floor(num1%num2);
        return rem;
    }
}



//Given a non null integer matrix Grid of dimensions NxM.Calculate the sum of its elements.
Input:
N=2,M=3
Grid=
[[1,0,1],
[-8,9,-2]]
Output:
1
Explanation:
//The sum of all elements of the matrix is 
(1+0+1-8+9-2)=1.

class Solution {
    sumOfMatrix(N,M,Grid){
       //code here
       let sum = 0; // Initialize sum to 0
        for (let i = 0; i < N; i++) {
            for (let j = 0; j < M; j++) {
                sum += Grid[i][j]; // Add the value of the current element to the sum
            }
        }
        return sum; // Return the final sum
    }
}