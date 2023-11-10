//Two children, Lily and Ron, want to share a chocolate bar. Each of the squares has an integer on it.

//Lily decides to share a contiguous segment of the bar selected such that:

//The length of the segment matches Ron's birth month, and,
//The sum of the integers on the squares is equal to his birth day.
//Determine how many ways she can divide the chocolate.

Example
s=[2,2,1,3,2]
d=4
m=2

//Lily wants to find segments summing to Ron's birth day,  with a length equalling his birth month,d=4 . In this case, 
//there are two segments meeting her criteria:[2,2]  and [1,3].

//Sample Input 0

5
//1 2 1 3 2
//3 2
//Sample Output 0

2

function birthday(s, d, m) {
    // Write your code here
let count=0,sum=0;
    for(let i=0; i<s.length; i++){
        for(let j=i; j<m+i; j++){ 
            sum+=s[j]
             }
        if(sum === d){ 
            count++
             }
        sum=0;
    }
    return count;
}


//count number of Homogenous SubString

//Given a string s, return the number of homogenous substrings of s. Since the answer may be too large, return it modulo 109 + 7.

//A string is homogenous if all the characters of the string are the same.

//A substring is a contiguous sequence of characters within a string.

Input: s = "abbcccaa"
Output: 13
Explanation //The homogenous substrings are listed as below:
//"a"   appears 3 times.
//"aa"  appears 1 time.
//"b"   appears 2 times.
//"bb"  appears 1 time.
//"c"   appears 3 times.
//"cc"  appears 2 times.
//"ccc" appears 1 time.
//3 + 1 + 2 + 1 + 3 + 2 + 1 = 13.

var countHomogenous = function(s) {
    let mod = 1e9 + 7
       let n = s.length
       let count=0, res = 0
       
       for(let i=0; i<n; i++){
           if(i>0 && s[i-1] == s[i]){
               count++         
                               
           }
           else count = 1
           res = (res + count)%mod
       }
   
       return res   
   };

   //predict the column

   //Given a matrix(2D array) M of size N*N consisting of 0s and 1s only. The task is to find the column with maximum number of 0s. 
   //If more than one column exists, print the one which comes first. If the maximum number of 0s is 0 then return -1.

Example:

Input:
N = 3
M =// {{0, 0, 0},
        //  {1, 0, 1},
        //  {0, 1, 1}}
Output
0
Explanation:
//0th column (0-based indexing) is having 2 zeros which is maximum among all columns and comes first.


   Intuition:
  // The function iterates through the matrix column by column. For each column, it counts the number of zeros in that column and compares 
   //it with the maximum count of zeros found so far. If the current column has more zeros than the previous maximum, it updates the maximum 
   //count and the index of the column. The function stops iterating through the columns if it finds a column with the maximum possible zeros 
  // (equal to the number of rows) because it cannot find a column with more zeros after that. Finally, the function returns the index of the column 
   //with the maximum zeros, or -1 if there are no zeros in any column.
   
  // Time Complexity:  O(N^2)
   //Space Complexity: O(1)
   class Solution{
       columnWithMaxZeros(M,n){
           //code here
           let maxCount = 0;
           let ans = -1;
           
           for (let i = 0; i < n; i++) {
               let currentCount = 0;
               for (let j = 0; j < n; j++) {
                   if (M[j][i] == 0) {
                       currentCount++;
                   }
               }
               if (currentCount > maxCount) {
                maxCount = currentCount;
                ans = i;
                if (maxCount === n) {
                    // All rows have zeros in this column, no need to check further
                    break;
                }
            }
        }
        
        if (maxCount === 0) {
            return -1;
        }
        
        return ans;
    
    }
}
