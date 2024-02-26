//Given a string s of length n, find all the possible subsequences of the string s in lexicographically-sorted order.


Input : 
s = "abc"
Output: 
//a ab abc ac b bc c
Explanation //There are a total 7 number of subsequences possible for the given string, and they are mentioned above in lexicgraphically sorted order.


class Solution {

    AllPossibleStrings(s){
        
        let result=[]
        let n= s.length;
        for(let i=1;i<(1 << n);i++){
            let c= '';
            for(let j=0;j<n;j++){
                if((i & (1 << j)) >0)
                c +=(s[j])
            }
            if(c.length >0)
            result.push(c)
        }
        result.sort()
        return result;
    }
}