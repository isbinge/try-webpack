import { join } from "lodash";
import printMe from "./print";

import "./style.css";

function component() {
  const element = document.createElement("div");

  const btn = document.createElement("button");
  // Lodash, currently included via a script, is required for this line to work
  element.innerHTML = join(["Hello", "world"], " ");
  btn.innerHTML = "Click me and check the console!";
  btn.onclick = printMe;
  element.classList.add("hello");
  element.appendChild(btn);

  return element;
}

document.body.appendChild(component());
