let columnSize = 4;
let cards = 30;
const grid_div = document.querySelector(".grid");

grid_div.setAttribute(
  "style",
  `grid-template-columns: repeat(${columnSize}, 1fr)`
);
grid_div.innerHTML = "";

function makeCards(number) {
  const cards = number;

  for (let i = 0; i < cards; i++) {
    let grid_item = document.createElement("div");
    grid_item.classList.add("card");

    grid_item.setAttribute(
      "style",
      `
        grid-column: span ${Math.floor(Math.random() * columnSize) + 1};
        grid-row: span ${Math.floor(Math.random() * 3) + 1};
      `
    );

    grid_div.appendChild(grid_item);
  }
}

makeCards(cards);

/*
const numberBtn = document.querySelectorAll("[data-number]");

numberBtn.forEach((button) => {
  button.addEventListener("click", () => {
    let columnSize = numberBtn.innerHTML;
    console.log(columnSize);
    console.log("Hello");
  });
});
*/
