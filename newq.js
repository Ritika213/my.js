// 1.you are playing a puzzle game ,where you have to create a number by appending 2 parts of that  number array . 
// you have given a array of integers and a number x. you have to create x by appending 2 integers in the array next to each other. 
//you have to return how many ways is possible to make x by the array elements.
   //example:input-n=4 
   //numbers[]=[1.212,12,12] 
   //x=1212. output=3,
   // explanation: we can obtainx=1212 by concatenating.
    // number[0]=1 with numbers[1]=212. 
    // numbers[2]=12 with numbers[3]=12,
    // number[3]=12  with numbers[2]=12

    let store=new Set();
    for(let j=0;j<Array.length;j++){
        store.add(arr[i])
    }
    let x="1212"
    let count=0;
    for(let i=0;i<arr.length;i++){
        if(store.has(x.slice(arr[i].length))){
            count++;
        }
    }
    console.log(count);



2.// you have given an array of size N,you have to find the index of the smaller element to the right
// which must have largest distance from that element.
//if smaller element is not present print -1 for that number return the array which these incidices
let arr = [3, 1, 5, 2, 4];
let res=new Array(arr.length).fill(-1)
for(let i=0;i<arr.length;i++){
    let j=arr.length-1;
    while(j>i){
        if(arr[j]<arr[j]){
            res[i]=j;
            break;
        }
        j--
    }
}
console.log(res)