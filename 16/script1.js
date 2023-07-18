


//right


(function(window)
	{
		var haseebGreeter= {};
		haseebGreeter.name="Haseeb";
		var greeting = "Hello ";
		haseebGreeter.sayHello=function() {

			console.log(greeting+haseebGreeter.name);
		}

		window.haseebGreeter=haseebGreeter;
	}
)(window);

