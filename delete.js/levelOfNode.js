//Given an integer X and an undirected acyclic graph with V nodes, labeled from 0 to V-1, and E edges, find the level of node labeled as X.

//Level is the minimum number of edges you must travel from the node 0 to some target.

//If there doesn't exists such a node that is labeled as X, return -1.


Input // 0
     // / \
   // 1     2
  // /  \    \
 //3     4    5

 x=4;
 output=2

 class Solution 
{
    //Function to find the level of node X.
    nodeLevel(V, adj, X)
    {
        // code here
        let vis = new Array(adj.length).fill(0);
    let queue = [];
    
    queue.push(0);
    vis[0] = 1;
    let level = 0;
    
    while(queue.length > 0) {
        let n = queue.length;
        
        for(let i = 0; i < n; i++) {
            let p = queue.shift();
            
            if(p === X)
                return level;
                
            for(let j = 0; j < adj[p].length; j++) {
                let nei = adj[p][j];
                if(!vis[nei]) {
                    vis[nei] = 1;
                    queue.push(nei);
                }
            }
        } 
        
        level++;
    }
    
    return -1;

    }
}



Callback 



function create3rdPost(callback) {
    setTimeout( () => {
        console.log('Post Three')
        //If callback function is passed call it
        if(callback){
            callback();
        }
    }, 3000)
}

function create4thPost(callback) {
    setTimeout( () => {
        console.log('Post Four')
        if(callback){
         callback()
        }    
    }, 2000);
}
function create5thPost() {
    setTimeout( () => {
        console.log('Post Five')
    }, 1000);
}

create3rdPost(() => {
    create4thPost(() => {
        create5thPost();
    });
});


Promise=createPromise


const posts = [{title: 'POST1'},{title: 'POST2'}];

// Do not touch the following function
function printPost() {
        posts.forEach((post) => {
            console.log(post.title)
        })
}
// Do not touch the following function
function create3rdPost() {
    return new Promise( (resolve, reject) => {
        setTimeout( () => {
            posts.push({title: 'POST3'});
            resolve()
        }, 3000)
    }) 
}
// Do not touch the following function
function create4thPost() {
    return new Promise( (resolve, reject) => {
        setTimeout( () => {
            posts.push({title: 'POST4'});
            resolve();
        }, 2000)
    }) 
}
// Complete the following function 
//It should add POST5 to posts array with setTimeout of 1 second
function create5thPost(){
    //should return a promise
  return new Promise((resolve, reject)=>{
    setTimeout(()=>{
        posts.push({title: 'POST5'});
        resolve()
    },1000)
  })
}

// The following 4 lines need to be fixed too
create3rdPost().then(create4thPost).then(create5thPost).then(printPost)




