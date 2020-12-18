'use strict';

const input = $('#input'), // input/output button
  numbers = $('.numbers div'), // number buttons
  operators = $('.operators div'), // operator buttons
  result = $('#result'), // equal button
  clear = $('#clear'); // clear button

let resultDisplayed = false; // flag to keep an eye on what output is displayed



let theOperant = [];
let theOperations = [];

numbers.click((event) => {
 let number = event.target.innerHTML;

if(number == 'C' || number == '.') {
return;
// ends the function // Stops it if that happens!
}

theOperant.push(number);
input.html(number);
console.log(theOperant);
});

operators.click((event) => {
  theOperations.push(event.target.innerHTML);
  console.log(theOperations)
})

clear.click(() => {
  console.log("operant", operant);
  console.log("operations", operations);

  operant = [];
  operations = [];
input.html(0)
  console.log("operant", operant);
  console.log("operations", operations);
})

result.click(() => {
let theResult = 0;
let operation = '';


theOperant.forEach((current, index) => {
current = parseInt(current);

  if(index ==0) {

  theResult = current;

}

if(operation == '+') {
  theresult = theresult + current;
} else if (operation == '-') {
  theresult = theresult - current;
} else if (operation == '/') {
  theresult = theresult / current;
} else if (operation == '*') {
theresult = theresult * current;
}



  if(typeof operations[index] != 'undifined') {
    operation = theOperations;
} else {
 operation = ''; 
 return;
}
});
console.log(theResult)
});