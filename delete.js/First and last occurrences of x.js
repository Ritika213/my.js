//Given a sorted array arr containing n elements with possibly duplicate is to find indexes of first elements, the task is to find the first and last occurrences of an element x in the given array.
Note: //If the number x is not found in the array then return both the indices as -1.

Input:
n=9, x=5
arr= [ 1, 3, 5, 5, 5, 5, 67, 123, 125 ]
Output:  
//2 5
Explanation
//First occurrence of 5 is at index 2 and last occurrence of 5 is at index 5. 

class Solution {
    find(arr,n,x){
       //code here
      let low = 0, high = n - 1;
        let start = -1, end = -1;

        while (low <= high) {
            let mid = low + Math.floor((high - low) / 2);

            if (arr[mid] === x) {
                start = mid;
                end = mid;

                while (start >= 0 && arr[start] === x) {
                    start--;
                }

                while (end < n && arr[end] === x) {
                    end++;
                }
 return [start + 1, end - 1];
            } else if (arr[mid] > x) {
                high = mid - 1;
            } else {
                low = mid + 1;
            }
        }

        return [start, end];
    
    }
}


//Given a street of N houses (a row of houses), each house having K amount of money kept inside; now there is a thief who is going to steal this money but he has a constraint/rule that he cannot steal/rob two adjacent houses. Find the maximum money he can rob.


Input:
N = 5 , K = 10
Output:
30
Explanation
//The Robber can rob from the first, third and fifth houses which will result in 30.

class Solution {

    maximizeMoney(N,K){
        //code here
         if(N%2==0) return (N/2)*K;
        return ((N+1)/2)*K;
    }
}


//Given two strings A and B, find if A is a subsequence of B.

Input:
A = AXY 
B = YADXCP
Output: 0 
Explanation //A is not a subsequence of B as 'Y' appears before 'A'.

class Solution {
    isSubSequence(A,B){
       //code here
       let j=0;
        if(j==A.length){
            return true;
        }
        for(let i=0;i<B.length;i++){
            if(A.charAt(j) == B.charAt(i)){
                j++;
            }
            if(j==A.length){
                return true;
            }
        }
        return false;
    }
}


