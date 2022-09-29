const grid_div = document.querySelector(".grid");

// set amount of cards when loading page
for (let i = 0; i < 30; i++) {
  const grid_item = document.createElement("div");
  grid_item.classList.add("card");
  grid_div.appendChild(grid_item);
  grid_item.setAttribute(
    "style",
    `
      grid-column: span ${Math.floor(Math.random() * 3) + 1};
      grid-row: span ${Math.floor(Math.random() * 3) + 1};
    `
  );
}

// get and display slider value
document.getElementById("slider").oninput = function () {
  sliderValue();
};

function sliderValue() {
  const val = document.getElementById("slider").value;
  document.getElementById("sliderValue").innerHTML = `${val} Columns`;
}
sliderValue();

// generate button using slider value
const generate_btn = document.querySelector(".btn");

generate_btn.addEventListener("click", (e) => {
  const colsSize = parseInt(document.getElementById("sliderValue").innerHTML);
  makeCards(colsSize);
  console.log(colsSize);
});

// generate cards with chosen column values
function makeCards(cols) {
  grid_div.innerHTML = "";
  grid_div.classList.remove("cards");
  grid_div.setAttribute("style", `grid-template-columns: repeat(${cols}, 1fr)`);
  for (let i = 0; i < cols; i++) {
    const grid_item = document.createElement("div");
    grid_item.classList.add("card");

    grid_item.setAttribute(
      "style",
      `
        grid-column: span ${Math.floor(Math.random() * cols) + 1};
        grid-row: span ${Math.floor(Math.random() * 3) + 1};
      `
    );

    grid_div.appendChild(grid_item);
  }

  for (let i = 0; i < 30; i++) {
    const grid_item = document.createElement("div");
    grid_item.classList.add("card");
    grid_div.appendChild(grid_item);
    grid_item.setAttribute(
      "style",
      `
        grid-column: span ${Math.floor(Math.random() * 3) + 1};
        grid-row: span ${Math.floor(Math.random() * 3) + 1};
      `
    );
  }
}

// toggle light and dark theme
const toggleSun = document.getElementById("toggleDark");
const toggleMoon = document.getElementById("toggleLight");
const body = document.querySelector("body");
const colText = document.getElementById("sliderValue");

toggleSun.addEventListener("click", (e) => {
  toggleSun.classList.toggle("hide");
  toggleMoon.classList.toggle("hide");
  body.style.backgroundColor = "var(--clr-white)";
  colText.style.color = "var(--clr-darkest)";
});

toggleMoon.addEventListener("click", (e) => {
  toggleSun.classList.toggle("hide");
  toggleMoon.classList.toggle("hide");
  body.style.backgroundColor = "var(--clr-darkest)";
  colText.style.color = "var(--clr-white)";
});
