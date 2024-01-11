//Given an array of distinct integers. The task is to count all the triplets such that sum of two elements equals the third element.
 

Input: 
N = 4 
arr = //{1, 5, 3, 2}
Output// 2 
Explanation// There are 2 triplets: 1 + 2 = 3 and 3 +2 = 5

class Solution {
    
    countTriplet(arr,n){
       //code here
       const map=new Map()

       let count=0;

       

       for(let i=0; i<arr.length; i++){

           map.set(arr[i],i)

       }

       

       for(let i=0; i<arr.length; i++){

           for(let j=0; j<arr.length; j++){

               if(arr[i]===arr[j]){

                   continue;

               }

               if(map.has(arr[i]+arr[j])){

                   

                   count++

               }

           }

       }

       if(count===0){

           return count

       }

       return count/2

    }

}


    