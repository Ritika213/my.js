//Given two sorted arrays a[] and b[] of size n and m respectively, the task is to merge them in sorted order without using any extra space.
// Modify a[] so that it contains the first n elements and modify b[] so that it contains the last m elements.

Examples:

Input:// a[] = [2, 4, 7, 10], b[] = [2, 3]
Output:
//2 2 3 4
//7 10
Explanation:// After merging the two non-decreasing arrays, we get, 2 2 3 4 7 10
//Input: a = [1, 5, 9, 10, 15, 20], b = [2, 3, 8, 13]
//Output:
//1 2 3 5 8 9
//10 13 15 20
Explanation// After merging two sorted arrays we get 5 10 12 18 20.

Input: a = [0, 1], b = [2, 3]
Output:
//0 1
//2 3
Explanation:// After merging two sorted arrays we get 0 1 2 3.
Constraints:
1 <= a.size(), b.size() <= 105
0 <= a[i], b[i] <= 107

class Solution {
    mergeArrays(a, b) {
        let n = a.length;
    let m = b.length;
    let i = n - 1; // Last index of array `a`
    let j = 0;     // First index of array `b`

    // Step 1: Swap elements to place smaller elements in `a` and larger in `b`
    while (i >= 0 && j < m) {
        if (a[i] > b[j]) {
            // Swap `a[i]` and `b[j]`
            [a[i], b[j]] = [b[j], a[i]];
        }
        i--;
        j++;
    }
     // Step 2: Sort both arrays to maintain non-decreasing order
    a.sort((x, y) => x - y);
    b.sort((x, y) => x - y);

    

    }
}

