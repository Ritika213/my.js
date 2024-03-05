//Given an array arr of n positive integers. The task is to swap every ith element of the array with (i+2)th element.


Input:
n = 3
arr= //1 2 3
Output=//3 2 1
Explanation //Swapping 1 and 3, makes the array 3 2 1. There is only one swap possible in this array.


class Solution {
    /**
     * @param {number} n
     * @param {number[]} arr
     * @returns {void}
     */
    swapElements(n, arr) {
        // code here
        if (n < 3) return;
        for (let i = 0; i < n - 2; i += 2) {

            let temp = arr[i];
            arr[i] = arr[i + 2];
            arr[i + 2] = temp;
        }
    }
}


//To avoid swapping elements multiple times,we can modify the loop to increment the index `i` by 2 instead of 1 in each iteration. 
    //This way, each element will only be involved in one swap.
    //Now, with i += 2, the loop will only consider every second element, preventing elements from being swapped multiple times.

