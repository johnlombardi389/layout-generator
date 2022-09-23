let cards = 50;
const cols_slider = document.querySelector(".slider").value;
const grid_div = document.querySelector(".grid");

grid_div.setAttribute(
  "style",
  `grid-template-columns: repeat(${cols_slider.value}, 1fr)`
);
grid_div.innerHTML = "";

function makeCards(cards) {
  for (let i = 0; i < cards; i++) {
    let grid_item = document.createElement("div");
    grid_item.classList.add("card");

    grid_item.setAttribute(
      "style",
      `
        grid-column: span ${Math.floor(Math.random() * cards) + 1};
        grid-row: span ${Math.floor(Math.random() * 3) + 1};
      `
    );

    grid_div.appendChild(grid_item);
  }
}

const generate_btn = document.querySelector(".btn");

generate_btn.addEventListener("click", (e) => {
  makeCards(cards);
  makeCols(cols_slider);
});

// get slider value
document.getElementById("slider").oninput = function () {
  sliderValue();
};

function sliderValue() {
  const val = document.getElementById("slider").value;
  document.getElementById("sliderValue").innerHTML = val;
  console.log(val);
}
sliderValue();
