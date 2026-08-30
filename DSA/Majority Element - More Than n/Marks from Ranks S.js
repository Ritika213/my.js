//Consider an input where all marks obtained are divided into intervals of consecutive numbers represented
// as l[] and r[] where l[i] and r[i] represent the starting and ending marks (inclusive) of the i-th interval. 

//The intervals are sorted in increasing order and do not overlap.
//The rank of a mark is defined by its position among all valid marks in increasing order, with the smallest
//  mark assigned rank 1, the next smallest rank 2, and so on.
//Given an array rank[]. for each value in rank[], find the corresponding mark and return as an array.

Examples:

Input: l = [1, 6, 14], r = [3, 9, 15], rank = [2, 5, 8]
Output: [2, 7, 14]
Explanation //The valid marks are 1, 2, 3, 6, 7, 8, 9, 14, 15. Their corresponding ranks are 1 to 9 as there 
//are 9 distinct marks. Therefore, rank 2 corresponds to mark 2, rank 5 corresponds to mark 7, and rank 8 
// corresponds to mark 14.

/**
 * @param {number[]} l
 * @param {number[]} r
 * @param {number[]} rank
 * @returns {number[]}
 */
class Solution {
    getMarks(l, r, rank) {
        
        let temp=[];

        for(let i=0;i<l.length;i++){
            let low = l[i];
            let high = r[i];

            for(let j=low;j<=high;j++){
                temp.push(j);
            }
        }

        let ans=[];
        for(let i=0;i<rank.length;i++){
            let pos=rank[i]-1;

            ans.push(temp[pos]);
        }

        return ans;
    }
}