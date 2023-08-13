//functions
/*function addition(firstNumber, secondNumber) {
const result = firstNumber + secondNumber;
console.log(result);
}
addition(3,4);
addition(4,4);
addition(7,8);
addition(4,9);
addition(4,5);
*/

function setName(user = "Default user") {
    const userName = user;
    console.log(userName);

}
setName("Mayowa");
setName();
setName("");

function performMultiplication(numbers, otherNumbers = 5) {
const result = 2 * numbers * otherNumbers;
console.log(result);
}
performMultiplication(2);
performMultiplication(2,10);

const Ego = (2 * 3);
console.log(Ego);
