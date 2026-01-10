let container = document.getElementById("container");
let card = document.getElementById("card");

for (let i = 1; i <= 1; i++) {
  let newContainer = document.createElement("div");
  let num = document.createElement("p");
  num.innerText = i;
  newContainer.prepend(num);
  let cardCopy = card.cloneNode(true);
  cardCopy.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i}.png`;
  cardCopy.id = `id-${i}`;
  newContainer.appendChild(cardCopy);
  newContainer.classList.add("newContainer");
  container.appendChild(newContainer);
}

let el1 = document.getElementById("id-1");
let clickCounter = 1;
el1.addEventListener("click", () => {
  clickCounter++;
  let newContainer = document.createElement("div");
  let num = document.createElement("p");
  num.innerText = clickCounter;
  newContainer.prepend(num);
  let cardCopy = card.cloneNode(true);
  cardCopy.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${clickCounter}.png`;
  cardCopy.id = `id-${clickCounter}`;
  newContainer.appendChild(cardCopy);
  newContainer.classList.add("newContainer");
  container.appendChild(newContainer);
});

function sayHii() {
  console.log("Hii");
}

setTimeout(sayHii, 2000);
