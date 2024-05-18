"use strict;";

const button = document.getElementById("convert-btn");
const resultBox = document.getElementById("output");

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
map.set(1000, "1000");
console.log(map);

function romanConverter() {
  let input = document.getElementById("number");
}
