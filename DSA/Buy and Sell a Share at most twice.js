//In daily share trading, a buyer buys shares in the morning and sells them on the same day. If the trader is allowed to make at most 2 
//transactions in a day, the second transaction can only start after the first one is complete (buy->sell->buy->sell). The stock prices throughout the day are represented in the form of an array of prices. 

//Given an array price of size n, find out the maximum profit that a share trader could have made.


Input:
n = 6
prices = //{10,22,5,75,65,80}
Output //87
Explanation //Trader earns 87 as sum of 12, 75 Buy at 10, sell at 22, Buy at 5 and sell at 80.

class Solution {
    /**
    * @param number n
    * @param number[] price
    
    * @returns number
    */
        maxProfit(price) {
        
            let n = price.length;
            if (n <= 1) {
                return 0;
            }
    
            let profit=Array(n).fill(0);
    
            let maxPrice = price[n - 1];
            for (let i = n - 2; i >= 0; --i) {
                maxPrice =Math.max(maxPrice, price[i]);
                profit[i] = Math.max(profit[i + 1], maxPrice - price[i]);
            }
    
            let minPrice = price[0];
            for (let i = 1; i < n; ++i) {
                minPrice = Math.min(minPrice, price[i]);
                profit[i] = Math.max(profit[i - 1], profit[i] + (price[i] - minPrice));
            }
    
            return profit[n - 1];
        }
    }