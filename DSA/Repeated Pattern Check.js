//Given a string s made of two characters of 'x' and 'y'.  The task is to verify whether s is made by 
// concatenating substrings that follow the pattern xnyn  (equal number of y's follow equal number of x's). 

Examples:

Input: s = "xxyyxy" 
Output: true
Explanation:// The string can be split into "xxyy" + "xy". Both substrings contain an equal number of
// consecutive 'x' and 'y' characters.
Input: s = "xyx"
Output: false
Explanation: //The last 'x' cannot form a valid substring because it is not followed by a matching 'y'. 
Constraints

//1 ≤ s.size() ≤ 105
//s consists only of the characters x and y


class Solution {
    findPattern(s) {
        
        let temp=0;

                for(let i=0;i<s.length;i++){
                    if(s[i]==='x')
                    {
                        temp++;
                    }
                    else if(s[i]==='y')
                    {
                        temp--;
                    }

                    if(temp===-1)
                    {
                        return 0;
                    }
                }

                return temp===0;
    }
}