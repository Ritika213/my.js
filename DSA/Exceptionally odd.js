//Given an array of N positive integers where all numbers occur even number of times except one number which occurs odd number of times. 
//Find the exceptional number.



Input:
N = 7
Arr = //{1, 2, 3, 2, 3, 1, 3}
Output// 3
Explaination// 3 occurs three times.

class Solution{
    getOddOccurrence(arr,n){
        
         let Xor=0;
        for(let i=0;i<n;i++){
            Xor^=arr[i];
        }
        return Xor;
    }
}