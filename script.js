document.addEventListener("DOMContentLoaded", function () {
  setTimeout(() => {
      var _animate = document.querySelectorAll(".animate");
      _animate.forEach(function (element, index) {
          const _delay = index * 300;
          setTimeout(() => {
              element.classList.add("loaded");
          }, _delay);
      });
  }, 500);

  let inputElmt = document.querySelector(".input");
  let bodyElmt = document.querySelector("body");
  let h1Elmt = document.querySelector("h1");
  let link = document.querySelector("link[rel='icon']");
  let aElmnts = document.querySelectorAll("body a");
  let waveElmts = document.querySelectorAll(".wave");

  if (inputElmt && bodyElmt && h1Elmt && link) {
      inputElmt.checked = JSON.parse(localStorage.getItem("mode") || "false");
      updateBackground();

      inputElmt.addEventListener("input", () => {
          updateBackground();
          updateLocale();
      });
  }

  function updateBackground() {
      if (inputElmt.checked) {
          bodyElmt.style.background = "#111";
          bodyElmt.style.color = "#fff";
          h1Elmt.textContent = "Торсуков Алексей 🥷🏻";
          link.setAttribute("href", "favicons/dark-mode.png");

          waveElmts.forEach(el => {
              el.style.background = "var(--white)";
          });
          aElmnts.forEach(el => {
              el.style.color = "#fff";
          });

      } else {
          bodyElmt.style.background = "#fff";
          bodyElmt.style.color = "#111";
          h1Elmt.textContent = "Торсуков Алексей 👨🏻‍💻";
          link.setAttribute("href", "favicons/light-mode.png");

          waveElmts.forEach(el => {
              el.style.background = "var(--darkest)";
          });

          aElmnts.forEach(el => {
              el.style.color = "#111";
          });
      }
  }

  function updateLocale() {
      localStorage.setItem("mode", JSON.stringify(inputElmt.checked));
  }
});