//You will be given an array arr of integers of length N. You can construct an integer from two integers by treating the integers as strings, 
//and then concatenating them. For example, 19 and 4 can be used to construct 194 and 419.

//The task is to find whether it’s possible to construct an integer using all the digits of these numbers such that it would be divisible by 3.
//If it is possible then print 1 and if not print 0.

Input: N = 3
arr = //{40, 50, 90}
Output// 1
Explanation //One such number is 405090.


class Solution {
    isPossible(N, arr) {
        // code here
        let ans=0;
        for(let i=0;i<N;i++){
            ans+=Math.floor(arr[i]%3)
        }
        return ans%3==0 ? 1:0;
    }
}


//lets make and break promise

function create1stBlog() {
    return new Promise( (resolve, reject) => {
        setTimeout( () => {
            blogs.push({title: 'BLOG1'});
            resolve();
        }, 3000)
    }) 
}

//Do not touch these functions below at all
function create2ndBlog() {
    return new Promise( (resolve, reject) => {
        setTimeout( () => {
            blogs.push({title: 'BLOG2'});
            resolve()
        }, 2000)
    }) 
}


function deleteBlog(){
   //complete this function such that it removes the last element from the blog Array and resolves the deleted blog in 1 second timeout
   //If no blog present , it breaks the promise with ERROR (reject) in 1 second timeout
   return new Promise((resolve, reject)=>{
    setTimeout(()=>{
        if(blogs.length>0){
            const poppedElement=blogs.pop();
            resolve(poppedElement);
        } else{
            reject('ERROR')
        }
    },1000)
   })
}

//Call the function in the right way so that we can get the desired output
create1stBlog().then(()=>{
    create2ndBlog().then(()=>{
        deleteBlog().then((delete1)=>{
            console.log(delete1.title)
            deleteBlog().then((delete2)=>{
                console.log(delete2.title)
                deleteBlog().catch((msg)=>console.log(msg))
                deleteBlog().then((delete3)=>{
                    console.log(delete3.title)
                })
            })
        })
    })
})
    
