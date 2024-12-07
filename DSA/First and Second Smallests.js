//Given an array, arr of integers, your task is to return the smallest and second smallest element in the array. If the smallest and 
//second smallest do not exist, return -1.

Examples:

Input: //arr[] = [2, 4, 3, 5, 6]
Output:// 2 3 
Explanation:// 2 and 3 are respectively the smallest and second smallest elements in the array.
//Input arr[] = [1, 1, 1]
//Output: -1
Explanation// Only element is 1 which is smallest, so there is no second smallest element.
//Expected Time Complexity: O(n)
//Expected Auxillary Space: O(1)

Constraints:
1 <= arr.size <= 105
1 <= arr[i] <= 105

class Solution{
    minAnd2ndMin(arr,n){
        
let smallest = Number.MAX_VALUE; // Initialize the smallest as a large number
    let secondSmallest = Number.MAX_VALUE; // Initialize the second smallest as a large number

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < smallest) {
            secondSmallest = smallest; // Update the second smallest
            smallest = arr[i]; // Update the smallest
        } else if (arr[i] < secondSmallest && arr[i] !== smallest) {
            secondSmallest = arr[i]; // Update the second smallest
        }
    }

    if (secondSmallest === Number.MAX_VALUE) {
        return [-1]; // If second smallest doesn't exist, return -1
    } else {
        return [smallest, secondSmallest];
    }
    
    }
}