//Given an array A of n positive numbers. The task is to find the first equilibrium point in an array. Equilibrium point in an array is
// an index (or position) such that the sum of all elements before that index is same as sum of elements after it.

Note: //Return equilibrium point in 1-based indexing. Return -1 if no such point exists. 

//Example 1:

Input: 
n = 5 
//A[] = {1,3,5,2,2} 
Output: 
3 
Explanation  
//equilibrium point is at position 3 as sum of elements before it (1+3) = sum of elements after it (2+2). 

//Example 2:

Input:
n = 1
//A[] = {1}
Output: 
1
Explanation
//Since there's only element hence its only the equilibrium point.

class Solution {
    // Function to find equilibrium point in the array.
    equilibriumPoint(a, n)
    {
        //your code here
        let sum=0,leftsum=0;

        for(let i=0;i<n;i++){

            sum+=a[i];

        }

        for(let i=0;i<n;i++){

            sum-=a[i];

            if(sum===leftsum){

                return i+1;

            }

            leftsum+=a[i];

        }

        return -1;
    

    }
}