//There are buckets buckets of liquid, where exactly one of the buckets is poisonous. To figure out which one is poisonous, you feed some number 
//of (poor) pigs the liquid to see whether they will die or not. Unfortunately, you only have minutesToTest minutes to determine which bucket is 
//poisonous.

//You can feed the pigs according to these steps:

//Choose some live 
//pig, choose which buckets to feed it. The pig will consume all the chosen buckets simultaneously and will take no time. Each pig can feed 
//from any number of buckets, and each bucket can be fed from by any number of pigs.
//Wait for minutesToDie minutes. You may not feed any other pigs during this time.
//After minutesToDie minutes have passed, any pigs that have been fed the poisonous bucket will die, and all others will survive.
//Repeat this process until you run out of time.
//Given buckets, minutesToDie, and minutesToTest, return the minimum number of pigs needed to figure out which bucket is poisonous within 
//the allotted time.

Input: buckets = 4, minutesToDie = 15, minutesToTest = 15
Output: 2
Explanation //We can determine the poisonous bucket as follows:
//At time 0, feed the first pig buckets 1 and 2, and feed the second pig buckets 2 and 3.
//At time 15, there are 4 possible outcomes:
//- If only the first pig dies, then bucket 1 must be poisonous.
//- If only the second pig dies, then bucket 3 must be poisonous.
//- If both pigs die, then bucket 2 must be poisonous.
//- If neither pig dies, then bucket 4 must be poisonous.


var poorPigs = function(buckets, minutesToDie, minutesToTest) {
  
    let n = minutesToTest / minutesToDie +1;;
  let req=0;
    
    while(Math.pow(n,req)<buckets)
    ++req;
    return req;;  
  };


  //Check whether K-th bit is set or not

  //Given a number N and a bit number K, check if Kth index bit of N is set or not. A bit is called set if it is 1. Position of set bit '1' should be indexed starting with 0 from LSB side in binary representation of the number.
Note: //Index is starting from 0. You just need to return true or false, driver code will take care of printing "Yes" and "No".

Input: 
N = 4
K = 0
Output: 
No
Explanation 
//Binary representation of 4 is 100, in which 0th index bit from LSB is not set. So, return false.

class Solution 
{
    // Function to check if Kth bit is set or not.
    checkKthBit(n, k)
    {
        //code here
        return (n&(1<<k))!==0;
    }
}


//Alternating digit sum

//You are given a positive integer n. Each digit of n has a sign according to the following rules:

//The most significant digit is assigned a positive sign.
//Each other digit has an opposite sign to its adjacent digits.
//Return the sum of all digits with their corresponding sign.

Input: n = 521
Output: 4
Explanation: (+5) + (-2) + (+1) //= 4.
//Example 2:

Input: n = 111
Output: 1
Explanation: (+1) + (-1) + (+1) //= 1.


var alternateDigitSum = function(n) {
    const str = n.toString()
      let sum = 0
      for(let i =0; i<str.length; i++){
          if(i%2 ==0){
              sum += +str[i]
          }else{
              sum -= +str[i]
          }
      }
      return sum   
  };





