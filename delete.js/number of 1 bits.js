//Write a function that takes the binary representation of an unsigned integer and returns the number of '1' bits it has (also known as the
     //Hamming weight).

Note:

//Note that in some languages, such as Java, there is no unsigned integer type. In this case, the input will be given as a signed integer type. 
//It should not affect your implementation, as the integer's internal binary representation is the same, whether it is signed or unsigned.
//In Java, the compiler represents the signed integers using 2's complement notation. Therefore, in Example 3, the input represents the signed 
//integer. -3.
 

Input: n = //00000000000000000000000000001011
Output // 3
Explanation// The input binary string 00000000000000000000000000001011 has a total of three '1' bits.

var hammingWeight = function(n) {
    let count=0;
    for(let i=0;i<32;i++) 
    {
        if(((n>>i)&1)==1)
        {
            count=count+1;
        }
    } 
    return count; 
   };



   //Euler circuit and Path

   //An Eulerian Path is a path in graph that visits every edge exactly once and it starts and ends up at different indexes. 
   //An Eulerian Circuit is an Eulerian Path which starts and ends on the same vertex. Given an undirected acyclic graph with V nodes, and E edges,
   // with adjacency list adj, return 2 if the graph contains an eulerian circuit, else if the graph contains an eulerian path, return 1, otherwise,
   //  return 0.
   const V = 5;
   const adj = [
       [1, 2],
       [0, 2, 3],
       [0, 1, 3],
       [1, 2],
       []
   ];


   class Solution {

    isEulerCircuit(V,Adj){
        
        let odd = 0, ev = 0;

        // Counting degree of all nodes, odd and even degree nodes
        for (let i = 0; i < V; i++) {
            if (Adj[i].length % 2 === 0) {
                ev++;
            } else {
                odd++;
            }
        }

        // For undirected graph:
        // Euler circuit must have all nodes with even degree
        // Euler circuit must have all even degree nodes with at most 2 odd degree nodes
        if (ev === V) {
            return 2;
        } else if (odd > 0 && odd === 2) {
            return 1;
        }
        
        return 0;
    }
}

//peak element
    
//An element is called a peak element if its value is not smaller than the value of its adjacent elements(if they exists). Given an array arr[]
// of size N, Return the index of any one of its peak elements. 
Note: //The generated output will always be 1 if the index that you return is correct. Otherwise output will be 0. Also, arr[] will be in 
//ascending order before the peak element, and in descending order after that.

Input: 
N = 3
arr = //{1,2,3}
Possible //Answer: 2
//Generated Output: 1
Explanation: //index 2 is 3.
//It is the peak element as it is 
//greater than its neighbour 2.
//If 2 is returned then the generated output will be 1 else 0.


class Solution {
    
    peakElement(arr, n)
    {

        if(n==1)
        return 0;
        if(arr[0]>=arr[1])
        return 0;
        if(arr[n-1]>arr[n-2])
        return n-1;
        for(let i=1;i<n-1;i++){
            if(arr[i]>=arr[i-1] && arr[i]>=arr[i+1]){
                return i;
            }
        }
        return 0;
    }
}
