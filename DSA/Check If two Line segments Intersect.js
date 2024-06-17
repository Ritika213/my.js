//Given the coordinates of the endpoints(p1,q1, and p2,q2) of the two line segments. Check if they intersect or not. If the Line 
//intersects return true otherwise return false.

Examples

Input: p1=(1,1), q1=(10,1), p2=(1,2), q2=(10,2)
Output: false
Explanation://The two line segments formed by p1-q1 and p2-q2 do not intersect.
Input: p1=(10,0), q1=(0,10), p2=(0,0), q2=(10,10)
Output: true
Explanation:// The two line segments formed by p1-q1 and p2-q2 intersect.
//Expected Time Complexity: O(1)
//Expected Auxillary Space: O(1)

Constraints
//-106<=X,Y(for all points)<=106

class Solution {
    /**
    * @param number[] p1
    * @param number[] q1
    * @param number[] p2
    * @param number[] q2

    * @returns number
    */
    
     fnct(x1, y1, x2, y2, x, y) {
    return (x2 - x1) * (y - y1) - (y2 - y1) * (x - x1);
}

    doIntersect(p1, q1, p2, q2) {
        
        // Calculate the determinants (orientations)
    let d1 = this.fnct(p1[0], p1[1], q1[0], q1[1], p2[0], p2[1]);
    let d2 = this.fnct(p1[0], p1[1], q1[0], q1[1], q2[0], q2[1]);
    let d3 = this.fnct(p2[0], p2[1], q2[0], q2[1], p1[0], p1[1]);
    let d4 = this.fnct(p2[0], p2[1], q2[0], q2[1], q1[0], q1[1]);

    // Check if the line segments intersect
    if ((d1 * d2 <= 0) && (d3 * d4 <= 0)) {
        return "true";
    } else {
        return "false";
    }
}
}
