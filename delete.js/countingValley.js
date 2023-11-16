//An avid hiker keeps meticulous records of their hikes. During the last hike that took exactly  steps, for every step it was noted if it was 
//an uphill, , or a downhill,  step. Hikes always start and end at sea level, and each step up or down represents a  unit change in altitude. 
//We define the following terms:

//A mountain is a sequence of consecutive steps above sea level, starting with a step up from sea level and ending with a step down to sea level.
//A valley is a sequence of consecutive steps below sea level, starting with a step down from sea level and ending with a step up to sea level.
//Given the sequence of up and down steps during a hike, find and print the number of valleys walked through.

//Sample Input

8
UDDDUDUU
//Sample Output

1
Explanation

//If we represent _ as sea level, a step up as /, and a step down as \, the hike can be drawn as:

//_/\      _
//   \    /
 //   \/\/
//The hiker enters and leaves one valley.

function countingValleys(steps, path) {
    // Write your code here
let seaLevel = 0;
    let valley = 0;
    for(let i=0;i<path.length;i++){
        if(path[i]=='U'){
            seaLevel++;
            if(seaLevel == 0){
                valley++;
            }
        }
        if(path[i] == 'D'){
            seaLevel--;
        }
    }
    return valley;
}


//find unique binary string

//Given an array of strings nums containing n unique binary strings each of length n, return a binary string of length n that does not appear 
//in nums. If there are multiple answers, you may return any of them.

Input: nums = ["01","10"]
Output: "11"
Explanation //"11" does not appear in nums. "00" would also be correct.

var findDifferentBinaryString = function(nums) {
    let temp="";
 for(let i=0; i<nums.length;i++){
   if(nums[i][i]=='1'){
     temp+='0';
   }
   else{
     temp+='1';
   }
 }
 return temp; 
};

//value equal to index value

//Given an array Arr of N positive integers. Your task is to find the elements whose value is equal to that of its index value 
//( Consider 1-based indexing ).

Note: //There can be more than one element in the array which have the same value as its index. You need to include every such element's index.
// Follows 1-based indexing of the array.

Input:
N = 5
Arr = //{15, 2, 45, 12, 7}
Output //2
Explanation //Only Arr[2] = 2 exists here.

class Solution{
    valueEqualToIndex(arr,n){
        //code here
        let result=[];
	        for(let i = 0; i < n; i++ )
	        {
	            if( arr[i] == i+1)
	                result.push(i+1);
	        }
	        return result;
	    }
};
