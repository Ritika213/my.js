//Given an array Arr[] of size L and a number N, you need to write a program to find if there exists a pair of elements in the array
// whose difference is N.

//Example 1:

Input:
L = 6, N = 78
arr = //{5, 20, 3, 2, 5, 80}
Output// 1
Explanation// (2, 80) have difference of 78.
//Example 2:

Input:
L = 5, N = 45
arr = //{90, 70, 20, 80, 50}
Output -1
Explanation: //There is no pair with difference of 45.
Task
//You need not take input or print anything. Your task is to complete the function findPair() which takes array arr, size of the array L 
//and N as input parameters and returns True if required pair exists, else return False.

//Expected Time Complexity: O(L* Log(L)).
//Expected Auxiliary Space: O(1).


Constraints:
1<=L<=104 
1<=Arr[i]<=105 

0<=N<=105

function findPair(arr, size, n) {
    arr.sort((a, b) => a - b);

    for (let i = 0; i < size; i++) {
        let x = n + arr[i];
        let j = i + 1;
        let k = size - 1;

        while (j <= k) {
            let mid = Math.floor((j + k) / 2);

            if (arr[mid] === x)
                return true;
            else if (arr[mid] < x)
                j = mid + 1;
            else
                k = mid - 1;
        }
    }

    return false;
}
