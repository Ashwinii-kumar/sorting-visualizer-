// import { array } from "./newArayy.js";
import { delay } from "./sorting.js";

import disableButtons from "./sorting.js";
import { disableArrayBtn, enableButtons, enableArrayBtn } from "./sorting.js";

import { waitforme } from "./sorting.js";

async function partition(bars, l, r) {
  let i = l - 1;
  //color the pivot element
  //we take last element as pivot

  bars[r].style.backgroundColor = "red";
  bars[r].style.border = "red";

  for (let j = l; j <= r - 1; j++) {
    //color current element
    bars[j].style.backgroundColor = "blue";
    bars[j].style.border = "blue";

    await waitforme(delay);

    if (parseInt(bars[j].style.height) < parseInt(bars[r].style.height)) {
      i++;

      swap2(bars[i], bars[j]);

      //set color
      bars[i].style.backgroundColor = "orange";
      bars[i].style.border = "orange";

      if (i !== j) {
        bars[j].style.backgroundColor = "orange";
        bars[j].style.border = "orange";
      }

      await waitforme(delay);
    } else {
      bars[j].style.backgroundColor = "pink";
      bars[j].style.border = "pink";
    }
  }

  i++;
  //swapping i with pivot element
  await waitforme(delay);
  swap2(bars[i], bars[r]);
  bars[r].style.backgroundColor = "pink";
  bars[r].style.border = "pink";
  bars[i].style.backgroundColor = "green";
  bars[i].style.border = "green";

  await waitforme(delay);

  for (let k = 0; k < bars.length; k++) {
    if (bars[k].style.backgroundColor != "green")
      bars[k].style.backgroundColor = "yellow";
    bars[k].style.border = "yellow";
  }

  return i;
}

async function quickSort(bars, l, r) {
  if (l < r) {
    let pi = await partition(bars, l, r);
    await quickSort(bars, l, pi - 1);
    await quickSort(bars, pi + 1, r);
  } else {
    if (l >= 0 && r >= 0 && l < bars.length && r < bars.length) {
      bars[r].style.backgroundColor = "green";
      bars[r].style.border = "green";
      bars[l].style.backgroundColor = "green";
      bars[l].style.border = "green";
    }
  }
}

export default async function quick() {
  disableButtons();
  disableArrayBtn();

  const bars = Array.from(document.getElementById("bars").children);
  let l = 0;
  let r = bars.length - 1;
  await quickSort(bars, l, r);
  enableArrayBtn();
  enableButtons();
}


export function swap2(el1, el2) {
    let temp = el1.style.height;
    el1.style.height = el2.style.height;
    el2.style.height = temp;

    let temp1 = el1.innerHTML;
    el1.innerHTML = el2.innerHTML;
    el2.innerHTML = temp1;
  }
  