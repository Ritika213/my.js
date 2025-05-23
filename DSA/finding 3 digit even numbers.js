//given an integer array digits, where each element is a digit. The array may contain duplicates.

//You need to find all the unique integers that follow the given requirements:

//The integer consists of the concatenation of three elements from digits in any arbitrary order.
//The integer does not have leading zeros.
//The integer is even.
//For example, if the given digits were [1, 2, 3], integers 132 and 312 follow the requirements.

//Return a sorted array of the unique integers.

 

//Example 1:

Input: digits = [2,1,3,0]
Output: [102,120,130,132,210,230,302,310,312,320]
Explanation// All the possible integers that follow the requirements are in the output array. 
//Notice that there are no odd integers or integers with leading zeros.
//Example 2:

Input: digits = [2,2,8,8,2]
Output: [222,228,282,288,822,828,882]
Explanation: //The same digit can be used as many times as it appears in digits. 
//In this example, the digit 8 is used twice each time in 288, 828, and 882. 
//Example 3:

Input: digits = [3,7,5]
Output: []
Explanation:// No even integers can be formed using the given digits.
 

Constraints:

3 <= digits.length <= 100
0 <= digits[i] <= 9


var findEvenNumbers = function(digits) {
 

    let map = new Array(10).fill(0);
    
    for (let i = 0;i < digits.length;i++) {
        map[digits[i]]++;
    }
    
    let arr = [];
    
    for (let i = 100;i <= 999;i = i + 2) {
        let num = i;
        let freq = new Array(10).fill(0);
        while (num > 0) {
            let rem = num % 10;
            freq[rem]++;
            num = Math.floor(num / 10);
        }
        let res = findans(freq, map);
        if (res) {
            arr.push(i);
        }
    }
    
    let ans = new Array(arr.length).fill(0);
    for (let i = 0;i < arr.length;i++) {
        ans[i] = arr[i];
    }
    
    return ans; 
};

function findans(currentNum, database) {
    for (let i = 0;i < 10;i++) {
        if (currentNum[i] > database[i]) {
            return false;
        }
    }
    return true;
   
};