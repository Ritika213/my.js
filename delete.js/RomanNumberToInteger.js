//Given a string in roman no format (s)  your task is to convert it to an integer . Various symbols and their values are given below.
//I 1
//V 5
//X 10
//L 50
//C 100
//D 500
//M 1000

Input:
s = V
Output: 5

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


//Given an integer n, your task is to complete the function convertToRoman which prints the corresponding roman number of n. 
//Various symbols and their values are given below
Note:- //There are a few exceptions for some numbers like 4 in roman is IV,9 in roman is IX, similarly, 40 is XL while 90 is XC. 
       //Similarly, 400 is CD while 900 is CM

//I 1
//V 5
//X 10
//L 50
//C 100
//D 500
//M 1000


Input
n = 5
Output: V



class Solution {
    convertToRoman(n){ 
      //code here
      const romanNumerals = [
            ["M", 1000],
            ["CM", 900],
            ["D", 500],
            ["CD", 400],
            ["C", 100],
            ["XC", 90],
            ["L", 50],
            ["XL", 40],
            ["X", 10],
            ["IX", 9],
            ["V", 5],
            ["IV", 4],
            ["I", 1]
        ];
        let romanNumeral = "";
        for (const [symbol, value] of romanNumerals) {
            while (n >= value) {
                romanNumeral += symbol;
                n -= value;
            }
        }
        return romanNumeral;
    }
}



//Siddhant made a special series and named it as G.F Series. The series follows this trend  Tn=(Tn-2)2-(Tn-1)  in which the first and the second
// term are 0 and 1 respectively. Help Siddhant to find the first N terms of the series.

Note: //Print a white space (" ") after every integer and a newline character after every testcase. The generated output is white space sensitive,
// do not add extra spaces on unnecessary newline characters.

Input:
N = 3
Output:
//0 1 -1
Explanation
//First-term is given as 0 and the second 
//term is 1. So the T3 = (T3-2)2 - (T3-1) = T12 - T2 = 02 - 1 = -1

class Solution{
    gfSeries(n){
        //code here
        let arr = new Array(n);
    arr[0] = 0;
    arr[1] = 1;
    for (let i = 2; i < n; i++) {
        arr[i] = arr[i - 2] * arr[i - 2] - arr[i - 1];
    }

    console.log(arr.join(' '));

    }
}

