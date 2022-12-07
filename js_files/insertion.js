// import { array } from "./newArayy.js";
import { delay } from "./sorting.js";

import disableButtons from "./sorting.js";
import { disableArrayBtn, enableButtons, enableArrayBtn } from "./sorting.js";
import { swap } from "./bubble.js";
import { waitforme } from "./sorting.js";

export default async function insertion() {
  disableButtons();
  disableArrayBtn();

  const bars = Array.from(document.getElementById("bars").children);

  let i = 0;
  let j = 0;
  bars[0].style.backgroundColor = "green";
  bars[0].style.border = "green";
  bars[0].style.color = "white";
  for (i = 1; i < bars.length; i++) {
    j = i - 1;
    //store int value of ith bar height to key
    let key = bars[i].style.height;
    //provide blue color to ith bar
    bars[i].style.backgroundColor = "blue";
    bars[i].style.border = "blue";

    //pause execution for delay ms
    await waitforme(delay);
    // Move elements of arr[0..i-1],
    // that are greater than key, to one
    // position ahead of their
    // current position
    while (j >= 0 && parseInt(bars[j].style.height) > parseInt(key)) {
      // here we swap the j and j+1th element
      bars[j].style.backgroundColor = "blue";
      bars[j].style.border = "blue";
      bars[j].style.color = "red";

      bars[j + 1].style.height = bars[j].style.height;
      let h = bars[j].innerHTML;
      bars[j].innerHTML = bars[j + 1].innerHTML;
      bars[j + 1].innerHTML = h;
      j = j - 1;

      await waitforme(delay);
      //provide green color to the sorted part
      for (let k = i; k >= 0; k--) {
        bars[k].style.backgroundColor = "green";
        bars[k].style.border = "green";
        bars[k].style.color = "white";
      }
    }

    bars[j + 1].style.height = key;
    await waitforme(delay);
    bars[i].style.backgroundColor = "green";
    bars[i].style.border = "green";
  }

  enableArrayBtn();
  enableButtons();
}
