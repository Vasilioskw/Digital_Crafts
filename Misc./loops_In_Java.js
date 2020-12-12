let n = 5;    
let conversation = '';    
while (n > 0) {    
  if (n % 2 !== 0) {
    conversation += "one for me. ";    
    if (n === 1) {
      conversation += "none for you.";    
    }
  } else {
    conversation += "one for you\n";    
    if (n === 1) {
      conversation += "none for me.";    
    }
  }

  n--;    
}    
console.log(conversation);
