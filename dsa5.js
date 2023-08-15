//n a party of N people, each person is denoted by an integer. 
//Couples are represented by the same number. Find out the only single person in the party of couples.

Input: N = 5
arr = [1, 2, 3, 2, 1]
Output: 3
Explaination //Only the number 3 is single.

class Solution{
    findSingle(n, arr){
        //code here
        let res=0;
        for(let i=0;i<n;i++)
        res=res^arr[i];
        return res;
    
    }
}



//Given an array of N distinct elements, the task is to find all elements in array except two greatest elements in sorted order.

Input : 
a = [2, 8, 7, 1, 5]
Output :
[1, 2 ,5 ]
Explanation 
//The output three elements have two or
//more greater elements. 

class Solution {
    findElements(arr,n){
       //code here
       const newArr = new Array(arr.length - 2);
    arr.sort((x, y) => x - y);
    
    for (let i = 0; i < arr.length - 2; i++) {
        newArr[i] = arr[i];
    }
    
    return newArr;

    }
}



//Given a sorted array Arr of size N and a value X, find the number of array elements less than or equal to X and elements more
 //than or equal to X. 

Input:
N = 7, X = 0
Arr= [1, 2, 8, 10, 11, 12, 19]
Output: //0 7
Explanation //There are no elements less or
//equal to 0 and 7 elements greater or equal
//to 0.

class Solution{
    getMoreAndLess(arr,n, x){
        //code here
        const count = [0, 0];
    
    
    for (let i = 0; i < n; i++) {
        if (x >= arr[i]) {
            count[0]++;
        }
        if (x <= arr[i]) {
            count[1]++;
        }
    }
    
    return count;
}
}
