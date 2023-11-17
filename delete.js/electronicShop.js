//A person wants to determine the most expensive computer keyboard and USB drive that can be purchased with a give budget. 
//Given price lists for keyboards and USB drives and a budget, find the cost to buy them. If it is not possible to buy both items, return -1.

Example
b=60;
keyboard=[40,50,60]
drives=[5,8,12]

//The person can buy a 40 keyboard+12 usb drives=52, or a 50 keyboard+8 drives=58 . Choose the latter as the more expensive option and return 58.

//Sample Input 0

//10 2 3
//3 1
//5 2 8
//Sample Output 0

9
//Explanation 0

//Buy the 2nd keyboard and the 3rd USB drive for a total cost of 8+1=9.

function getMoneySpent(keyboards, drives, b) {
    /*
     * Write your code here.
     */
let priceCheck = 0;
    for (let i = 0; i < keyboards.length; i++) {
        for (let j = 0; j < drives.length; j++) {
            let priceTotal = keyboards[i] + drives[j]
            if ((priceTotal > priceCheck) && (priceTotal <= b)) {
                priceCheck = priceTotal;
            }
        }
    }
    if (priceCheck === 0) {
        return -1;
    } else {
        return priceCheck;
    }
}


//minimum maximum pair sum in an array

//The pair sum of a pair (a,b) is equal to a + b. The maximum pair sum is the largest pair sum in a list of pairs.

//For example, if we have pairs (1,5), (2,3), and (4,4), the maximum pair sum would be max(1+5, 2+3, 4+4) = max(6, 5, 8) = 8.
//Given an array nums of even length n, pair up the elements of nums into n / 2 pairs such that:

//Each element of nums is in exactly one pair, and
//The maximum pair sum is minimized.
//Return the minimized maximum pair sum after optimally pairing up the elements.


Input: nums = [3,5,2,3]
Output: 7
Explanation //The elements can be paired up into pairs (3,3) and (5,2).
//The maximum pair sum is max(3+3, 5+2) = max(6, 7) = 7.

var minPairSum = function(nums) {
    nums.sort((a, b) => a - b)
   let max = 0
   
   for (let i = 0; i < nums.length / 2; i++) {
       if (nums[i] + nums[nums.length - 1 - i] > max) {
           max = nums[i] + nums[nums.length - 1 - i]
       }
   }
   
   return max
};

//find the median 

//Given an array arr[] of N integers, calculate the median.

NOTE:// Return the floor value of the median.
 

Input: N = 5
arr = //90 100 78 89 67
Output// 89
Explanation //After sorting the array middle element is the median 

class Solution {

    find_median(arr){
        //code here
      const newArr = arr.sort((a,b) => a-b)

        const N = arr.length

        if(N%2 === 0) {

            return Math.floor((arr[(N/2)-1] + arr[N/2])/2)

        } else {

            return arr[(N-1)/2]

        }

    
    }
}



