//Given an array of integers nums and a number k, write a function that returns true if given array can be divided into pairs such that sum
// of every pair is divisible by k.

Input : 
nums = [9, 5, 7, 3]
k = 6
Output: 
True
Explanation 
//{(9, 3), (5, 7)} is a possible solution. 9 + 3 = 12 is divisible by 6 and 7 + 5 = 12 is also divisible by 6.

class Solution {
    canPair(nums,k){
        //code here
        let n=nums.length;
        if(n%2!=0)return false;
        let r= new Array(k).fill(0);
        for(let i=0;i<n;i++){
            r[nums[i]%k]++;
        }
        if(r[0]%2!=0)return false;
        let i=1;
        let j=k-1;
        while(i<=j){
            if(i==j){
                if(r[i]%2!=0)return false;
            }else{
                if(r[i]!=r[j])return false;
            }
            i++;
            j--;
        }
        return true;
    }
}