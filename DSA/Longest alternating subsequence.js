//given an array arr. Your task is to find the longest length of a good sequence. A good sequence {x1, x2, .. xn} is an alternating 
//sequence if its elements satisfy one of the following relations :

1. // x1 < x2 > x3 < x4 > x5. . . . . and so on
2. // x1 >x2 < x3 > x4 < x5. . . . . and so on

Examples:

Input: arr= [1, 5, 4]
Output: 3
Explanation: //The entire sequenece is a good sequence.
Input: arr= [1, 17, 5, 10, 13, 15, 10, 5, 16, 8]
Output: 7
Explanation// There are several subsequences that achieve this length. 
//One maximum length good subsequences is [1, 17, 10, 13, 10, 16, 8].
//Expected Time Complexity: O(n)
//Expected Space Complexity: O(1)

class Solution {
    // Function to find the maximum length of alternating subsequence
    alternatingMaxLength(arr) {
        
         let n=1,m=1;
        for(let i=1;i<arr.length;i++){
            if(arr[i-1]<arr[i]){
                n=m+1;
            }
             if(arr[i]<arr[i-1]){
                m=n+1; 
            }
            else{
                continue;
            }
        }
        return Math.max(n,m);
    }
}