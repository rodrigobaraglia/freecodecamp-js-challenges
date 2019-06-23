/*basado en la solución computacionalmente económica propuesta en 
* https://adamdrake.com/
* an-unreasonably-deep-dive-into-project-euler-problem-1.html*/

function multiplesOf3and5(number) {
var a = 3 * arSum(Math.floor((number-1)/3));
var b = 5 * arSum(Math.floor((number-1)/5));
var c = 15 * arSum(Math.floor((number-1)/15))
return a + b - c;
}

function arSum (num) {
 var y = (num * (num + 1))/2;
 return y;

}
var A = 3 * arSum(Math.floor(1000/3));
console.log(arSum(10))
console.log(multiplesOf3and5(1000)) 

/* versión con los divisores parametrizadados */
function multiplesOfK1andK2(number, k1, k2) {
var a = k1 * arSum(Math.floor((number-1)/k1));
var b = k2 * arSum(Math.floor((number-1)/k2));
var c = (k1 * k2) * arSum(Math.floor((number-1)/(k1 * k2)))
return a + b - c;
}
console.log(multiplesOfK1andK2(1000,3,5))
