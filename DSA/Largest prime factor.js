//Given a number N, the task is to find the largest prime factor of that number.
 //Example 1:

Input:
N = 5
Output:
5
Explanation:
//5 has 1 prime factor i.e 5 only.
//Example 2:

Input:
N = 24
Output:
3
Explanation
//24 has 2 prime factors 2 and 3 in which 3 is greater.
Task:
//don't need to read input or print anything. Your task is to complete the function largestPrimeFactor() which takes an integer 
//N as input parameters and returns an integer, largest prime factor of N.

//Expected Time Complexity: O(sqrt(N))
//Expected Space Complexity: O(1)

Constraints:
2 <= N <= 109

class Solution {

    largestPrimeFactor(N){
        
        let i=2;
        while(i*i<=N){
            if(N%i == 0){
                N /= i;
            }else{
                i++;
            }
        }
        return N;
    }
}