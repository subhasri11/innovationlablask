const student = {
  name: "Jane Doe",
  age: 20,
  major: "Computer Science",
  displayInfo: function() {
    console.log(`Student Name: ${this.name}`);
    console.log(`Age: ${this.age}`);
    console.log(`Major: ${this.major}`);
  }
};

student.displayInfo();

console.log(`The student's name is: ${student.name}`);

student.age = 21;
console.log(`The student's new age is: ${student.age}`);

student.displayInfo();

student.gpa = 3.8;
student.updateMajor = function(newMajor) {
  this.major = newMajor;
  console.log(`Major updated to: ${this.major}`);
};

student.displayInfo();
student.updateMajor("Data Science");
student.displayInfo();