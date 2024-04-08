// Your code here
const dodger = document.getElementById("dodger");
dodger.style.backgroundColor = "#FF69B4";
dodger.style.bottom = "0px";
dodger.style.left = "0px";
document.addEventListener("keydown", function(event) {
    if (event.key === "ArrowLeft") {
        const leftNumbers = dodger.style.left.replace("px", "");
        const left = parseInt(leftNumbers, 10);
        if (left > 0) {
            dodger.style.left = `${left - 1}px`;
        }
    }
    if (event.key === "ArrowRight") {
        const rightNumbers = dodger.style.left.replace("px", "");
        const left = parseInt(rightNumbers, 10);
        if (left < 360) {
        dodger.style.left = `${left + 1}px`;
        }
    }
    if (event.key === "ArrowUp") {
        const upNumbers = dodger.style.bottom.replace("px", "");
        const down = parseInt(upNumbers, 10);
        if (bottom < 380) {
            dodger.style.bottom = `${down +1}px`;
        }
    }
    if (event.key === "ArrowDown") {
        const downNumbers = dodger.style.bottom.replace("px", "");
        const down = parseInt(downNumbers, 10);
        if (bottom > 0) {
            dodger.style.bottom = `${down - 1}px`;
        }
    }
});
function moveDodgerLeft() {
    const leftNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10);
  
    if (left > 0) {
      dodger.style.left = `${left - 1}px`;
    }
  }
  function moveDodgerRight() {
    const rightNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(rightNumbers, 10);
  
    if (left < 360) {
      dodger.style.left = `${left + 1}px`;
    }
  }
  function moveDodgerDown() {
    const downNumbers = dodger.style.bottom.replace("px", "");
    const down = parseInt(downNumbers, 10);
    if (down > 0) {
        dodger.style.bottom = `${down - 1}px`;
    }
  }
  function moveDodgerUp() {
    const upNumbers = dodger.style.bottom.replace("px", "");
    const down = parseInt(upNumbers, 10);
    if (down < 380) {
        dodger.style.bottom = `${down + 1}px`;
    }
  }
document.addEventListener("keydown", function (e) {
    if (e.key === "ArrowLeft") {
      moveDodgerLeft();
    }
    if (e.key === "ArrowRight") {
        moveDodgerRight();
    }
    if (e.key === "ArrowUp") {
        moveDodgerUp();
    }
    if (e.key === "ArrowDown") {
        moveDodgerDown();
    }
  });