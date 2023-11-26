//A Discrete Mathematics professor has a class of students. Frustrated with their lack of discipline, the professor decides to cancel class
 //if fewer than some number of students are present when class starts. Arrival times go from on time (arrivalTime<=0) to arrived late
 // (arrivalTime>=0).

//Given the arrival time of each student and a threshhold number of attendees, determine if the class is cancelled.

Example
n=5;
k=3;
a=[-2,-1,0,1,2]

//The first 3 students arrived on. The last 2 were late. The threshold is 3 students, so class will go on. Return YES.

Note //Non-positive arrival times (a[i]>0) indicate the student arrived early or on time; positive arrival times (a[i]<0) indicate the student 
//arrived  minutes late.

function angryProfessor(k, a) {
    
let count=0;

for(let i=0;i<a.length;i++){
    if(a[i]<=0){
        count+=1;
    }
}
return count>=k ? "NO" : "YES";
}


//largest submatrix with reaarangement

//You are given a binary matrix matrix of size m x n, and you are allowed to rearrange the columns of the matrix in any order.

//Return the area of the largest submatrix within matrix where every element of the submatrix is 1 after reordering the columns optimally.


Input: matrix = [[0,0,1],[1,1,1],[1,0,1]]
Output: 4
Explanation //You can rearrange the columns as shown above.The largest submatrix of 1s, in bold, has an area of 4.

var largestSubmatrix = function(matrix) {
    const m = matrix.length;
      const n = matrix[0].length;
  
      for (let i = 1; i < m; ++i) {
          for (let j = 0; j < n; ++j) {
              if (matrix[i][j] === 1) {
                  matrix[i][j] += matrix[i - 1][j];
              }
          }
      }
      
      let ans = 0;
      
      matrix.forEach(row => {
          row.sort((a, b) => b - a);
          for (let j = 0, k = 1; j < n && row[j] > 0; ++j, ++k) {
              const s = row[j] * k;
              ans = Math.max(ans, s);
          }
      });
      
      return ans;  
  };

  //print pattern

 // Print a sequence of numbers starting with N, without using loop, where replace N with N - 5, until N > 0. After that replace N with N + 5 until 
  //N regains its initial value.

Input: 
N = 16
Output: 
//16 11 6 1 -4 1 6 11 16
Explaination 
//The value decreases until it is greater than 0. After that it increases and stops when it becomes 16 again.

class Solution{
    pattern(n){
        //code here
    
    let v = [];
        let temp = n;
        
        while (temp > 0) {
            v.push(temp);
            temp -= 5;
        }
        
        v.push(temp);
        temp += 5;
        
        while (temp < n + 1) {
            v.push(temp);
            temp += 5;
        }
        
        return v;
    
    }
}





