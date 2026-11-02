function create3rdPost(callback){
    setTimeout(()=>{
        console.log('post Three')
        if(callback){
            callback()
        }
    }),2000
}

function create4thPost(){
    setTimeout(()=>{
        console.log('post Fourth')
    },1000)
}
    
create3rdPost(create4thPost)
    

