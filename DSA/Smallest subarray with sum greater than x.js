//Given an array of integers (A[])  and a number x, find the smallest subarray with sum greater than the given value. If such a subarray do
// not exist return 0 in that case.


Input:
A = //{1, 4, 45, 6, 0, 19}
x  =  51
Output: 3
Explanation:
//Minimum length subarray is 
{4, 45, 6}

class Solution {

    smallestSubWithSum(a,n,x){
        
      let ans=n+1;
        for(let i=0;i<n;i++){
            let sum=0;
            for(let j=i;j<n;j++){
                sum+=a[j];
                if(sum>x){
                    ans=Math.min(ans,j-i+1);
                   break;
                }
            }
        }
        
        return ans;
        
    
    }
}