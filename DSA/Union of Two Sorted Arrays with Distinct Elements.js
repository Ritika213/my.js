//Given two sorted arrays a[] and b[], where each array contains distinct elements , the task is to return the elements in the union 
//of the two arrays in sorted order.

//Union of two arrays can be defined as the set containing distinct common elements that are present in either of the arrays.
Examples:

Input: a = [1, 2, 3, 4, 5], b = [1, 2, 3, 6, 7]
Output:// 1 2 3 4 5 6 7
Explanation:// Distinct elements including both the arrays are: 1 2 3 4 5 6 7.
Input: a = [2, 3, 4, 5], b = [1, 2, 3, 4]
Output: //1 2 3 4 5
Explanation:// Distinct elements including both the arrays are: 1 2 3 4 5.
Input: a = [1], b = [2]
Output:// 1 2
Explanation// Distinct elements including both the arrays are: 1 2.

Constraints:
1  <=  a.size(), b.size()  <=  105
-109  <=  a[i] , b[i]  <=  109

class Solution {
    // Function to return a list containing the union of the two arrays.
    findUnion(a, b) {
        // Using a Set to store unique elements
        let set = new Set();

        // Adding elements from the first array
        for (let i = 0; i < a.length; i++) {
            set.add(a[i]);
        }

        // Adding elements from the second array
        for (let i = 0; i < b.length; i++) {
            set.add(b[i]);
        }

        // Converting the Set to an array and sorting it
        let result = Array.from(set);
        result.sort((x, y) => x - y);  // Sorting in ascending order

        return result;
    
    }
}