//event handling
document.addEventListener
("DOMContentLoaded",
	function (event) {
	

		//Unobstructive event binding
		document.querySelector("button")
		.addEventListener("click",
		function(){


		//call server to get the name
		$ajaxUtils
			.sendGetRequest("/AjaxData/name.json",
				function (res){
					var message= res.fName+" "+res.lName
					if(res.LikesChineseFood){
						message+= "Likes chin food";
					}
					else{
						message+= "doesn't like chin food";
					}
					message+= " and uses ";
					message+= res.numberOfDisplays;
					message+= " displays for coding";
					

					document.querySelector("#content")
				.innerHTML = "<h2>" +message+"<h2>";
				} );
			
				
			});

		
	}
);