//Given a linked list. Print all the elements of the linked list.

Note :- //End of Line is handled by driver code itself. You just have to end with a single space.



Input
LinkedList : //1 -> 2
Output:
//1 2
Explanation
//The linked list contains two elements 1 and 2.The elements are printed in a single line.

Input:
//Linked List : 49 -> 10 -> 30
Output: 
//49 10 30
Explanation:
//The linked list contains 3 elements 49, 10 and 30. The elements are printed in a single line.
 task
//don't need to read input or print anything. Your task is to complete the function display() which takes the head of the linked 
//list as input and prints the linked list in a single line.
 
//Expected Time Complexity : O(n)
//Expected Auxiliary Space : O(1)
 
Constraints 
//1 <= (n = length of linked list) <= 105
//1 <= node values <= 106

let currentNode = head;
    while (currentNode !== null) {
      process.stdout.write(currentNode.data + ' ');
      currentNode = currentNode.next;
    }
    console.log(); 