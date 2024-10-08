//Given an array arr[] of size n of non-negative integers. Each array element represents the maximum length of the jumps that can be made 
//forward from that element. This means if arr[i] = x, then we can jump any distance y such that y ≤ x.
//Find the minimum number of jumps to reach the end of the array starting from the first element. If an element is 0, then you cannot move 
//through that element.
Note:  //Return -1 if you can't reach the end of the array.

Examples : 

Input: arr = //{1, 3, 5, 8, 9, 2, 6, 7, 6, 8, 9}, n = 11
Output//: 3 
Explanation://First jump from 1st element to 2nd element with value 3. From here we jump to 5th element with value 9, and from here we will 
//jump to the last. 
Input: arr = //{1, 4, 3, 2, 6, 7}, n = 6
Output//: 2 
Explanation// First we jump from the 1st to 2nd element and then jump to the last element.

Input: arr = //{0, 10, 20}, n = 3
Output//: -1
Explanation:// We cannot go anywhere from the 1st element.
//Expected Time Complexity: O(n)
//Expected Space Complexity: O(1)

Constraints
//0 ≤ arr[i] ≤ 107
//1 ≤ n ≤ 107

class Solution {
    minJumps(arr,n){
        
        let jump=0;
        let curr=0;
        let count=0;
        for(let i=0;i<arr.length-1;i++){
            let sum=i+arr[i];
            jump=Math.max(jump,sum);
            if(i==curr){
                count++;
                curr=jump;
            }
        }
        if(curr<arr.length-1){
            return-1;
        }
        return count;
    }
}