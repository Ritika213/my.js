//A teacher asks the class to open their books to a page number. A student can either start turning pages from the front of the book or from 
//the back of the book. They always turn pages one at a time. When they open the book, page  is always on the right side:

//When they flip page , they see pages  and . Each page except the last page will always be printed on both sides. The last page may only
// be printed on the front, given the length of the book. If the book is  pages long, and a student wants to turn to page , 
//what is the minimum number of pages to turn? They can start at the beginning or the end of the book.

//Given  and , find and print the minimum number of pages that must be turned in order to arrive at page .

example: n=5;
p=3;

//Sample Input 0

6
2
//Sample Output 0

1


function pageCount(n, p) {

return Math.min(Math.floor(p / 2), 
    Math.floor(n / 2) - Math.floor (p / 2));


    }



    //sum of upper and lower trangles

//Given a square matrix of size N*N, print the sum of upper and lower triangular elements. Upper Triangle consists of elements on 
//the diagonal and above it. The lower triangle consists of elements on the diagonal and below it. 


Input:
N = 3 
mat = //{{6, 5, 4},
          // {1, 2, 5}
          // {7, 9, 7}}
Output 
//29 32
Explanation
//The given matrix is
//6 5 4
//1 2 5
//7 9 7
//The elements of upper triangle are
//6 5 4


class Solution 
{
    //Function to return sum of upper and lower triangles of a matrix.
    sumTriangles(mat, N)
    {
        // code here 
        
         let up = 0, low = 0;
        
        for(let i = 0;i < N;i++){
            for(let j = i;j < N;j++){
                up += mat[i][j];
            }
            for(let j = 0;j <= i;j++){
                low +=mat[i][j];
            }
        }
        
        return [up, low];
    } 
}


//split with minimum sum

//Given a positive integer num, split it into two non-negative integers num1 and num2 such that:

//The concatenation of num1 and num2 is a permutation of num.
//In other words, the sum of the number of occurrences of each digit in num1 and num2 is equal to the number of occurrences of that digit in num.
//num1 and num2 can contain leading zeros.
//Return the minimum possible sum of num1 and num2.

Notes

//It is guaranteed that num does not contain any leading zeros.
//The order of occurrence of the digits in num1 and num2 may differ from the order of occurrence of num.


Input: num = 4325
Output: 59
Explanation //We can split 4325 so that num1 is 24 and num2 is 35, giving a sum of 59. We can prove that 59 is indeed the minimal
// possible sum.

var splitNum = function(num) {
    num = "" + num;
       var numArr = num.split('').map( num => +num).sort((a,b) => a-b),
       str1 = "",
       str2 = "",
       i = 0,
       digit;
       for (digit of numArr) {
           if (i % 2 === 0) {
               str1 += digit;
           } else {
               str2 += digit;
           }
           i++;
       }
   
       return +str1 + +str2;   
   };

 