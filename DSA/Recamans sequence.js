//Given an integer n, return the first n elements of Recaman’s sequence.
//It is a function with domain and co-domain as whole numbers. It is recursively defined as below:
//Specifically, let a(n) denote the (n+1)th term. (0 being the 1st term).
//The rule says:
a(0) = 0
//a(n) = a(n-1) - n,if a(n-1) - n > 0 and is not included in the sequence previously
       //=  a(n-1) + n otherwise.

       Input: 
       n = 5
       Output: 
      // 0 1 3 6 2
       Explaination: 
       a(0) = 0,
       a(1) = a(0)-1// = 0-1 = -1 and -1<0, therefore a(1) = a(0)+1 = 1,
       a(2) = a(1)-2// = 1-2 = -1 and -1<0, therefore a(2) = a(1)+2 = 3,
       a(3) = a(2)-3 //= 3-3 = 0 but since 0 is already present in the sequence, a(3) = a(2)+3 = 3+3 = 6,
       a(4) = a(3)-4// = 6-4 = 2.
       //Therefore the first 5 elements of Recaman's sequence will be 0 1 3 6 2. 
       
       class Solution {
        /**
        * @param number n
        
        * @returns number[]
        */
            recamanSequence(n) {
                
                let s = new Set();
            let v = new Array(n).fill(0);
            s.add(0);
        
            for (let i = 1; i < n; i++) {
                let x = v[i - 1] - i;
        
                if (!s.has(x) && x > 0) {
                    v[i] = x;
                } else {
                    x = v[i - 1] + i;
                    v[i] = x;
                }
        
                s.add(x);
            }
        
            return v;
            }
        }
                