//Given a length n, count the number of strings of length n that can be made using a, b and c with at-most one b and two c allowed.


Input: n = 1
Output: 3
Explanation //Possible strings are: "a","b" and "c"

class Solution {
    //Function to count strings of n length such that each string can be formed from a, b and c
    countStr(n) {
        //your code here
         if(n== 1){
        return 3;
    }
    if(n== 2){
        return 8;
    }
    let ans= (n*n*n+ 3*n+ 2)/2;
    return ans;
    }
}

//valid anagram

//Given two strings s and t, return true if t is an anagram of s, and false otherwise.

//An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters 
//exactly once.
//Example 1:

Input: s = "anagram", t = "nagaram"
Output: true
//Example 2:

Input: s = "rat", t = "car"
Output: false
var isAnagram = function(s, t) {
    s= s.split("").sort();
    t=t.split("").sort();
    if(s.length !==t.length){
        return false;
    }
    for(let i=0;i<s.length;i++){
        if(s[i] !==t[i]){
            return false;
        }
    }
    return true;
  };

  //key pair

  //Given an array Arr of N positive integers and another number X. Determine whether or not there exist two elements in Arr whose sum
  // is exactly X.

//Example 1:

Input:
N = 6, X = 16
Arr= //{1, 4, 45, 6, 10, 8}
Output// Yes
Explanation: Arr[3] + Arr[4] - 6 + 10 - 16

class Solution {
    hasArrayTwoCandidates(arr,n,x){
        //code here
        arr.sort(function(a,b){return a-b});
          let i=0;

        let l=n-1;

     while(i<l){

         if(arr[i]+arr[l]==x){

             return true;

         }

         else if(arr[i]+arr[l]>x){

             l--;

         }

         else{

             i++;

         }

     }

        return false;

    }

 

}
    

 