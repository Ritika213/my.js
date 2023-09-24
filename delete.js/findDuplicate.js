//Given an array a of size N which contains elements from 0 to N-1, you need to find all the elements occurring more 
//than once in the given array. Return the answer in ascending order. If no such element is found, return list containing [-1]. 

Note: //The extra space is only for the array to be returned. Try and perform all operations within the provided array. 

Input:
N = 4
a= [0,3,1,2]
Output: 
-1
Explanation 
//There is no repeating element in the array. Therefore output is -1.

class Solution {
    
    duplicates(a, n)
    {
        //your code here
         const ans = [];

  for (let i = 0; i < n; i++) {
    a[a[i] % n] += n;
  }

  for (let i = 0; i < n; i++) {
    if (Math.floor(a[i] / n) > 1) {
      ans.push(i);
    }
  }

  if (ans.length === 0) {
    return [-1];
  }

  return ans;
    }
}



//You are given a string num representing a large integer. An integer is good if it meets the following conditions:

//It is a substring of num with length 3.It consists of only one unique digit.
//Return the maximum good integer as a string or an empty string "" if no such integer exists.

Note:

//A substring is a contiguous sequence of characters within a string.There may be leading zeroes in num or a good integer.
 

Input: num = "6777133339"
Output: "777"
Explanation //There are two distinct good integers: "777" and "333"."777" is the largest, so we return "777".

var largestGoodInteger = function(num) {
    let max = '';
      for (let i = 0; i < num.length - 2; i++) {
          if (num[i] === num[i + 1] && num[i] === num[i + 2]) {
              let x = num[i].repeat(3);
              if (x > max) {
                  max = x;
              }
          }
      }
      return max;  
  };


  //Given a number N, calculate the prime numbers up to N using Sieve of Eratosthenes.  

Input:
N = 10

Output:
//2 3 5 7

Explanation //Prime numbers less than equal to N are 2 3 5 and 7.

class Solution {

    sieveOfEratosthenes(N){
        //code here
        const isPrime = new Array(N + 1).fill(true);
  const primes = [];

  for (let i = 2; i <= N; i++) {
    if (isPrime[i]) {
      primes.push(i);

      for (let j = i * i; j <= N; j += i) {
        isPrime[j] = false;
      }
    }
  }

  return primes;
    }
}