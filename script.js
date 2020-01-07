let num = 100;
let numbers = [];

const body = document.body;

for (i = 1; i <= num; i++) {
  numbers.push(i);
}

let bitStringLength = num.toString(2).length;

let bitstrings = [];

numbers.forEach(number => {
  let paddedString = pad(number.toString(2), bitStringLength);
  bitstrings.push(paddedString);
});


let cards = [];
for (let i = bitStringLength - 1; i >= 0; i--) {
  cards.push(bitStringsToNumbers(getBitTrue(bitstrings, i)));
}

for (let i = 0; i < cards.length; i++) {
  const cardNumbers = cards[i];
  // cards.forEach(cardNumbers => {
  const div = createVisualCard(cardNumbers);
    const id = i + 1;
  div.setAttribute("id", id);
  div.onclick = function(){ toggleBackgroundColor(id)};

  body.appendChild(div);
}

function getBitTrue(arrayOfBitstrings, placment) {
  let newBitStrings = [];
  arrayOfBitstrings.forEach(bitString => {
    let bits = bitString.split("");
    if (bits[placment] == 1) {
      newBitStrings.push(bitString);
    }
  });
  return newBitStrings;
}

function bitStringsToNumbers(arrayOfBitstrings) {
  let numbers = [];
  arrayOfBitstrings.forEach(bitString => {
    numbers.push(parseInt(bitString, 2));
  });
  return numbers;
}

function pad(s, size) {
  while (s.length < size) s = "0" + s;
  return s;
}

function createVisualCard(numbers) {
  let div = document.createElement("div");
  numbers.forEach(number => {
    let p = document.createElement("p");
    p.innerHTML = number;
    div.appendChild(p);
  });
  return div;
}

function toggleBackgroundColor(id) {
  var property = document.getElementById(id);
  property.className = "toggled" == property.className ? "" : "toggled";
}
