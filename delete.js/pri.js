//Print numbers from 1 to N without the help of loops.

Input:
N = 10
Output //1 2 3 4 5 6 7 8 9 10

class Solution{
    printNos(N){
        //code here
     for (let i = 1; i <= N; i++) {
            process.stdout.write(i + " ");
        }
        console.log(); // Print a newline after each test case
    
    
    }
}