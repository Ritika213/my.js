//Given an array arr[] of N positive integers which can contain integers from 1 to P where elements can be repeated or can be absent from the array.
 //Your task is to count the frequency of all numbers from 1 to N. Make in-place changes in arr[], such that arr[i] = frequency(i). Assume 1-based 
 //indexing.
Note// The elements greater than N in the array can be ignored for counting and do modify the array in-place. 

Input:
N = 5
arr = //{2, 3, 2, 3, 5}
P = 5
Output:
//0 2 2 0 1
Explanation 
//Counting frequencies of each array element
//We have:
//1 occurring 0 times.
//2 occurring 2 times.
//3 occurring 2 times.
//4 occurring 0 times.
//5 occurring 1 time.

class Solution {
    frequencyCount(arr,N,P){
       //code here
      let hashmap = {}
       for(let num of arr){
           if( num in hashmap){
               
               hashmap[num] ++
           }else{
               hashmap[num] = 1
           }
       }
       for(let i=1; i<=N; i++){
        if(hashmap.hasOwnProperty(i)){
            arr[i-1] = hashmap[i]

        }else{
            arr[i-1] = 0
        }
       }

return arr
    }
}