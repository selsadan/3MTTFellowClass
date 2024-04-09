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