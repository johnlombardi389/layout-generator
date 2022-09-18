const DEFAULT_CARDS = 2;
const DEFAULT_COLUMNS = 3;

let cards = DEFAULT_CARDS;
let cols = DEFAULT_COLUMNS;

const grid_div = document.querySelector(".grid");
grid_div.setAttribute("style", `grid-template-columns: repeat(${cols}, 1fr)`);
grid_div.innerHTML = "";
