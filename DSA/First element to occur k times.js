//Given an array of n integers. Find the first element that occurs atleast k number of times.


Input :
n = 7, k = 2
a =//{1, 7, 4, 3, 4, 8, 7}
Output =4
Explanation 
//Both 7 and 4 occur 2 times. But 4 is first that occurs twice.As at index = 4, 4 has occurred twice whereas 7 appeared twice at index 6.

class Solution{
    firstElementKTime(n, k, arr){
        
         const map = {};

    for (let i = 0; i < arr.length; i++) {
        map[arr[i]] = (map[arr[i]] || 0) + 1;

        if (map[arr[i]] === k) {
            return arr[i];
        }
    }

    return -1;
    
    }
}
