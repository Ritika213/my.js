//Given an array of integers, calculate the ratios of its elements that are positive, negative, and zero. Print the decimal value of 
//each fraction on a new line with  places after the decimal.

Note: //This challenge introduces precision problems. The test cases are scaled to six decimal places, though answers with absolute error of 
//up to  are acceptable.

Example

//There are  elements, two positive, two negative and one zero. Their ratios are ,  and . Results are printed as:

0.400000
0.400000
0.200000
//Function Description

//Complete the plusMinus function in the editor below.

//plusMinus has the following parameter(s):

i//nt arr[n]: an array of integers

//Sample Input

//STDIN           Function
          
6               //arr[] size n = 6
//-4 3 -9 0 4 1   arr = [-4, 3, -9, 0, 4, 1]
//Sample Output

0.500000
0.333333
0.166667
Explanation


function plusMinus(arr) {
    // Write your code here
 const lenArray = arr.length; 
   let positive = 0;
   let negetive = 0;
   let zero = 0;
   
   for(let key in arr){
       if(arr[key] > 0) positive++;
       if(arr[key] < 0) negetive++;
       if(arr[key] == 0) zero++;
   }
      
   positive = positive / lenArray;
   negetive = negetive /lenArray;
   zero = zero / lenArray; 
   
  console.log(positive);
  console.log(negetive);
  console.log(zero);     
}    



//Sort integers by the Number of 1 bits

//You are given an integer array arr. Sort the integers in the array in ascending order by the number of 1's in their binary representation
// and in case of two or more integers have the same number of 1's you have to sort them in ascending order.

//Return the array after sorting it.


Input: arr = [0,1,2,3,4,5,6,7,8]
Output: [0,1,2,4,8,3,5,6,7]
Explantion: [0]// is the only integer with 0 bits.
[1,2,4,8] //all have 1 bit.
[3,5,6]// have 2 bits.
[7] //has 3 bits.
//The sorted array by bits is [0,1,2,4,8,3,5,6,7]


var sortByBits = function(arr) {
    let obj = {};
      for(let i=0; i < arr.length; i++){
          let temp = arr[i], count = 0;
          while(temp){
              count += temp % 2;
              temp = Math.floor(temp/2);
          }
          obj[arr[i]] = count;
      }
      return arr.sort((a, b)=> obj[a] - obj[b] || a - b);
  }


  //Binary Serach

  //Given a sorted array of size N and an integer K, find the position(0-based indexing) at which K is present in the array using binary search.

Input:
N = 5
arr = //{1 2 3 4 5} 
K = 4
Output: 3
Explanation //4 appears at index 3.

class Solution {
       binarysearch( arr, n, k) {
          // code here
          let start = 0, end = n-1;
          let mid = start + (end - start)/2;
          
          while(start <= end){
              if(arr[mid] == k){
                  return mid;
              }
              
              else if(arr[mid] > k){
                  end = mid-1;
              }
              else{
                  start = mid+1;
              }
              mid = start + (end - start)/2;
          }
         
          return -1;
      }
  };
