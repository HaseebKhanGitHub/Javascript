//concatenate strings
/*
var string ="hello";
string+="world";
console.log(string+"!");
*/

//not a number
/*
console.log(undefined/4);
function test1(a){
	console.log(a/5);
}
test1();
*/

//x as string
// cohersion

/* 
var y=4;
x="4";


if (x==y) {
	console.log("x='4' is equals to y=4");
}
*/

//strict equality

/*
if (x===y) {
	console.log("Strict: x='4' is equals to y=4");
}
else{
	{
	console.log("Strict: x='4' is not equals to y=4");
}
}
*/






if (false || null || undefined || "" || 0 || NaN) {
	console.log("This line won't ever execute")
}
else{
	console.log("All false");
}



if (true&& "hello" && 1 && -1 &&"false") {
	console.log("All true");
}