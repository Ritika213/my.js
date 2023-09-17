//Consider a directed graph whose vertices are numbered from 1 to n. There is an edge from a vertex i to a 
//vertex j iff either j = i + 1 or j = 3 * i. The task is to find the minimum number of edges in a path in G from vertex 1 to vertex n.

Input:
N = 9
Output:
2
Explanation
//9 -> 3 -> 1, so number of steps are 2. 


class Solution {

    minimumStep(n){
        //code here
        let count = 0;
    while (n != 1) {
        if (n%3 == 0) n /= 3;
        else n -= 1;
        count++;
    }
    return count;
    }
}