//Maria plays college basketball and wants to go pro. Each season she maintains a record of her play. She tabulates the number of times 
//she breaks her season record for most points and least points in a game. Points scored in the first game establish her record for the season, 
//and she begins counting from there.
scores=[12,24,10,24]

//Scores are in the same order as the games played. She tabulates her results as follows:

                                     Count
   // Game  Score  Minimum  Maximum   Min Max
    // 0      12     12       12       0   0
   //  1      24     12       24       0   1
   //  2      10     10       24       1   1
   //  3      24     10       24       1   1
//Given the scores for a season, determine the number of times Maria breaks her records for most and least points scored during the season.

//Sample Input 0

9
//10 5 20 20 4 5 2 25 1
//Sample Output 0

//2 4

function breakingRecords(scores) {
    // Write your code here
 const results = [0, 0];
   let min = scores[0];
   let max = scores[0];
   
   for(const score of scores) {
       if(score > max) {
           max = score;
           results[0]++;
       }
       else if(score < min) {
            min = score;
            results[1]++;
       }
   }
   
   return results;
}

//Intersection of two sorted Linked lists

//Given two linked lists sorted in increasing order, create a new linked list representing the intersection of the two linked lists. 
//The new linked list should be made with without changing the original lists.

Note: //The elements of the linked list are not necessarily distinct.


Input:
LinkedList1 = //1->2->3->4->6
LinkedList2 = //2->4->6->8
Output//: 2 4 6
Explanation //For the given two linked list, 2, 4 and 6 are the elements in the intersection.

class Solution {
    
    findIntersection(head1, head2)
    {
        //your code here
        if(head1==null||head2==null)
        return null;
    let head=null;
    let curr=null;
    
    while(head1&&head2){
        let x=head1.data;
        let y=head2.data;
        if(x>y){
            head2=head2.next;
        }
        else if(y>x){
            head1=head1.next;
        }
        else{
            if(head==null){
                head=new Node(head1.data);
                curr=head;
                head1=head1.next;
                head2=head2.next;
            }
             else{
                curr.next=new Node(head1.data);
                curr=curr.next;
                head1=head1.next;
                head2=head2.next;
            }
        }
    }
    return head;
    
    }
}


//find triplet with zero sum

//Given an array arr[] of n integers. Check whether it contains a triplet that sums up to zero. 

Note: //Return 1, if there is at least one triplet following the condition else return 0.


Input: n = 5, arr = //{0, -1, 2, -3, 1}
Output//: 1
Explanation// 0, -1 and 1 forms a triplet with sum equal to 0.

class Solution {
    //Function to find triplets with zero sum.
    findTriplets(arr, n)
    {
 arr.sort((a, b) => a - b);

    // Fix the first element as arr[i]
    for (let i = 0; i < n - 2; i++) {
      let left = i + 1;
      let right = n - 1;

      while (left < right) {
        const sum = arr[i] + arr[left] + arr[right];

        if (sum === 0) {
          return 1; // Triplet found
        } else if (sum < 0) {
          left++;
        } else {
          right--;
        }
      }
    }
    return 0;
}
}
