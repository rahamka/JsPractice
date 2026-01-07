// // Problem 1

// let studentData = ["Ahmad", "Ali", "Wali", "Shoaib", "Nisar"];

// function studentFun(allStudents, studentName) {
//   studentName = studentName.toLowerCase();
//   allStudents = [...allStudents];
//   let finalVal = "";
//   allStudents = allStudents.map((val) => val.toLowerCase());
//   if (allStudents.includes(studentName)) {
//     finalVal = "Found";
//   } else {
//     finalVal = "Not Found";
//   }
//   console.log(finalVal);
// }

// studentFun(studentData, "Wali");

// Problem 2

const groceries = ["bread", "milk", "eggs", "flour", "choose", "sugar"];
let finalVal2 = "";
finalVal2 = groceries.some((val) => val == "choose");
if (finalVal2 == true) {
  console.log("Found");
} else {
  console.log("Not Found");
}
