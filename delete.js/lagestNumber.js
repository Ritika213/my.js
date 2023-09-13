//Given two numbers 'N' and 'S' , find the largest number that can be formed with 'N' digits and whose 
//sum of digits should be equals to 'S'.Return -1 if it is not possible.

Input: N = 2, S = 9
Output: 90
Explaination //It is the biggest number with sum of digits equals to 9.

class Solution{
    findLargest(n,s){
        //code here
        if (s == 0 && n > 1) return "-1";
        let digit = 0, sum = 0, firstD = 9;
        let ans = "";

        // Check if it's possible to construct a number with n digits and sum s
        if (s > 9 * n) return "-1";

        while (digit < n) {
            while (firstD > 0 && s - (sum + firstD) < 0) {
                firstD--;
            }
            sum += firstD;
            ans += firstD;
            digit++;
        }

        return ans;
    

    }
}



//As we know, Ishaan has a love for chocolates. He has bought a huge chocolate bar that contains N chocolate squares.
// Each of the squares has a tastiness level which is denoted by an array A[].Ishaan can eat the first or the last square of the chocolate at once.
//Ishaan has a sister who loves chocolates too and she demands the last chocolate square. Now, Ishaan being greedy eats the more tasty square first. 
//Determine the tastiness level of the square which his sister gets.

Input : arr = [5, 3, 1, 6, 9]
Output : 1
Explanation:
Initially// 5 3 1 6 9
//In first step: 5 3 1 6
//In Second step: 5 3 1
//In Third step: 3 1
//In Fourth step: 1
//Return 1


class Solution{
    chocolates(arr,n){
        //code here
        let min = Number.MAX_SAFE_INTEGER;
for(let i=0;i<n;i++){
            if(arr[i]<min){
                min=arr[i];
            }
            
}
return min;
    }
}

