//The task is to complete the insert() function which is used to implement Insertion Sort.


//Examples:

Input:// n = 5, arr[] = { 4, 1, 3, 9, 7}
Output: //1 3 4 7 9
//Input: n = 10, arr[] = {10, 9, 8, 7, 6, 5, 4, 3, 2, 1}
//Output:1 2 3 4 5 6 7 8 9 10

 Task 
//don't have to read input or print anything. Your task is to complete the function insert() and insertionSort() where insert() 
//takes the array, it's size and an index i and insertionSort() uses insert function to sort the array in ascending order using insertion 
//sort algorithm. 

//Expected Time Complexity: O(n*n).
//Expected Auxiliary Space: O(1).

Constraints:
1 <= n <= 1000
1 <= arr[i] <= 1000

class Solution
{
  insert(arr,i){
     // code here such that insertionSort() sorts arr[]
      while(i>0 && arr[i-1]>arr[i]) {
                let temp = arr[i];
                arr[i]=arr[i-1];
                arr[i-1] = temp;
                i--;
            }
  
  }

   //Function to sort the array using insertion sort algorithm.
  insertionSort(arr,n){
   
    for(let i=0;i<=n-1;i++) {
            let j=i;
            this.insert(arr,j);
        }
        return arr;
  }
    
}