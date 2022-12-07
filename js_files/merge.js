// import { array } from "./newArayy.js";
import { delay, newArray } from "./sorting.js";

import disableButtons from "./sorting.js";
import { disableArrayBtn, enableButtons, enableArrayBtn } from "./sorting.js";
import { swap } from "./bubble.js";
import { waitforme } from "./sorting.js";

async function mergeArray(bars, start, end, mid) {
  const n1 = mid - start + 1;
  const n2 = end - mid;

  let left = new Array(n1);
  let right = new Array(n2);

  let leftText = new Array(n1);
  let rightText = new Array(n1);

  //creating left array
  for (let i = 0; i < n1; i++) {
    await waitforme(delay);
    bars[start + i].style.backgroundColor = "blue";
    bars[start + i].style.border = "blue";
    left[i] = bars[start + i].style.height;

    leftText[i] = bars[start + i].innerHTML;
  }
  //creating right array
  for (let i = 0; i < n2; i++) {
    await waitforme(delay);
    bars[mid + 1 + i].style.backgroundColor = "purple";
    bars[mid + 1 + i].style.border = "purple";
    right[i] = bars[mid + 1 + i].style.height;
    rightText[i] = bars[mid + 1 + i].innerHTML;
  }

  await waitforme(delay);

  let i = 0,
    j = 0,
    k = start;

  while (i < n1 && j < n2) {
    await waitforme(delay);
    if (parseInt(left[i]) <= parseInt(right[j])) {
      if (n1 + n2 === bars.length) {
        bars[k].style.backgroundColor = "green";
        bars[k].style.border = "green";
      } else {
        bars[k].style.backgroundColor = "skyblue";
        bars[k].style.border = "skyblue";
      }

      bars[k].style.height = left[i];
      bars[k].innerHTML = leftText[i];

      i++;
      k++;
    } else {
      if (n1 + n2 === bars.length) {
        bars[k].style.backgroundColor = "green";
        bars[k].style.border = "green";
      } else {
        bars[k].style.backgroundColor = "lightgreen";
        bars[k].style.border = "lightgreen";
      }

      bars[k].style.height = right[j];
      bars[k].innerHTML = rightText[j];
      k++;
      j++;
    }
  }

  while (i < n1) {
    await waitforme(delay);
    if (n1 + n2 === bars.length) {
      bars[k].style.backgroundColor = "green";
      bars[k].style.border = "green";
    } else {
      bars[k].style.backgroundColor = "lightgreen";
      bars[k].style.border = "lightgreen";
    }

    bars[k].style.height = left[i];
    bars[k].innerHTML = leftText[i];
    i++;
    k++;
  }

  while (j < n2) {
    if (n1 + n2 === bars.length) {
      bars[k].style.backgroundColor = "green";
      bars[k].style.border = "green";
    } else {
      bars[k].style.backgroundColor = "lightgreen";
      bars[k].style.border = "lightgreen";
    }

    bars[k].style.height = right[j];
    bars[k].innerHTML = rightText[j];

    k++;
    j++;
  }
}

async function mergeSort(bars, start, end) {
  if (start >= end) {
    return;
  }
  let mid = start + Math.floor((end - start) / 2);
  await mergeSort(bars, start, mid);
  await mergeSort(bars, mid + 1, end);
  await mergeArray(bars, start, end, mid);
}

export default async function mergesort() {
  disableButtons();
  disableArrayBtn();
  const bars = Array.from(document.getElementById("bars").children);
  let l = 0;
  let r = bars.length - 1;

  await mergeSort(bars, l, r);

  enableArrayBtn();
  enableButtons();
}
