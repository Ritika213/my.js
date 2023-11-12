//Given two strings 'str1' and 'str2', check if these two strings are isomorphic to each other.

//If the characters in str1 can be changed to get str2, then two strings, str1 and str2, are isomorphic. A character must be completely 
//swapped out for another character while maintaining the order of the characters. A character may map to itself, but no two characters may
// map to the same character.

Input:
str1 = aab
str2 = xxy
Output: 
1
Explanation 
//There are two different characters in aab and xxy, i.e a and b with frequency 2 and 1 respectively.

class Solution
{
    //Function to check if two strings are isomorphic.
    areIsomorphic(str1, str2)
    {
        // code here
        if (str1.length !== str2.length) {
        return false;
    }

    let s1 = new Array(256).fill(-1);
    let s2 = new Array(256).fill(-1);

    for (let i = 0; i < str1.length; i++) {
        let ss = str1.charAt(i);
        let tt = str2.charAt(i);

        if (s1[ss.charCodeAt()] === -1 && s2[tt.charCodeAt()] === -1) {
            s1[ss.charCodeAt()] = tt;
            s2[tt.charCodeAt()] = ss;
        } else if (s1[ss.charCodeAt()] !== tt || s2[tt.charCodeAt()] !== ss) {
            return false;
        }
    }

    return true;

    }
}


//Check if string is rotated by two places

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

//Exceptionally odd
//Given an array of N positive integers where all numbers occur even number of times except one number which occurs odd number of times.
// Find the exceptional number.

Input:
N = 7
Arr = //{1, 2, 3, 2, 3, 1, 3}
Output// 3
Explaination //3 occurs three times.

class Solution{
    getOddOccurrence(arr,n){
        //code here
         let Xor=0;
        for(let i=0;i<n;i++){
            Xor^=arr[i];
        }
        return Xor;
    }
}