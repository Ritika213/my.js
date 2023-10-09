//Given a binary tree, find its height.


Input:
    // 1
   // /  \
  // 2    3
Output: 2


class Solution {
    //Function to find the height of a binary tree.
    height(node)
    {
        //your code here
        if (node === null) {
        return 0;
    }
    let leftHeight = this.height(node.left);
    let rightHeight = this.height(node.right);
    return 1 + Math.max(leftHeight, rightHeight);

    }
}



//Given a number N having only one ‘1’ and all other ’0’s in its binary representation, find position of the only set bit. 
//If there are 0 or more than 1 set bit the answer should be -1. Position of  set bit '1' should be counted starting with 1 
//from LSB side in binary representation of the number.

Input:
N = 2
Output:
2
Explanation
//2 is represented as "10" in Binary.As we see there's only one set bit and it's in Position 2 and thus the Output 2.



class Solution{
    findPosition(n){
        //code here
        if(n==0)return -1;
        if((n&(n-1))==0){
            let count = 0;
            while(n!=0){
                count++;
                n = n>>1;
            }
            return count;
        }
        else return -1;


    }
}


//Given two numbers A and B, find Kth digit from right of AB.
 

Input:
A = 3
B = 3
K = 1
Output:
7
Explanation:
33 = 27 //and 1st digit from right is 
7

class Solution{
    kthDigit(A, B, K){
        //code here
        let n = BigInt(Math.pow(A, B));
    let ct = 0;
    
    while (n > 0) {
        ct++;
        let rem = Number(n % 10n);
        if (ct === K) {
            return rem;
        }
        n = n / 10n;
    }
    
    return 0;
    }
}


