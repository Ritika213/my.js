//Given a list of characters, merge all of them into a string.

Input:
N = 13
//Char array = g e e k s f o r g e e k s
Output: geeksforgeeks 
Explanation //combined all the characters to form a single string.


class Solution{
    chartostr(arr,n){
        //code here
        let s=[];
        for(let i=0;i<n;i++){
            s.push(arr[i]);
        }
        return s.join('');
    }
}



//Given two square Matrices A[][] and B[][]. Your task is to complete the function multiply 
//which stores the multiplied matrices in a new matrix C[][].

Input: 
N = 2
A = [[7, 8], [2 , 9]]
B = [[14, 5], [5, 18]]

Output: 
C = [[138, 179], [73, 172]]


function multiplyMatrices(A, B, N) {
    let C = new Array(N);
    for (let i = 0; i < N; i++) {
        C[i] = new Array(N).fill(0);
        for (let j = 0; j < N; j++) {
            let sum = 0;
            for (let k = 0; k < N; k++) {
                sum += A[i][k] * B[k][j];
            }
            C[i][j] = sum;
        }
    }
    return C;
}

// Example usage
const N = 2; // Size of the matrices
const matrixA = [
    [7, 8],
    [2, 9]
];
const matrixB = [
    [14, 5],
    [5, 18]
];

const resultMatrix = multiplyMatrices(matrixA, matrixB, N);
console.log(resultMatrix);
