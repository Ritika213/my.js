// given a number n, Return the count of total numbers from 1 to n containing 4 as a digit.

Examples:

Input: n = 9
Output: 1
Explanation: //4 is the only number between 1 to 9 which contains 4 as a digit.
Input: n = 14
Output: 2
Explanation //4 and 14 are the only number between 1 to 14 that contains 4 as a digit.

//Expected Time Complexity: O(nlogn)
//Expected Auxiliary Space: O(1)

Constraints:
1 <= n <= 105

class Solution {
    /**
    * @param number n

    * @returns number
    */
countNumberswith4(n) {
    
     let count=0;
   for(let i=1;i<=n;i++){
        let s = i.toString();
        if (s.includes('4')) {
            count++;
           }
       }
   
   return count;
    }
}

//Explanation  Code
//Loop through Each Number: The for loop iterates from 1 to n inclusively.
//Convert Number to String: We convert each number i to its string representation using i.toString().
//Check for '4': Use s.includes('4') to check if the digit '4' is present in the string. If it is, increment the count.
//Return the Count: After the loop, the total count of numbers containing '4' is returned.
//The method can handle input of n being zero or negative if needed, though it’s typically assumed n is a positive integer for this problem.
//This code has a time complexity of O(n⋅d) where n is the upper limit and d is the average number of digits in the numbers 
//from 1 to n. This is efficient for reasonable values of n.
