//Given an integer array arr of size n, you need to sum the elements of arr.

Input:
n = 3
arr= [3, 2, 1]
Output: 6

Input:
n = 4
arr = [1 ,2 ,3 ,4]
Output: 10

class solution{
sumElement(arr,n) {
    // code here
    let sum=0;
    for(let i=0;i<arr.length;i++){
        sum=sum+arr[i];
    }
    return sum;
}
}


//You are given an array A of size N. You need to print elements of A in alternate order (starting from index 0).


Input:
N = 4
A= [1, 2, 3, 4]
Output:
[1 ,3]


Input:
N = 5
A = [1, 2, 3, 4, 5]
Output:
[1, 3 ,5]

class Solution {
    print(arr,n){
      //code here
       let out = ""
  
      for(let i=0; i<n; i++){
  
          if(i%2===0){
  
              out = out + arr[i] + " "
  
          }
  
      }
  
      console.log(out)
  
  
  
    }
  }
