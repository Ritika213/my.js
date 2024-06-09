//Given an array having both positive and negative integers. The task is to compute the length of the largest subarray with sum 0.

//Example 1:

Input:
N = 8
A = //{15,-2,2,-8,1,7,10,23}
Output// 5
Explanation:// The largest subarray with sum 0 will be -2 2 -8 1 7.
 Task
//we just have to complete the function maxLen() which takes two arguments an array A and n, where n is the size of the array A and 
//returns the length of the largest subarray with 0 sum.

//Expected Time Complexity: O(N).
//Expected Auxiliary Space: O(N).

Constraints:
1 <= N <= 105
//-1000 <= A[i] <= 1000, for each valid i

class Solution {
    maxLen(arr,n){
    let sum =0;
	let len=0;
	let mp=new Map();
	
	for(let i=0;i<n;i++){
		 sum+=arr[i];

            if(sum==0)len=i+1;

            else if(mp[sum]>0){

                len=Math.max(len,i-mp[sum]+1)

            }

            else{

                mp[sum]=i+1;
            }
	}
	return len;
    
};
}