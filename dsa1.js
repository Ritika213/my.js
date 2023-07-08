//1.you have given an array of intergers where negative integer represents the extra pens the student has.
// positive integers shows the need of pens that student has.assume they are seating horizontally on different benches, 
//the work for giving the pen to adjacent bench is 1 unit. find minimum number of work required to fufil the needs of all students. 
//  note:it is guaranteed that sum of all the element of the array will be 0.
 example: n=5, 
arr=[5,-4,1,-3,1]  
 output:9
 algorithm:

//1. Initialize a variable `work` to 0.
//2. Iterate over the array of integers `arr`.
//3. For each integer `num`, check if it represents a need (positive) or an extra pen (negative).
//4. If `num` is negative (extra pen), find the first adjacent student with a positive need (starting from the next student).
//5. Distribute the extra pen to the adjacent student by incrementing their need and incrementing `work` by 1 unit.
//6. If there are no adjacent students with a positive need, consider the last student as adjacent (circular seating).
//7. Continue the iteration until all needs are fulfilled.
//8. Return the final value of `work`, which represents the minimum number of work units required.


function findMinimumWork(arr) {
  const n = arr.length;
  let work = 0;

  for (let i = 0; i < n; i++) {
    const num = arr[i];

    if (num < 0) {
      let j = i + 1;
      while (true) {
        if (j === n) {
          j = 0; // Circular seating
        }

        if (arr[j] > 0) {
          arr[j]--;
          work++;
          break;
        }

        j++;
      }
    }
  }

  return work;
}

// Example usage:
const arr = [5, -4, 1, -3, 1];
const minimumWork = findMinimumWork(arr);
console.log(minimumWork); // Output: 9






//2.you are given an array of integers which represent the strength of that player you have to check whether addition of
// strengths on left side and right side are equal or not. if both sides have equal strength then return true else return false. 
 //solve  this question in O(n) time complexity.  hint use prefix sum. 
 example1:input:N=4, 
 arr=[1,2,0,3] 
 output:true 
 //explanation:consider i=3,for[1,2] sum is 3 and for [0,3] sum is also 3. 
//To solve the given problem using prefix sum and O(n) time complexity.
function checkEqualStrength(N, arr) {
    const prefixSum = [0];
    
    // Calculate prefix sum of the array
    for (let i = 0; i < N; i++) {
      prefixSum[i + 1] = prefixSum[i] + arr[i];
    }
    
    // Check if left and right sums are equal
    for (let i = 1; i < N; i++) {
      if (prefixSum[i - 1] === prefixSum[N] - prefixSum[i]) {
        return true;
      }
    }
    
    return false;
  }
  
  // Test the code
  
  const result = checkEqualStrength(N, arr);
  console.log(result); // Output: true
  
