let container = document.getElementById("container");
let modal0 = document.getElementById("modal0");


function createGrid(rows, cols) {
  container.style.setProperty("--grid-row", rows);
  container.style.setProperty("--grid-col", cols);
  for (i = 0; i < (rows * cols); i++) {
    let grid = document.createElement("div");
    grid.innerText = (i + 1);
    container.appendChild(grid).className = "grid-item";
  };
};

modal.onClick = function gridSize () {
  modal0.style.display = "block";
}

createGrid( 5, 5);