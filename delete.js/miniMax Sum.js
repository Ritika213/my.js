//Given five positive integers, find the minimum and maximum values that can be calculated by summing exactly four of the five integers. 
//Then print the respective minimum and maximum values as a single line of two space-separated long integers.
//Sample Input

//1 2 3 4 5
//Sample Output

//10 14
Explanation

//The numbers are , , , , and . Calculate the following sums using four of the five integers:

//Sum everything except , the sum is .
//Sum everything except , the sum is .
//Sum everything except , the sum is .
//Sum everything except , the sum is .
//Sum everything except , the sum is .


function miniMaxSum(arr) {
    // Write your code here
    let min = 0;
    let max = 0;
    for (let i = 0; i < arr.length; i++) {
        let newArr = [];
        for (let j = 0; j < arr.length; j++) {
            if (i != j) {
                newArr.push(arr[j])
            }
        }
        const sum = newArr.reduce((total, ele) => total + ele, 0)
        max = sum > max ? sum : max
        min = i==0? sum: (sum < min? sum: min)
    }
    console.log(min, max);
}


//Find the original array of prefix XOR

//You are given an integer array pref of size n. Find and return the array arr of size n that satisfies:

//pref[i] = arr[0] ^ arr[1] ^ ... ^ arr[i].
//Note that ^ denotes the bitwise-xor operation.

//It can be proven that the answer is unique.

Input: pref = [5,2,0,3,1]
Output: [5,7,2,3,2]
Explanation: //From the array [5,7,2,3,2] we have the following:
- pref[0] //= 5.
- pref[1] //= 5 ^ 7 = 2.
- pref[2] //= 5 ^ 7 ^ 2 = 0.
- pref[3]// = 5 ^ 7 ^ 2 ^ 3 = 3.
- pref[4]// = 5 ^ 7 ^ 2 ^ 3 ^ 2 = 1.


var findArray = function(pref) {
    let ans = [pref[0]];
      for(let i = 1; i < pref.length; i++){
          ans.push(pref[i] ^ pref[i - 1]) 
      }
      return ans  
  };


  //move all zeros to end of array

  class Solution {
    pushZerosToEnd(arr,n){
        //code here
         let nonZeroIndex = 0;

    // Traverse the array, if element is non-zero, move it to the nonZeroIndex position
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== 0) {
            [arr[nonZeroIndex], arr[i]] = [arr[i], arr[nonZeroIndex]];
            nonZeroIndex++;
        }
    }

    }
}

    