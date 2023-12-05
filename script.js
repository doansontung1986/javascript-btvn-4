let colors = ["#3498db", "#9b59b6", "#e74c3c", "#2c3e50", "#d35400"];
const boxes = document.querySelector(".boxes");
const btnMoreBoxes = document.getElementById("btn");
const points = document.querySelector(".points");
let totalBox = 0;

function updateTotalBox() {
  points.textContent = totalBox;
}

function handleClickBox(event) {
  event.target.remove();
  totalBox--;
  updateTotalBox();
}

function generateFiveBox() {
  for (let i = 0; i < colors.length; i++) {
    const box = document.createElement("div");
    box.classList.add("box");
    box.style.backgroundColor = colors[i];
    box.addEventListener("click", handleClickBox);
    boxes.appendChild(box);
    totalBox++;
  }
  updateTotalBox();
}

// Generate 5 boxes as initialzation
generateFiveBox();

// Add listener for all present boxes
document.querySelectorAll(".box").forEach(box => {
  box.addEventListener("click", handleClickBox);
});

btnMoreBoxes.addEventListener("click", generateFiveBox);
