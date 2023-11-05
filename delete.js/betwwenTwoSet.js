//There will be two arrays of integers. Determine all integers that satisfy the following two conditions:

//The elements of the first array are all factors of the integer being considered
//The integer being considered is a factor of all elements of the second array
//These numbers are referred to as being between the two arrays. Determine how many such numbers exist.


//Sample Input

//2 3
//2 4
//16 32 96
//Sample Output

3
Explanation

//2 and 4 divide evenly into 4, 8, 12 and 16.
//4, 8 and 16 divide evenly into 16, 32, 96.

//4, 8 and 16 are the only three numbers for which each element of a is a factor and each is a factor of all elements of b.


function getTotalX(a, b) {
    // Write your code here
let num = 0;
    for(let i = a[a.length - 1]; i<= b[b.length - 1]; i++) {
        if(a.every(ele => i % ele === 0) && b.every(ele => ele % i === 0)) {
       num++;
        }
    }

    return num;
}

//find the winner of an array game


//Given an integer array arr of distinct integers and an integer k.

//A game will be played between the first two elements of the array (i.e. arr[0] and arr[1]). In each round of the game, we compare arr[0] with 
//arr[1], the larger integer wins and remains at position 0, and the smaller integer moves to the end of the array. The game ends when an integer 
//wins k consecutive rounds.

//Return the integer which will win the game.

//It is guaranteed that there will be a winner of the game.

Input: arr = [2,1,3,5,4,6,7], k = 2
Output: 5
Explanation: //Let's see the rounds of the game:
Round |       arr       | winner | win_count
  1   | [2,1,3,5,4,6,7] | 2      | 1
  2   | [2,3,5,4,6,7,1] | 3      | 1
  3   | [3,5,4,6,7,1,2] | 5      | 1
  4   | [5,4,6,7,1,2,3] | 5      | 2
//So we can see that 4 rounds will be played and 5 is the winner because it wins 2 consecutive games.


var getWinner = function(arr, k) {
    let win = 0;
   for(let i = 1; i < arr.length; i++)
   {
       if(arr[0] > arr[i])
       {
           win++;
       }
       else
       {
           arr[0] = arr[i];
           win = 1;
       }
       if(win == k)
           return arr[0];
   }
   return arr[0];
};

//Given a non-empty array nums[] of integers of length N, find the top k elements which have the highest frequency in the array. 
//If two numbers have same frequencies, then the larger number should be given more preference.


Input:
N = 6
nums = //{1,1,1,2,2,3}
k = 2
Output: {1, 2}


class Solution {
    topK(nums, k) {
        // code here
        let freq = new Map();
        let ans = [];

        for (let i = 0; i < nums.length; i++) {
            freq.set(nums[i], (freq.get(nums[i]) || 0) + 1);
        }

        let sortedArray = Array.from(freq.entries()).sort((a, b) => {
            if (a[1] === b[1]) {
                return b[0] - a[0];
            } else {
                return b[1] - a[1];
            }
        });

        for (let i = 0; i < k; i++) {
            ans.push(sortedArray[i][0])
        }
        return ans;
    }
}