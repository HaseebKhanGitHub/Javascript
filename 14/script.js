

//closures
/*
function makeMultiplier(multiplier) {
	function b(){
		console.log("multiplier is: "+multiplier);
	}
	b();

	return {
		function (x){
			return multiplier * x;
		}
	};
}

var doubleAll = makeMultiplier(2);
console.log(doubleAll(10));
*/






/*

function makeMultiplier(multiplier) {
//    function b() {
//        console.log("multiplier is: " + multiplier);
//    }
//    b();

    return function(x) {
        return multiplier * x;
    };
}

var doubleAll = makeMultiplier(2);
console.log(doubleAll(10));

*/




//closure function concept

function outerFunction() {
  var outerVariable = 'I am from the outer function';

  function innerFunction() {
    console.log(outerVariable);
  }

  return innerFunction;
}

var closureFunction = outerFunction();
closureFunction(); // Outputs: "I am from the outer function"

//A closure is a feature in JavaScript that allows a function 
//to access variables from its outer (enclosing) lexical scope 
//even after the outer function has finished executing.
