//two soretd array arr and brr and a number x,find the pair whose sum is closest to x and the pair an element from each array. in the 
//case of multiple closest pairs return any one of them .
n=4,m=4;
arr=[1,4,5,7]
brr=[10,20,30,40]
x=32

function printClosest(arr, brr, n, m, x) {
    let i = 0;
    let j = m - 1;
    let diff = Number.MAX_SAFE_INTEGER;
    let a = -1;
    let b = -1;

    while (i < n && j >= 0) {
        const sum = arr[i] + brr[j];
        
        if (Math.abs(sum - x) < diff) {
            diff = Math.abs(sum - x);
            a = arr[i];
            b = brr[j];
        }
        
        if (sum > x) {
            j--;
        } else if (sum < x) {
            i++;
        } else {
            // If the sum is exactly equal to x, you can return immediately
            return [a, b];
        }
    }
    
    return [a, b];
}

// Example usage:
const arr = [1, 4, 5, 7];
const brr = [10, 20, 30, 40];
const x = 32;
const result = printClosest(arr, brr, arr.length, brr.length, x);
console.log(result); // Output: [4, 30]






