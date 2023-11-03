//Given an array arr of n integers, write a function that returns true if there is a triplet (a, b, c) from the array 
//(where a, b, and c are on different indexes) that satisfies a2 + b2 = c2, otherwise return false.

Input:
N = 5
Arr = //{3, 2, 4, 6, 5}
Output- Yes
Explanation// a=3, b=4, and c=5 forms apythagorean triplet.

class Solution {

    checkTriplet(arr,n){
        //code here
         let s = new Set();
        for (let i = 0; i < n; i++) {
            s.add(arr[i] * arr[i]);
        }
        
        for (let i = 0; i < n - 1; i++) {
            for (let j = 0; j < n; j++) {
                let res = arr[i] * arr[i] + arr[j] * arr[j];
                if (s.has(res)) {
                    return true;
                }
            }
        }
        
        return false;
    }
}



//Build an array with stack operation


//You are given an integer array target and an integer n.

//You have an empty stack with the two following operations:

//"Push": pushes an integer to the top of the stack.
//"Pop": removes the integer on the top of the stack.
//You also have a stream of the integers in the range [1, n].

//Use the two stack operations to make the numbers in the stack (from the bottom to the top) equal to target. You should follow the following rules:

//If the stream of the integers is not empty, pick the next integer from the stream and push it to the top of the stack.
//If the stack is not empty, pop the integer at the top of the stack.
//If, at any moment, the elements in the stack (from the bottom to the top) are equal to target, do not read new integers from the stream 
//and do not do more operations on the stack.
//Return the stack operations needed to build target following the mentioned rules. If there are multiple valid answers, return any of them.

Input: target = [1,3], n = 3
Output: ["Push","Push","Pop","Push"]
Explanation //Initially the stack s is empty. The last element is the top of the stack.
//Read 1 from the stream and push it to the stack. s = [1].
//Read 2 from the stream and push it to the stack. s = [1,2].
//Pop the integer on the top of the stack. s = [1].
//Read 3 from the stream and push it to the stack. s = [1,3].


var buildArray = function(target, n) {
    let result = []
       
       for(let i=0, j=1; i<target.length; i++, j++) {
           if(target[i] === j) {
               result.push('Push')
           } else {
               result.push('Push', 'Pop')
               i--
           }
       }
       
       return result
     
   };

   //segerate odd and even numbers

   //Given an array Arr[], write a program that segregates even and odd numbers. The program should put all even numbers first in sorted order, 
   //and then odd numbers in sorted order.

Note :-// You don't have to return the array, you just have to modify it in-place.

Input 
N = 7
Arr = //{12, 34, 45, 9, 8, 90, 3}
Output// 8 12 34 90 3 9 45
Explanation //Even numbers are 12, 34,8 and 90. Rest are odd numbers. After sorting even numbers 8 12 34 90 and after sorting odd numbers 3 9 45. Then
//concat both.

class Solution{
    segregateEvenOdd(arr,n){
        //code here
        arr.sort((a, b) => a - b);
        let even = [];
        let odd = [];
        
        for (let i = 0; i < n; ++i) {
            if (arr[i] % 2 !== 0) {
                odd.push(arr[i]);
            } else {
                even.push(arr[i]);
            }
        }
        
        for (let i = 0; i < even.length; ++i) {
            arr[i] = even[i];
        }
        
        for (let i = even.length; i < n; ++i) {
            arr[i] = odd[i - even.length];
        }
    }

    
}
