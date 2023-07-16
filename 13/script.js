

//issue in arrayd

var name2=["Haseeb","qureshi","lada"];


/*

var myObj={
	name:"Haseeb",
	course:"html,css",
	platform:"coursera"
};

//for to traverse the properties

for(var prop in myObj){
	console.log(prop+":"+myObj[prop]);//prop works like an index
}

*/

for(var name in name2){
	console.log("Hello "+name2[name]);//prop works like an index
}


//becomes property like an index

name2.greeting="hi!";
for(var name in name2){
	console.log("Hi "+name2[name]);//prop works like an index
}