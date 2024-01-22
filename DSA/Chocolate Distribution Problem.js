//Given an array A[ ] of positive integers of size N, where each value represents the number of chocolates in a packet. Each packet can have
 //a variable number of chocolates. There are M students, the task is to distribute chocolate packets among M students such that :
1.// Each student gets exactly one packet.
2. //The difference between maximum number of chocolates given to a student and minimum number of chocolates given to a student is minimum.


Input:
N = 8, M = 5
A =// {3, 4, 1, 9, 56, 7, 9, 12}
Output// 6
Explanation: //The minimum difference between maximum chocolates and minimum chocolates is 9 - 3 = 6 by choosing following M packets :{3, 4, 9, 7, 9}.

class Solution{
    findMinDiff(arr,n,m){
        
        if (m == 0 || n == 0)
        return 0;
  
    // Sort the given packets
    arr.sort(function(a, b){return a - b});
  
    // Number of students cannot be
    // more than number of packets
    if (n < m)
        return -1;
  
    // Largest number of chocolates
    let min_diff = Number.MAX_VALUE;
  
     for(let i = 0; i + m - 1 < n; i++)
    {
        let diff = arr[i + m - 1] - arr[i];
          
        if (diff < min_diff)
            min_diff = diff;
    }
    return min_diff;
}
 
    }