//Alice and Bob are playing a game. Initially, Alice has a string word = "a".

//given a positive integer k.

//Now Bob will ask Alice to perform the following operation forever:

//Generate a new string by changing each character in word to its next character in the English alphabet, and append it to the original word.
//For example, performing the operation on "c" generates "cd" and performing the operation on "zb" generates "zbac".

//Return the value of the kth character in word, after enough operations have been done for word to have at least k characters.

 

//Example 1:

Input: k = 5

Output: "b"

Explanation

//Initially, word = "a". We need to do the operation three times:

//Generated string is "b", word becomes "ab".
//Generated string is "bc", word becomes "abbc".
//Generated string is "bccd", word becomes "abbcbccd".
//Example 2:

Input: k = 10

Output: "c"

 

Constraints:

1 <= k <= 500


var kthCharacter = function(k) {
  const res = [0];
  while(k > res.length){
    for(let i=0,n=res.length;i<n;i++){
        res.push(res[i] +1)
    }
  }
  return String.fromCharCode(res[k-1] % 26 + 'a'.charCodeAt(0))
};