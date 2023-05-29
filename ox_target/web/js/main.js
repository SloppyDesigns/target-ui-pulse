import { createOptions } from "./createOptions.js";

const optionsWrapper = document.getElementById("options-wrapper");
const body = document.body;
const eye = document.getElementById("eye");

window.addEventListener("message", (event) => {
  optionsWrapper.innerHTML = "";

  switch (event.data.event) {
    case "visible": {
      if (event.data.state) {
        eye.classList.remove("active");
      }
      body.style.visibility = event.data.state ? "visible" : "hidden";
      return;
    }

    case "leftTarget": {
      eye.classList.remove("active");
      return;
    }

    case "setTarget": {
      eye.classList.add("active");
      if (event.data.options) {
        for (const type in event.data.options) {
          event.data.options[type].forEach((data, id) => {
            createOptions(type, data, id + 1);
          });
        }
      }
    }
  }
});