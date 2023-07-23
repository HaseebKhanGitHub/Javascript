

//Event Handling

document.addEventListener("DOMContentLoaded",
function(event){
			console.log(event);

			function sayHello() {
	
		console.log(this);
		this.textContent="said it";
		var name=
			document.getElementById("name").value;
	 	var message="<h2>Hello "+ name+"!</h2>";
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

	 document.querySelector("body")
	 .addEventListener("mousemove",
	 	function(event){
	 		if (event.shiftKey===true) {
	 			console.log("X:"+event.clientX);
	 			console.log("Y:"+event.clientY)
	 		}
	 	}
	 	);
}
);
