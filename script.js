const btn = document.querySelector(".dark-mode");
const root = document.documentElement;
const home = document.querySelector(".home");
let darkMode = true;
btn.addEventListener("click", function () {
  if (darkMode) {
    root.style.setProperty("--textcolor", "#333333");
    root.style.setProperty("--background", "#f2f2f2");
    root.style.setProperty("--maincolor", "#007acc");
    root.style.setProperty("--secondbackground", "#e5e5e5");
    home.style.setProperty("background", "none");
  } else {
    root.style.setProperty("--textcolor", "#ffffff");
    root.style.setProperty("--background", "#1f1f1f");
    root.style.setProperty("--maincolor", "#ff6600");
    root.style.setProperty("--secondbackground", "#232323");
    home.style.setProperty(
      "background",
      "url(images/background-landing-page.jpeg)"
    );
    home.style.setProperty("background-size", "cover");
    home.style.setProperty("background-position", "center");
  }
  darkMode = !darkMode;
});
