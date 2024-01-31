//Given an array arr[] of distinct integers of size N and a value sum, the task is to find the count of triplets (i, j, k), having (i<j<k) 
//with the sum of (arr[i] + arr[j] + arr[k]) smaller than the given value sum.


Input: N = 4, sum = 2
arr = //{-2, 0, 1, 3}
Output // 2
Explanation //Below are triplets with sum less than 2 (-2, 0, 1) and (-2, 0, 3). 

class Solution {

    countTriplets(arr,n,sum){
        
        let cnt = 0;
	    arr.sort(function(a, b){return a - b});;
	    for(let i=0;i<n;i++){
	           let sum1 = sum-arr[i];
	           let s = i+1,e = n-1;
	           while(s<e){
	               if(arr[s]+arr[e]>=sum1) e--;
	               else{
	                   cnt+=e-s;
	                   s++;
	               }
	           }
	       }
	    return cnt;
	}
};
    