//On a 2D plane, there are n points with integer coordinates points[i] = [xi, yi]. Return the minimum time in seconds to visit all the points in
 //the order given by points.

//You can move according to these rules:

//In 1 second, you can either:
//move vertically by one unit,move horizontally by one unit, or
//move diagonally sqrt(2) units (in other words, move one unit vertically then one unit horizontally in 1 second).
//You have to visit the points in the same order as they appear in the array.
//You are allowed to pass through points that appear later in the order, but these do not count as visits.

Input: points = [[1,1],[3,4],[-1,0]]
Output: 7
Explanation //One optimal path is [1,1] -> [2,2] -> [3,3] -> [3,4] -> [2,3] -> [1,2] -> [0,1] -> [-1,0]   
//Time from [1,1] to [3,4] = 3 seconds 
//Time from [3,4] to [-1,0] = 4 seconds
//Total time = 7 seconds

var minTimeToVisitAllPoints = function(points) {

    let times = 0;
    for (let i = 1; i < points.length; ++i) {
      const p0 = points[i - 1];
      const p1 = points[i];
      times += Math.max(Math.abs(p1[0] - p0[0]), Math.abs(p1[1] - p0[1]));
    }
    return times;
    
  };

  //Brothers from diffrent roots

  //Given two BSTs containing N1 and N2 distinct nodes respectively and given a value x, your task is to complete the function countPairs(), 
  //that returns the count of all pairs of (a, b), where a belongs to one BST and b belongs to another BST, such that a + b = x.


Input:
BST1
      // 5
    // /   \
    //3     7
  // / \   / \
 // 2   4 6   8

 class Solution {
    countPair(root2, mp, countObj, x) {
       if (root2 === null) return;

       if (root2.data < x && mp[Math.abs(root2.data - x)]) countObj.count += 1;
       this.countPair(root2.left, mp, countObj, x);
       this.countPair(root2.right, mp, countObj, x);
   }

   storeInMap(root1, mp) {
       if (root1 === null) return;

       mp[root1.data] = (mp[root1.data] || 0) + 1;
       this.storeInMap(root1.left, mp);
       this.storeInMap(root1.right, mp);
   }

   countPairs(root1, root2, x) {
       //code here.
       const mp = {};
       this.storeInMap(root1, mp);
       const countObj = { count: 0 };
       this.countPair(root2, mp, countObj, x);
       return countObj.count;
   }
}

//nth node from end if the linked list

//Given a linked list consisting of L nodes and given a number N. The task is to find the Nth node from the end of the linked list.

Input:
N = 2
LinkedList: //1->2->3->4->5->6->7->8->9
Output: 8
Explanation //In the first example, there are 9 nodes in linked list and we need to find 2nd node from end. 2nd node from end is 8. 

class Solution {
    //Function to find the data of nth node from the end of a linked list
    getNthFromLast(head, n)
    {
        //your code here
        if(!head)
        return -1 ;
    let size = 0 ;
    let temp = head ;
    while(temp){
       size++ ;
       temp = temp.next ;
    }
    temp = head ;
    if(n > size)
        return -1 ;
    let pos = size - n + 1 ;  //position from front
    let i = 1 ;
    while(i != pos){
       temp = temp.next ;
       i++ ;
    }
    return temp.data ;
    }
    
}



 