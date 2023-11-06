//given the string S check if  it is palindrome or not

//input s= "abba"
output:1
//explanation - s is palindrome

class solution{
    ispalindrome(s){
let m= s.length;
let i=0 , j=m-1;

while(i<j){
    if(s[i++] !=s[j--]){
        return 0;
    }
    return 1;
}
}
}