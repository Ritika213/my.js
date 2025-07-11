//Given a list of dominoes, dominoes[i] = [a, b] is equivalent to dominoes[j] = [c, d] if and only if either (a == c and b == d), or 
//(a == d and b == c) - that is, one domino can be rotated to be equal to another domino.

//Return the number of pairs (i, j) for which 0 <= i < j < dominoes.length, and dominoes[i] is equivalent to dominoes[j].

 

//Example 1:

Input: dominoes = [[1,2],[2,1],[3,4],[5,6]]
Output: 1
//Example 2:

Input: dominoes = [[1,2],[1,2],[1,1],[1,2],[2,2]]
Output: 3
 

Constraints:

1 <= dominoes.length <= 4 * 104
dominoes[i].length == 2
1 <= dominoes[i][j] <= 9

var numEquivDominoPairs = function(dominoes) {

    var result = 0;
    var map = new Map();
    var key;
    
    for (var domino of dominoes) {
        if (domino[0] > domino[1]) {
            key = domino[0] + ":" + domino[1];
        } else {
            key = domino[1] + ":" + domino[0];
        }
        
        if (map.has(key)) {
            result += map.get(key);
        }
        
        map.set(key, (map.get(key) || 0) + 1);
    }
    
    return result;
   
};