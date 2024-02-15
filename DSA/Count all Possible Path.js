//You are presented with an undirected connected graph consisting of n vertices and connections between them represented by an adjacency matrix. 
//Your objective is to determine whether it is possible to start traversing from a node, x, and return to it after traversing all the vertices at 
//least once, using each edge exactly once.


Input: 
paths = //0 1 1 1 1
        //1 0 0 1 0
        //1 0 0 1 0
        //1 1 1 0 1
        //1 0 0 1 0
Output// 1
Explanation //One can visit the vertices in the following way:
//1->3->4->5->1->4->2->1 (assuming 1-based indexing)
//Here all the vertices has been visited and all
//paths are used exactly once.

class Solution {
    /**
    * @param number[][] paths
    
    * @returns number
    */
        isPossible(paths) {
            // code here
            for(let i=0;i<paths.length;i++){
                let su=0;
                for(let j=0;j<paths[i].length;j++){
                    if(paths[i][j]==1)su++;
                }
                if(su%2==1)return 0;
            }
            return 1;
    
        }
    }
            
    