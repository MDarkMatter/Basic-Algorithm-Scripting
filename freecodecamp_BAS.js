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



// ---------------------------------Problem 3
// Check for Palindromes
//
// Return true if the given string is a palindrome. Otherwise, return false.
//
// A palindrome is a word or sentence that's spelled the same way both forward and backward, ignoring punctuation, case, and spacing.
//
// Note
// You'll need to remove all non-alphanumeric characters (punctuation, spaces and symbols) and turn everything lower case in order to check for palindromes.
//
// We'll pass strings with varying formats, such as "racecar", "RaceCar", and "race CAR" among others.


function palindrome(str) {

   var forwards = [];
   var backwards = [];
   var strfor;
   var strback;
   var newstr = str.replace(/\s/g, '');
   var nonalph = newstr.replace(/[\W_]+/g, '');
   var lower = nonalph.toLowerCase();

   for (i = 0; i < lower.length; i++) {
      forwards.push(lower[i]);
   }

   for (j = (lower.length - 1); j >= 0; j--) {
      backwards.push(lower[j]);
   }

   strfor = forwards.join('');
   strback =backwards.join('');

   if (strfor === strback) {
      return true;
   } else {
      return false;
   }

}
