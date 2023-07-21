//In the mystical land of Altaria, 
//there exists a majestic mountain range adorned with breathtaking peaks.
// Legends speak of a hidden gem known as the "Peak Element," which possesses unparalleled power and prominence. 
// Your task is to embark on a daring adventure and find the index of the Peak Element within a given array of integers.

//Test Case 1:

Input: [1, 2, 3, 1]

Output: 2

Explanation: //In this test case, the input array represents a sequence of numbers. 
//The peak element refers to the element that is greater than its adjacent elements. 
//In the given input, the array [1, 2, 3, 1] has a peak element at index 2, which is the number 3. 
//It is greater than its adjacent elements 2 and 1. Therefore, the expected output is 2.

//Test Case 2:

Input: [1, 2, 3]

Output: 2
var findPeakElement = function(arr) {
    let left=0 , right=arr.length-1,mid;
    while(left<right){
        mid=Math.floor((right+left)/2)
        if(arr[mid]>arr[mid+1]) right=mid;
        else left=mid+1;
        
    }
    return left;
 };



 2.//You're given strings jewels representing the types of stones that are jewels, 
 //and stones representing the stones you have. Each character in stones is a type of stone you have.
  //You want to know how many of the stones you have are also jewels.

 //Letters are case sensitive, so "a" is considered a different type of stone from "A".
 
  
 
 //Example 1:
 
 Input: jewels = "aA", stones = "aAAbbbb"
 
 Output: 3
 
// Example 2:
 
 Input: jewels = "z", stones = "ZZ"

 var numJewelsInStones = function(jewels, stones) {
    let count=0;
    for(let i=0;i<stones.length;i++){
        if(jewels.includes(stones[i])){
            count++
        }
    }
    return count;
};
 
 Output: 0