// const htmlBody = document.querySelector('body');

// const randomClickFunction = function(){
//     const colors = ['yellow', 'green', 'white', 'silver', 'blue', 'red']

//     const randomIndex = Math.floor(Math.random() * colors.length);

//     const randomColor = colors[randomIndex];

//     htmlBody.style.backgroundColor = randomColor;

//     console.log('The user clicked and set the color to ' + randomColor);

// }

// randomClickFunction()

// htmlBody.onclick = randomClickFunction; 


// const myFirstVariable = 'Writing code gives you super powers';

// const mySecondVariable = 890;

// const myThirdVariable = { firstProperty: 'So help me LORD Almighty'};


// const variable1 = 10;
// const variable2 = variable1;
// const variable3 = 'Zach';
// const variable4 = {
//     variableType: 'object',
//     variableValue: 'some value',
// };
// const variable5 = (function(){
//     return 'Hello, my name is ';
// })();
// const variable6 = variable5 + variable3;


// const variable1 = 10;
// const variable2 = 'Coding is fun';
// const variable3 = true;

// typeof variable1;


// const firstNumber = '10';
// const secondNumber = 10;

// const showResult = Number(firstNumber) + secondNumber



// Array

// const firstArray = [9, 42, 323,421, 32442,];
// const differentDataTypes = [56, 'yes', false, {property: 'value'}, 564, [332, 6675, 89]]; 

// // Object

// const objectVariable = {prop1: 3032, prop2: 'String', prop3: 424};

// // Nested Object

// const nestedObject = {
// 	nestedObject1: {
// 		nestedObject2 : {
// 			nestedObject3: {
// 				nestedObject4: {
// 					Prop1: 'I now get it'
// 				}
// 			}
// 		}
// 	}
// }

const functionVariable = function(){
    return 'Its working'
}

// Exercise

const objectVariable = {
    property1: 'I am property one',
    property2: 'I am property two',
    property3: [10, 20, 30]
}


// JS Operators
    //Arithmetic Operators

const result = 30 + 40 / 2;

let startingNumber = 0;

    // Assignment Operators

let x = 50;

x = x + 10;

// This can be re-written in different way i.e

let y = 50;

y += 10;

// Comparism Operators

const result1 = 20 === 20;

const result2 = 20 > 10;

const numberValue = 20;
const stringValue = '20';

const resulting = numberValue == stringValue;

const numberValue1 = 20;
const stringValue2 = '20';

const result3 = numberValue === stringValue;

const numberValue2 = 30;
const stringValue1 = '30';

const result4 = numberValue2 != stringValue1;

const numberValue3 = 30;
const stringValue3 = '30';

const result5 = numberValue2 != stringValue1;

// Numeric Comparism operators: Using the > < >= and <= eg:
	20 > 10 
	10 < 20 
	20 >= 10 
	10 <= 20 

// Ternary operator: Eg:

	const result6 = 20 === 20 ? 'Values are equal' : 'Values are not equal' 


// Logical Operators

// && (AND Operator)

const result7 = 10 === 10 && 20 === 20; 

// || (OR Operator)

    const firstOr = 12 === 12 || 123 === 1; 
    const secondOr = 123 === 1 || 12 === 12; 
    const thirdOr = 14 === 12 || 12 === 13;

// Practical Example to use this operators is real life

const isUserLoggedIn = true;

const doesUserHasPermissions = false;

const canUserPerformAction = isUserLoggedIn && doesUserHasPermissions; 

// Combing the operators together:

	const result8 = !(((40 / 20) === 2 && true) || ('yes' === 'no'));
	
// In the example above when you run the variable, it returns a false value. To read the expression on the right side is a bit bulky, let's try break them into smaller readable code:
	step1 = 40 / 20;
	step2 = step1 === 2;
	step3 = step2 && true; 
	step4 = 'yes' === 'no';
	step5 = step3 || step4;
    step6 = !step5

// Exercise

	// 1.
	const numberVariable = 0;
	
	numberVariable++;
	numberVariable++;
	numberVariable++;

	console.log(numberVariable); 

	// The answer to this solution is that the when you see the const JS word to declare a variable, you cannot changet the value of the variable, but if you use let JS word, you woul be able to change the variable
	// Solution 
	let numberVariable1 = 0;

	numberVariable1++;
	numberVariable1++;
	numberVariable1++;

	console.log(numberVariable1);

// Exercise 2 

// ===== SNIPPET 1 ===
const firstNumber = 20;
const secondNumber = '20';

const resultOfSnippetOne = firstNumber === secondNumber;

console.log(resultOfSnippetOne);

// ===== End Snippet 1 ====

// ====== SNIPPET 2 =====

const firstNumber1 = 20;
const secondNumber2 = '20';

const resultOfSnippetTwo = firstNumber1 === secondNumber1;

console.log(resultOfSnippetTwo);

// ==== End Snippet 2 ===


// Exercise 3 

const expression1 = 100 % 50;
const expression2 = 100 / 50;
const expression3 = expression1 < expression2;
const expression4 = expression3 && 33 + 5 === 305;
const expression5 = !expression4;

!((100 % 50 < 100 / 50 ) && (33 + 5 === 305)) 

// Exercise 4

const myObj = {
	prop1: 'First Value',
	prop2: 20
};

const myArray = [40, 50, 2 ];

const getResult = myObj.prop1 === (myArray[0] / myArray[2]);

// To soleve this: 
	// myObj.prop1 is 20
	// myArray[0] is 40
	// myArray[2] is 2
	// So, (myArray[0] / myArray[2]) is evaluated to: 40 / 2 = 20
	// So, 20 === 20 result to true;


// Exercise 5

const myObj1 = {
	nestedObj1: {
		price: 100,
		quantity: 5
	},
	nestedObj2: {
		price: 150,
		quantity: 2
	}
};


const myArray1 = [myObj1.nestedObj1, myObj1.nestedObj2];

const getResult1 = (myArray[0].price * myArray[0].quantity) > (myArray[1].price * myArray[1].quantity);

// The answer is true, you've got to break each of the expression and know how each expression access the object and array
// After that, replace each expression in it value place and evaluate
// i.e = (100 * 5) > (150 * 2)
// getResult = (500) > (300) which answer is true

// JS Conditionals 

const firstNumber2 = 20;
const secondNumber3 = 10;
const jsExpression = firstNumber2 > secondNumber3; // true

// Only using if statement (no "else" statement require here )

if (jsExpression) {
	console.log('This expression is true');
}

// An if else statement 

if (jsExpression){
	console.log('This expression is true');
} else {
	console.log('This expression is false');
}

// Adding another 'code path' with 'else if'
// Hint: You can use as many 'if else' statement as you want

if (jsExpression){
	console.log('The expression is true');
} else if (firstNumber2 > 0){
	console.log('The expression is false and the firstNumber2 is greater than 0');
} else {
	console.log('The expression is false, firstNumber 0 or less');
}


// Using the Switch Statement:

const colors = ['orange', 'green', 'yellow', 'purple', 'blue'];

// Gets a random between 0 to 4 and stores the number in a variable 

const randomIndex = Math.floor(Math.random() * colors.length);

/*
	Remember, to get a value from an array, we use bracket notation
	For eg: to get green: we use `color[1]`

	since randonIndex will be a random number from 0 to 4, we can
	pass this in our index to retrieve a random color from the array
*/

const randomColor = colors[randomIndex];

// Conditionals

if (randomColor === 'orange'){
	console.log('The color is orange');
} else if(randomColor === 'green'){
	console.log('The color is green');
} else if (randomColor === 'purple'){
	console.log('The color is purple');
} else if(randomColor === 'blue'){
	console.log('The color is blue');
} else {
	console.log('The color is yellow');
}


switch (randomColor){
	case 'orange': 
	console.log('The color is orange');
	break;
	case 'orange': 
	console.log('The color is green');
	break;
	case 'orange': 
	console.log('The color is purple');
	break;
	case 'orange': 
	console.log('The color is blue');
	break 
	case 'orange': 
	console.log('The color is yellow');
	break;
	default: 
	console.log('You cannot find your color here!')
}


// Looping

const a = [20, 40, 60];

// To print each value of the array: you got to type in the code below:

a[0]; // result to 20
a[1]; // result to 40
a[2]; // result to 60

// Let's you have 100 items in the array to print, would you use the code above in order to print each value?
// The answer is NO! This is because it's the best practices, let learn the best practices below:

const blogPosts = [
	{
		title: 'What is JS?',
		authour: 'Zach Golwitzer',
		publishDate: 'Dec 20, 2020',
		content: 'some post here'
	},
	{
		title: 'How do arrays work?',
		authour: 'Zach Golwitzer',
		publishDate: 'Jan 1, 2021',
		content: 'some post here'
	},
	{
		title: 'How long those it takes to learn coding?',
		authour: 'Zach Golwitzer',
		publishDate: 'Jan 20, 2021',
		content: 'some post here'
	},
];

for (let i = 0; i < blogPosts.length; i++){
	const postTitle = blogPosts[i].title;
	const postAuthor = blogPosts[i].authour;
	const postPublishDate = blogPosts[i].publishDate;
	const postContent = blogPosts[i].content;
}

console.log(postTitle);
console.log(postAuthor);
console.log(postPublishDate);
console.log(postContent);

// Another example:
const arr = [3323, 3232,33232424, 422442352423, 32323233, 'fsnfmf', 'fnsnfsfnf', 'fsmfsfsfsf', 'fsjfjfkfskfsoworwkirw', true, false, false, 332323, 999494, 94994, true, 'nfnnfk', false, 44942, 'fnfnfnf', true];

for (let i = 0; i < arr.length; i++){
  if(typeof arr[i] === 'string'){
		console.log(arr[i]);
	}
}

// In the above example, it iterate the loop and print only values that have  string data types.
// Notice how we use arr.length to allow the conditions iterate the exact number of times all the values of the array are presented.


const myData = [
	{name: 'Daniel',
	 station: 'school',
	 age: 28 
	},
	{name: 'Selsa',
	 station: 'work',
	 age: 29
	},
	{name: 'Davou',
	 station: 'Home',
	 age: 30
	},
];

for (let i = 0; i < myData.length; i++){
	const getName = myData[i].name;
}


// Don't forget when you wish to console.log the ouput, the console.log block of code should inside the for(){} function.
// Don't write it outside the for() function.
const useArray = [
	{firstName: 'Daniel',
	 secondName: 'Datuhung',
	 age: 28
	},
	{firstName: 'Selsa',
	 secondName: 'Daniel',
	 age: 29
	},
	{firstName: 'Father',
	 secondName: 'Amazing',
	 age: 28
	},
];

for (let i = 0; i < useArray.length; i++){
	const printFirstName = useArray[i].firstName;
	const printSecondName = useArray[i].secondName;
	const printAge = useArray[i].age;
}


const useArray = [
    { firstName: 'Daniel', secondName: 'Datuhung', age: 28 },
    { firstName: 'Selsa', secondName: 'Daniel', age: 29 },
    { firstName: 'Father', secondName: 'Amazing', age: 28 },
];

for (let i = 0; i < useArray.length; i++) {
    const printFirstName = useArray[i].firstName;
    const printSecondName = useArray[i].secondName; // Removed extra 'Name' here
    const printAge = useArray[i].age;

    console.log("First Name:", printFirstName);
    console.log("Second Name:", printSecondName);
    console.log("Age:", printAge);
}


// Functions: To use a function, you must 1st: Declare the function and 2nd: Invoke/Call the function

// Declare a function below:

function myFunction () {
	console.log('This is actually not my first function');
}

// Call/Invoke a fucntion

myFunction();

// Immediately invoke function: This fucntion immediately invoke the fucntion.

(function immediatelyInvokeFunction(){
	console.log('Im usimg an immediately invoked function')
}) 
();

// Function parameters and arguments:
//Function parameters are values pass when declaring a function:

function myFunction(param1, param2){
	console.log(param1);
	console.log(param12;
}

//Function arguments are values pass when invoking or calling a function:

myFunction(28, 'This is an argument');

// Anonymous function

const anonymousFunction = function (){
	console.log('This is an anonymous function');
}

anonymousFunction();

// Arrow function:

const arrowFunction = () => {
	console.log('This is an arrow function');
}
	   
arrowFunction();


const numberReturnFunction = () => {
	return 39;
}

numberReturnFunction();

const stringReturnFunction = () => {
	return 'This is string return function';
}

stringReturnFunction();

const booleanReturnFunction = () => {
	return true;
}

booleanReturnFunction();

const variableAndExpressionReturnFunction = () => {
	const a = 20;
	return a < 30 // return true
}

variableAndExpressionReturnFunction();

const expressionFunction = () => {
    let a = 39;
    return a > 29;
}

const printFunction = expressionFunction(); 

console.log(printFunction);


// Using more than one return statement

const numberGlobal = 30
let returnFunction = () => {
	if(numberGlobal > 50){
	return 'Global is greater than 50'
	}
return 'The Global variable is not greater than 50'
}

returnFunction();


// Function together with objects

function myFunction(){
	return 20;
}

const aliasVariable = myFunction();

// If you can assign function to variables, this also means you can assign functions to object.
// To declare a function inisde an object:
const myObject = {
	prop1: 'Selsa Daniel',
	prop2: myFunction
}

// In order to access the function, you need to access the property of the object. Eg:

myObject.prop2()

// Notice the () sign used after accessing the property of the object, 
// this is done in order to immediately execute the function.

// Using JS built in function
//Using strings replace method:

const myString = 'Selse'; // Let's use the object function string method to correct the mispelled Selse to Selsa

myString.replace('e', 'a');

//When you call the myString variable, the replace value is not stored in the variable value
// The replace function object method only returns the replaced value
//To store the replace function object method, create a new variable 

const newName = myString.replace('e', 'a');

// Now the value has been store in the newName variable
// Calling newName variable will show the new created replace function object, eg

newName

// On calling this: Salse will output instead of selse

// Using toUpperCase string object function

myString.toUpperCase();

// We can also chain the method together. Using the . notation to chain more than one objdrct function. eg:

const str = 'hello world',

const result = str.toUpperCase().split(''); // It uses double notation and store value into a new variable

result.indexOf ('WORLD'); // It uses an array object method and stores the value as an array


// Exercise on codewars

function basicOp(operation, value1, value2){
	let result;
	switch(operation){
		case '+':
			result = value1 + value2;
		break;
		case '-':
			result = value1 - value2;
		break;
		case '*':
			result = value1 * value2;
		break;
		case '/':
			result = value1 / value2;
		break;
	}
	return result;
}

// eval() is JS build in function that evaluates arguments 

// Starting Repeat 

function repearStr(numberOfRepeat, str){
	
	let starterString = '';

	for (let i = 0; i = numberOfRepeat.length; i++){
		starterString = starterString + str; 
	}
	return starterString
}

// Convert a string to array
function stringToArray(string){
	return string.split(' ');
}

// Remove string spaces
function noSpace(str){

	const vari = str.split(' ');
	let newArray = [];

	for(let i = 0; i = vari.length; i++){

		const trimmedArray = vari[i].trim();

		const result = newArray.push(trimmedArray);
	}

	const fResult = result.join('');
	return fResult; 
}

// Beginner lost without a map

function map(arr){
	arr.map((arrItem) =>{
		result =  arrItem * 2;
	});

	return result;
}

// Is he gonna survive?

function hero(bullets, dragon){
	return bullets / dragon >= 2;
 }

//Array plus array
 function arrayAddArray(ar1, ar2){
	let sum = 0;

	for (let i = 0; i < arg1.length; i++){
		let arg1Value = ar1[i];
		let arg2Value = ar2[i];

		let allValue = arg1Value + arg2Value

		sum = allValue + sum
	}

	return sum;
 }

 //Century from year 

 function century(year){
	return Math.ceil(year/100);
 }

 //Cat years, dog years

 let catYearsDogYears = function(humanYears){
	let catsAge;
	let dogsAge;

	if(humanYears === 1){
		return [humanYears, 15, 15];
	}

	if(humanYears === 2){
		return [humanYears, 24, 24];
	}

	const excessYears = humanYears - 2;
	const extraCatYears = excessYears * 4;
	const extraDogYears = excessYears * 5;

	return [humanYears, 24 + extraCatYears, 24 + extraDogYears];
 }

 //Total amount in points

 function points(gameArray){
	let gamePoint = 0;
 ]
 
	for (let i = 0; i < gameArray.length; i++){
		let value = gameArray[i];
		let parts = value.split(':');

		const x = parts[0];
		const y = parts[1];

		if(x > y){
			gamePoint = gamePoint + 3;
		} else if(x < y){
			gamePoint = gamePoint + 1;
		}
	}
localStorage
	return gamePoint;
 }

 // Regular Expression 

 const emailValidator = new RegExp('^.+@.+\..+$');

 const userInput = 'fffmfkdkf@g';

 const isValid = emailValidator.test(userInput);

// Regular Expression 

const regex = new RegExp('g');
const string1 = 'my favorite food is streak';
const string2 = 'my favorite thing todo is code'
 regex.test(string1);
 regex.test(string2);


// Regular Expression (comparing a word)


const regex1 = new RegExp('favorite');
const string1 = 'my favorite food is streak';
const string2 = 'my favorite thing todo is code'
 regex1.test(string1);
 regex1.test(string2);

 // Regular Expression is case sensitive 

 const regex1 = new RegExp('FavoritE');
const string1 = 'my favorite food is streak';
const string2 = 'my favorite thing to do is code'
 regex1.test(string1);
 regex1.test(string2);

 // Continuation 
const string1 = 'my favorite food is streak';
const string2 = 'my favorite thing to do is code'

/./.test(string1); // use for matching all characters 
/\d/.test(string1); // use for matching all numbers. This is also equivalent to writing it /[0-9]/.test(string1)
/\s/.test(string1); // use to match all white space 
/\w/.test(string1); // use to match all numbers and letters  i.e alpha numeric


// JS Replace String Method
const myString = 'My Dog jumps over the bed. My dog is a bad Dog';
undefined
const showResult = myString.replaceAll(/[Dd]{1}og/g, 'cat');
undefined
showResult
"My cat jumps over the bed. My cat is a bad cat"

//JS UpperCase String Method
const showUpperCase = myString.toUpperCase();
undefined
showUpperCase
"MY DOG JUMPS OVER THE BED. MY DOG IS A BAD DOG"

// JS Substring String Method
const showSubstring = myString.substring(5, 7);
undefined
showSubstring
"g "

const showSubstring2 = myString[0].toUpperCase() + myString.substring(1, myString.length);
undefined
showSubstring2
"My Dog jumps over the bed. My dog is a bad Dog"

const someRegularWord = 'some lower case word';
undefined
const showResultOfSubstring = someRegularWord[0].toUpperCase() + someRegularWord.substring(1, someRegularWord.length);
undefined
showResultOfSubstring
"Some lower case word" 


// JS Trim Sring Method
const externalData = [
	{
		title: 'How to code	',
		author: '	Zach'
	},
	{
		title: '	What is Vim?',
		author: '	Zach'
	},
	{
		title: '	How do loops work in JavaScript?	',
		author: '	zach	'
	}
];


for (let i = 0; i < externalData.length; i++){
	const currentTitle = externalData[i].title;
	const currentAuthor = externalData[i].author;

	externalData[i].title = currentTitle.trim();
	externalData[i].author = currentAuthor.trim();
}

<- Array(3) [ {…}, {…}, {…} ]
​
0: Object { title: "How to code", author: "Zach" }
​
1: Object { title: "What is Vim?", author: "Zach" }
​
2: Object { title: "How do loops work in JavaScript?", author: "Zach" }
​
length: 3
​
<prototype>: Array []


// JS Match String Method

const regex = /[a-z]+/
const myString = 'hsfjfjJDEdLDMdmmMdndsjwj39040340NDajdsnssrrnw93249243brwnwnds';
myString.match(regex) //first method
Array [ "hsfjfj" ]

regex.exec(myString); // second method
Array [ "hsfjfj" ]


// Array Methods

// JS pop() / push() / unshift() / shift() array method

const arr = [1, 2, 3, 5, 6]
arr.pop()
6
arr.pop()
5
arr
Array(3) [ 1, 2, 3 ]

arr.push(4, 5, 6)
6
arr
Array(6) [ 1, 2, 3, 4, 5, 6 ]

arr.unshift(0)
7
arr
Array(7) [ 0, 1, 2, 3, 4, 5, 6 ]

arr.shift()
0
arr
Array(6) [ 1, 2, 3, 4, 5, 6 ]

arr.unshift(0)
7
arr
Array(7) [ 0, 1, 2, 3, 4, 5, 6 ]

// JS slice array method

const arr = [0, 1, 2, 3, 4, 5, 6];
undefined
const copyArr = arr.slice();
undefined
copyArr
Array(7) [ 0, 1, 2, 3, 4, 5, 6 ]

const anotherCopy = copyArr.slice(3);
undefined
anotherCopy
Array(4) [ 3, 4, 5, 6 ]

// JS Splice Array Method 

const arr = [1, 2, 3, 'opps', 4, 5, 6];
undefined
arr.splice(3, 1, 3.5)
Array [ "opps" ]

arr

Array(7) [ 1, 2, 3, 3.5, 4, 5, 6 ]

// JS indexOf() Array Method

const arr = [1, 2, 3, 3.5, 4, 5, 6]
undefined
arr.indexOf(3.5)
3
arr[arr.indexOf(3.5)]  // this returns the value not the index
3.5 

// JS FindIndex Array method

const moreComplexArr = [
    {
      firstName: 'Bob',
      lastName: 'smith'
    },
        {
            firstName: 'Alice',
            lastName: 'smith'
        },
        {
            firstName: 'Jon',
            lastName: 'Smith'
        },
        {
            firstName: 'Jon',
            lastName: 'Doe'
        }
]; 


moreComplexArr.findIndex((arrItem) => {
        return arrItem.lastName !== 'smith'
});
2 

// JS Map Object Method 

const blogPostsFromDatabase = [
  {
        title: 'I want to learn good things',
        category: 'Uncategorized'
    },
    {
        title: 'I want to learn great things',
        category: 'Uncategorized'
    },
    {
        title: 'I want to learn GODLY things',
        category: 'Uncategorized'
    },
];

blogPostsFromDatabase.map(arrItem => {
    arrItem.category = 'Web development'
    return arrItem;
});
Array(3) [ {…}, {…}, {…} ]

//JS ForEach Array Method

const arr = [1, 2, 3];

arr.forEach(arrItem => {
    console.log(arrItem);
});
1
2
3

const arr = [1, 2, 3];

arr.forEach((arrItem, index) => {
    console.log(arrItem);
    console.log(index);…
1 // arrItem
0 // corresponding index number 
2 // arrItem
1 // corresponding index number
3 // arrItem
2 // corresponding index number

// JS Includes Array Method 

// 1st Method
const myColor = ['blue', 'red', 'purple', 'orange', 'green'];
undefined
let orangeExists = false;
for (let i = 0; i < myColor.length; i++){
    if(myColor[i] === 'orange'){
        orangeExists = true;
}
}

console.log(orangeExists);
true

// 2nd Method

myColor.forEach(color => {
    if(color === 'orange'){
        orangeExists = true
    }
});
undefined
orangeExists
true 

// 3rd Method ... Main Method

myColor.includes('orange');
true 

// 4th Method

myColor.includes('orange');
true
myColor.indexOf('orange');
3
myColor.indexOf('orange') !== -1
true 

// JS Filter Array Method

const allOrders = [
    {
        productName: 'Tea pot',
        isDigital: false,
        isCancelled: false,
        isOpen: false
    },
    {
        productName: 'Blue Gildan Mens Hoodie',
        isDigital: false,
        isCancelled: true,
        isOpen: false
    },
    {
        productName: 'Code complete kindle book',
        isDigital: true,
        isCancelled: true,
        isOpen: false
    },
    {
        productName: 'Atomic kindle book',
        isDigital: true,
        isCancelled: false,
        isOpen: false
    },
];
undefined
const digitalOrders = allOrders.filter(arrItem => {
    return arrItem.isDigital;
});
undefined
digitalOrders
Array [ {…}, {…} ]
​
0: Object { productName: "Code complete kindle book", isDigital: true, isCancelled: true, … }
​
1: Object { productName: "Atomic kindle book", isDigital: true, isCancelled: false, … }
​
length: 2
​
<prototype>: Array []

// 2nd Method

const digitalCancelledOrders = allOrders.filter((orderItems) => {
    return orderItems.isDigital && orderItems.isCancelled;
});
undefined
digitalCancelledOrders
Array [ {…} ]
​
0: Object { productName: "Code complete kindle book", isDigital: true, isCancelled: true, … }
​
length: 1
​
<prototype>: Array []

// JS Reduce Array Method

// Understand the reduce method

const arr = [10, 20, 30, 25, 14];
let sum = 0;
for (let i = 0; i < arr.length; i++){
     sum += arr[i];
}
	
console.log(sum);
99


// Reduce Method
const arr = [10, 20, 30, 25, 14];
undefined
function reduceCallback(sum, arritem){
    return sum += arritem
}

const result = arr.reduce(reduceCallback, 0);
undefined
result
99 

// Using Reduce Method to Calculate mean
const arr = [10, 20, 30, 14, 25];
undefined
arr.reduce((sum, arrItem) => sum += arrItem, 0) / arr.length
19.8 

// Math Method 


Math.PI
3.141592653589793
Math.E
2.718281828459045
Math.abs(-84849)
84849
Math.ceil(Math.PI)
4
Math.floor(Math.PI)
3
Math.round(Math.PI)
3
Math.min(3, 4, 5, 6)
3
Math.max(3, 4, 5, 6)
6

Math.random()
0.18179218702849886
Math.random()
0.5677849157909506 

// JS Math Method

const randomNumber = Math.random()
undefined
randomNumber
0.19465548652142262
const largerNumber = randomNumber * 100
undefined
largerNumber
19.46554865214226
Math.floor(largerNumber)
19
const arr = ['some', 'have', 'food', 'but', 'cant', 'eat']
undefined
const randomIndex = Math.floor(Math.random() * arr.length)
undefined
arr[randomIndex]
"food" 

//Type of Errors in JS

//ReferenceError

const myNumber = 20;
undefined
myNumber
20
anotherNumber
Uncaught ReferenceError: anotherNumber is not defined
    <anonymous> debugger eval code:1
debugger eval code:1:1

	//SyntaxError
const myObject = {
    prop1: 'Value1';
    prop2: 'value2';
};
Uncaught SyntaxError: missing } after property list
debugger eval code:2:17note: { opened at line 1, column 18debugger eval code:1:18

//TypeError
const myNumber2 = 40;
undefined
myNumber2
40
myNumber2.toUpperCase();
Uncaught TypeError: myNumber2.toUpperCase is not a function
    <anonymous> debugger eval code:1
debugger eval code:1:11

//
<h1>To inform you that am happy to be back</h1>
<h2>Experiencing some errors</h2>

// Null, Undefined, NaN(Not a Number)

const myString = 'Not a number';
undefined
Number(myString)
NaN

myString
"Not a number"

myString * 4
NaN

let num = null;
undefined

num === false
false

if (num){
  console.log("Num can be reached")
} else{

    console.log("Num cannot be reached")…
Num cannot be reached

let myVar
undefined

console.log(myVar)
undefined debugger eval code:1:9
undefined 

if (myVar){
    console.log('I can reach myVar')
} else {
    console.log("I cannot reach myVar")
}
I cannot reach myVar debugger eval code:4:10
undefined