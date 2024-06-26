//Given a number N. Count the number of digits in N which evenly divide N.

Note :- //Evenly divides means whether N is divisible by a digit i.e. leaves a remainder 0 when divided.
 

//Example 1:

Input
N = 12
Output:
2
Explanation:
//1, 2 both divide 12 evenly

//Example 2:

Input:
N = 23
Output
0
Explanation:
//2 and 3, none of them divide 23 evenly

 Task:
// don't need to read input or print anything. Your task is to complete the function evenlyDivides() which takes an integer N 
//as input parameters and returns an integer, total number factor of digits N which divides N evenly.


//Expected Time Complexity: O(log N)
//Expected Space Complexity: O(1)

Constraints:
1<=N<=105

class Solution{
    
         evenlyDivides( N){
            //code here
            let cnt = 0,orig = N;
            while(N){
                let rem = N%10;
                if(rem != 0 && orig % rem == 0) cnt++;
                N /= 10;
            }
            
            return cnt;
        
     
        }
    };