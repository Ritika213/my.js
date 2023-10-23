//Given an array of n positive integers. Find the sum of the maximum sum subsequence of the given array such that the integers in 
//the subsequence are sorted in strictly increasing order i.e. a strictly increasing subsequence. 


Input: 
N = 5, arr = //{1, 101, 2, 3, 100} 
Output 
106
Explanation//The maximum sum of a increasing sequence is obtained from {1, 2, 3, 100},


class Solution {
    maxSumIS(arr,n){
        //code here
        let dp = new Array(n);
    for (let i = 0; i < n; i++) {
        dp[i] = arr[i];
    }

    for (let i = 1; i < n; i++) {
        for (let j = 0; j < i; j++) {
            if (arr[j] < arr[i]) {
                dp[i] = Math.max(dp[i], dp[j] + arr[i]);
            }
        }
    }

    let maxi = 0;
    for (let i = 0; i < n; i++) {
        maxi = Math.max(maxi, dp[i]);
    }

    return maxi;
    }
}



//Given a singly linked list and a number k, you are required to complete the function modularNode() which returns the modular 
//node of the linked list.
//A modular node is the last node of the linked list whose Index is divisible by the number k, i.e. i%k==0.
Note: //If no such node is available, return -1. We are following 1 indexing.

Input: LinkedList:// 1->2->3->4->5->6->7
       k = 3
Output: 6
Explanation //Indexing of the linked list is same as the values of the Node. The maximum index is which is divisble by 3 is 6 and the
//node value of the 6th index is 6.


class Solution {
    modularNode(head , k)
    {
        //your code here
        let data = -1;
    let index = 0;
    while (head !== null) {
        if (++index % k === 0) {
            data = head.data;
        }
        head = head.next;
    }
    return data;
    }
}



//You are given a 0-indexed integer array forts of length n representing the positions of several forts. forts[i] can be -1, 0, or 1 where:

//-1 represents there is no fort at the ith position.
//0 indicates there is an enemy fort at the ith position.
//1 indicates the fort at the ith the position is under your command.
//Now you have decided to move your army from one of your forts at position i to an empty position j such that:

0 <= i, j <= n - 1
//The army travels over enemy forts only. Formally, for all k where min(i,j) < k < max(i,j), forts[k] == 0.
//While moving the army, all the enemy forts that come in the way are captured.

//Return the maximum number of enemy forts that can be captured. In case it is impossible to move your army, or you do not have any fort 
//under your command, return 0.



var captureForts = function(forts) {
    let max = 0;
  
      let i = 0;
      while (i < forts.length) {
          if (forts[i] != 0) {
              let n = 0;
              while (forts[i + n + 1] == 0) n++;
              if (n > max && forts[i] * forts[i + n + 1] == -1) max = n;
              i += n + 1;
          } else {
              i++;
          }
      }
  
      return max;  
  };