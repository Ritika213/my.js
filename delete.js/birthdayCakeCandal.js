//You are in charge of the cake for a child's birthday. You have decided the cake will have one candle for each year of their total age. 
//They will only be able to blow out the tallest of the candles. Count how many candles are tallest.


//The maximum height candles are  units high. There are  of them, so return .
//candles=[4,4,1,3]

//birthdayCakeCandles has the following parameter(s):

//int candles[n]: the candle heights
//Sample Input 0

4
//3 2 1 3
//Sample Output 0

2

function birthdayCakeCandles(candles) {
    // Write your code here
    const max = Math.max(...candles);
    let count = 0;
    for(let index of candles){
        if(index === max) 
        count+=1;
    }
    
    return count;
}


//Frequencies of Limited Range Array Elements

//Given an array arr[] of N positive integers which can contain integers from 1 to P where elements can be repeated or can be absent 
//from the array. Your task is to count the frequency of all numbers from 1 to N. Make in-place changes in arr[], such that arr[i] = frequency(i).
// Assume 1-based indexing.
Note //The elements greater than N in the array can be ignored for counting and do modify the array in-place. 

nput:
N = 5
arr = //{2, 3, 2, 3, 5}
P = 5
Output:
//0 2 2 0 1
Explanation 
//Counting frequencies of each array element
//We have:
//1 occurring 0 times.
//2 occurring 2 times.
//3 occurring 2 times.
//4 occurring 0 times.
//5 occurring 1 time.


class Solution {
    frequencyCount(arr,N,P){
       //code here
      let hashmap = {}
       for(let num of arr){
           if( num in hashmap){
               
               hashmap[num] ++
           }else{
               hashmap[num] = 1
           }
       }
       for(let i=1; i<=N; i++){
        if(hashmap.hasOwnProperty(i)){
            arr[i-1] = hashmap[i]

        }else{
            arr[i-1] = 0
        }
       }

return arr
    }
}


//Remove character 

//Given two strings string1 and string2, remove those characters from first string(string1) which are present in second string(string2). 
//Both the strings are different and contain only lowercase characters.
NOTE: //Size of  first string is always greater than the size of  second string( |string1| > |string2|).


Input:
string1 = "computer"
string2 = "cat"
Output: "ompuer"
Explanation// After removing characters(c, a, t)
//from string1 we get "ompuer".

class Solution{
    removeChars(s1, s2){
        //code here
        
        for (let i = 0; i < s2.length; i++) {
        for (let j = 0; j < s1.length; j++) {
            if (s1[j] === s2[i]) {
                // Replace matching characters with '0'
                s1 = s1.substring(0, j) + '0' + s1.substring(j + 1);
            }
        }
    }

    let t = '';
    for (let i = 0; i < s1.length; i++) {
        if (s1[i] !== '0') {
            t += s1[i];
        }
    }

    return t;
    }
}
