//problem 1.

const cars = ['Tesla', 'Mercedes', 'Honda']
const [ randomCar ] = cars
const [ ,otherRandomCar ] = cars
//Predict the output
console.log(randomCar)
console.log(otherRandomCar)

//The first console log will print 'Tesla'
//The second console log will print 'Mercedes'

//problem 2.

const employee = {
    name: 'Elon',
    age: 47,
    company: 'Tesla'
}
const { name: otherName } = employee;
//Predict the output
// console.log(name);
console.log(otherName);

// The first counsel log is undefined because it is calling the key rather than the variable otherName.
// The second console log prints Elon

//problem 3.

const person = {
    name: 'Phil Smith',
    age: 47,
    height: '6 feet'
}
const password = '12345';
const { password: hashedPassword } = person;  
//Predict the output
console.log(password);
console.log(hashedPassword);

// The first console log prints the values of the variable password
// The second console log is undefined because there is no key password in the object person.


//problem 4.

const numbers = [8, 2, 3, 5, 6, 1, 67, 12, 2];
const [,first] = numbers; // 2 is not equal to 5
const [,,,second] = numbers;
const [,,,,,,,,third] = numbers;
//Predict the output
console.log(first == second);
console.log(first == third);

// The first console log prints false because variabl first = 2  and is not equal to variable second = 5
// The second console log is true because variable first = 2 is equal to variable third = 2.


//problem 5. 

const lastTest = {
    key: 'value',
    secondKey: [1, 5, 1, 8, 3, 3]
}
const { key } = lastTest;
const { secondKey } = lastTest;
const [ ,willThisWork] = secondKey;
//Predict the output
console.log(key);
console.log(secondKey);
console.log(secondKey[0]);
console.log(willThisWork);

// The first console log prints the string 'value' because key has a value string in the variable const lastTest.
// The second console log prints the list [1,2,3,4,5] because it is printing the const lastTest key value seconKey that has an array [1,2,3,4,5]
// The third console log prints 1 because it is printing the variable secondKey first value in the array 
// The fourth console log prints 5 because it destructures the variable lastTest, key, secondKey and one comma to get the second value in the array.
