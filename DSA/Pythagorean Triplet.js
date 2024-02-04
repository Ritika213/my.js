//Given an array arr of n integers, write a function that returns true if there is a triplet (a, b, c) from the array (where a, b, and c are 
    //on different indexes) that satisfies a2 + b2 = c2, otherwise return false.


Input:
N = 5
Arr = //{3, 2, 4, 6, 5}
Output// Yes
Explanation// a=3, b=4, and c=5 forms apythagorean triplet.

class Solution {

    checkTriplet(arr,n){
        
         let s = new Set();
        for (let i = 0; i < n; i++) {
            s.add(arr[i] * arr[i]);
        }
        
        for (let i = 0; i < n - 1; i++) {
            for (let j = 0; j < n; j++) {
                let res = arr[i] * arr[i] + arr[j] * arr[j];
                if (s.has(res)) {
                    return true;
                }
            }
        }
        
        return false;
    }
}