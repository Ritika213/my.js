//Given an array arr[] with non-negative integers representing the height of blocks. If the width of each block is 1, compute how much 
//water can be trapped between the blocks during the rainy season. 

Examples:

Input: arr =// [3, 0, 1, 0, 4, 0 2]
Output// 10
Explanation// Total water trapped = 0 + 3 + 2 + 3 + 0 + 2 + 0 = 10 units.

Input: arr = [3, 0, 2, 0, 4]
Output: 7
Explanation:// Total water trapped = 0 + 3 + 1 + 3 + 0 = 7 units.
Input: arr = [1, 2, 3, 4]
Output: 0
Explanation:// We cannot trap water as there is no height bound on both sides.
Input: arr = [2, 1, 5, 3, 1, 0, 4]
Output: 9
Explanation:// Total water trapped = 0 + 1 + 0 + 1 + 3 + 4 + 0 = 9 units.
Constraints:
1 < arr.size() < 105
0 < arr[i] < 103

class Solution {
    // Function to find the trapped water between the blocks.
    maxWater(arr) {
        // code here
        let n=arr.length;
        let ans=0;
        let i=0;
        let j=1;
        let temp=0;
        while(j<n){
            if(arr[j]>=arr[i]){
                ans+=(arr[i]*(j-i-1));
                ans-=temp;
                temp=0;
                i=j;
            }else{
                temp+=arr[j];
            }
            j++;
        }
        i=n-1;
        j=n-2;
        temp=0;
        while(j>=0){
            if(arr[j]>arr[i]){ // to avoid double counting 
            // as if we put arr[j]>=arr[i] , then we will double count when arr[i]=arr[j]
            // as it will be true for both pass.
                ans+=(arr[i]*(i-j-1));
                ans-=temp;
                temp=0;
                i=j;
            }else{
                temp+=arr[j];
            }
            j--;
        }
        
        return ans;
    }
}
