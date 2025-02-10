//given a string s.

//Your task is to remove all digits by doing this operation repeatedly:

//Delete the first digit and the closest non-digit character to its left.
//Return the resulting string after removing all digits.

 

//Example 1:

Input: s = "abc"

Output: "abc"

Explanation:

//There is no digit in the string.

//Example 2:

Input: s = "cb34"

Output: ""

Explanation

Explanation:

//First, we apply the operation on s[2], and s becomes "c4".

//Then we apply the operation on s[1], and s becomes "".

 

Constraints:

1 <= s.length <= 100
//s consists only of lowercase English letters and digits.
//The input is generated such that it is possible to delete all digits.



var clearDigits = function(s) {
    let arr = s.split('');
    let index=0;
    while(index < arr.length){
     if(!isNaN(arr[index])){
         arr.splice(index,1)
         if(index >0){
             arr.splice(index-1,1)
             index--;
         }
     }else {
         index++;
     }
    }
    return arr.join('')
 };