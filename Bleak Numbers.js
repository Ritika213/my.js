//Given an integer, check whether it is Bleak or not.

//A number n is called Bleak if it cannot be represented as sum of a positive number x and set bit count in x, i.e., x + countSetBits(x) 
//is not equal to n for any non-negative number x.

Input: 
4
Output: 
1
Explanation 
//There is no x such that x + countSetbit(x) = 4

class Solution {
    is_bleak(N){
       //code here
      if(N<=32){
	        for(let i = 1;i<=32;i++){
	            let x = i;
	            let cnt=0;
	            for(let j = 0;j<32;j++){
	                if((1<<j) & x) cnt++;
	            }
	            if(cnt + x == N) return 0;
	        }
	        return 1;
	    }
	    else{
	        let s = N-32;
	        for(let i = s;i<=N;i++){
	            let x = i;
	            let cnt = 0;
	            for(let j = 0;j<32;j++){
	                if((1<<j) & x) cnt++;
	            }
	            if(cnt + x == N) return 0;
	        }
	        return 1;
	    }
    }
}




//A very big sum

//In this challenge, you are required to calculate and print the sum of the elements in an array, keeping in mind that some of those integers may be quite large.

//Function Description

//Complete the aVeryBigSum function in the editor below. It must return the sum of all array elements.

//aVeryBigSum has the following parameter(s):

//int ar[n]: an array of integers .
Return

long //the sum of all array elements

function aVeryBigSum(ar) {
    // Write your code here
let sum=0;
for(let i=0;i<ar.length;i++){
    sum+=ar[i];
}
return sum;
}


//Reverse the subarray

//Provided an array Arr of N integers, you need to reverse a subarray of that array. The range of this subarray is given by L and R.

Input:
N = 7
Arr = //{1, 2, 3, 4, 5, 6, 7}
L = 2, R = 4
Output:
//1 4 3 2 5 6 7
Explanation //After reversing the elements 
//in range 2 to 4 (2, 3, 4), 
//modified array is 1, 4, 3, 2, 5, 6, 7.


class Solution{
    reverseSubArray(arr,n,l,r){
        //code here
         while(l<r)
        {
            let temp=arr[l-1];
            arr[l-1]=arr[r-1];
            arr[r-1]=temp;
            l++;
            r--;
        }
    }
}
