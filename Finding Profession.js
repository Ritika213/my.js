//Consider a special family of Engineers and Doctors with following rules :

//Everybody has two children.
//First child of an Engineer is an Engineer and second child is a Doctor.
//First child of an Doctor is Doctor and second child is an Engineer.
//All generations of Doctors and Engineers start with Engineer.
//The first few levels of the family tree are shown below :


//Given level and position (pos) of a person in above ancestor tree, find profession of the person.

Examples:

Input: level = 4, pos = 2
Output: Doctor
Explaination// It is shown in the tree given in question.
Input: level = 3, pos = 4
Output: Engineer
Explaination: //Already given in the tree in question.
Constraints
//1 ≤ level ≤ 109
//1 ≤ pos ≤ 109

 class Solution {
    profession(level, pos) {
        let flip = 0;

        while (pos > 1) {
            if (pos % 2 === 0) {
                flip = 1 - flip;
            }

            pos = Math.floor((pos + 1) / 2);
        }

        return flip === 0 ? "Engineer" : "Doctor";
    }
}

