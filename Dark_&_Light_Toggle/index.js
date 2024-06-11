const bodyEl = document.querySelector("body");
const getToggle = document.querySelector(".toggle");

let getMode = localStorage.getItem("mode");


if (getMode && getMode === "dark") {
  bodyEl.classList.add("dark");
  getToggle.classList.add("show");
}

getToggle.addEventListener("click", () => {
  getToggle.classList.toggle("show");
});

getToggle.addEventListener("click", () => {
  bodyEl.classList.toggle("dark");

  if (!bodyEl.classList.contains("dark")) {
    return localStorage.setItem("mode", "light");
  } 

 localStorage.setItem("mode", "dark");

});

