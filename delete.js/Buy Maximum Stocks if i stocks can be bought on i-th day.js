//In a stock market, there is a product with its infinite stocks. The stock prices are given for N days, where price[i] denotes 
//the price of the stock on the ith day.There is a rule that a customer can buy at most i stock on the ith day.
//If the customer has an amount of k amount of money initially. The task is to find out the maximum number of stocks a customer can buy. 

Input:
price = [10,7,19]
k = 45
Output: 
4
Explanation 
//A customer purchases 1 stock on day 1, 2 stocks on day 2 and 1 stock on day 3 for 10, 7 * 2 = 14 and 19 respectively. Hence, 
//total amount is 10 + 14 + 19 = 43 and number of stocks purchased is 4.

class Solution {
    //Function to find the maximum number of products he can buy.
    buyMaximumProducts(n, k, price) {
        
         const result = [];
        for (let i = 0; i < n; ++i) {
            result.push([price[i], i + 1]);
        }

        result.sort((a, b) => a[0] - b[0]);

        let out = 0;

        for (const i of result) {
            const maxBuy = Math.min(Math.floor(k / i[0]), i[1]);
            out += maxBuy;
            k -= i[0] * maxBuy;
        }
        return out;
    }

}

//Minimum change to make alternating binary string

//You are given a string s consisting only of the characters '0' and '1'. In one operation, you can change any '0' to '1' or vice versa.

//The string is called alternating if no two adjacent characters are equal. For example, the string "010" is alternating, while the string 
//"0100" is not.

//Return the minimum number of operations needed to make s alternating.

Input: s = "0100"
Output: 1
Explanation// If you change the last character to '1', s will be "0101", which is alternating.

var minOperations = function(s) {

    let counter1=0;
    let counter2=0;
    for(let i=0;i<s.length;i++){
        if(i%2===0){
            if(s[i]==="0"){
                counter1++;
            }
            if(s[i]==="1"){
                counter2++;
            }
        }
        if(i%2===1){
            if(s[i]==="1"){
                counter1++;
            }
            if(s[i]==="0"){
                counter2++;
            }
        }
    }
    return Math.min(counter1,counter2);
 
};
