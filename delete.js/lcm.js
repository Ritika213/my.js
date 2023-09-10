//Given two numbers A and B. The task is to find out their LCM and GCD.

Input:
A = 5 , B = 10
Output:
//10 5
Explanation
//LCM of 5 and 10 is 10, while thier GCD is 5.

class Solution{
    lcmAndGcd(a, b){
        //code here
        function findGCD(x, y) {
      while (y !== 0) {
        const temp = y;
        y = x % y;
        x = temp;
      }
      return x;
    }

    // Function to find LCM (Least Common Multiple)
    function findLCM(x, y) {
      const gcd = findGCD(x, y);
      return (x * y) / gcd;
    }

    const gcd = findGCD(a, b);
    const lcm = findLCM(a, b);

    return [lcm, gcd];
  
    }
}


//Given a Queue Q containing N elements. The task is to reverse the Queue. Your task is to complete the function rev(), 
//that reverses the N elements of the queue.

Input:
6
//4 3 1 10 2 6
Output: 
//6 2 10 1 3 4
Explanation: 
//After reversing the given elements of the queue , the resultant queue will be 6 2 10 1 3 4. js

function reverseQueue(queue) {
    const stack = [];
  
    // Push elements from the queue into a stack
    while (queue.length > 0) {
      stack.push(queue.shift());
    }
  
    // Pop elements from the stack and enqueue them back into the queue
    while (stack.length > 0) {
      queue.push(stack.pop());
    }
  
    return queue;
  }
  
  // Example usage:
  const inputQueue = [4, 3, 1, 10, 2, 6];
  reverseQueue(inputQueue);
  console.log(inputQueue); // Output: [6, 2, 10, 1, 3, 4]
  