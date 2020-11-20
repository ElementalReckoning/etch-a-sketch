let container = document.getElementById("container");
let modalBtn = document.getElementById("modalBtn");
let modal0 = document.getElementById("myModal0");


function createGrid(rows, cols) {
  container.style.setProperty("--grid-row", rows);
  container.style.setProperty("--grid-col", cols);
  for (i = 0; i < (rows * cols); i++) {
    let grid = document.createElement("div");
    grid.innerText = (i + 1);
    container.appendChild(grid).className = "grid-item";
  };
};

modalBtn.onclick = function(e) {
  modal0.style.display = "block";
};

window.onclick = function(e) {
  if (e.target == modal0) {
    modal0.style.display = "none";
  }
}; 


createGrid( 5, 5);