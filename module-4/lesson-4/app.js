"use strict";

let panel = document.querySelectorAll(".panel");
let icon = document.querySelectorAll(".icon");

panel.forEach((el, index) => {
  el.addEventListener("click", (e) => {
    if (e.target.nextElementSibling.style.height.length === 0) {
      e.target.nextElementSibling.style.height =
        e.target.nextElementSibling.scrollHeight + "px";
      console.log(e.target.nextElementSibling.style.height);
      icon[index].innerHTML = "-";

      console.log(e.target.nextElementSibling.style.height);
    } else {
      e.target.nextElementSibling.style.height = null;
      icon[index].innerHTML = "+";
    }
  });
});
