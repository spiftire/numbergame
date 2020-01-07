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
let thirdCard = bitStringsToNumbers(getBitTrue(bitstrings, 4));
let fourthCard = bitStringsToNumbers(getBitTrue(bitstrings, 3));
let fifthCard = bitStringsToNumbers(getBitTrue(bitstrings, 2));
let sixthCard = bitStringsToNumbers(getBitTrue(bitstrings, 1));
let seventhCard = bitStringsToNumbers(getBitTrue(bitstrings, 0));



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