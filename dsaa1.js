//Given a String S , print the reverse of the string as output.


Input: S = "GeeksforGeeks"
Output: "skeeGrofskeeG" 
Explanation //Element at first is at last and
//last is at first, second is at second last and 
//second last is at second position and so on .

class Solution {
    revStr(s){
       //code here
       let reverse=[];
        for(let i = s.length - 1; i >= 0; i--){
          reverse.push(s[i]);
            
        }
        return reverse.join('');
    }
}

//Given an sorted array A of size N. Find number of elements which are less than or equal to given element X.

Input:
N = 6
A = [1, 2, 4, 5, 8, 10]
X = 9
Output:
5

class Solution{
    countOfElements(arr,n, x){
        //code here
        let count=0;
     for(let i = 0; i < n; i++)
    {
        if(arr[i] <= x)
            count++;
    }
    return count;
   
    }
}

//given an integer array Arr[] of size N. The task is to find sum of it.

Input:
N = 4
Arr = [1, 2, 3, 4]
Output: 10
Explanation //1 + 2 + 3 + 4 = 10.

class Solution {
    sum(arr,n) {
        // code here
        let ans=0;
        for(let i=0;i<n;i++){
            ans+=arr[i];
        }
        return ans;
    }
}
