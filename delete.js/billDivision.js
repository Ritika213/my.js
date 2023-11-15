//Two friends Anna and Brian, are deciding how to split the bill at a dinner. Each will only pay for the items they consume. Brian gets the check 
//and calculates Anna's portion. You must determine if his calculation is correct.

//For example, assume the bill has the following prices:bill=[2,4,6] . Anna declines to eat item k=bill[2] which costs 6. If Brian calculates the 
//bill correctly,Anna will pay (2+4)/2=3. If he includes the cost of bill[2] , he will calculate(2+4+6)/2=6 . In the second case, he should refund 3
//to Anna.



function bonAppetit(bill, k, b) {
    let sum = bill.reduce((ele, total) => {
        return total+ele;
    }, 0)
    if(sum/2 === b)
    {
        console.log(bill[k]/2)
    }
    else {
        console.log("Bon Appetit")
    }
}


//maximum element after decreasing and rearranging

//The value of the first element in arr must be 1.
//The absolute difference between any 2 adjacent elements must be less than or equal to 1. In other words, abs(arr[i] - arr[i - 1]) <= 1 
//for each i where 1 <= i < arr.length (0-indexed). abs(x) is the absolute value of x.
//There are 2 types of operations that you can perform any number of times:

//Decrease the value of any element of arr to a smaller positive integer.
//Rearrange the elements of arr to be in any order.
//Return the maximum possible value of an element in arr after performing the operations to satisfy the conditions.

Input: arr = [2,2,1,2,1]
Output: 2
Explanation 
//We can satisfy the conditions by rearranging arr so it becomes [1,2,2,2,1].
//The largest element in arr is 2.

var maximumElementAfterDecrementingAndRearranging = function(arr) {
    const n = arr.length;
  arr.sort((a, b) => a - b);

  arr[0] = 1;
  for (let i = 1; i < n; i++) {
    if (arr[i] - arr[i - 1] > 1) {
      arr[i] = arr[i - 1] + 1;
    }
  }

  return arr[n - 1];
};


//common elements

//Given three arrays sorted in increasing order. Find the elements that are common in all three arrays.
Note: //can you take care of the duplicates without using any additional Data Structure?

Input:
n1 = 6; A = //{1, 5, 10, 20, 40, 80}
n2 = 5; B =// {6, 7, 20, 80, 100}
n3 = 8; C =// {3, 4, 15, 20, 30, 70, 80, 120}
//Output: 20 80
Explanation //20 and 80 are the only common elements in A, B and C.

class Solution{
    commonElements(arr1, arr2, arr3, n1, n2,n3){
        //code here
        const ans=[];
            
            let i = 0, j = 0, k = 0;
            while(i < n1 && j < n2 && k < n3) {
                if(arr1[i] === arr2[j] && arr1[i] === arr3[k]) {
                    if(ans.length>0 && ans[ans.length-1]=== arr1[i]){
                        i++;
                        j++;
                        k++;
                        continue;
                    }
                    ans.push(arr1[i]);
                    i++;
                    j++;
                    k++;
                }
                else if(arr1[i]<arr2[j]) i++;
                else if(arr2[j]<arr3[k])j++;
                else k++;
            }
            return ans;
    }
}

