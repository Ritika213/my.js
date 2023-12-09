//Given an array of positive integers. Find the length of the longest sub-sequence such that elements in the subsequence are consecutive integers,
 //the consecutive numbers can be in any order.

Input:
N = 7
a = //{2,6,1,9,4,5,3}
Output
6
Explanation//The consecutive numbers here are 1, 2, 3, 4, 5, 6. These 6 numbers form the longest consecutive subsquence.

class Solution {
    //Function to return length of longest subsequence of consecutive integers.
    findLongestConseqSubseq(arr, N){
        // code here
        let count=1,answer=1;
        arr.sort((a, b) => a - b);
        for(let i=0; i <N-1 ; i++)
        {
            if(arr[i+1]-arr[i]==1)      count++;
            
            else if(arr[i+1]-arr[i]!=0) count=1;
            
            answer = Math.max(answer,count);
        }
        return answer;
    
    }
}


//Stock buy and sell

//The cost of stock on each day is given in an array A[] of size N. Find all the segments of days on which you buy and sell the stock so that 
//in between those days for which profit can be generated.
Note //Since there can be multiple solutions, the driver code will print 1 if your answer is correct, otherwise, it will return 0. 
//In case there's no profit the driver code will print the string "No Profit" for a correct solution.


Input:
N = 7
A = //{100,180,260,310,40,535,695}
Output
1
Explanation//One possible solution is (0 3) (4 6) We can buy stock on day 0, and sell it on 3rd day, which will give us maximum profit. Now, we buy 
//stock on day 4 and sell it on day 6.

class Solution {
    //Function to find the days of buying and selling stock for max profit.
    stockBuySell(A, n)
    {
        //your code here
     let profit=[];
        
        for(let i=1;i<n;i++){
            if(A[i]>A[i-1]){
                profit.push([i-1,i]);
            }
        }
        return profit;

    }

}


