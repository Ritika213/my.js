//Given two sorted arrays of size n and m respectively, find their union. The Union of two arrays can be defined as the common and 
//distinct elements in the two arrays. 

//Example 1:

Input: 
n = 5, arr1 =// {1, 2, 3, 4, 5}  
m = 5, arr2= //{1, 2, 3, 6, 7}
Output 
//1 2 3 4 5 6 7
Explanation 
//Distinct elements including both the arrays are: 1 2 3 4 5 6 7.
//Example 2:

//Example 2:

Input: 
n = 5, arr1 = //{2, 2, 3, 4, 5}  
m = 5, arr2 =// {1, 1, 2, 3, 4}
Output 
//1 2 3 4 5
Explanation: 
//Distinct elements including both the arrays are: 1 2 3 4 5.
//Example 3:

Input:
n = 5, arr1 =// {1, 1, 1, 1, 1}
m = 5, arr2 =// {2, 2, 2, 2, 2}
Output 
//1 2
Explanation 
//Distinct elements including both the arrays are: 1 2.
 Task: 
//do not need to read input or print anything. Complete the function findUnion() that takes two arrays arr1[], arr2[], and their size n and m
// as input parameters and returns a list containing the union of the two arrays.

//Expected Time Complexity: O(n+m).
//Expected Auxiliary Space: O(n+m).

Constraints:
1 <= n, m <= 105
-109 <= arr1[i], arr2[i] <= 109

class Solution {
    //Function to return a list containing the union of the two arrays. 
    findUnion(arr1, arr2, n, m)
    {
        //your code here
         let ans = [];
        let mp = new Map();
        
        // Count occurrences of elements in arr1
        for (let i = 0; i < arr1.length; i++) {
            if (mp.has(arr1[i])) {
                mp.set(arr1[i], mp.get(arr1[i]) + 1);
            } else {
                mp.set(arr1[i], 1);
            }
        }
        // Count occurrences of elements in arr2
        for (let i = 0; i < arr2.length; i++) {
            if (mp.has(arr2[i])) {
                mp.set(arr2[i], mp.get(arr2[i]) + 1);
            } else {
                mp.set(arr2[i], 1);
            }
        }
        
        // Get unique elements from the map
        for (let [key, value] of mp) {
            ans.push(key);
        }
        
        // Sort the result array
        ans.sort((a, b) => a - b);
        
        return ans;
    }
}