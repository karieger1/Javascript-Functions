/*
 * PROBLEM `checkData`: (easy)
 * Write a function that takes a string and checks to make sure that the string
 * has a length of exactly three. Return true if the string length is three or
 * false if it is not three.
 *
 * If the input is invalid throw an 'Invalid Input' exception.
 */
function checkData(inputString) {
	if (typeof inputString !== "string") {
		throw "Invalid Input";
	}
	if(inputString.length === 3) {
		return true;
	}
		else { return false;
		}
}

/*
 * PROBLEM `concatenateArrays`: (easy)
 * Write a function that, given two arrays of integers a and b, returns an array
 * that is formed by the elements of a followed by the elements of b.
 *
 * If the input is invalid throw an 'Invalid Input' exception.
 */

 [1,2,3] [4,5,6] result [1,2,3,4,5,6]
 [] ["a", "b", "c"] => ["a", "b", "c"]

function concatenateArrays(a, b) {
	//create new array to hold result
	//interate over a and add its elements to new array
	//interate over b and add its elements to new array
	//return array that i create

		var result =[]
		for (var i=0; i<a.length; i++){
			result.push (a[i])
		}
		var result =[]
		for (var i=0; i<b.length; i++){
			result.push (b[i])
		}
		return result; 


/*
 * PROBLEM `fixProperNoun`: (easy)
 * Proper nouns always begin with a capital letter, followed by small letters.
 * Write a function called `fixProperNoun` that takes a potentially improperly
 * capitalized proper noun and returns the same noun with the proper
 * capitalization.
 *
 * If the input is invalid throw an 'Invalid Input' exception.
 */
function fixProperNoun(noun) {
	
	noun = noun.toLowerCase();
	var fixedCase = noun.charAt(0).toUpperCase();
	fixedCase += noun.substring(1);
	return fixedCase

}
	if(typeof noun !== "string" || noun.length=0) {
		throw "INvalid INput";
	}

/*
 * PROBLEM `sortLetters`: (easy)
 * Write a function called `sortLetters` that returns a string that sorts all 
 * the letters from a given string in the alphabetical order.
 *
 * If the input is invalid throw an 'Invalid Input' exception.
 */
function sortLetters(a, b) {
   var myString=("The dog ate my code"); 
   myString.sort();

   if(typeof (a, b) !== "string") {
			throw "Invalid Input!";
		}

}

/*
 * PROBLEM `absVal`: (easy)
 * Write a function called `absVal` that return the absolute value of a given 
 * integer. Don't use Math.abs(...)
 *
 * If the input is invalid throw an 'Invalid Input' exception.
 */
function absVal(integer) {
	if(integer > 0) {
		return integer * -1;
	}
	else {
		return integer 
	}

	if Math.floor(integer) !== integer {
		throw "Invalid Input";
	}

	if(typeof integer != number || isNaN(number)) {
			throw "Invalid Input!";
		}
}


 // PROBLEM `myMin`: (easy)
 //Write a function called `myMin` that takes two integers and returns the
 //smaller of the two numbers.
 function myMin(integer1, integer2) {
 	var myArray = [integer1, integer2];
 	if (integer1 < integer2)
 		return integer1;
 }
 	return integer2;


	if Math.floor(integer1) !== integer {
		throw "Invalid Input";
	}

	if(typeof integer1 != number || isNaN(number)) {
			throw "Invalid Input!";
		}
	if Math.floor(integer2) !== integer {
		throw "Invalid Input";
	}

	if(typeof integer2 != number || isNaN(number)) {
			throw "Invalid Input!";
		}
 }
 //If the input is invalid throw an 'Invalid Input' exception.



 //PROBLEM `myMax`: (easy) - Actual Interview Question
 //Write a function called `myMax` that takes an array of integers and returns
 //the largest.
 //[0, 4 6, 2, -3, -13]
 function myMax(intArray){
 	var largest= intArray[0];
 	for(var i=0; i<length.intArray; i++) {
 		if (intArray[i]>largest) {
 			largest=intArray[i];
 		} 
	}
 	if(typeof (largest) != number) {
			throw "Invalid Input!";
	}
	return largest;
 }
 //If the input is invalid throw an 'Invalid Input' exception.
 
//Insane mode: do this without using a for loop.
 


// * PROBLEM `getMonth`: (easy)
 //* Write a function called `getMonth` that maps a given integer to a month.
 function getMonth(monthTonumber) {
 	var months= [
	 	"January", 
		"February", 
		"March", 
		"April", 
		"May", 
		"June", 
		"July", 
		"August", 
		"September", 
		"October", 
		"November", 
		"December"
		];
 	return months[monthTonumber-1];
 } 
 //* For example:
 // getMonth(1) == 'January'
 // getMonth(3) == 'March'
 //etc.
 
 //If the input is invalid throw an 'Invalid Input' exception.


/*
 * PROBLEM `randomElement`: (medium)
 * Create a function called `randomElement` that takes an array of values and
 * returns one randomly selected value from that array.
 */
 	var arrayValues = [
	"cat",
	"cheese",
	"rainbow",
	"taco",
	"lambo",
	"venereal disease",
	"a fucking tiger",
	]
function randomElement (valueArray) {

	var min=0

	return Math.floor(Math.random() * (6 - min + 1))
}
console.log Math.floor
/*
 * PROBLEM `studentPairs`: (medium)
 * Create a javascript function called `studentPairs` that takes an array of
 * student names and returns an array of randomly selected pairs of students
 * (array of arrays).
 */
function studentPairs() {
	var result = [];
	while(students.length >=2) {
		var pair = [];
		
		var random1 = Math.floor(Math.random()*(students.length)); 
		pair.push(students.splice(rand1, 1)[0]);
		
		var random2 = Math.floor(Math.random()*(students.length)); 
		pair.push(students.splice(rand2, 1)[0]);
		
		result.push(pair);
	}
	return result;
}
/*
 * PROBLEM `sumSquares`: (medium)
 * Write a function called `sumSquares` that returns the sum of squares of all
 * integers from 1 up to and including a given positive, non-zero integer N.
 *
 * If the input is invalid throw an 'Invalid Input' exception.
 */
function sumSquares(){
	for(var i=0; i<length.intArray; i++)
}
/* 
 * PROBLEM `findMaxDiff`: (medium)
 * Given an array of integers, write a function called `findMaxDiff` that finds
 * the maximal difference between any two adjacent elements.
 *
 * If the input is invalid throw an 'Invalid Input' exception.
 */

/*
 * PROBLEM `insertDashes`: (medium)
 * Write a function called `insertDashes` that transforms a given sentence into
 * a new one with dashes between each two consecutive letters.
 * For example: insertDashes('abba test') => a-b-b-a t-e-s-t
 *
 * If the input is invalid throw an 'Invalid Input' exception.
 */

/* 
 * PROBLEM `mySubstring`mySubstring: (medium)
 * Implement a function called `mySubstring` that can output the substring of 
 * the given string within specified bounds.
 * 
 * For example: mySubstring('abcde', 2, 3) === 'cd'
 * 
 * Don't use String.substring in your solution.
 *
 * If the input is invalid throw an 'Invalid Input' exception.
 */

/*
 * PROBLEM `splitSwap`: (medium)
 * Write a function called `splitSwap` that swaps two halves of a given array.
 * If the array has an odd number of elements the array should be split in half
 * by rounding down the number of elements divided by two.
 * 
 * For example: splitSwap([1,2,3,4,5]) === [3,4,5,1,2]
 *
 * If the input is invalid throw an 'Invalid Input' exception.
 */

/*
 * PROBLEM `smallMultiples`: (medium)
 * For given n and k write a function called `smallMultiples` that returns the
 * count of the number of multiples of k that are not greater than n.
 *
 * For example smallMultiples(4, 1) === 3 because 1*2, 1*3 and 1*4 are not
 * greater than 4.
 *
 * If the input is invalid throw an 'Invalid Input' exception.
 */

/* 
 * PROBLEM `rot13`: (hard)
 * Create a function called `rot13` that takes an unencrypted string and returns
 * the [ROT-13](http://en.wikipedia.org/wiki/ROT13) version of that string.
 *
 * The input should only contain lower-case alphabetic characters. If the input
 * is invalid throw an 'Invalid Input' exception.
 */

/*
 * PROBLEM `derot13`: (hard)
 * Create a function called `derot13` that takes a ROT-13 encrypted string and
 * returns the decrypted version of that string.
 *
 * The input should only contain lower-case alphabetic characters. If the input
 * is invalid throw an 'Invalid Input' exception.
 */

/*
 * PROBLEM `rotn`: (hard)
 * Create a function called `rotn` that takes an unencrypted string and an
 * integer (n) and returns the ROT-N version of that string.
 *
 * The input should only contain lower-case alphabetic characters. If the input
 * is invalid throw an 'Invalid Input' exception.
 */

/*
 * PROBLEM `findBoth`: (hard)
 * Write a function called `findBoth` that takes two arrays of integers a and b 
 * returns an array that includes only the elements that appear in both a and b.
 * A value should not appear more than once in the returned array.
 *
 * If the input is invalid throw an 'Invalid Input' exception.
 */

/*
 * PROBLEM `countBoth`: (hard)
 * Write a function called `countBoth` that takes two arrays of integers a and 
 * b. The function should return the number of elements that exist in both a and
 * b.
 *
 * If the input is invalid throw an 'Invalid Input' exception.
 */

/* 
 * PROBLEM `isDiagonalMatrix`: (hard)
 * In linear algebra, a square matrix (array of arrays) is called a diagonal 
 * matrix if all entries outside the main diagonal are zero (the diagonal from 
 * the upper left to the lower right).
 * For example:
 * [
 *   [1, 0, 0],
 *   [0, 2, 0],
 *   [0, 0, 3]
 * ]
 * is a diagonal matrix.
 *
 * [
 *   [1, 0, 2],
 *   [0, 2, 0],
 *   [0, 0, 3]
 * ]
 * is not a diagonal matrix.
 *
 * [
 *   [1, 0, 0],
 *   [0, 2, 0]
 * ]
 * is not a diagonal matrix.
 *
 * Write a function called `isDiagonalMatrix` that takes a matrix and returns
 * true if the matrix is a diagonal matrix. Otherwise return false.
 *
 * If the input is invalid throw an 'Invalid Input' exception.
 */

/*
 * PROBLEM `isAnagram`: (hard) - Actual Interview Question
 * An anagram is a type of word play, the result of rearranging the letters of a
 * word or phrase to produce a new word or phrase, using all the original
 * letters exactly once.
 *
 * Write a function called `isAnagram` that takes two arrays of strings of equal 
 * lengths arr1 and arr2. The function should return a new array of the same 
 * length as the input with boolean values at each position i. The boolean value
 * at position i of the result array should be true if the strings at position i
 * in arr1 and arr2 are anagrams of each other. Otherwise the boolean at
 * position i of the result array should be false.
 *
 * For example:
 * isAnagram(
 * 		['cinema', 'shot', 'aba', 'rain'],
 * 		['iceman', 'hots', 'bab', 'train']
 * ) === [true, true, false, false];
 *
 * If the input is invalid throw an 'Invalid Input' exception.
 */

/*
 * PROBLEM `validateParentheses`: (hard) - Actual Interview Question
 * Write a function called `validateParentheses` that takes a string of
 * parentheses. The string can contain the following characters repeated any
 * number of times in any order: ()[]{}
 *
 * The function should return true if the parentheses are in a valid order and
 * false if they are not. One type of parentheses cannot close before it has
 * been opened and one type of parentheses cannot be closed while a different
 * type of parentheses is open. All parentheses that are opened must also be
 * closed.
 *
 * For example:
 * validateParentheses(']') === false;
 * validateParentheses('[') === false;
 * validateParentheses('[]') === true;
 * validateParentheses('{[]}') === true;
 * validateParentheses('([)]') === false;
 * validateParentheses('{[(){()}]}') === true;
 *
 * If the input is invalid throw an 'Invalid Input' exception.
 */

/* 
 * PROBLEM `flattenArray`: (hard) - Actual Interview Question
 * Write a function called flattenArray that takes an array of any type of
 * element, and flattens it, such that any element in the given array that is an
 * array is converted to a list of non-arrays. For example:
 *
 * flattenArray([1, {a: [2, 3]}, 4, [5, [6]], [[7], 8, 9], 10])
 * === [1, {a: [2, 3]}, 4, 5, 6, 7, 8, 9, 10]
 *
 * If the input is invalid throw an 'Invalid Input' exception.
 *
 * Insane mode: do this without recursion.
 */



