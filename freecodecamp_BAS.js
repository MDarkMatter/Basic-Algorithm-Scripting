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
