// given two unsorted arrays a[] and b[]. Both arrays may contain duplicate elements. For each element in a[], your task is to 
// count how many elements in b[] are less than or equal to that element.

Examples:

Input: a = [4, 8, 7, 5, 1], b = [4, 48, 3, 0, 1, 1, 5]
Output: [5, 6, 6, 6, 3]
Explanation: 
//For a[0] = 4, there are 5 elements in b (4, 3, 0, 1, 1) that are ≤ 4.
//For a[1] = 8 and a[2] = 7, there are 6 elements in b that are ≤ 8 and ≤ 7.
//For a[3] = 5, there are 6 elements in b that are ≤ 5.
//For a[4] = 1, there are 3 elements in b (0, 1, 1) that are ≤ 1.
Input: a = [10, 20], b = [30, 40, 50]
Output: [0, 0]
Explanation: 
//For a[0] = 10 and a[1] = 20, there are no elements in b that are less than or equal to 10 or 20. Hence, the output is [0, 0].
Constraints
//1 ≤ a.size(), b.size() ≤ 105
//0 ≤ a[i], b[j] ≤ 105

class Solution {
    countLessEq(a, b) {
    
        b.sort((a,b)=>a-b)
        let n=a.length, m=b.length;
        let ans= new Array(n).fill(0);
        
        for(let i=0; i<n; i++){
            let lo=0, hi=m-1;
            while(lo<=hi){
                let mid=Math.floor(lo+(hi-lo)/2);
                if(b[mid]<=a[i]){
                    ans[i]=mid+1;
                    lo=mid+1;
                }else hi=mid-1;
            }
        }
        
        return ans;
    }
}