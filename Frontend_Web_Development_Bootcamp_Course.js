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