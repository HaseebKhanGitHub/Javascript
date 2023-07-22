/*
console.log(document.getElementById("title"));

console.log(document instanceof HTMLDocument);
*/

//Event Handling

document.addEventListener("DOMContentLoaded",
function(event){
			function sayHello() {
		console.log(this);
		this.textContent="said it";
		var name=
			document.getElementById("name").value;
	 	var message="<h2>Hello "+ name+"!</h2>";
	/*
	 	document
	 	.getElementById("content")
	 	.textContent=message;
	*/
	 	document
	 	.getElementById("content")
	 	.innerHTML=message;

		 if(name==="student"){
		 	var title=
		 	document
		 	.querySelector("#title") // .getElementById("title")
		 	.textContent;
		 	title+="& Lovin it!";
		 	document
		 	.querySelector("#title") // .getElementById("title")
		 	.textContent=title;
		 	}
	}

	// Unobstrusive event binding
	document.querySelector("button")
	 .addEventListener("click",sayHello);
}
);
/*
 document.querySelector("button")
  .onclick=sayHello;
   document.querySelector("input")
  .onclick=sayHello;
  */


