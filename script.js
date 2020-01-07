let numbers = [];

for(i=1; i<=100; i++) {
    numbers.push(i);
}

console.log(numbers);

let bitstrings = [];

numbers.forEach(number => {
    let paddedString = pad(number.toString(2), 7);
    bitstrings.push(paddedString);
});

let cards = [];
for (let i = 6; i >= 0; i--) {
    console.log(i);
    
    cards.push(bitStringsToNumbers(getBitTrue(bitstrings, i))); 
}
console.log(cards);


function getBitTrue(arrayOfBitstrings, placment) {
    let newBitStrings = [];
    arrayOfBitstrings.forEach(bitString => {
let bits = bitString.split('');        
        if(bits[placment] == 1) {
            newBitStrings.push(bitString);
        }
    });
    return newBitStrings;
}

function bitStringsToNumbers(arrayOfBitstrings) {
    let numbers = [];
    arrayOfBitstrings.forEach(bitString => {
        numbers.push(parseInt(bitString,2));
    });
    return numbers;
}

function pad(s, size) {    
    while (s.length < size) s = "0" + s;
    return s;
}