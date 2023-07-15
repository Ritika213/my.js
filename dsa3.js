function findMaxSubarraySum(A) {
    let max_ending_here = 0;
    let max_so_far = 0;
    
    for (let x of A) {
      max_ending_here = Math.max(0, max_ending_here + x);
      max_so_far = Math.max(max_so_far, max_ending_here);
    }
    
    return max_so_far;
  }
  



  //This code initializes both max_ending_here and max_so_far to 0. 
  //It then iterates over each element x in the array A.
  // The line max_ending_here = Math.max(0, max_ending_here + x) calculates the maximum subarray sum ending at the current position.
   // If the sum becomes negative, it resets max_ending_here to 0, effectively starting a new subarray. 
   // The line max_so_far = Math.max(max_so_far, max_ending_here) keeps track of the maximum subarray sum found so far.
    // Finally, the function returns max_so_far, which represents the maximum subarray sum in the array A