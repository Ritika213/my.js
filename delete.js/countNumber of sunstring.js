//Given a string of lowercase alphabets, count all possible substrings (not necessarily distinct) that have exactly k 
//distinct characters. 

Input:
S = "aba", K = 2
Output:
3
Explanation//The substrings are: "ab", "ba" and "aba".

class Solution {
    substrCount(S,k){
      //code here
      let last = Array(26).fill(-1);
      let ts = [];
      let ans = 0;
      for (let i = 0; i < S.length; i++) {
          let c = S.charAt(i);
          let v = c.charCodeAt(0) - 97;
          if (last[v] >= 0) {
              ts.splice(ts.indexOf(last[v]), 1);
          }
          last[v] = i;
          ts.push(i);
          let M = ts.length;
          if (M > k) {
              ans += ts[ts.length - k] - ts[ts.length - k - 1];
          } else if (M === k) {
              ans += ts[0] + 1;
          }
      }
      return ans;
    }
  }

  //Given a string str containing alphanumeric characters. The task is to calculate the sum of all the numbers present in the string.


Input:
str = //1abc23
Output //24
Explanation: //1 and 23 are numbers in the string which is added to get the sum as 24.


  let ans = 0;
    let x = 0;
    let n = str.length;
    for (let i = 0; i < str.length; i++) {
        let flag = false;
        
        if (str[i] >= '0' && str[i] <= '9') {
            x = x * 10 + parseInt(str[i]);
            flag = true;
        }
        if (!flag) {
            ans += x;
            x = 0;
        }
    }
    if (str[n - 1] >= '0' && str[n - 1] <= '9') {
        ans += x;
    }
    return ans;



    //Given an integer array nums, return the most frequent even element.

//If there is a tie, return the smallest one. If there is no such element, return -1.


Input: nums = [0,1,2,2,4,4,1]
Output: 2
Explanation//The even elements are 0, 2, and 4. Of these, 2 and 4 appear the most.We return the smallest one, which is 2.


var mostFrequentEven = function(nums) {
    let obj = {};
        for (let elm of nums) {
            if (elm % 2 == 0) {
                obj[elm] = (obj[elm] || 0) + 1;
            }
        }
        let maxVal = 0;
        let elem = -1;
        for (let key in obj) {
            if (obj[key] > maxVal) {
                maxVal = obj[key];
                elem = +key;
            }
        }
        return elem;   
   };
