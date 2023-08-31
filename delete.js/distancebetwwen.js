//Given coordinates of 2 points on a cartesian plane, find the distance between them rounded up to nearest integer.

Input: //0 0 2 -2
Output: 3
Explanation: //Distance between (0, 0) 
and (2, -2) //is 3.

class Solution {
    distance(x1, y1, x2, y2) {
      //code here
      const deltaX = x2 - x1;
      const deltaY = y2 - y1;
      const distance = Math.sqrt(deltaX ** 2 + deltaY ** 2);
      return Math.round(distance);
    }
  }

  
 // Given an integer N, find the sum of odd numbers and even numbers from 1 to N.
 
Input: 5
Output: //9 6
Explanation //Odd numbers upto 5 are 1, 3, 5 and their sum = 1 + 3 + 5 = 9.Even numbers
//upto 5 are 2 and 4 and their sum = 2 + 4 = 6.

class Solution{
    find_sum(n){
        //code here
         let arr=[];
		    let count = 0;
		    for(let i = 1 ; i <=  n ; i++){
		        if(i % 2 != 0){
		            count = count +i;
		        }
		    }
		    arr.push(count);
		    
		    let count2 = 0; 
		    for(let i = 1 ; i <=  n ; i++){
		        if(i % 2 ==0){
		            count2 = count2+i;
		        }
		    }
		    arr.push(count2);
		    return arr;
    }
}
