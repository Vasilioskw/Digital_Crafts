var name = "Harry"
console.log(`Hello ${name}`) // logs "Hello Harry"

// Needs a function to be called!

/////////

function userGreeting() {
    return "Hello user!";
  }
  
  userGreeting(); // Calling a function

/////////

  function greetUserByName(name) {
    return `Hello ${name}`;
  }
  
  greetUserByName("Johnny"); // returns "Hello Johnny"

  // Parameters can be changed when calling the function!!

  /////// Example
  
  function sum(x, y) {
    return x + y;
    // code after the return will not run
  }
  var sumOfNumbers = sum(5, 7);
  console.log(sumOfNumbers); // 12

  ///////////