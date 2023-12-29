//Given an array A of size N of integers. Your task is to find the minimum and maximum elements in the array.

 

Example 

Input:
N = 6
A =// {3, 2, 1, 56, 10000, 167}
Output// 1 10000
Explanation //minimum and maximum elements of array are 1 and 10000.

class Solution{
    getMinMax(arr,n){
        //code here
    if (arr.length === 0) {
        return []; // Return an empty array for an empty input
    }

    let min = arr[0];
    let max = arr[0];

    for (let i = 1; i < arr.length; i++) {
        const num = arr[i];
        if (arr[i] < min) {
            min = arr[i];
        } else if (arr[i] > max) {
            max = arr[i];
        }
    }

    return [min, max]; // Return an array containing min and max

    }
}