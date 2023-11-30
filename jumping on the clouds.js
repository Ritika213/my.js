//A child is playing a cloud hopping game. In this game, there are sequentially numbered clouds that can be thunderheads or cumulus clouds. 
//The character must jump from cloud to cloud until it reaches the start again.

//There is an array of clouds, c and an energy level e=100. The character starts from c[0] and uses 1 unit of energy to make a jump of size k 
//to cloud c[(i+k)%n]. If it lands on a thundercloud, c[i]=1, its energy (e) decreases by 2 additional units. The game ends when the character 
//lands back on cloud 0.

//Given the values of n, k, and the configuration of the clouds as an array c, determine the final value of e after the game ends.

Example.c[0,0,1,0] 
k=2

//The indices of the path are 0->2->0. The energy level reduces by 1 for each jump to 98. The character landed on one thunderhead at an additional 
//cost of 2 energy units. The final energy level is 96.

//Sample Input

//STDIN             Function
//-----             --------
//8 2               n = 8, k = 2
//0 0 1 0 0 1 1 0   c = [0, 0, 1, 0, 0, 1, 1, 0]
//Sample Output

92


function jumpingOnClouds(c, k) {
    let e = 100
    let i=0;
    do{
        i = (i + k) % c.length;
        --e;
        if(c[i] === 1) {
            e-=2
        }
    } while(i !== 0)
    return e
}


//minimum one bit opreations to make integer

//Given an integer n, you must transform it into 0 using the following operations any number of times:

//Change the rightmost (0th) bit in the binary representation of n.
//Change the ith bit in the binary representation of n if the (i-1)th bit is set to 1 and the (i-2)th through 0th bits are set to 0.
//Return the minimum number of operations to transform n into 0.

Input: n = 3
Output: 2
Explanation //The binary representation of 3 is "11".
//"11" -> "01" with the 2nd operation since the 0th bit is 1.
//"01" -> "00" with the 1st operation.

var minimumOneBitOperations = function(n) {
    let answer = 0;
   let op = 1;
   let bits = 30;
   while(bits >= 0) {
     if(n & (1 << bits)) {
       let tmp = (1 << (bits + 1)) - 1;
       answer += tmp * op;
       op *= -1;
     }
     bits--;
   }
   return answer; 
 };

 //leaders in array

 //Given an array A of positive integers. Your task is to find the leaders in the array. An element of array is leader if it is greater 
 //than or equal to all the elements to its right side. The rightmost element is always a leader. 


Input:
n = 6
A = //{16,17,4,3,5,2}
Output//: 17 5 2
Explanation //The first leader is 17 as it is greater than all the elements to its right.  Similarly, the next 
//leader is 5. The right most element is always a leader so it is also included.

class Solution {
    //Function to find the leaders in the array.
    leaders(arr, n){
        // code here
         let max=Number.MIN_SAFE_INTEGER;
       let result=[];
       for(let i=n-1;i>=0;i--)
       {
           if(arr[i]>=max)
           {
               max=arr[i];
               result.push(max);
           }
       }
      result.reverse()
       return result;
    
    }
}
