//Given two integers L, R, and digit X. Find the number of occurrences of X in all the numbers in the range (L, R) excluding L and R.

Input:
L=10, R=19, X=1
Output:
9
Explanation:
//There are 9 1s (11, 12, 13, 14, 15, 16, 17, 18) in the numbers in the range (10,19).



class Solution {
    // Function to count numbers from L to R that have X as a digit.
    countX(L, R, X) {
        // Helper function to count occurrences of X in a number.
        const countOccurrences = (num) => {
            let count = 0;
            while (num > 0) {
                let lastDigit = num % 10;
                if (lastDigit === X) {
                    count++;
                }
                num = Math.floor(num / 10);
            }
            return count;
        };

        // Count occurrences of X in the range [L, R).
        let totalCount = 0;
        for (let i = L + 1; i < R; i++) {
            totalCount += countOccurrences(i);
        }

        return totalCount;
    }
}



//calculate the money in leetcode bank

//Hercy wants to save money for his first car. He puts money in the Leetcode bank every day.

//He starts by putting in $1 on Monday, the first day. Every day from Tuesday to Sunday, he will put in $1 more than the day before. 
//On every subsequent Monday, he will put in $1 more than the previous Monday.
//Given n, return the total amount of money he will have in the Leetcode bank at the end of the nth day.

Input: n = 4
Output: 10
Explanation //After the 4th day, the total is 1 + 2 + 3 + 4 = 10.

var totalMoney = function(n){
    let balance=0;
    let day=1;
    let week=0;
    for(let i=1;i<=n;i++){
        balance=balance+(week+day);
        day++;
        if(i%7===0){
            week++;
            day=1;
        }
    }
    return balance;
};