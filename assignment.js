
/*
You are to implement a calculator function that does 4 arithmetic operations

    Multiplication
    Addition
    Division
    Subtraction.


Use the functions to perform the following calculation:
(192 * 4) + 13 / 2 - 466

And return the result of the equation.

Note: return the result of the equation to 
a variable called: calculatorAnswer
*/

/*function calculatorAnswer(){
const Multiplication = 192 * 4;
const Addition = Multiplication + 13;
const Division = Addition /2;
const Substraction = Division -466;
}
console.log(Multiplication, Addition, Division, Subtraction);
calculatorAnswer()*/

/*function calculatorAnswer(Multiplication, Addition, Division, Subtraction){
    const calculation = {
        "Multiplication": Multiplication,
        "Addition": Addition,
        "Division": Division,
        "Substraction": Subtraction,

    }
    console.log(calculation);
}
calculatorAnswer((192 * 4), 13, 2,  466)*/

/*Use the functions to perform the following calculation:
(192 * 4) + 13 / 2 - 466

And return the result of the equation.

Note: return the result of the equation to 
a variable called: calculatorAnswer
(192 * 4) + 13 / 2 - 466
*/

function Multipication(num1, num2) {
    const multiplication = num1 * num2;
    return multiplication;
}
//Multipication(192, 4)

function Addition(num1, num2) {
const addition = num1 + num2;
return addition;
}

function Division(num1, num2) {
    const division = num1/num2;
    return division;
}

function Substraction(num1, num2) {
    const substraction = num1-num2;
    return substraction;
}
function calculatorAnswer(num1, num2, num3, num4, num5) {
const step1 = Multipication(num1, num2);
const step2 = Division(num3, num4);
const step3 = Addition(step1, step2); 
const step4 = Substraction(step3, num5);
console.log(step4);
}
calculatorAnswer(192, 4, 13, 2, 466);

//(192 * 4) + 13 / 2 - 466

