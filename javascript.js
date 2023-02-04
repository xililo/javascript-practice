/*
using a while loop find the sum of the even numbers between  1 and 100;
*/



/*
while (num < 100) { // when num = 100, returns false;
    sum = sum + num;
    num = num + 2; // increment by 2;
}
 */
/* var num = 0;
var sum = 0;
while (num < 100) {

    let remainder = num % 2;
    if (remainder == 0) {
        sum = sum + num;
    }
    num++;
}

*/

//FOR LOOPS
/* var sum = 0;

for (let i = 0; i < 100; i++) {
    let remainder = i % 2;
    if (remainder == 0) {
        sum = sum + i;
    }
}
let answer = `<h1> The answer is <u>${sum}</u> </h1>`;
document.write(answer); */

// FUNCTIONS


/* 

var value = add(3, 4);
var value2 = add(33, 44);

console.log('valu1 is ' + value);
console.log('valu2 is ' + value2); */

/*create a funtion that adds two numbers, divides them, 
and returns the product of their quotient and sum;
*/
var add = function (a, b) {
    var ans = a + b;
    return ans;
}
var calc = function (x, y) {
    let q = x / y;
    let s = x + y;
    let prod = q * s;
    return prod;
}

var value1 = calc(46, 72);
var value2 = calc(8, 5);
var final = add(value1, value2);
console.log(final);
