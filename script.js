// how to create a copy of any element and append/prepend it
// in a any container.

// let container = document.querySelector(".div");
let h2 = document.getElementById("heading");

container.appendChild(h2); // it append element directly.
container.appendChild(h2.cloneNode(true)); // first it creates the copy of that element and then append in the container.
container.appendChild(h2.cloneNode()); // if you'll not use true inside the cloneNode it will not give you complete copy i'll give only the tags closing and opening.
// Note: i will not append this element from there position to container
// but i'll append this element in container by making a copy of that element.

let element = document.getElementById("card");
let container = document.querySelector(".div");

for (let i = 1; i <= 100; i++) {
  container.appendChild(element.cloneNode(true));
}

console.log(container);

// completed 99 lecture 29:00
console.log("object");
