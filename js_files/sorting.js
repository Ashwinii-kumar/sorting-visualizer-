import bubble from "./bubble.js";
import selection from "./selection.js";
import insertion from "./insertion.js";
import quick from "./quick.js";
import mergesort from "./merge.js";

const array = [];
let delay = 260;
newArray();
const createBtn = document.getElementById("but1");
const bubbleSortBtn = document.getElementById("but2");
const selectionSortBtn = document.getElementById("but3");
const insertionSortBtn = document.getElementById("but4");
const quickSortBtn = document.getElementById("but5");
const mergeSortBtn = document.getElementById("but6");
const size = document.getElementById("arr_sz");
const delayInput = document.getElementById("arr_sz2");
disableSpeed();

delayInput.addEventListener("input", () => {
  delay = 320 - parseInt(delayInput.value);
});

size.addEventListener("input", () => {
  console.log(parseInt(size.value));
  delayInput.disabled = true;
  newArray(parseInt(size.value));
});

console.log(size.value);

createBtn.addEventListener("click", () => {
  delayInput.disabled = true;
  newArray(parseInt(size.value));
});
bubbleSortBtn.addEventListener("click", bubble);
selectionSortBtn.addEventListener("click", selection);
insertionSortBtn.addEventListener("click", insertion);
quickSortBtn.addEventListener("click", quick);
mergeSortBtn.addEventListener("click", mergesort);

function disableSpeed() {
  delayInput.disabled = true;
}

function enableSpeed() {
  delayInput.disabled = false;
  delayInput.value = 60;
}

export default function disableButtons() {
  bubbleSortBtn.disabled = true;
  selectionSortBtn.disabled = true;
  insertionSortBtn.disabled = true;
  quickSortBtn.disabled = true;
  mergeSortBtn.disabled = true;
  size.disabled = true;
  enableSpeed();
}

export function enableButtons() {
  bubbleSortBtn.disabled = false;
  selectionSortBtn.disabled = false;
  insertionSortBtn.disabled = false;
  quickSortBtn.disabled = false;
  mergeSortBtn.disabled = false;
  size.disabled = false;

  disableSpeed();
}

export function disableArrayBtn() {
  createBtn.disabled = true;
}

// Enables newArray buttons used in conjunction with disable
export function enableArrayBtn() {
  createBtn.disabled = false;
}

export function newArray(size = 60) {
  document.getElementById("bars").innerHTML = "";
  remove(size);

  for (let i = 0; i < size; i++) {
    if (array.length === size) {
      break;
    }
    let x = Math.floor(Math.random() * (150 - 25) + 25);
    if (array.length < 100 && array.includes(x) === false) {
      array.push(x);
    } else {
      continue;
    }
  }

  //creating bars and adding it to the page
  array.forEach((item) => {
    let element = document.createElement("div");
    element.style.height = `${item * 2}px`;
    element.classList.add(`barNo${item}`);
    element.className = "bar";

    element.textContent = `${item}`;

    // element.textContent.style.fontStretch="condensed";
    document.getElementById("bars").appendChild(element);
  });
}

function remove(size) {
  for (let i = 0; i < size; i++) {
    array.pop();
  }
}

export function waitforme(milisec) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("");
    }, milisec);
  });
}

export { delay };
