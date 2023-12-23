//Given an array arr of size N and an element k. The task is to find the count of elements in the array that appear more than n/k times.

Input:
N = 8
arr = [3,1,2,2,1,2,3,3]
k = 4
Output: 
2
Explanation //In the given array, 3 and 2 are the only elements that appears more than n/k times.

class Solution
{
    //Function to find all elements in array that appear more than n/k times.
    countOccurence(arr, n, k)
    {
        //your code here
        
         let mp = new Map();
        let count = 0;

        for (let i = 0; i < arr.length; i++) {
            if (!mp.has(arr[i])) {
                mp.set(arr[i], 1);
            } else {
                mp.set(arr[i], mp.get(arr[i]) + 1);
            }
        }

        for (let [key, value] of mp.entries()) {
            if (value > arr.length / k) {
                count++;
            }
        }

        return count;
    
    }
}