import join from "lodash";
// import printMe from "./print";

import "./style.css";
import { cube } from "./math";

function component() {
  const element = document.createElement("div");
  console.log(join);
  const btn = document.createElement("button");
  // Lodash, currently included via a script, is required for this line to work
  element.innerHTML = ["Hello webpack", "5 cubed is equal to" + cube(5)];
  btn.innerHTML = "Click me and check the console !";
  // btn.onclick = printMe;
  element.classList.add("hello");
  // element.appendChild(btn);

  return element;
}

document.body.appendChild(component());
