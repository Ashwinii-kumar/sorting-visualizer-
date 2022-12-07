// import { array } from "./newArayy.js";
import { delay } from "./sorting.js";

import disableButtons from "./sorting.js";
import { disableArrayBtn, enableButtons, enableArrayBtn } from "./sorting.js";
import { swap } from "./bubble.js";
import { waitforme } from "./sorting.js";

export default async function selection(e) {
  disableButtons();
  disableArrayBtn();
  e.preventDefault();
  e.stopPropagation();

  const bars = Array.from(document.getElementById("bars").children);
  let j = 0;
  for (let i = 0; i < bars.length - 1; i++) {
    //bar to be compare dis turned red
    bars[i].style.backgroundColor = "red";
    bars[i].style.border = "red";
    let min_index = i;
    for (j = i + 1; j < bars.length; j++) {
      //bar being compared to red bar is turned blue
      bars[j].style.backgroundColor = "blue";
      bars[j].style.border = "blue";

      await waitforme(delay);
      if (
        parseInt(bars[j].style.height) < parseInt(bars[min_index].style.height)
      ) {
        if (min_index !== i) {
          bars[min_index].style.backgroundColor = "yellow";
          bars[min_index].style.border = "yellow";
        }

        min_index = j;
        bars[min_index].style.backgroundColor = "red";
        bars[min_index].style.border = "red";
      } else {
        bars[j].style.backgroundColor = "yellow";
        bars[j].style.backgroundColor = "yellow";
      }
    }

    await waitforme(delay);
    bars[i].style.border = "solid";

    swap(bars[i], bars[min_index]);
    //swapping values
    let h = bars[i].innerHTML;
    bars[i].innerHTML = bars[min_index].innerHTML;
    bars[min_index].innerHTML = h;

    await waitforme(delay);
    //after swap min_index's position's bar turned to yellow
    bars[min_index].style.backgroundColor = "yellow";
    bars[min_index].style.backgroundColor = "yellow";
    //after swap ith index's position's bar turned to green

    bars[i].style.backgroundColor = "green";
    bars[i].style.border = "green";
  }
  bars[bars.length - 1].style.backgroundColor = "green";
  bars[bars.length - 1].style.border = "green";

  enableArrayBtn();
  enableButtons();
}
