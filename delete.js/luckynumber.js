//Lucky numbers are subset of integers. Rather than going into much theory, let us see the process of arriving at lucky numbers,
//Take the set of integers
1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
//First, delete every second number, we get following reduced set.
1, 3, 5, 7, 9, 11, 13, 15, 17, 19,
//Now, delete every third number, we get
1, 3, 7, 9, 13, 15, 19,
//Continue this process indefinitely……
//Any number that does NOT get deleted due to above process is called “lucky”.

//You are given a number N, you need to tell whether the number is lucky or not. If the number is lucky return 1 otherwise 0.
Input
N = 5
Output: 0
Explanation //5 is not a lucky number 
//as it gets deleted in the second 

class Solution {
    isLucky(n)
    {
        // code here
        if (n <= 0) {
            return false;
        }
        
        let counter = 2;
    
        
        while (counter <= n) {
            if (n % counter === 0) {
                return false;
            }
            
            n -= Math.floor(n / counter);
            counter ++
             
        }
        
        return true;
    
    }
}


//We start with a counter of 2 and iterate through the numbers from 2 up to n.

//In each iteration, we check if n is divisible by the current counter. If it is, we return false because lucky numbers should not have any divisors other than 1.

//If n is not divisible by the current counter, we subtract the integer division result of n by the counter from n. This step helps us remove multiples of the current counter from n.

//We increment the counter by 1 in each iteration, as per the lucky number pattern where k starts at 2 and increments by 1.

//If we reach the end of the loop without finding any divisors, we return true, indicating that n is a lucky number.

//This code correctly determines whether a given number n is a lucky number based on the traditional definition of lucky numbers.