// Add the numbers
function add(num1 , num2) {
    const sum = num1 + num2;
    console.log('The sum of two number:' , sum);
}
add(2, 3);
************************************************************************
// Add multiple  numbers
function addALL(a, b, c, d, e) {
    const total = a + b + c + d + e;
    console.log('total of multiple  numbers ' , total);
    
}
addALL( 2, 3, 5 , 6 , 14);

***********************************************************************
//

// square of a number
function square(number) {
    sqr = number * number ;
    console.log('The square of this number is: ' , sqr);
}
square(4);
square(5);
square(450);

// a number  doubleIt
function doubleIt(number) {
    const doubled = number * 2 ;
    console.log(number , doubled);
}
console.log( ' I will call the function');;
doubleIt(15);
console.log('--------------------------');
doubleIt(88);
console.log('--------------------------');
doubleIt(873);
const money = 112;
doubleIt(money);

// difference the two number

function difference(num1 , num2) {
    const diff = num1 - num2 ;
    console.log(num1, num2 , ' difference is' , diff);
}

const fatherAge = 57 ;
const myAge = 38;
difference(fatherAge , myAge);