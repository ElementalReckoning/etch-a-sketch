let container = document.getElementById("container");

function createGrid(rows, cols) {
  container.style.setProperty("--grid-row", rows);
  container.style.setProperty("--grid-col", cols);
  for (i = 0; i < (rows * cols); i++) {
    let grid = document.createElement("div");
    grid.innerText = (i + 1);
    container.appendChild(grid).className = "grid-item";
  };
};

createGrid(3, 3);