//Given an array arr[] of n integers. Check whether it contains a triplet that sums up to zero. 

Note: //Return 1, if there is at least one triplet following the condition else return 0.


Input: n = 5, arr = //{0, -1, 2, -3, 1}
Output// 1
Explanation// 0, -1 and 1 forms a triplet with sum equal to 0.

class Solution {
    //Function to find triplets with zero sum.
    findTriplets(arr, n){
 arr.sort((a, b) => a - b);

    // Fix the first element as arr[i]
    for (let i = 0; i < n - 2; i++) {
      let left = i + 1;
      let right = n - 1;

      while (left < right) {
        const sum = arr[i] + arr[left] + arr[right];

        if (sum === 0) {
          return 1; // Triplet found
        } else if (sum < 0) {
          left++;
        } else {
          right--;
        }
      }
    }

    return 0; // Triplet not found
    
    
    }
}



//Anagram

//Given two strings a and b consisting of lowercase characters. The task is to check whether two given strings are an anagram of each other or not.
// An anagram of a string is another string that contains the same characters, only the order of characters can be different. For example, act and 
 //tac are an anagram of each other.

Note:-

//If the strings are anagrams you have to return True or else return False

//|s| represents the length of string s.

Input //a = geeksforgeeks, b = forgeeksgeeks
Output: YES
Explanation //Both the string have same characters with same frequency. So, both are anagrams.


class Solution 
{
    //Function is to check whether two strings are anagram of each other or not.
    isAnagram(a, b)
    {
        // code here
     a=a.split("").sort()
    b=b.split("").sort()
    if(a.length!==b.length)
        return false;

    for(let i=0;i<a.length;i++)
        if(a[i]!==b[i])
        return false;
        
        return true;
    

         
    }
}


//Rotate Array

//Given an unsorted array arr[] of size N. Rotate the array to the left (counter-clockwise direction) by D steps, where D is a positive integer. 


Input:
N = 5, D = 2
arr= //{1,2,3,4,5}
Output// 3 4 5 1 2
Explanation// 1 2 3 4 5  when rotated by 2 elements, it becomes 3 4 5 1 2.

class Solution {
    //Function to rotate an array by d elements in counter-clockwise direction. 
    rotateArr(arr, d, n){
        // code here
     d=d%n;

        let i,final=[n];

        let j=0;

        

        for(i=d;i<n;i++)

        {

            final[j]=arr[i];

            j++;

        }

        

        for(i=0;i<d;i++)

        {

            final[j]=arr[i];

            j++;

        }

        

        for(i=0;i<n;i++)

        arr[i]=final[i];

    }

};

 

    



