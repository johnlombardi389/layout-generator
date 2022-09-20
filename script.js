/*
for (let i = 0; 1 < cards; i++) {
  const grid_item = document.createElement("div");
  grid_item.classList.add("card");

  grid_item.setAttribute(
    "style",
    `
      grid-column: span ${Math.floor(Math.random() * columnCount) + 1};
      grid-row: span ${Math.floor(Math.random() * 3) + 1};
    `
  );

  grid_div.appendChild(grid_item);
}
*/

const grid_div = document.querySelector(".grid");

function makeCards(number) {
  const cards = number;

  for (let i = 0; i < cards; i++) {
    let grid_item = document.createElement("div");
    grid_item.classList.add("card");
    grid_div.appendChild(grid_item);
  }
}

makeCards(10);
