"use strict";

const inputFieldDOM = document.querySelector(".input-field");
const submit = document.querySelector(".submit");
const insertParentDOM = document.querySelector(".todo");
const containerDOM = document.querySelectorAll(".container");

let textValue = "";

insertParentDOM.addEventListener("click", function (e) {
  for (let i = 0; i < insertParentDOM.children.length; i++) {
    if (
      e.target.innerText === insertParentDOM.children[i].innerText ||
      e.target.innerText === insertParentDOM.children[i].children[0].innerText
    ) {
      insertParentDOM.children[i].classList.toggle("overline");
    } else if (e.target.innerText === "Delete") {
      let arr = Array.from(insertParentDOM.children);
      let find = arr.find(
        (el) => el.innerText === e.target.parentNode.innerText
      );
      find.remove();
      break;
    }
  }
});

submit.addEventListener("click", function () {
  if (inputFieldDOM.value) {
    textValue = inputFieldDOM.value;

    inputFieldDOM.value = "";
    let containerHTML = `<div class="container">
                            <p class="checkbox-value">${textValue}</p>
                            <button class="btn-delete" data-id=>Delete</button>
                        </div>`;

    insertParentDOM.insertAdjacentHTML("beforeend", containerHTML);
  }
});
