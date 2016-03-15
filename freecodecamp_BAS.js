// Reverse the provided string.
// You may need to turn the string into an array before you can reverse it.
// Your result must be a string.


function reverseString(str) {
  var array = [];

  array = str.split('');
  array.reverse();
  array = array.join('');
  return array;
}

reverseString("hello");



//-------------------------------------Problem 2
// Return the factorial of the provided integer.
// If the integer is represented with the letter n, a factorial is the product of all positive integers less than or equal to n.
// Factorials are often represented with the shorthand notation n!
// For example: 5! = 1 * 2 * 3 * 4 * 5 = 120

function factorialize(num) {
  var multiply = [];
  var factorial = 0;


  if (num > 0) {
    for (var i = 1; i <= num; i++) {
      multiply.push(i);
    }

    factorial = multiply.reduce(function(a, b) {
      return a * b;
    });

    return factorial;
  } else {
    return 1;
  }
}

factorialize(5);
