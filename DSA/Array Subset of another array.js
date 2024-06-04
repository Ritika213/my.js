//Given two arrays: a1[0..n-1] of size n and a2[0..m-1] of size m, where both arrays may contain duplicate elements. The task is to
// determine whether array a2 is a subset of array a1. It's important to note that both arrays can be sorted or unsorted. Additionally, 
 //each occurrence of a duplicate element within an array is considered as a separate element of the set.

//Example 1:

Input:
a1 = //{11, 7, 1, 13, 21, 3, 7, 3}
a2 = //{11, 3, 7, 1, 7}
Output
Yes
Explanation
//a2[] is a subset of a1[]

//Example 2:

Input:
a1 =// {1, 2, 3, 4, 4, 5, 6}
a2 = //{1, 2, 4}
Output
Yes
Explanation:
//a2[] is a subset of a1[]

//Example 3:

Input:
a1 =// {10, 5, 2, 23, 19}
a2 =// {19, 5, 3}
Output
No
Explanation:
//a2[] is not a subset of a1[]
 

// Task:  
// don't need to read input or print anything. Your task is to complete the function isSubset() which takes the array a1[], a2[],
// its size n and m as inputs and return "Yes" if arr2 is subset of arr1 else return "No" if arr2 is not subset of arr1.

 

//Expected Time Complexity: O(max(n,m))
//Expected Auxiliary Space: O(n)

Constraints:
1 <= n,m <= 105
1 <= a1[i], a2[j] <= 106



class Solution{
    isSubset(a1, a2, n, m){
        
     const map = new Map();
        a1.forEach((num) => {
            map.has(num) ? map.set(num, map.get(num) + 1) : map.set(num, 1);
        });
        for(let num of a2) {
            if(map.has(num)) {
                if(map.get(num) === 1) map.delete(num);
                else map.set(num, map.get(num) - 1);
            }
            else return 'No';   
}
  return "Yes"

}
}