let container = document.getElementById("container");
let card = document.getElementById("card");

for (let i = 1; i <= 100; i++) {
  let cardCopy = card.cloneNode(true);
  cardCopy.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i}.png`;
  cardCopy.innerHTML = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i}.png`;
  container.appendChild(cardCopy);
}

card.remove();
