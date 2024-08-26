//Given a string in roman no format (s)  your task is to convert it to an integer . Various symbols and their values are given below.
//I 1
//V 5
//X 10
//L 50
//C 100
//D 500
//M 1000

//Example 1:

Input:
s = V
Output: 5

//Example 2:

Input:
s = III 
Output: 3
 Task:
//Complete the function romanToDecimal() which takes a string as input parameter and returns the equivalent decimal number. 

//Expected Time Complexity: O(|S|), |S| = length of string S.
//Expected Auxiliary Space: O(1)

Constraints
//1<=roman no range<=3999

class Solution {
    romanToDecimal(str){ 
      //code here
      let mp=new Map();

      let ans=0;

      mp['I']=1;

      mp['V']=5;

      mp['X']=10;

      mp['L']=50;

      mp['C']=100;

      mp['D']=500;

      mp['M']=1000;

      for(let i=str.length-1;i>=0;i--){

       if(mp[str[i-1]]<mp[str[i]]&&i<str.length){

           ans+=mp[str[i]]-mp[str[i-1]];

           i=i-1;

       }

       else ans+=mp[str[i]];

      }

      return ans;
    }
}