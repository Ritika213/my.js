//Given an array of size N and you have to tell whether the array is perfect or not. An array is said to be perfect if 
//its reverse array matches the original array. If the array is perfect then return True else return False.

Input : Arr = [1, 2, 3, 2, 1]
Output : PERFECT
Explanation
//Here we can see we have [1, 2, 3, 2, 1] 
//if we reverse it we can find [1, 2, 3, 2, 1]
//which is the same as before.
//So, the answer is PERFECT.

class Solution{
    IsPerfect(arr,n){
        //code here
       for (let i = 0; i < n / 2; i++) {
        if (arr[i] !== arr[n - i - 1]) {
            return false;
        }
    }
    return true;


    }
}


//Given two positive integers A and B, find GCD of A and B.


Input: A = 3, B = 6
Output: 3
//Explanation: GCD of 3 and 6 is 3

class Solution{
    gcd(A, B){
        //code here
        while(B!=0){
            let rem=A%B;
            A=B;
            B=rem
        }
        return A;
    }
}

//n a party of N people, each person is denoted by an integer. Couples are represented by the same number. Find out the only single person in the party of couples.

Input: N = 5
arr = [1, 2, 3, 2, 1]
Output: 3
Explaination //Only the number 3 is single.

class Solution{
    findSingle(n, arr){
        //code here
        let res=0;
        for(let i=0;i<n;i++)
        res=res^arr[i];
        return res;
    
    }
}