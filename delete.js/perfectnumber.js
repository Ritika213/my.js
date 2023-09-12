//Given a number N, check if a number is perfect or not. A number is said to be perfect if sum of all its factors 
//excluding the number itself is equal to the number. Return 1 if the number is Perfect otherwise return 0.

Input:
N = 6
Output:
1 
Explanation //Factors of 6 are 1, 2, 3 and 6.Excluding 6 their sum is 6 which is equal to N itself. So, it's a Perfect Number.

class Solution {

    isPerfectNumber(n){
        //code here
        if(n == 1) return 0;
        let sum = 1;
        for(let i=2; i*i<n; i++){
            if(n%i == 0) sum += i + n/i;
        }
        return sum == n ? 1 : 0;
    }
}

//Given an array of integers, your task is to find the smallest and second smallest element in the array. 
//If smallest and second smallest do not exist, print -1.
Input :
5
//2 4 3 5 6
Output :
//2 3 
Explanation: //2 and 3 are respectively the smallest and second smallest elements in the array.



class Solution{
    minAnd2ndMin(arr,n){
        //code here

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

//We initialize smallest and secondSmallest to very large values (Number.MAX_VALUE) to ensure they will be updated correctly.

//We iterate through the array and update smallest and secondSmallest accordingly.

//If the secondSmallest remains as Number.MAX_VALUE after the loop, it means there is no second smallest element in the array, so we return [-1].

//Otherwise, we return the smallest and second smallest elements as an array.

//For the given example input [2, 4, 3, 5, 6], the output will be "2 3" as expected.