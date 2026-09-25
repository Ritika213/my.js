//A string of length 4 is called an echo if S1 = S3 and S2 = S4 
//Here, we are using 1-indexing.

//given a string of length 4. Check if it is an echo.

//Input Format

//The first and only line of input will contain a single string S of length 4.

//Output Format

//Print Yes if S is an echo, and No otherwise.

//Each character of the output may be printed in either uppercase or lowercase, i.e. the strings NO, No, nO,
//  and no will be treated as equivalent.

//Constraints

//S has length 4

//S consists of only lowercase English letters, i.e. the characters a, b, c, ..., z.

//Sample 1:
Input
Output
meme
Yes
Explanation:
//The first and third characters of meme are both equal (to m), and its second and fourth characters are also
//  both equal (to e).
//So, meme is an echo.

//Sample 2:
Input
Output
ever
No
Explanation
//The second character of ever is v, while its fourth character is r. These are not equal, so ever is not an echo.


//  code goes here
const fs = require('fs');

const S = fs.readFileSync(0, 'utf8').trim();

if (S[0] === S[2] && S[1] === S[3]) {
    console.log("Yes");
} else {
    console.log("No");
}
