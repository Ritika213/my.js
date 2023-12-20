//You are given an array A of n elements. There are two players player 1 and player 2.
//A player can choose any of element from an array and remove it. If the bitwise XOR of all remaining elements equals 0 after removal 
//of the selected element, then that player loses. Find out the winner if player 1 starts the game and they both play their best. 

Input: 
n = 3
A = [3, 3, 2]
Output: 
2
Explaination 
//Optimal removal of values are 3, 2, 3 sequentially. Then the array is empty. So player 2 wins.

class Solution{
    
         findWinner( n, A){
            // code here
            let res=A[0];
             for(let i=1;i<n;i++){
                 res^=A[i];
             }
             if(res==0)return 1;
             if(n%2==0)return 1;
             else return 2;
        }
    };


    //buy two chocolate

   // You are given an integer array prices representing the prices of various chocolates in a store. You are also given a single integer money, 
   // which represents your initial amount of money.You must buy exactly two chocolates in such a way that you still have some non-negative 
   // leftover money. You would like to minimize the sum of the prices of the two chocolates you buy.

//Return the amount of money you will have leftover after buying the two chocolates. If there is no way for you to buy two chocolates without 
//ending up in debt, return money. Note that the leftover must be non-negative.


Input: prices = [1,2,2], money = 3
Output: 0
Explanation //Purchase the chocolates priced at 1 and 2 units respectively. You will have 3 - 3 = 0 units of money afterwards. Thus,
// we return 0.

var buyChoco = function(prices, money) {
    prices.sort((a,b)=>a-b);
      const cho = prices[0] + prices[1];
  
      if( cho <= money) return  money - cho;
      return money  
  };


  //Pythagorean Triplet

  //Given an array arr of n integers, write a function that returns true if there is a triplet (a, b, c) from the array (where a, b, and c
    // are on different indexes) that satisfies a2 + b2 = c2, otherwise return false.

Input:
N = 5
Arr=// {3, 2, 4, 6, 5}
Output// Yes
Explanation// a=3, b=4, and c=5 forms a pythagorean triplet.

class Solution {

    checkTriplet(arr,n){
        //code here
         let s = new Set();
        for (let i = 0; i < n; i++) {
            s.add(arr[i] * arr[i]);
        }
        
        for (let i = 0; i < n - 1; i++) {
            for (let j = 0; j < n; j++) {
                let res = arr[i] * arr[i] + arr[j] * arr[j];
                if (s.has(res)) {
                    return true;
                }
            }
        }
        
        return false;
    }
}