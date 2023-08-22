//Given 3 numbers A, B and C. Find the greatest number among them.

Input: A = 10, B = 3, C = 2
Output: 10
Explanation:
10 //is the greatest among the three.

class Solution{
    greatestOfThree(A, B, C){
        //code here
        if(A>B && A>C){
            return A;
        }
        else if(B>A && B>C){
            return B;
            
        }
        else if(C>B && C>A){
            return C;
        }
    }
}
