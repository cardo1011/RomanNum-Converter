"use strict;";

const button = document.getElementById("convert-btn");
const resultBox = document.getElementById("output");

resultBox.style.visibility = "hidden";

const map = new Map();

for (i = 1; i < 4; i++) {
  map.set(i, "I".repeat(i));
}

map.set(4, "IV");
map.set(5, "V");
map.set(9, "IX");
map.set(10, "X");
map.set(40, "XL");
map.set(50, "L");
map.set(90, "XC");
map.set(100, "C");
map.set(400, "CD");
map.set(500, "D");
map.set(900, "CM");
map.set(1000, "M");
// console.log(map);

const romanValues = [...map.keys()].sort((a, b) => b - a);

// console.log(romanValues);

function romanConverter() {
  let input = document.getElementById("number").value;
  let result = "";

  if (!input) {
    resultBox.style.visibility = "visible";
    resultBox.style.fontSize = "";
    return "Please enter a valid number";
  } else if (input < 1) {
    resultBox.style.visibility = "visible";
    resultBox.style.fontSize = "";
    return "Please enter a number greater than or equal to 1";
  } else if (input > 3999) {
    resultBox.style.visibility = "visible";
    resultBox.style.fontSize = "";
    return "Please enter a number less than or equal to 3999";
  } else {
    romanValues.forEach((value) => {
      if (input >= value) {
        result += map.get(value);
        input -= value;
      }
    });

    resultBox.style.visibility = "visible";
    resultBox.style.fontSize = "3em";
    return result;
  }
}

button.addEventListener("click", function () {
  resultBox.textContent = romanConverter();
});
