//Given an integer n, return all the numbers in the range [1, n] sorted in lexicographical order.

//You must write an algorithm that runs in O(n) time and uses O(1) extra space. 

 

//Example 1:

Input: n = 13
Output: [1,10,11,12,13,2,3,4,5,6,7,8,9]
//Example 2:

Input: n = 2
Output: [1,2]
 

Constraints:

1 <= n <= 5 * 104


var lexicalOrder = function(n) {
  const arr = [];
    
    function dfs(baseIndex) {
        if (baseIndex * 10 > n) {
            return;
        }
        
        for(let i = baseIndex * 10; i < baseIndex * 10 + 10 && i <= n; i++)  {
           arr.push(i);
           dfs(i);
        }
    }
    
    let stack = [];
    
    for(let i = 1; i <= 9 && i <= n; i++) {
        arr.push(i);        
        dfs(i);
    }
    
    return arr;
   
};