function init() {
  document.getElementById("page01").style.display = "flex";
  document.getElementById("page02").style.display = "none";
  document.getElementById("page03").style.display = "none";
}

function navigateToCreateCh() {
  document.getElementById("page01").style.display = "none";
  document.getElementById("page02").style.display = "flex";
}

function navigateToCh() {
  document.getElementById("page02").style.display = "none";
  document.getElementById("page03").style.display = "inline-block";
}

window.onload = (e) => {
  document.getElementById("page01").style.display = "none";
  document.getElementById("page02").style.display = "none";
  document.getElementById("page03").style.display = "none";
  init()
}