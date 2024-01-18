//Given two arrays a[] and b[] of size n and m respectively. The task is to find the number of elements in the union between these two arrays.

//Union of the two arrays can be defined as the set containing distinct elements from both the arrays. If there are repetitions, then only one 
//occurrence of element should be printed in the union.

Note :// Elements are not necessarily distinct.


Input:
//5 3
//1 2 3 4 5
//1 2 3
Output: 
5
Explanation //1, 2, 3, 4 and 5 are the elements which comes in the union set

class Solution {
    //Function to return the count of number of elements in union of two arrays.
    doUnion(a, n, b, m){
        // code here
         const v = [...a]; // Create a new array and copy elements from 'a'
    let cnt = 0;

    for (let i = 0; i < b.length; i++) {
        v.push(b[i]); // Append elements from 'b' to the array 'v'
    }

    v.sort((x, y) => x - y); // Sort the array in ascending order

    for (let i = 0; i < v.length; i++) {
        if (v[i] !== v[i + 1]) {
            cnt++;
        }
    }

    return cnt;

    }
    
}