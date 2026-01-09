let container = document.getElementById("container");
let card = document.getElementById("card");

for (let i = 1; i <= 100; i++) {
  let num = document.createElement("p");
  num.innerText = i;
  let cardCopy = card.cloneNode(true);
  let newContainer = document.createElement("div");
  newContainer.id = "newContainer";
  newContainer.prepend(num);
  cardCopy.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i}.png`;
  newContainer.appendChild(cardCopy);
  container.appendChild(newContainer);
}

card.remove();
