//Given a Binary Search Tree. Your task is to complete the function which will return the Kth largest element 
//without doing any modification in Binary Search Tree.

Input:
     // 4
   // /   \
   //2     9
k = 2 
Output: 4

class Solution {
	// return the Kth largest element in the given BST rooted at 'root'
  	kthLargest(root,K){
  		//code here
  		let temp;
        let c=0;
        while(root){
            if(root.right==null){
                if(++c==K) return root.data;
                root=root.left;
            }
            else{
                temp=root.right;
                while(temp.left && temp.left!=root){
                    temp=temp.left;
                }
                if(temp.left==null){
                    temp.left=root;
                    root=root.right;
                }
                else{
                    temp.left=null;
                    if(++c==K) return root.data;
                    root=root.left;
                }
            }
        }
        return -1;
  	}
}



//Given a number N, find the cube root of N.

//Note: We need to print the floor value of the result.

Input:
N = 3
Output:
1
Explanation
//Cube root of 3 is 1.442 = 1

function findCubeRoot(N) {
    const cubeRoot = Math.cbrt(N);
    const floorCubeRoot = Math.floor(cubeRoot);
    return floorCubeRoot;
}

// Example usage:
const N = 3;
const result = findCubeRoot(N);
console.log(result); // Output: 1



//Given a 0-indexed integer array nums of length n and an integer k, return the number of pairs (i, j) 
//where 0 <= i < j < n, such that nums[i] == nums[j] and (i * j) is divisible by k.

Input: nums = [3,1,2,2,2,1,3], k = 2
Output: 4
Explanation:
//There are 4 pairs that meet all the requirements:
//- nums[0] == nums[6], and 0 * 6 == 0, which is divisible by 2.
//- nums[2] == nums[3], and 2 * 3 == 6, which is divisible by 2.
//- nums[2] == nums[4], and 2 * 4 == 8, which is divisible by 2.
//- nums[3] == nums[4], and 3 * 4 == 12, which is divisible by 2.

var countPairs = function(nums, k) {
    let output=0;
    for(let i=0;i<nums.length;i++){
        for(let j=i+1;j<nums.length;j++){
            if(nums[i]===nums[j] && (i*j)%k===0) output++;
        }
    } 
    return output;
 };