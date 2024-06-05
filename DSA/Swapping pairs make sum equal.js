//Given two arrays of integers a[] and b[] of size n and m, the task is to check if a pair of values (one value from each array) exists such that 
//swapping the elements of the pair will make the sum of two arrays equal.

//Example 1:

Input:// n = 6, m = 4, a[] = {4, 1, 2, 1, 1, 2}, b[] = (3, 6, 3, 3)
Output: 1
Explanation// Sum of elements in a[] = 11, Sum of elements in b[] = 15, To get same sum from both arrays, we can swap following values: 
//1 from a[] and 3 from b[]

//Example 2:

Input:// n = 4, m = 4, a[] = {5, 7, 4, 6}, b[] = {1, 2, 3, 8}
Output: 1
Explanation:// We can swap 6 from array a[] and 2 from array b[]
Task
// don't need to read or print anything. You need to complete the function findSwapValues() that takes array a, array b, integer n, and 
//integer m as parameters and returns 1 if there exists any such pair otherwise returns -1.

//Expected Time Complexity: O(mlogm+nlogn).
//Expected Auxiliary Space: O(1).

Constraints
//1 ≤ n, m ≤ 106

class Solution {

    findSwapValues(a, n, b, m) {
        
        let sumA = 0, sumB = 0;

        // Calculate the sum of both arrays
        for (let i = 0; i < n; i++) sumA += a[i];
        for (let i = 0; i < m; i++) sumB += b[i];

        // Calculate the difference between sums
        let diff = sumB - sumA;

        // If the difference is odd, it's impossible to equalize the sums by swapping
        if (diff % 2 != 0) return -1;

        // Calculate the target difference we need to adjust by swapping
        let targetDiff = diff / 2;

        // Use a set for quick lookup of elements in array b
        let setB = new Set(b);
         // Iterate over the first array and find the required element in the second array
        for (let i = 0; i < n; i++) {
            let target = a[i] + targetDiff;
            if (setB.has(target)) return 1;
        }

        return -1;
    }
}

