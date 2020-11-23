let container = document.getElementById("container");
let modalBtn = document.getElementById("modalBtn");
let modal0 = document.getElementById("myModal0");
let div0 = document.querySelectorAll("div");
let rows = document.getElementById("input0");
/*let cols = document.getElementById("input0")*/


function createGrid(rows, cols) {
  container.style.setProperty("--grid-row", rows);
  container.style.setProperty("--grid-col", cols);
  for (i = 0; i < (rows * cols); i++) {
    let grid = document.createElement("div");
    grid.addEventListener("mouseover", function colorGrid() {
      grid.style.backgroundColor = "green";
    });
    grid.innerText = (i + 1);
    container.appendChild(grid).className = "grid-item";
  };
};

function getValue() {
  let inputVal = document.getElementById("input0").value;
}


createGrid( 5, 5);