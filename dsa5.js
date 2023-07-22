class Student{
    static count=0;
    constructor(name,age,ph_number,marks){
      this.name=name;
      this.age=age;
      this.ph_number=ph_number;
      this.marks=marks;
      Student.increaseStudentCount();
    }
    eligible() {
    if (this.marks >= 40) {
      console.log(`${this.name} age ${this.age} is eligible`);
    } else {
      console.log(`${this.name} age ${this.age} is not eligible`);
    }
  }
  
      static increaseStudentCount(){
        Student.count++;
      }
      static printStudentCount(){
        console.log(Student.count)
      
    }
  }
  const riya=new Student("riya",18,123445,67)
  const siya=new Student("siya",13,123745,89)
  const maya=new Student("maya",17,123845,30)
  const sona=new Student("sona",16,123465,45)
  
  Student.printStudentCount();
  
  riya.eligible();
  siya.eligible();
  maya.eligible();
  sona.eligible();



  Output:

4
//riya age 18 is eligible
//siya age 13 is eligible
//maya age 17 is not eligible
//sona age 16 is eligible



//wierd mystry
class Student{
    constructor(name,age,marks){
      this.name=name;
      this.age=age;
      this.marks=marks;
    }
    setPlacementAge(minPlacementAge){
      return (minMarks)=>{
        if(this.marks>=minMarks && this.age>=minPlacementAge){
          return true;
        } else {
         return false;
        }
      }
    }
  }
  function createNewStudents(name,age,marks){
  const sonam=new Student(name,age,marks)
  
   console.log(sonam.setPlacementAge(14)(50))
  }
  
  