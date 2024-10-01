//Given elements as nodes of the two singly linked lists. The task is to multiply these two linked lists, say L1 and L2.

Note:// The output could be large take modulo 10^9+7.

Examples :

Input:// LinkedList L1 : 3->2 , LinkedList L2 : 2
Output: 64
Explanation 

//Multiplication of 32 and 2 gives 64.

Input:// LinkedList L1: 1->0->0 , LinkedList L2 : 1->0
Output: 1000
Explanation: 

//Multiplication of 100 and 10 gives 1000.
//Expected Time Complexity: O(max(n,m))
//Expected Auxilliary Space: O(1)
//where n is the size of L1 and m is the size of L2

Constraints
//1 <= number of nodes <= 105
//1 <= node->data <= 103

class Solution {
    multiplyTwoLists(first, second) {
        // Code Here 
        const MOD = BigInt(1e9 + 7);
        
        // Variables to store numbers
        let num1 = BigInt(0);
        let num2 = BigInt(0);
        
        // Traverse the first linked list and compute the number
        while (first !== null) {
            num1 = (num1 * BigInt(10) + BigInt(first.data)) % MOD;
            first = first.next;
        }
        
        // Traverse the second linked list and compute the number
        while (second !== null) {
            num2 = (num2 * BigInt(10) + BigInt(second.data)) % MOD;
            second = second.next;
        }
        
        // Return the product modulo 10^9 + 7
        return Number((num1 * num2) % MOD);
    }
}