//given the head of a linked list. You have to replace all the values of the nodes with the nearest prime number. If more than one 
//prime number exists at an equal distance, choose the smallest one. Return the head of the modified linked list.

Examples :

Input:// head = 2 → 6 → 10
Output:// 2 → 5 → 11

Explanation //The nearest prime of 2 is 2 itself. The nearest primes of 6 are 5 and 7, since 5 is smaller so, 5 will be chosen. The nearest
//  prime of 10 is 11.

Input: //head = 1 → 15 → 20
Output:// 2 → 13 → 19

Explanation: //The nearest prime of 1 is 2. The nearest primes of 15 are 13 and 17, since 13 is smaller so, 13 will be chosen. The nearest
//  prime of 20 is 19.
Constraints
//1 <= no. of Nodes <= 104
//1 <= node.val <= 104

/**
 * @param {Node} head
 * @returns {Node}
 */
/*
class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}
*/
class Solution {
    // Function to return all prime numbers in the given link list.
      isPrime( n){
         if (n <= 1) return false;
        for (let i = 2; i <= Math.sqrt(n); i++) {
            if (n % i === 0) return false;
        }
        return true;
    }
    primeList(head) {
        
        let current = head;
        while (current !== null) {
            let val = current.val;

            if (!this.isPrime(val)) {
                let up = val + 1;
                let down = val - 1;

                while (true) {
                    if (down >= 2 && this.isPrime(down)) {
                        val = down;
                        break;
                    }
                    if (this.isPrime(up)) {
                        val = up;
                        break;
                    }
                     down--;
                    up++;
                }

                current.val = val;
            }

            current = current.next;
        }

        return head;
    }
}