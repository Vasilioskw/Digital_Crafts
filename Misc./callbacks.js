// example of function declaration
function addingfunction(x, y) {
    return a + b;
  }

// To use this function, you call it:

const result = addingfunction(2, 3);
console.log(result); // 5

// You can see the function is in place, adding the variables
// Through *const result = addingfunction(2, 3);*, 
// then *console.log(result);* We are calling it (activating it)

/////////////////////////////////////////////////////////////////////

// Not only is a function a "callable variable", it is also configurable 
// - you get a different output if you provide different inputs.

const result1 = addingfunction(2, 3); // 5
const result2 = addingfunction(4, 5); // 9

/////////////// We are simply changing the variables! Very Strait-foward

//Another way to write the add() function is like this:

const addingfunction = function (x, y) {
  return x + y;
};

// It can be used exactly the same way:
const result = addingfunction(2, 3);
console.log(result); // 5

//////////////////////////////////////////////////////////////////////////

// In this version, you have literally created a "callable" variable. It is still:

// identified by its name
// a container for lines of code
// runnable by putting parentheses after its name
// It looks like a combination of variable declaration (const add) 
// and a function whose name is missing (function (x, y) { ... }).

// In the code sample

const add = function(x, y) {
  return x + y;
}
// The RHS is an anonymous function, 
//also called a function expression or function value.

// RHS stands for right hand side of the equation (assignment operator),
//LHS references are located on the left hand side of the = assignment operator.

// ===> Arrow functions <===
// A new and popular alternative way to write 
// function expressions is the shorthand arrow syntax. 
// Here is yet another version of the add() function:

const add = (x, y) => {
  return x + y;
}

// This is an arrow function and it may look strange at first. 
// Here is what's different:

// The function keyword is omitted
// There is an arrow => between the parameters and the body
// We will use this style of anonymous function for the remainder of the lesson.

// Anonymous functions are an important feature of JavaScript 
// - they give web pages their interactivity and make Node.js 
// servers their speed and versatility. In the next sections, 
// you'll explore anonymous functions in the context of Numbers and Arrays.

//////////////////////////////////////////////////////////////////////////

// Transforming an Array with map()
const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let result = [];
for (let i=0; i<nums.length; i++) {
  result.push(nums[i] * nums[i]);
}
console.log(result);
// [ 1, 4, 9, 16, 25, 36, 49, 64, 81, 100 ]
//These are squares*!

//To get the cubes* (the square times the original number):

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let result = [];
for (let i=0; i<nums.length; i++) {
  result.push(nums[i] * nums[i] * nums[i]);
}
console.log(result);
// [ 1, 8, 27, 64, 125, 216, 343, 512, 729, 1000 ]
// ==> We .push() the result onto an array <==

// //What we want is:
// const r6 = map(nums, square);
// const r7 = map(nums, cube);



// First, we describe how we want to transform a single Number:

const square = (z) => {
  return z * z;
};

const cube = (z) => {
  return z * z * z;
}
//Then we write a function that handles the loop and the .push():

const map = (arr, fn) => {
  const result = [];
  for (let i=0; i<arr.length; i++) {
    result.push(fn(arr[i]));
  }
  return result;
};
//And now we can test our new map() function.

const r6 = map(nums, square); // [ 1, 4, 9, 16, 25, 36, 49, 64, 81, 100 ]
const r7 = map(nums, cube); // [ 1, 8, 27, 64, 125, 216, 343, 512, 729, 1000 ]

//////////////////////////////////////////////////////////////////////////

//Passing Anonymous Functions

// .push() the ones that pass the test into a new Array

// Here is how we might use it to get only the even numbers from our nums Array:
const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const result = filter(nums, isEven);
// [2, 4, 6, 8, 10]

//And to get the odd numbers:
const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const result = filter(nums, isOdd);
// [1, 3, 5, 7, 9]

// You can already imagine how to write filter:
const filter = (arr, fn) => {
    const result = [];
    for (let i=0; i<arr.length; i++) {
      if (fn(arr[i])) {
        result.push(arr[i]);
      }
    }
    return result;
  };

  //We .push() a value from the Array if and only if fn(arr[i]) is true.
//Here is how we might define isEven and isOdd:
const isEven = (val) => {
  return val % 2 === 0;
};
const isOdd = (val) => {
  return val % 2 === 1;
};
One interesting property of arrow functions is that these can be written using an implicit return:

const isEven = (val) => val % 2 === 0;
const isOdd = (val) => val % 2 === 1;

/////

//And finally, if there is only a single argument,
//you can omit the parentheses:
const isEven = val => val % 2 === 0;
const isOdd = val => val % 2 === 1;


// Returning to our original filter() example, 
//notice the arguments on line 2:

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const result = filter(nums, isEven);
// [2, 4, 6, 8, 10]



// We use variable names because they're shorter, and we know 
// that JavaScript will substitute in the corresponding value.

// On the other hand, they aren't necessary. We could have 
//typed the value of nums instead of creating the variable:

const result = filter([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], isEven);
// [2, 4, 6, 8, 10]
It still works!


/////////


const result = filter([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], val => val % 2 === 0);
// [2, 4, 6, 8, 10]
Though that example might be clearer if we went back to using our `nums` variable:

// // ```js
// const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const result = filter(nums, val => val % 2 === 0);
// // [2, 4, 6, 8, 10]

/////////

// And, we could do the same thing for multiples of 3:

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const result = filter(nums, v => v % 3 === 0);
// [3, 6, 9]
// Here is an example using map() on an Array of Strings:
const greetings = ['hello', 'how are you?', 'good to see you!'];
const result = map(greetings, s => s.toUpperCase());
console.log(result);
// [ 'HELLO', 'HOW ARE YOU?', 'GOOD TO SEE YOU!' ]
console.log(greetings);
// ['hello', 'how are you?', 'good to see you!']

///////////////////