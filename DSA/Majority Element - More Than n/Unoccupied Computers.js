//A cafe has n computers. The customer events are represented by a string s of uppercase English letters, where
//  each distinct letter appears exactly twice:

//The first occurrence denotes the customer's arrival.
//The second occurrence denotes the customer's departure.
//A customer is assigned a computer only if one is available at the time of arrival, otherwise the customer
//  is rejected and does not use a computer.

//Return the number of customers who could not be assigned a computer upon arrival.

Examples:

Input: n = 3, s = "GACCBDDBAGEE"
Output: 1
Explanation: //Only D will not be able to get any computer. So the answer is 1.
Input: n = 1, s = "ABCBAC"
Output: 2
Explanation:// B and C will not be able to get any computers. So the answer is 2.
Constraints
//1 ≤ n ≤ 26
//1 ≤ |s| ≤ 52

//s consists of uppercase English letters and each letter occurs exactly 2 times.


/**
 * @param {number} n
 * @param {string} s
 * @returns {number}
 */
class Solution {
    // Function to find the answer.
    solve(n, s) {
        
        let occupied = 0,rejected = 0;
        let seen = new Set();
        let hasComputer = new Set();
        for(let ch of s) {
            if(!seen.has(ch)){
                seen.add(ch);
                if(occupied < n){
                    occupied++;
                    hasComputer.add(ch);
                }
                else {
                    rejected++;
                }
            }
            else{
                if(hasComputer.has(ch)){
                    occupied--;
                    hasComputer.delete(ch)
                }
            }
        }
        return rejected
    }
}

