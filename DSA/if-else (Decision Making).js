//Given two integers, n and m. The task is to check the relation between n and m.

Examples :

Input: n = 4, m = 8
Output: lesser
Explanation:// 4 < 8 so print 'lesser'.
Input: n = 8, m = 8
Output: equal
Explanation:// 8 = 8 so print 'equal'.
 Task  
//don't need to read input or print anything. Your task is to complete the function compareNM() which takes two integer n and 
//m as input parameters and returns string
//'lesser' if n < m
//'equal' if n == m
//'greater' if n > m

//Expected Time Complexity: O(1)
//Expected Auxiliary Space: O(1)

Constraints:
-109 <= m , n <= 109


class Solution {
    /**
    * @param number n
    * @param number m
    
    * @returns string
    */
        compareNM(n, m) {
            // code here
            if(n<m){
                return "lesser";
            }
            else if (n===m){
                return "equal";
            } else{
                return "greater";
            }
        }
    }
            
    