//give a sorted array arr[] of distinct integers. sort the array into a wave like array(in place).
//in other words,arrange the elements into a sequence sunch that arr[1]>= arr[2]<=arr[3]<=arr[4]<=arr[5]....
n=5;
arr=[1,2,3,4,5]
output//2 1 4 3 5
explainatiopn//array elemnents after sorting it in wave form are 2 1 4 3 5

class Solution {
    // arr: input array
    // n: size of array
    //Function to sort the array into a wave-like array.
    convertToWave(n, arr)
    {
        //your code here
        for(let i = 0; i < arr.length; i = i+2) {

            if(arr[i+1]) {

                const t= arr[i + 1];

                arr[i + 1] = arr[i];

                arr[i] = t;

            }

        }

return arr;
    
    }
}



//given an array Arr of size N with all elemnent greater than oe euqal to zero.Return the maximum product of two  nmbers possible.
N=6
Arr=[1,4,3,6,7,0]
outpiut:62

class Solution{
    maxProduct(arr,n){
        //code here
         if (n < 2) {
            return -1; // Not enough elements in the array
        }

        let max1 = Math.max(arr[0], arr[1]);
        let max2 = Math.min(arr[0], arr[1]);
        let min1 = Math.min(arr[0], arr[1]);
        let min2 = Math.max(arr[0], arr[1]);

        for (let i = 2; i < n; i++) {
            if (arr[i] > max1) {
                max2 = max1;
                max1 = arr[i];
            } else if (arr[i] > max2) {
                max2 = arr[i];
            }
            if (arr[i] < min1) {
                min2 = min1;
                min1 = arr[i];
            } else if (arr[i] < min2) {
                min2 = arr[i];
            }
        }

        return Math.max(max1 * max2, min1 * min2);



    }
}
