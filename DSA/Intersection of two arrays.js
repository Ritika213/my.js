//Given two arrays a[] and b[] respectively of size n and m, the task is to print the count of elements in the intersection (or common elements)
// of the two arrays.

//For this question, the intersection of two arrays can be defined as the set containing distinct common elements between the two arrays. 


Input:
n = 5, m = 3
a=// {89, 24, 75, 11, 23}
b = //{89, 2, 4}

Output// 1

Explanation //89 is the only element in the intersection of two arrays.

class Solution {
    // Function to return the count of the number of elements in
    // the intersection of two arrays.
    NumberofElementsInIntersection(a, b, n, m) {

  let mp= new Map();
  let c=0;
for(let i=0; i<n; i++) mp[a[i]] = 1;
for(let i=0; i<m; i++) {
    if(mp[b[i]]) c++;
    mp[b[i]] = 0;   
} return c;
 }

}


    