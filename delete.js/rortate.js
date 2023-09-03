//Given an array, rotate the array by one position in clock-wise direction.

Input:
N = 5
A= [1, 2, 3, 4, 5]
Output:
//5 1 2 3 4


class Solution{
    rotate(arr,n){
        //code here
    const lastElement = arr[n - 1];
        
        for (let i = n - 1; i > 0; i--) {
            arr[i] = arr[i - 1];
        }
        
        arr[0] = lastElement;
        return arr;
    

     
    }
}

//Given an array A of size N of integers. Your task is to find the minimum and maximum elements in the array.

Input:
N = 6
A = [3, 2, 1, 56, 10000, 167]
Output:// 1 10000
Explanation: //minimum and maximum elements of array are 1 and 10000.

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


    //Given an integer array nums, return true if any value appears at least twice in the array, 
    //and return false if every element is distinct.

    
    Input: nums = [1,2,3,1]
    Output: true

    
    Input: nums = [1,2,3,4]
    Output: false


    var containsDuplicate = function(nums) {
        if(nums.length<1){
            return false;
        }
        for(let i=0;i<nums.length-1;i++){
    let j=i+1;
    while(j<nums.length){
        if(nums[i]===nums[j]){
            return true;
        }
    j++;
    }
        }
        return false;
    };




    }
}
