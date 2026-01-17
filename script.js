let myData = {
  myName: "",
  myAge: "",
};

let objData = JSON.parse(localStorage.getItem("myData")) || {};

let nameInput = document.querySelector("#nameInput");
let ageInput = document.querySelector("#ageInput");

nameInput.addEventListener("input", (e) => {
  objData.myName = e.target.value;
  localStorage.setItem("myData", JSON.stringify(myData));
});

ageInput.addEventListener("input", (e) => {
  objData.myAge = e.target.value;
  localStorage.setItem("myData", JSON.stringify(myData));
});

console.log(objData);
