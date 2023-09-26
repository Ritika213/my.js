//Given an array A of integers and another number K. Find all the unique quadruple from the given array that sums up to K.

//Also note that all the quadruples which you return should be internally sorted, ie for any quadruple [q1, q2, q3, q4] 
//the following should follow: q1 <= q2 <= q3 <= q4.

Input:
N = 5, K = 3
A = [0,0,2,1,1]
Output: //0 0 1 2 
Explanation //Sum of 0, 0, 1, 2 is equal to K.

class Solution {
    fourSum(arr, n, k){
        // code here
    arr.sort((a, b) => a - b); // Sort the array in ascending order
    const result = [];
    
    for (let i = 0; i < arr.length - 3; i++) {
        if (i > 0 && arr[i] === arr[i - 1]) {
            continue; // Skip duplicate values to avoid duplicate quadruples
        }
        
        for (let j = i + 1; j < arr.length - 2; j++) {
            if (j > i + 1 && arr[j] === arr[j - 1]) {
                continue; // Skip duplicate values to avoid duplicate quadruples
            }
            
            let left = j + 1;
            let right = arr.length - 1;
            
            while (left < right) {
                const sum = arr[i] + arr[j] + arr[left] + arr[right];
                
                if (sum === k) {
                    result.push([arr[i], arr[j], arr[left], arr[right]]);
                    left++;
                    right--;
                    
                    while (left < right && arr[left] === arr[left - 1]) {
                        left++; // Skip duplicate values on the left
                    }
                    
                    while (left < right && arr[right] === arr[right + 1]) {
                        right--; // Skip duplicate values on the right
                    }
                } else if (sum < k) {
                    left++;
                } else {
                    right--;
                }
            }
        }
    }
    
    return result;

    }
}


//Given two positive numbers X and Y, check if Y is a power of X or not.



Input:
X = 2, Y = 8
Output:
1
Explanation//23 is equal to 8.

class Solution{
    isPowerOfAnother(X, Y){
        //code here
        if (X === 1) {
        return 0;
    }
    if (Y === 1) {
        return 1;
    }
    if (Y === X) {
        return 1;
    }
    if (X % 2 === 0 && Y % 2 === 1) {
        return 0;
    }
    if (Y >= X && Y >= X * 2) {
        return this.isPowerOfAnother(X, Math.floor(Y / X));
    }
    return 0;
    }
}


 