//Given an expression string x. Examine whether the pairs and the orders of {,},(,),[,] are correct in exp.
//For example, the function should return 'true' for exp = [()]{}{[()()]()} and 'false' for exp = [(]).

Note: //The drive code prints "balanced" if function return true, otherwise it prints "not balanced".


Input:
{([])}
Output: 
true
Explanation: 
{ ( [ ] ) } //Same colored brackets can form balanced pairs, with 0 number of unbalanced bracket.

class Solution
{
    //Function to check if brackets are balanced or not.
    ispar(x)
    {
        //your code here
         const hashMap={"(" :")","{" : "}", "[" : "]"}
    const stack=[]
    for(let ch of x){
        if(hashMap[ch]){
 stack.push(hashMap[ch])
        }else if(stack.length>0 &&  stack[stack.length-1]=== ch){
            stack.pop()
        }else {
            return false
        }
       
    }
    return stack.length ===0;
    }
}


//trapping rain water

//Given an array arr[] of N non-negative integers representing the height of blocks. If width of each block is 1, compute how much water can be
// trapped between the blocks during the rainy season. 

Input:
N = 6
arr= //{3,0,0,2,0,4}
Output
10

class Solution {
    // Function to find the trapped water between the blocks.
    trappingWater(arr, n)
    {
        //your code here
        let res = 0;
        const left=new Array(n);
       const right=new Array(n);
        
        // left array
        left[0] = arr[0];
        for(let i = 1; i<n; i++){
            left[i] = Math.max(left[i-1],arr[i]);
        }
        
        // right array
        right[n-1] = arr[n-1];
        for(let i = n-2; i>= 0; i--){
            right[i] = Math.max(right[i+1],arr[i]);
        }
        
        // Solution Loop
        for(let i = 1; i<n-1; i++){
             let varVal = Math.min(left[i-1],right[i+1]);
            if( varVal > arr[i]) res += varVal-arr[i];
        }
        return res;
    
    }
}


//count pairs with given sum

//Given an array of N integers, and an integer K, find the number of pairs of elements in the array whose sum is equal to K.


Input:
N = 4, K = 6
arr = //{1, 5, 7, 1}
Output// 2
Explanation: 
arr[0] + arr[1] //= 1 + 5 = 6 
//and arr[1] + arr[3] = 5 + 1 = 6.

class Solution {
    getPairsCount(arr,n,k){
       //code here
       let map={};
       let count=0;
       for(let i=0;i<n;i++){
           if(k-arr[i]>0){
           if(!map[k-arr[i]]){
           
           map[k-arr[i]]=0;
       }
       if(!map[arr[i]]){
          map[arr[i]]=0; 
       }
       count+=map[k-arr[i]];
       map[arr[i]]++;
           }
       }
       return count;
    }
}