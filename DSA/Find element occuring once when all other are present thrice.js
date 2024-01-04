//Given an array of integers arr[] of length N, every element appears thrice except for one which occurs once.
//Find that element which occurs once.


Input:
N = 4
arr = //{1, 10, 1, 1}
Output
10
Explanation
//10 occurs once in the array while the otherelement 1 occurs thrice.

class Solution {
    //Function to find the element that occurs once in the array.
    singleElement(arr, N) {
        
        if(N == 1)return arr[0];
        arr.sort();
        let i =0 ;
        let count = 1;
        while(i < N-1){
            if(arr[i] == arr[i+1]){
                count++;
                i++;
            }else return arr[i];
            if(count == 3 && (i+1)%3 == 0){
                count=1;
                i++;
            }else if((i+1)%3 == 0 && count != 3){
                return arr[i];
            }
            if(i == N-1)return arr[i];
        }
        return -1;
    }
}