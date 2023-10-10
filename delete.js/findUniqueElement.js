//Given a binary tree, a target node in the binary tree, and an integer value k, find all the nodes that are at distance k 
//from the given target node. No parent pointers are available.
Note: //You have to return list in sorted order.


Input:      
         // 20
       // /    \
     // 8       22 
   // /   \
  // 4    12 
      // /   \
      //10    14
//Target Node = 8
K = 2
Output:// 10 14 22
Explanation: //The three nodes at distance 2 from node 8 are 10, 14, 22.

function segregateEvenOdd(arr) {
    let i = -1;
    let j = arr.length;

    while (true) {
        do {
            i++;
        } while (!(arr[i] & 1));

        do {
            j--;
        } while (arr[j] & 1);

        if (i >= j) {
            break;
        }

        // Swap arr[i] and arr[j]
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }

    arr.slice(0, i).sort((a, b) => a - b);
    arr.slice(i).sort((a, b) => a - b);

    return arr;
}

// Example usage
let arr = [1, 3, 2, 4, 7, 6, 9, 10];
segregateEvenOdd(arr);
console.log(arr); // Output: [2, 4, 6, 10, 1, 3, 7, 9]

 
 
 