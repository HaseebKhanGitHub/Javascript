var message="in global";
console.log("global: message = "+ message);


var a = function() {
	// body...
	var message= "inside a";
	console.log(" a: message = "+message);


	/* function b() 
	{
	// body...
		console.log(" b: message = "+message);
    } */
	b();
}

function b() {
	// body...
	console.log(" b: message = "+message);
}







a();