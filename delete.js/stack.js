//Write a program to implement a Stack using Array. Your task is to use the class as shown in the comments 
//in the code editor and complete the functions push() and pop() to implement a stack. 
Input: 
push(2)
push(3)
pop()
push(4) 
pop()
Output: 3, 4
Explanation: 
push(2)    //the stack will be {2}
push(3)    //the stack will be {2 3}
pop()      //poped element will be 3,
           //the stack will be {2}
push(4)    //the stack will be {2 4}
pop()      //poped element will be 4

MyStack.prototype.push = function(x) 
{
    // code here
    this.top++;
    this.arr[this.top]=x;
}


/**
 * @returns {number} 
*/
//Function to remove an item from top of the stack.
MyStack.prototype.pop = function()
{
    // code here
    if(this.top!=-1){
        let ans=this.arr[this.top];
        this.top--;
        return ans;
    }
    else 
    return -1;
}



//Given a linked list. Print all the elements of the linked list.

Note :- //End of Line is handled by driver code itself. You just have to end with a single space.
Input
N=2
LinkedList=[1 , 2]
Output:
//1 2
Explanation
//The linked list contains two 
//elements 1 and 2.The elements 
//are printed in a single line.

class Solution {
    display(head){
      //code here
      let currentNode = head;
      while (currentNode !== null) {
        process.stdout.write(currentNode.data + ' ');
        currentNode = currentNode.next;
      }
      console.log(); // Add a newline character after printing all elements
    
      
    }
  }
