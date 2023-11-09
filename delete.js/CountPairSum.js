//Given two sorted arrays(arr1[] and arr2[]) of size M and N of distinct elements. Given a value Sum. The problem is to count all pairs from 
//both arrays whose sum is equal to Sum.
Note: //The pair has an element from each array.

Input:
M=4, N=4 , Sum = 10
arr1 = //{1, 3, 5, 7}
arr2 = //{2, 3, 5, 8} 
Output// 2
Explanation //The pairs are: (5, 5) and (7, 3). 

class Solution{
    countPairs(arr1, arr2, n, m, x){
        //code here
        let j=n-1, counter = 0 ;
       for(let i=0 ; i<m ; i++)
       {
           while(j>=0 && arr1[i]+arr2[j] > x)
           {
               j--;
           }
           if(j==-1 )
            break ;
           if(j>=0 && arr1[i]+arr2[j] == x)
             counter++;
           
       }
       return counter ;
    }
}

//Pass the pillow

//There are n people standing in a line labeled from 1 to n. The first person in the line is holding a pillow initially. 
//Every second, the person holding the pillow passes it to the next person standing in the line. Once the pillow reaches the end of the line,
// the direction changes, and people continue passing the pillow in the opposite direction.

//For example, once the pillow reaches the nth person they pass it to the n - 1th person, then to the n - 2th person and so on.
//Given the two positive integers n and time, return the index of the person holding the pillow after time seconds.

Input: n = 4, time = 5
Output: 2
Explanation //People pass the pillow in the following way: 1 -> 2 -> 3 -> 4 -> 3 -> 2.
//Afer five seconds, the pillow is given to the 2nd person.


var passThePillow = function(n, time) {
    const pass=Math.floor(time/(n-1)) ;
    const reminder= time-pass*(n-1) ;
    return pass% 2 == 0 ? 1+ reminder : n- reminder;
  };
