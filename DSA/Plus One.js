//Given a non-negative number represented as a list of digits, add 1 to the number (increment the number represented by the digits).
// The digits are stored such that the most significant digit is first element of array.
 

Input: 
N = 3
arr = //{1, 2, 4}
Output 
//1 2 5
Explanation
//124+1 = 125, and so the Output

class Solution {
    increment(arr,n){
        
        for(let i=n-1; i>=0; i--)
        {
            if(i == n-1)
            {
                arr[i] = arr[i]+1;
            }
            if(arr[i] == 10)
            {
                arr[i] = 0;
                if( i !=0)
                {
                    arr[i-1] = arr[i-1] + 1;
                }
                else
                {
                    arr.push(0);
                    arr[i]=1;
                }
            }
        }
        return arr;
    
 
    }
}