//Given weights and values of n items, we need to put these items in a knapsack of capacity w to get the maximum total value in the knapsack. 
//Return a double value representing the maximum value in knapsack.
Note: //Unlike 0/1 knapsack, you are allowed to break the item here. The details of structure/class is defined in the comments above the given 
//function

//Examples 

Input: n = 3, w = 50,// value[] = [60,100,120], weight[] = [10,20,30]
Output//: 240.000000
Explanation//: Take the item with value 60 and weight 10, value 100 and weight 20 and split the third item with value 120 and weight 30, to fit 
//it into weight 20. so it becomes (120/30)*20=80, so the total value becomes 60+100+80.0=240.0 Thus, total maximum value of item we can 
//have is 240.00 from the given capacity of sack. 

Input: n = 2, w = 50,// value[] = [60,100], weight[] = [10,20]
Output//: 160.000000
Explanation//: Take both the items completely, without breaking. Total maximum value of item we can have is 160.00 from the given capacity of sack.
//Expected Time Complexity : O(n log n)
//Expected Auxilliary Space: O(1)

Constraints:
1 <= n <= 105
1 <= w <= 109
1 <= valuei, weighti <= 104


class Solution 
{
    static comp(a, b) {
    return  (b.value / b.weight)- (a.value / a.weight) ;
  }
    //Function to get the maximum total value in the knapsack.
    fractionalKnapsack(W, arr, n)
    {
        // code here
         arr.sort(Solution.comp);
    let maxP = 0;
    let currWt = 0;

    for (let i = 0; i < n; i++) {
      if (currWt + arr[i].weight <= W) {
        maxP += arr[i].value;
        currWt += arr[i].weight;
      } else {
        maxP += (arr[i].value * (W - currWt)) / arr[i].weight;
        break;
      }
    }

    return maxP;
    }
}