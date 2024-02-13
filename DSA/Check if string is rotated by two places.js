//Given two strings a and b. The task is to find if the string 'b' can be obtained by rotating (in any direction) string 'a' by exactly 2 places.

Input:
a = amazon
b = azonam
Output: 
1
Explanation 
//amazon can be rotated anti-clockwise by two places, which will make it as azonam.

class Solution 
{
    //Function to check if a string can be obtained by rotating
    //another string by exactly 2 places.
    isRotated(str1, str2)
    {
        // code here
        let n=str1.length,m=str2.length;
        
        if(n!=m) return false;
        for(let i=0;i<n;i++) {
            if(str1[i]!=str2[ (i+2) % n])  break;
            if(i==n-1) return true;
        }
        for(let i=0;i<n;i++) {
            if(str1[(i+2 )% n]!=str2[i])  break;
            if(i==n-1) return true;
        }
        return false;
    }
}