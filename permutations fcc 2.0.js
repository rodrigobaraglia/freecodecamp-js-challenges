/*Main function. The program calculates the number of permutations without two 
succesive repeated charaters of a given string. It does not generate 
said permutations. The problem is solved by calculation alone.*/

function permAlone(str) {
		if (str.length == 1) { 
			return 1;
		} else 

		var repeatedCharArray = charInstances(str);
		var totalPermutations = factorialString(str);
		var invalid = invalidPermutations(str,repeatedCharArray).reduce(function(a,b){return a + b})
		var overlappings = factorialString(str.slice(repeatedCharArray.length + 
		adjustOverlappingSpace(repeatedCharArray))) * multiplyRepetitions(repeatedCharArray);
		var bareResult = totalPermutations - invalid;
		var adjustedResult = totalPermutations - invalid + overlappings;
  
		if(repeatedCharArray[0] == str.length) {
			return 0;
		} else if (repeatedCharArray.length > 1) {
			return adjustedResult;
		} else 
			return bareResult;
}



//Auxiliary functions//

//calculate factorials of strings and numbers//
function factorialString(str) {
		var factorialArray = [];
		for(let j = 0; j < str.length; j ++) {
			factorialArray[j] = j+1;  
		}

		return  factorialArray.reduce(function(a,b){return a*b})
}

function factorialNum(num) {
		var factorialArray = [];
		for(let j = 0; j < num; j ++) {
			factorialArray[j] = j+1;  
		}

		return  factorialArray.reduce(function(a,b){return a*b})
}

//Assess character types and number of instances for each type//

function charTypes(str) { 
		var tipos = []
		var testArray = str.split('');
		for(let i = 0; i < testArray.length; i ++) {
			tipos[i] = testArray[i];
			for(let j = 0; j < testArray.length; j ++) {
				if (tipos[i] == testArray[j]) {
					testArray[j] = '';
					}

				}


		}
		return tipos.filter(x => x !== '');
  }



function charInstances(str) {
		var types = charTypes(str);
		var instanceCount = []
		for (let i = 0; i < types.length; i ++) {
			instanceCount[i] = 0;
			for (let j = 0; j < str.length; j ++) {
				if(types[i] == str.charAt(j)) {
					instanceCount[i] ++;
				}

			}

		}
		return instanceCount.filter(x => x > 1);
}




//Assess number of invalid permutations for each repeated type//
function invalidPermutations(str,repetitions) {
		var z = [];
		for (let i = 0; i < repetitions.length; i ++) {
			z[i] = sumInvalidSpace(str, repetitions[i]) 
		}
		return z;
}

//Multiply the factorial of instances for each repeated type. Part of the function for finding overlappings.//

function multiplyRepetitions(numArr) {
		var x = 1;
		for(let i = 0; i < numArr.length; i ++) {
			x = x * factorialNum(numArr[i]);
		}
		return x;
}




//Adjust number of total positions for calculating overlapping permutations//
function adjustOverlappingSpace(arr) {
		var y = 0;
		arr.forEach(function(element) {
			y = y + (element-2)
		});
		return y;
}

//Calculate invalid space for a number of character repetitions//
function sumInvalidSpace(str, repetitions) {
		var slicedString = '';
		var x = [];
		for (let i = repetitions; i > 1; i -- ) {
			slicedString = str.slice(i-1)
			x[i] = factorialString(slicedString) * factorialNum(i);
		}
		return (x.reduce(function(a,b){return a + b}))
}


console.log("Total Permutations: " + totalPermutations)
console.log("Invalid: " + invalid)
console.log("Overlappings: " + overlappings)
console.log("Result (bare): " + bareResult)
console.log("Result (adjusted): " + adjustedResult)
console.log("Main Function: " + permAlone("a"))



