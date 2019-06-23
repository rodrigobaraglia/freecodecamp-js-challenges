function palindrome(str) {
 var inPut = str.match(/[a-zA-Z0-9]/g).join('').toLowerCase();
 var tupNi = inPut.split('').reverse().join('');
	if (inPut == tupNi) {
    return true;
  } else 
    return false;


}



palindrome("eye");
 var regEx = /\W/;
var testString = "2_A  3*3#a2";
console.log(testString)
var test2 = testString.match(/[a-zA-Z0-9]/g).join('').toLowerCase();
console.log(test2)
var test3 = test2.split('').reverse().join('');
function a (x, y) { 
  if (x == y) {
    return true;
  } else 
    return false;
}
console.log(a(test2,test3))

