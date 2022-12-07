//  import {array as arr} from "./newArayy.js";
import { delay } from "./sorting.js";
import disableButtons from "./sorting.js";
import { disableArrayBtn, enableButtons, enableArrayBtn } from "./sorting.js";
import { waitforme } from "./sorting.js";

export default async function bubble(e) {
  disableButtons();
  disableArrayBtn();

  await bubbleSort();
  const bars = Array.from(document.getElementById("bars").children);
  bars[0].style.backgroundColor = "green";
  bars[0].style.border = "green";

  enableArrayBtn();
  enableButtons();
}
async function bubbleSort() {
  const bars = Array.from(document.getElementById("bars").children);

  //   console.log(bars);

  for (let i = 0; i < bars.length - 1; i++) {
    console.log(i);
    // Last i elements are already
    // in place
    for (let j = 0; j < bars.length - i - 1; j++) {
      bars[j].style.backgroundColor = "red";
      bars[j].style.border = "red";
      bars[j + 1].style.backgroundColor = "red";
      bars[j + 1].style.border = "red";
      await waitforme(260);
      if (parseInt(bars[j].style.height) > parseInt(bars[j + 1].style.height)) {
        await waitforme(delay);
        swap(bars[j], bars[j + 1]);
        // await waitforme(delay);
        let h = bars[j].innerHTML;
        bars[j].innerHTML = bars[j + 1].innerHTML;
        bars[j + 1].innerHTML = h;
      }

      bars[j].style.backgroundColor = "yellow";
      bars[j].style.border = "yellow";
      bars[j + 1].style.backgroundColor = "yellow";
      bars[j + 1].style.border = "yellow";
    }
    await waitforme(delay);
    bars[bars.length - i - 1].style.backgroundColor = "green";
    bars[bars.length - i - 1].style.border = "green";
  }
}
export function swap(el1, el2) {
  const style1 = window.getComputedStyle(el1);
  const style2 = window.getComputedStyle(el2);

  const transform1 = style1.getPropertyValue("height");
  const transform2 = style2.getPropertyValue("height");

  el1.style.height = transform2;
  el2.style.height = transform1;
}
