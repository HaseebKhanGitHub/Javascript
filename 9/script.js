


/*
var a =7;
var b =a;
console.log("a:"+a);
console.log("b:"+b);

b=5;

console.log("after updating b:"+b);
console.log("a:"+a);
console.log("b:"+b);
*/


//by reference

/*
var a ={x:7};
var b =a;
console.log(a);
console.log(b);

b.x=5;
console.log("after updating b.x:"+b);
console.log(a);
console.log(b);
*/




/*
function chngePrimitive(primvalue) {
	// body...
	console.log("in  chngePrimitive");
	console.log("Before: ");
	console.log(primvalue);

	primvalue=4;
	console.log("After: ");
	console.log(primvalue);
}

var value= 7;
chngePrimitive(value);
console.log("after  chngePrimitive, original value:");
console.log(value);
*/




function chngeObjectobj(objvalue) {
	// body...
	console.log("in  chngeobject");
	console.log("Before: ");
	console.log(objvalue);

	objvalue.x=4;
	console.log("After: ");
	console.log(objvalue);
}

value= {x:7};
chngeObjectobj(value);
console.log("after  chngeobject, original value:");
console.log(value);