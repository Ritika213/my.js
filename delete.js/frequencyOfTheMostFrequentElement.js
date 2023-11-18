//The frequency of an element is the number of times it occurs in an array.

//You are given an integer array nums and an integer k. In one operation, you can choose an index of nums and increment the element at that 
//index by 1.

//Return the maximum possible frequency of an element after performing at most k operations.


Input: nums = [1,2,4], k = 5
Output: 3
Explanation //Increment the first element three times and the second element two times to make nums = [4,4,4].4 has a frequency of 3.

var maxFrequency = function(nums, k) {
    let max = 0, start = 0, sum = 0, length = 0;
      nums.sort((a, b) => a - b);
      for (let i = 0; i < nums.length; i++) {
          sum += nums[i];
          length++;
          if (nums[i] * length - sum > k) {
              sum -= nums[start++];
              length--;
          } else max = Math.max(max, length);
      }
      return max;  
  };

//Reverse the doubly linked list

//Given a doubly linked list of n elements. Your task is to reverse the doubly linked list in-place.


Input:
LinkedList: //3 <--> 4 <--> 5
Output: //5 4 3

  class Solution {
    reverseDLL(head){
        //code here
        let temp = head;
        let curPrev = null;
        let curNext = null
        
        if(head.next === null) {
            return head
        }
        while(temp !== null) {
            curNext = temp.next;
            temp.next = curPrev;
            temp.prev = curNext;
            curPrev = temp;
            temp = curNext;
            
            
        }
        
        return curPrev;
    }
  }


  //count the smaller elements

  //Given an sorted array A of size N. Find number of elements which are less than or equal to given element X.


Input:
N = 6
A = //{1, 2, 4, 5, 8, 10}
X = 9
Output:
5

class Solution{
    countOfElements(arr,n, x){
        //code here
        let count=0;
     for(let i = 0; i < n; i++)
    {
        if(arr[i] <= x)
            count++;
    }
    return count;
   
    }
}