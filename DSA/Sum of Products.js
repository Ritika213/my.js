//Given an array arr[] of size n. Calculate the sum of Bitwise ANDs ie: calculate sum of arr[i] & arr[j] for all the pairs in the given array 
//arr[] where i < j.

//Example 1:

Input:
n = 3
arr =// {5, 10, 15}
Output
15
Explanation
//The bitwise Ands of all pairs where i<j are (5&10) = 0, (5&15) = 5 and (10&15) = 10.
//Therefore, the total sum = (0+5+10) = 15.

//Example 2:

Input:
n = 4
arr = //{10, 20, 30, 40}
Output
46
Explanation:
//The sum of bitwise Ands of all pairs = (0+10+8+20+0+8) = 46.
 Task
// don't need to read input or print anything.Your Task is to complete the function pairAndSum() which takes an Integer n and an array arr[] 
// of size n as input parameters and returns the sum of bitwise Ands of all pairs.

//Expected Time Complexity:O(n)
//Expected Auxillary Space:O(1)

Constraints:
1 <= n <= 105
1 <= arr[i] <= 108

class Solution {
    // Function to pair and sum the elements of the array.
    pairAndSum(n, arr) {
        
         let sum=0;
        for(let i=0;i<32;i++)
        {
            let cnt=0;
            for(let j=0;j<n;j++)
            {
                if (arr[j]&(1<<i)) cnt++;
            }
            sum+=((cnt*(cnt-1))/2)*(1<<i);
        }
        return sum;
    }
}