



function mul(x,y) {
	// body...
	return x*y;
}

// console.log(mul(3,7));
mul.version="v.1.0.0";
console.log(mul);


//fun factory
function makeMultiplier(multiplier){
	var myfunc= function(x){
		return multiplier*x;
	};
	return myfunc;
}
var multiplyby3= makeMultiplier(3);
console.log(multiplyby3(100));



// passing func as arguments
function doOperationon(x, operation){
	return operation(x);
}
var result= doOperationon(5, multiplyby3);
console.log(result);

