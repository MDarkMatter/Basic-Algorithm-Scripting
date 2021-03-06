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
    strback = backwards.join('');

    if (strfor === strback) {
        return true;
    } else {
        return false;
    }
}

//--------------Problem 4
// Find the Longest Word in a String
// Return the length of the longest word in the provided sentence.
// Your response should be a number.

function findLongestWord(str) {
    var pushArray = [];
    var turnIntoArray = str.split(' ');
    for (var i = 0; i < turnIntoArray.length; i++) {
        pushArray.push(turnIntoArray[i].length);
    }
    return Math.max.apply(null, pushArray);
}


//-------------------Problem 5
// Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.
// For the purpose of this exercise, you should also capitalize connecting words like "the" and "of".

function titleCase(str) {
    var sentence = str.split('');
    var upper = [];

    upper.push(sentence[0].toUpperCase());
    for (i = 1; i < sentence.length; i++) {
        if (sentence[i] === " ") {
            upper.push(" ");
            upper.push(sentence[i + 1].toUpperCase());
            i++;
        } else {
            upper.push(sentence[i].toLowerCase());
        }
    }
    var done = upper.join('');
    return done;
}


//-----------Problem 6
// Return an array consisting of the largest number from each provided sub-array. For simplicity, the provided array will contain exactly 4 sub-arrays.

// Remember, you can iterate through an array with a simple for loop, and access each member with array syntax arr[i].

function largestOfFour(arr) {
    var largestNum = [];

    for (var i = 0; i < arr.length; i++) {
        largestNum.push(Math.max.apply(null, arr[i]));
    }

    return largestNum;
}



//------------Problem 7
// Check if a string (first argument, str) ends with the given target string (second argument, target).

function confirmEnding(str, target) {
    if (str.substr((str.length - target.length), target.length) === target) {
        return true;
    } else {
        return false;
    }

}


//---------------Problem 8
//Repeat a given string (first argument) num times (second argument). Return an empty string if num is a negative number.

function repeatStringNumTimes(str, num) {
    var strArr = [];
    for (var i = 0; i < num; i++) {
        strArr.push(str);
    }

    return strArr.join('');
}


//-------------Problem 9
// Truncate a string (first argument) if it is longer than the given maximum string length (second argument). Return the truncated string with a ... ending.
//
// Note that inserting the three dots to the end will add to the string length.
//
// However, if the given maximum string length num is less than or equal to 3, then the addition of the three dots does not add to the string length in determining the truncated string.
function truncateString(str, num) {
    if (num <= 3) {
        return str.slice(0, num) + '...';
    } else if (str.length > num) {
        return str.slice(0, (num - 3)) + '...';
    } else {
        return str;
    }
}



//--------------------Problem 10
//Write a function that splits an array (first argument) into groups the length of size (second argument) and returns them as a two-dimensional array.

function chunkArrayInGroups(arr, size) {
    var grouped = [];
    for (var i = 0; i < arr.length; i++) {
        var arrSplice = arr.splice(0, (size));
        grouped.push(arrSplice);
        i = 0;
    }

    if (arr.length > 0) {
        grouped.push(arr);
    }
    return grouped;
}


//--------------------Problem 11
// Return the remaining elements of an array after chopping off n elements from the head.
// The head means the beginning of the array, or the zeroth index.

function slasher(arr, howMany) {
    var arrSplice = arr.splice(0, (howMany));
    return arr;
}


//-------------------Problem 12
// Return true if the string in the first element of the array contains all of the letters of the string in the second element of the array.
// For example, ["hello", "Hello"], should return true because all of the letters in the second string are present in the first, ignoring case.
// The arguments ["hello", "hey"] should return false because the string "hello" does not contain a "y".
// Lastly, ["Alien", "line"], should return true because all of the letters in "line" are present in "Alien".

function mutation(arr) {
    var zero = arr[0].toLowerCase();
    var one = arr[1].toLowerCase();

    for (var i = 0; i < one.length; i++) {
        if (zero.indexOf(one.charAt(i)) === -1) {
            return false;
        }
    }
    for (var i = 0; i < one.length; i++) {
        if (zero.indexOf(one.charAt(i)) > 0) {
            return true;
        }
    }

}





//-----------------------Problem 13
//Remove all falsy values from an array.
// Falsy values in JavaScript are false, null, 0, "", undefined, and NaN.
function bouncer(arr) {
    return arr.filter(
        function(obj) {
            var check = Boolean(obj);
            if (!check) {
                return false;
            } else {
                return true;
            }
        }
    );
}

//-------------------Problem 14
// You will be provided with an initial array (the first argument in the destroyer function), followed by one or more arguments. Remove all elements from the initial array that are of the same value as these arguments.
//create global varibales for args and arrayToFilter

var args = [];
var arrayToFilter = [];

function destroyer(arr) {
    args = Array.prototype.slice.call(arguments);
    arrayToFilter = args.splice(0, 1);
    return arrayToFilter[0].filter(filtration);
}

function filtration(obj) {
    for (var i = 0; i < args.length; i++) {
        if (obj === args[i]) {
            return false;
        }
    }
    return true;
}


//------------------Problem 15
// Return the lowest index at which a value (second argument) should be inserted into an array (first argument) once it has been sorted.
// For example, getIndexToIns([1,2,3,4], 1.5) should return 1 because it is greater than 1 (index 0), but less than 2 (index 1).
// Likewise, getIndexToIns([20,3,5], 19) should return 2 because once the array has been sorted it will look like [3,5,20] and 19 is less than 20 (index 2) and greater than 5 (index 1).

function getIndexToIns(arr, num) {
    var index;
    arr.sort(function(a, b) {
        return a - b;
    });

    for (var i = 0; i < arr.length; i++) {
        if (num > arr[i]) {
            index = i + 1;
        } else if (num === arr[i]) {
            index = i;
        }
    }
    return index;
}


//------------------Problem 16
// One of the simplest and most widely known ciphers is a Caesar cipher, also known as a shift cipher. In a shift cipher the meanings of the letters are shifted by some set amount.
// A common modern use is the ROT13 cipher, where the values of the letters are shifted by 13 places. Thus 'A' ↔ 'N', 'B' ↔  'O' and so on.
// Write a function which takes a ROT13 encoded string as input and returns a decoded string.
// All letters will be uppercase. Do not transform any non-alphabetic character (i.e. spaces, punctuation), but do pass them on.

// console.log('N'.charCodeAt());
// ''.fromCharCode(65, 66, 67);

function rot13(str) {
    var newString = [];
    for (var i = 0; i < str.length; i++) {
        if (str.charCodeAt(i) >= 78) {
            newString.push(String.fromCharCode(str.charCodeAt(i) - 13));
        } else if (str.charCodeAt(i) >= 65 && str.charCodeAt(i) < 78) {
            newString.push(String.fromCharCode(str.charCodeAt(i) + 13));
        } else {
            newString.push(String.fromCharCode(str.charCodeAt(i)));
        }
    }
    return newString.join('');
}

// Change the inputs below to test
