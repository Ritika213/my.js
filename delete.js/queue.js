class Queue{
    constructor(queue){
        this.queue = queue
        this.minpos = 0;
        this.maxpos = queue.length - 1
    }

    pushIntoQueue(value){
        // Complete this function 
        // Push the value into the queue
        this.queue.push(value);
        this.maxpos++;
    }

    popFromQueue(){
        // Complete this function
        //return the elements based on FIFO logic
        //When no elements remain to return , return -1
        if(this.minpos<=this.maxpos){
            const value=this.queue[this.minpos];
            this.minpos++;
            return value;
        } else{
            return -1;
        }
        }
        }

        function implementStack(arr){
    
            const queue1 = new Queue(arr)
            queue1.pushIntoQueue(1)
             console.log(queue1.popFromQueue())
             console.log(queue1.popFromQueue())
             console.log(queue1.popFromQueue())
             queue1.pushIntoQueue(1)
             console.log(queue1.popFromQueue())
             console.log(queue1.popFromQueue())
        }





class Queue{
    constructor(queue){
        this.queue = queue
        this.minpos = 0;
        this.maxpos = queue.length - 1
    }

    pushIntoQueue(value){
        // Complete this function 
        // Push the value into the queue
        this.queue.push(value);
        this.maxpos=this.maxpos+1;
    }

    popFromQueue(){
        // Complete this function
        //return the elements based on FIFO logic
        //When no elements remain to return , return -1
        if(this.minpos<=this.maxpos){
            const value=this.queue[this.minpos];
            this.queue[this.minpos]=undefined;
            this.minpos=this.minpos+1;
            return value;
        } else{
            return -1;
        }
        }
        }



       // Implement a Queue using an Array. Queries in the Queue are of the following type:
//(i) 1 x   (a query of this type means  pushing 'x' into the queue)
//(ii) 2     (a query of this type means to pop element from queue and print the poped element)

Input:
Q = 5
Queries = //1 2 1 3 2 1 4 2
Output//: 2 3
Explanation
//In the first test case for query 
//1 2 the queue will be {2}
//1 3 the queue will be {2 3}
//2   poped element will be 2 the 
 //   queue will be {3}
//1 4 the queue will be {3 4}
//2   poped element will be 3 


class MyQueue {
    
    constructor(){
		this.front = 0;
		this.rear = 0;
		this.arr = new Array(100005);
	}
	
	
	/**
     * @param {number} x
    */
    
	//Function to push an element x in a queue.
	push(x)
	{
	    // Your code here
	    this.arr[this.rear]=x;
	    this.rear++;
	} 
	
	/**
     * @returns {number}
    */

    //Function to pop an element from queue and return that element.
	pop()
	{
		// Your code here
		if(this.front==this.rear){
		    return -1;
		} else{
		    let temp=this.arr[this.front];
		    this.front++;
		    return temp;
		}
	} 
}


