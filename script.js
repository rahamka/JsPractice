// // Destructuring in JavaScript.

// const colors = ["red", "green", "yellow", "blue", "orange", "pink", "skyBlue"];

// // const [color1, color2, color3, color4, color5, color6, color7] = colors;

// // How to get the third value by skipping other values
// // example: accessing yellow color

// const [, , color3] = colors;
// console.log(color3);

// // we can set the value of array at any position using ,
// const yellowColor = [, , color3];
// console.log(yellowColor);

// // Destructuring on Objects
// const user = {
//   Name: "Raham",
//   Age: 20,
//   address: {
//     city: "Sagyoon",
//     state: "Sindh",
//   },
// };

// const {
//   Name,
//   Age,
//   address: { city },
//   address: { state },
// } = user;

// // console.log(city);
// // Note: use destructuring method like i've used and get the value of city from address

// // How to set the Name value to username variable using Destructuring.

// const {
//   Name: username,
//   Age: userAge,
//   address: { city: userCity }, // set the city value to userCity
//   address: { state: userState }, // set the state value to userState
// } = user;
// console.log(userCity);

// {
//   // Multilevel Destructuring in Objects
//   const {
//     address: { city: userCity, state: userState },
//   } = user;
//   console.log("address = ", userCity, userState);
// }

// // Direct Accessing the values of array.
// const { 3: blueColor } = colors;
// console.log(blueColor);

// // How to get the value from the Objects in Function?

// function intro({ Age: UserAge, address: { city: UserCity } }) {
//   console.log(UserAge);
//   console.log(UserCity);
// }

// intro(user);

// // How to get the value from the arrays in Objects?

// function printColors(color) {
//   const [, , , blueColor] = color;
//   console.log(blueColor);
// }

// printColors(colors);

let colors = ["red", "green", "blue"];
const [, , blue] = colors;
console.log(blue);

const user = {
  userName: "ali",
  userAge: 20,
  address: {
    userCity: "Sagyoon",
    userState: "Sindh",
  },
};

const {
  userName: Name,
  userAge: Age,
  address: { userState: State, userCity: City },
} = user;
console.log(City);

function userDataFun(user) {
  let {
    address: { userState },
  } = user;
  console.log(userState);
}

userDataFun(user);
