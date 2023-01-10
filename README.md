# Layout Generator Tool

![Screenshot](/images/layoutGenImg.png)

## Table of contents

- [Overview](#overview)
  - [Links](#links)
- [My process](#my-process)
  - [Tools](#tools)
  - [What I learned](#what-i-learned)
  - [Example Code](#example-code)
- [Author](#author)

## Overview

My goal for this project was creating a tool that both developers and designers can use for inspiration in creating websites. The tool utilizes JavaScript and CSS Grid to update the page and manipulate the layout based on the user's selected input. Each time the layout generated is completely random, making it easy for users to experiment with different layout options and quickly achieve the desired design for their website. The user can adjust the number of columns giving them more precise control over the layout of their website. This is a tool for developers and designers who want to quickly prototype and experiment with different layout options without having to write a lot of code from scratch.

![Screenshot](/images/sixColsImg.png)

### Links

- Live Site URL: [Layout Generator Tool](https://johnlombardi389.github.io/layout-generator/)

---

## My process

### Tools

- JavaScript
- CSS
- HTML
- Git
- Figma

### What I learned

- How to generate random values that can be inserted into CSS
- Designing a slider input that looks the same on all browsers
- A better understanding of JavaScript's classList.add, remove, and toggle, as well as setAttribute to change the style of CSS elements

### Example Code

The function that was built to generate each card for the layout:

```javascript
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
```

---

## Author

John Lombardi

- [Portfolio](https://johnlombardi389.github.io/portfolio/)
- [LinkedIn](https://www.linkedin.com/in/johnlombardi389/)
- [GitHub](https://github.com/johnlombardi389)
