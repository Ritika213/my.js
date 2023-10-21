//Given a positive integer N., The task is to find the value of    \sum_{i=1}^{i=n} F(i)  where function F(i) for the number i
// is defined as the sum of all divisors of i.

Input:
N = 4
Output:
15
Explanation:
F(1) = 1
F(2) = //1 + 2 = 3
F(3) =// 1 + 3 = 4
F(4) =// 1 + 2 + 4 = 7
ans = F(1) + F(2) + F(3) + F(4)
   // = 1 + 3 + 4 + 7
   // = 15


   class Solution{

    sumOfDivisors( N){
        let sum = 0;
        for(let i = 1; i <= N; i++){
            if(N == 0)
             return 0;
             sum += (N / i) * i;
        }
        return sum;
    }
};

//break Promise


function create2ndPost() {
    return new Promise( (resolve, reject) => {
        setTimeout( () => {
            posts.push({title: 'POST2'});
            resolve()
        }, 3000)
    }) 
}
function create3rPost() {
    return new Promise( (resolve, reject) => {
        setTimeout( () => {
            posts.push({title: 'POST3'});
            resolve();
        }, 2000)
    }) 
}


function deletePost(){
    return new Promise((resolve, reject) => {
        setTimeout( () => {
            if(posts.length > 0){
                const poppedElement  = posts.pop();
                resolve(poppedElement);
            } else {
                reject("ERROR: ARRAY IS EMPTY")
            }
        }, 1000)
    })
}
create2ndPost()
    .then(() => deletePost())
    .then((msg) => {
        console.log(msg.title);
        return create3rPost();
    })
    .then(() => deletePost())
    .then((msg) => {
        console.log(msg.title);
        return deletePost();
    })
    .then((msg) => {
        console.log(msg.title);
        return deletePost();
    })
    .catch((msg) => {
        console.log(msg);
    });
