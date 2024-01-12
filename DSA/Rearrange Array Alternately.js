//Given a sorted array of positive integers. Your task is to rearrange the array elements alternatively i.e first element should be max value, 
//second should be min value, third should be second max, fourth should be second min and so on.
Note: //Modify the original array itself. Do it without using any extra space. You do not have to return anything.

Input:
n = 6
arr = //{1,2,3,4,5,6}
Output// 6 1 5 2 4 3
Explanation// Max element = 6, min = 1, second max = 5, second min = 2, and so on... Modified array is : 6 1 5 2 4 3.

class Solution {
    //Function to rearrange  the array elements alternately.
    rearrange(arr, n){
        // code here
        if (n == 1) return;
	let maxi = arr[n - 1] + 1;
	let r = n - 1,
		l = 0;
	for (let i = 0; i < n; i++) {
		if (i % 2 == 0) {
      // this formula is for encoding 2 numbers in one index.
			arr[i] += (arr[r] % maxi) * maxi;
			r--;
		} else {
			arr[i] += (arr[l] % maxi) * maxi;
			l++;
		}
	}
	for (let i = 0; i < n; i++) {
		arr[i] = parseInt(arr[i] / maxi);
	
    	 
	}
    return arr;
    }
}