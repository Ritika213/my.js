//Given a binary array A[] of size N. The task is to arrange the array in increasing order.
Note: //The binary array contains only 0  and 1.


Input: 
5
//1 0 1 1 0

Output
//0 0 1 1 1

class Solution {
    //Function to sort the binary array.
    binSort(A, N)
    {
        //your code here
         let low =0,high = N-1;
       while(low<high){
           if(A[low]==0){
               low++;
           }
           else if(A[high]==1){
               high--;
           }
           else{
               let temp=A[low];
               A[low]=A[high];
               A[high]=temp;
               low++;
               high--;
           }
       }
       
    }
}



//You are given two numbers A and B. The task is to count the number of bits needed to be flipped to convert A to B.


Input: A = 10, B = 20
Output: 4
Explanation:
A  = //01010
B  = 10100
//As we can see, the bits of A that need to be flipped are 01010. If we flip these bits, we get 10100, which is B.


class Solution {
    
    countBitsFlip(a, b)
    {
        // code here
          let n=a^b;

         let cnt=0;

         while(n>0) {

             if((n&1)==1)

             cnt++;

             n>>=1;

         }

         return cnt;

    }
}

//Given an array of distinct elements. Find the third largest element in it.

//Suppose you have A[] = {1, 2, 3, 4, 5, 6, 7}, its output will be 5 because it is the 3 largest element in the array A.


Input:
N = 5
A = [2,4,1,3,5]
Output: 3


class Solution {
    
    thirdLargest(a, n)
    {
        //your code here
         if(n < 3){
             return "Invalid Input";
  }
 
  let [first, second, third] = Array(3).fill(Number.MIN_SAFE_INTEGER);
 
  for (let n of a) {
    if (n > first) {
      [third, second, first] = [second, first, n];
    } else if (n > second) {
      [third, second] = [second, n];
    } else if (n > third) {
      third = n;
    }
  }
 
  return third;

    }
    }


