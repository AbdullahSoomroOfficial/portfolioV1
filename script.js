const charactersArray = [
  ["H", "i", ",", " ", "M", "y", " ", "n", "a", "m", "e", " ", "i", "s"],
  ["A", "b", "d", "u", "l", "l", "a", "h", " ", "S", "o", "o", "m", "r", "o"],
  ["A", "n", "d", " ", "I", " ", "a", "m", " ", "a"],
  [
    "F",
    "u",
    "l",
    "l",
    " ",
    "S",
    "t",
    "a",
    "c",
    "k",
    " ",
    "W",
    "e",
    "b",
    " ",
    "D",
    "e",
    "v",
    "e",
    "l",
    "o",
    "p",
    "e",
    "r",
  ],
];

const typeOut1 = document.querySelector(".type-out-1");
const typeOut2 = document.querySelector(".type-out-2");
const typeOut3 = document.querySelector(".type-out-3");
const typeOut4 = document.querySelector(".type-out-4");

const typeOutArray = [typeOut1, typeOut2, typeOut3, typeOut4];

let delay = 10;
// when page fully loaded with its resources like stylesheet, scripts, images etc.
window.addEventListener("load", () => {
  for (let i = 0; i < charactersArray.length; i++) {
    if (i !== 0) {
      setTimeout(() => {
        typeOutArray[i].style.borderRightColor = "white";
        typeOutArray[i].style.borderRightStyle = "solid";
        typeOutArray[i].style.borderRightWidth = "3px";
      }, delay);
    } else {
      typeOutArray[i].style.borderRightColor = "white";
      typeOutArray[i].style.borderRightStyle = "solid";
      typeOutArray[i].style.borderRightWidth = "3px";
    }

    for (let j = 0; j < charactersArray[i].length; j++) {
      setTimeout(() => {
        typeOutArray[i].innerHTML += charactersArray[i][j];
      }, delay);
      delay += 50;
    }

    setTimeout(() => {
      typeOutArray[i].style.borderRightWidth = "0px";
    }, delay);
  }
});
