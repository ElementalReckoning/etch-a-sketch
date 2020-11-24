let container = document.getElementById("container");
let modalBtn = document.getElementById("modalBtn");
let modal0 = document.getElementById("myModal0");
let div0 = document.querySelectorAll("div");
let btn = document.getElementById("btn");
let rows = 16;
let cols = rows;






function createGrid(rows, cols) {
  container.style.setProperty("--grid-row", rows);
  container.style.setProperty("--grid-col", cols);
  for (i = 0; i < (rows * cols); i++) {
    let grid = document.createElement("div");
    grid.addEventListener("mouseover", function colorGrid() {
      grid.style.backgroundColor = "green";
    });
    /*grid.innerText = (i + 1);*/
    container.appendChild(grid).className = "grid-item";
  };
};

btn.onclick = function(e) {
  if (e.target == btn) {
    let newGrid = prompt("What is the size of your new grid?");
    let cols = newGrid;
  }
}


createGrid( rows, cols);