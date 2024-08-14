//given two strings str1 and str2. Your task is to find the length of the longest common substring among the given strings.

Examples:

Input: str1 = "ABCDGH", str2 = "ACDGHR"
Output: 4
Explanation: //The longest common substring is "CDGH" which has length 4.
Input: str1 = "ABC", str2 = "ACB"
Output: 1
Explanation: //The longest common substrings are "A", "B", "C" all having length 1.
//Expected Time Complexity: O(n*m).
//Expected Auxiliary Space: O(n*m).

Constraints:
1<= str1.size(), str2.size()<=1000
//Both strings may contain upper and lower case alphabets.

class Solution {
    longestCommonSubstr(str1, str2) {
        
            let maxlen=0;
        let l1=str1.length,l2=str2.length;
        for(let i=0;i<l1;i++){
            for(let j=i;j<l1;j++){
                let str=str1.substring(i,j+1);
                if(str2.includes(str)){
                    maxlen=Math.max(maxlen,str.length);
                }
                
            }
        }
        return maxlen;
    }
}