document.addEventListener("DOMContentLoaded", function() {
    setTimeout(() => {
      var _animate = document.querySelectorAll(".animate");
      _animate.forEach(function(element, index) {
        const _delay = index * 300;
        setTimeout(() => {
          element.classList.add("loaded");
        }, _delay);
      });
    }, 500);
  });
  