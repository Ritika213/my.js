//There are N children standing in a line. Each child is assigned a rating value given in the integer array ratings.
//You are giving candies to these children subjected to the following requirements:

//Each child must have atleast one candy.
//Children with a higher rating than it's neighbours get more candies than neighbors.
//Return the minimum number of candies you need to have to distribute.

Input:
N = 3
ratings = [1, 0, 2]
Output: 
5
Explanation 
//You can allocate to the first, second and third child with 2, 1, 2 candies respectively.

class Solution {
    //Function to find minimum number of candies to be distributed among the students.
      minCandy(N, ratings){
        //your code here
         if(N == 0) return 0;
       
       let left = new Array(N);
       let right = new Array(N);
       
       left[0] = 1;
       right[N-1] = 1;
       for(let i=1; i<N; i++) 
           left[i] = ratings[i] > ratings[i-1] ? left[i-1]+1 : 1;
        
        for(let i=N-2; i>=0; i--) 
           right[i] = ratings[i] > ratings[i+1] ? right[i+1]+1 : 1;
        
        let ans = 0;
        for(let i=0; i<N; i++) ans += Math.max(left[i], right[i]);
        
        return ans;
    }
}

//widest vertical area between two points containing two points

//Given n points on a 2D plane where points[i] = [xi, yi], Return the widest vertical area between two points such that no points are
// inside the area.A vertical area is an area of fixed-width extending infinitely along the y-axis (i.e., infinite height). The widest
// vertical area is the one with the maximum width.

//Note that points on the edge of a vertical area are not considered included in the area.

Input: points = [[8,7],[9,9],[7,4],[9,7]]
Output: 1
Explanation// Both the red and the blue area are optimal.

var maxWidthOfVerticalArea = function(points) {
    points.sort((a,b) => a[0] - b[0]);
      let max = 0;
      for(let i=0; i<points.length-1; i++){
          max = Math.max(max , points[i+1][0 ] - points[i][0]);
      }
      return max;  
  };

  //Rearrange Array Alternately

 // Given a sorted array of positive integers. Your task is to rearrange the array elements alternatively i.e first element should be max value,
 // second should be min value, third should be second max, fourth should be second min and so on.
Note:// Modify the original array itself. Do it without using any extra space. You do not have to return anything.

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
    }
}


 