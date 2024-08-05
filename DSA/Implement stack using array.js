//Write a program to implement a Stack using Array. Your task is to use the class as shown in the comments in the code editor and complete 
//the functions push() and pop() to implement a stack. The push() method takes one argument, an integer 'x' to be pushed into the stack and pop()
// which returns an integer present at the top and popped out from the stack. If the stack is empty then return -1 from the pop() method.

Note //The input is given in form of queries. Since there are two operations push() and pop(), there is two types of queries as described below:
//(i) 1 x   (a query of this type means  pushing 'x' into the stack)
//(ii) 2     (a query of this type means to pop an element from the stack and print the popped element)
//Input contains separated by space and as described above. 

Examples :

Input:// 1 2 1 3 2 1 4 2 
Output: 3, 4
Explanation: 
push(2)   // the stack will be {2}
push(3)   // the stack will be {2 3}
pop()     // poped element will be 3,
          // the stack will be {2}
push(4)   // the stack will be {2 4}
pop()     // poped element will be 4
Input:// 2 1 4 1 5 2
Output: -1, 5
//Expected Time Complexity: O(1)
//Expected Space Complexity: O(1)

Constraints:
//1 <= numbers of calls made to push, pop <= 100
1 <= x <= 100

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