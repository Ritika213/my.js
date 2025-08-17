//given a number x and array arr[]. Your task is to rearrange the elements of the array according to the absolute difference with 
// x, i.e., an element having minimum difference comes first, and so on.
Note:// If two or more elements are at equal distances arrange them in the same sequence as in the given array.

Examples:

Input: x = 7, arr = [10, 5, 3, 9, 2]
Output: [5, 9, 10, 3, 2]
Explanation:// Sorting the numbers according to the absolute difference with 7, we have array elements as 5, 9, 10, 3, 2.
Input: x = 6, arr = [1, 2, 3, 4, 5]
Output: [5, 4, 3, 2, 1]
Explanation: //Sorting the numbers according to the absolute difference with 6, we have array elements as 5, 4, 3, 2, 1.
Constraints
//1 ≤ x ≤ 105
//1 ≤ arr.size() ≤ 105
//1 ≤ arr[i] ≤ 105

class Solution {
    rearrange(arr, x) {
        // code here
        // Step 1: Index-value pairs बनाओ (distance, index)
        let ans = [];
        for (let i = 0; i < arr.length; i++) {
            ans.push([Math.abs(x - arr[i]), i]);  // pair: [distance, index]
        }

        // Step 2: Sort करो - पहले distance के आधार पर, फिर index के आधार पर
        ans.sort((a, b) => {
            if (a[0] === b[0]) {
                return a[1] - b[1];  // अगर distance same है, तो index छोटा वाला पहले आए
            }
            return a[0] - b[0];      // distance छोटा वाला पहले आए
        });

        // Step 3: नया rearranged array बनाओ
        let temp = [...arr]; // copy original array
        for (let i = 0; i < arr.length; i++) {
            arr[i] = temp[ans[i][1]];
        }

        return arr;
    
    }
}