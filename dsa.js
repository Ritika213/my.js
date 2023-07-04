//1. given an iteger aaray,return the maximum difference between any adjecent elements.
const nums = [10, 8, 6, 4, 2];
let maxDiff = 0;
  
  for (let i = 1; i < nums.length; i++) {
    const diff = Math.abs(nums[i] - nums[i - 1]);
    maxDiff = Math.max(maxDiff, diff);
  }
  
  return maxDiff;
  

  //2. you have given a aaray of heights of hiils,the super hills is the hills which is taller than its neighbours hills.
  //you have to find the super hills and retirn its index if more then one super hills are there return any one of index.

  let hills=[1,2,3,1];

//binary search solution

let left = 0, right = hills.length-1, mid;
    
    while(left < right) {
        mid = Math.floor((right+left)/2);
        if(hills[mid] > hills[mid+1]) right = mid;
        else left = mid+1;
    }
    return left;
    
    
    //linear search solution
    
    for(let i = 0; i < nums.length; i++) {
        if(nums[i] > nums[i+1]) return i;
    }
    return nums.length-1;



//3.an array of integers is given  to returning the indices of those two elements whose products is equal to the target.    
// explanation: the target is given to be 50 when we multiply 5*10 we get 50. and the indices of 5 and 10 respectively are 2 and 5. 
function findIndices(nums, target) {
    const indicesMap = new Map();
  
    for (let i = 0; i < nums.length; i++) {
      const complement = target / nums[i];
  
      if (indicesMap.has(complement)) {
        const complementIndex = indicesMap.get(complement);
        return [complementIndex, i];
      }
  
      indicesMap.set(nums[i], i);
    }
  
    return [];
  }
  
  // Test the code
   nums = [4, 5, 2, 3, 1];
  const target = 2;
  
  const result = findIndices(nums, target);
  console.log(result.join(' '));
  

