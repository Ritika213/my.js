//Given two sorted arrays of distinct integers arr1 and arr2. Each array may have some elements in common with the other array. Find the maximum 
//sum of a path from the beginning of any array to the end of any array. You can switch from one array to another array only at the common 
elements.

Note // When we switch from one array to other,  we need to consider the common element only once in the result.

Examples : 

Input: arr1 = [2, 3, 7, 10, 12] , arr2 = [1, 5, 7, 8]
Output: 35
Explanation: //The path will be 1+5+7+10+12 = 35, where 1 and 5 come from arr2 and then 7 is common so we switch to arr1 and add 10 and 12.
Input: arr1 = [1, 2, 3] , arr2 = [3, 4, 5]
Output: 15
Explanation// The path will be 1+2+3+4+5=15.
//Expected Time Complexity: O(m + n)
//Expected Auxiliary Space: O(1)
Constraints:
1 <= arr1.size(), arr2.size() <= 104
1 <= arr1[i], arr2[i] <= 105

class Solution {
    maxPathSum(arr1, arr2) {
        
        let i = 0, j = 0, n = arr1.length, m = arr2.length;
        let sum1 = 0, sum2 = 0;
        let res = 0;
        
        while (i < n && j < m) {
            if (arr1[i] < arr2[j]) {
                sum1 += arr1[i++];
            } else if (arr1[i] > arr2[j]) {
                sum2 += arr2[j++];
            } else {
                res += Math.max(sum1, sum2) + arr1[i];
                sum1 = 0;
                sum2 = 0;
                i++;
                j++;
            }
        }
        
        while (i < n) sum1 += arr1[i++];
        while (j < m) sum2 += arr2[j++];
         res += Math.max(sum1, sum2);
        return res;
    
    }
}

