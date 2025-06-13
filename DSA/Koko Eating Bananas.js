//Koko is given an array arr[], where each element represents a pile of bananas. She has exactly k hours to eat all the bananas.

//Each hour, Koko can choose one pile and eat up to s bananas from it.

//If the pile has atleast s bananas, she eats exactly s bananas.

//If the pile has fewer than s bananas, she eats the entire pile in that hour.

//Koko can only eat from one pile per hour.


//task is to find the minimum value of s (bananas per hour) such that Koko can finish all the piles within k hours.

Examples:

Input: arr = [5, 10, 3], k = 4
Output: 5
Explanation:// Koko eats at least 5 bananas per hour to finish all piles within 4 hours, as she can consume each pile in 1 + 2 + 1 = 4 hours.
Input: arr = [5, 10, 15, 20], k = 7
Output: 10
Explanation// At 10 bananas per hour, Koko finishes in 6 hours, just within the limit 7.

Constraint
//1 ≤ arr.size() ≤ 105 
//1 ≤ arr[i] ≤ 106
//arr.size() ≤ k ≤ 106


class Solution {
    kokoEat(arr, k) {
        
          let n = arr.length;

        let l = 1;
        let r = Math.max(...arr); // max_element equivalent in JS
        let ans = r;

        while (l <= r) {
            let mid = Math.floor(l + (r - l) / 2); // Binary Search

            let hour = 0;
            for (let i = 0; i < n; i++) {
                hour += Math.ceil(arr[i] / mid); // Ceil division
                if (hour > k) break;
            }
            if (hour <= k) {
                ans = Math.min(ans, mid);
                r = mid - 1;
            } else {
                l = mid + 1;
            }
        }

        return ans;
    }
}
