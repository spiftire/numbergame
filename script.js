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
console.log(bitstrings);

let firstCard = bitStringsToNumbers(getBitTrue(bitstrings, 6));
let secondCard = bitStringsToNumbers(getBitTrue(bitstrings, 5));



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
    console.log(numbers);
}

function pad(s, size) {    
    while (s.length < size) s = "0" + s;
    return s;
}