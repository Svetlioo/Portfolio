const btn = document.querySelector(".dark-mode");
const root = document.documentElement;
let darkMode = true;
btn.addEventListener("click", function () {
  if (darkMode) {
    root.style.setProperty("--textcolor", "#333333");
    root.style.setProperty("--background", "#f2f2f2");
    root.style.setProperty("--maincolor", "#007acc");
  } else {
    root.style.setProperty("--textcolor", "#ffffff");
    root.style.setProperty("--background", "#1f1f1f");
    root.style.setProperty("--maincolor", "#ff6600");
  }

  darkMode = !darkMode;
  console.log("ui");
});
