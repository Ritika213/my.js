//Given a singly linked list, remove all the nodes in the list which have any node on their right whose value is greater. (Not just immidiate Right , but entire List on the Right)

Input:
LinkedList = //12->15->10->11->5->6->2->3
Output //15 11 6 3
Explanation: //Since, 12, 10, 5 and 2 are the elements which have greater elements
//on the following nodes. So, after deleting them, the linked list would like be 15,
11, 6, 3

class Solution {
    
    compute(head)
    {
        //your code here
      let temp=head;
        while(temp.next!=null)
        {
            if(temp.data<temp.next.data)
            {
                temp.data=temp.next.data;
                temp.next=temp.next.next;
                let temp1=head;
                {
                    while(!(temp1.next==temp.next))
                    {
                        if(temp1.data<temp.data)
                        {
                            temp1.data=temp.data;
                            temp1.next=temp.next;
                        }
                        else
                        temp1=temp1.next;
                    }
                }
            }
            else 
             temp=temp.next;
        }
        return head;
}
}


//Calculate factorial of a given number N.

Input: 5
Output: 120
Explanation: 1 * 2 * 3 * 4 * 5 - 120.

class Solution{
    find_fact(n){
        //code here
        if(n==0 || n==1) {
            return 1;
        }else{
            return n * this.find_fact(n - 1);
        }
    }
}
