//You are given an array of strings words and a string chars.

//A string is good if it can be formed by characters from chars (each character can only be used once).

//Return the sum of lengths of all good strings in words.

Input: words = ["cat","bt","hat","tree"], chars = "atach"
Output: 6
Explanation: //The strings that can be formed are "cat" and "hat" so the answer is 3 + 3 = 6.

Input: words = ["hello","world","leetcode"], chars = "welldonehoneyr"
Output: 10
Explanation //The strings that can be formed are "hello" and "world" so the answer is 5 + 5 = 10.

var countCharacters = function(words, chars) {
    let count = 0
    const map = {}
    
    for(const letter of chars) {
        if(map[letter]) {
            map[letter] += 1
        } else {
            map[letter] = 1
        }
    }
    
    for(const word of words) {
        const mapCopy = {...map}
        let flag = true
        for(const letter of word) {
            if(!mapCopy[letter]) {
                flag = false
                break
            }
            mapCopy[letter] -= 1
        }
        
        if(flag) {
            count += word.length
        }
    }
    
    return count
 
};

//inorder traversal and BST

//Given an array arr of size N, determine whether this array represents an inorder traversal of a BST. 

Note:// All keys in BST must be unique.


Input:
N = 3
arr =// {2, 4, 5}
Output// 1
Explaination 
//Given array is inorder traversal for the following tree:
   // 4
  // / \
 // 2   5

 class Solution{

     isRepresentingBST( arr,  N){
        
        for(let i=0;i<N-1;i++){
            if(arr[i]>=arr[i+1]) return 0;
        }
        return 1;
    }
};


//Majority Element

//Given an array A of N elements. Find the majority element in the array. A majority element in an array A of size N is an element that 
//appears strictly more than N/2 times in the array.
 

Input:
N = 3 
A =// {1,2,3} 
Output
-1
Explanation//Since, each element in {1,2,3} appears only once so there is no majority element.

class Solution {
    
    majorityElement(a, size)
    {
        //your code here
        let cnt=0, element ;
       for(let i=0;i<size;i++){
           if(cnt==0){
               element = a[i];
           }
           
           if(element == a[i]){
               cnt++;
           }else{
               cnt--;
           }
       }
       // majority occuring elemnet is in element
       let cntElement=0;
       for(let i=0;i<size;i++){
           if(a[i]==element){
               cntElement++;
           }
           
           if(cntElement > size/2)
            return element;
       }
        return -1;
    
    }
}