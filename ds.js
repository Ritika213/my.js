//Given an array A of positive integers. Your task is to find the leaders in the array. 
//An element of array is leader if it is greater than or equal to all the elements to its 
//right side. The rightmost element is always a leader. 
Input:
n = 6
A = [16,17,4,3,5,2]
Output: //17 5 2
Explanation //The first leader is 17 as it is greater than all the elementsto its right.  
//Similarly,the next leader is 5.The right most element is always a leader so it is also included.

class Solution {
    //Function to find the leaders in the array.
    leaders(arr, n){
        // code here
         let max=Number.MIN_SAFE_INTEGER;
       let result=[];
       for(let i=n-1;i>=0;i--)
       {
           if(arr[i]>=max)
           {
               max=arr[i];
               result.push(max);
           }
       }
      result.reverse()
       return result;
    
    }
}



//Given a string, check if all its characters are the same or not.
Input:
s = "geeks"
Output: False
Explanation //The string contains different
//character 'g', 'e', 'k' and 's'.

class Solution {
    check(s){
       //code here
        let char=s[0];
       for(let i=0;i<s.length;i++){
           
           if(s[i]!==char){
               return false;
           }
       }
       return true;
    }
}


//Given a number N. The task is to complete the function convertFive() which replaces all zeros 
//in the number with 5 and returns the number.

Example:

Input
2
1004
121

Output
1554
121

Explanation
//Testcase 1:  At index 1 and 2 there is 0 so we replace it with 5.
//Testcase 2: There is no,0 so output will remain the same.

class Solution {
    
    convertFive(n){
        //code here
        let s = String(n);
    s = s.replace(/0/g, '5');
    n = parseInt(s);
    return n;

    }
}
