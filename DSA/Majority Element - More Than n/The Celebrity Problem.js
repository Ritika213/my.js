//A celebrity is a person who is known to all but does not know anyone at a party. A party is being organized by some people. 
//A square matrix mat[][] of size n*n is used to represent people at the party such that if an element of row i and column j is set
// to 1 it means ith person knows jth person. You need to return the index of the celebrity in the party, if the celebrity does not
 // exist, return -1.

Note: //Follow 0-based indexing.

Examples:

Input: mat = [[1, 1, 0],
                [0, 1, 0],
                [0, 1, 1]]
Output: 1
Explanation:// 0th and 2nd person both know 1st person and 1st person does not know anyone. Therefore, 1 is the celebrity person.
Input: mat = [[1, 1], 
                [1, 1]]
Output: -1
Explanation// Since both the people at the party know each other. Hence none of them is a celebrity person.

Input: mat = [[1]]
Output: 0
Constraints:
//1 ≤ mat.size() ≤ 1000
//0 ≤ mat[i][j] ≤ 1
mat[i][i] = 1


class Solution {
    celebrity(mat) {
        
         let ans=-1,j=0,n=mat.length;
        
        for(let i=0;i<n;i++){
            // checking for Celebrity if it doesn't know anyone.
            for(j=0;j<n;j++){
                if(i!=j && mat[i][j]==1)break;
            }
            
            if(j===n){ // means it could be a Celebrity 
                for(j=0;j<n;j++){
                    if(i!=j && mat[j][i]==0)break; // means someone doesn't know this i'th Celebrity 
                }
                if(j===n){ // means every one knows the it'h Celebrity
                    ans=i;
                    break;
                } 
                
            }
        }
        
        return ans;
    }
}