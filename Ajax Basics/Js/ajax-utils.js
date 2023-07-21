
(function (global) {

	var ajaxUtils={};

	// returns an http rquest object

	function getRequestObject(){
		if (window.XMLHttpRequest) {
	
			return (new XMLHttpRequest());
		}
		else if (windo.ActiveXObject) {
			return (new ActiveXObject("Microsoft.XMLHTTP"));
		}

		else{
			global.alert("Ajax is not supported!");
			return (null);
		}
	}

	//makes an ajax GET request to 'requestURL'

	ajaxUtils.sendGetRequest=
		function(requestUrl, responseHandler, isJsonResponse){
			var request= getRequestObject();
			request.onreadystatechange =
					function(){
						handleResponse(request, responseHandler, isJsonResponse );
					};
					
					request.open("GET", requestUrl, true);
					request.send(null);
		};
		


		//only calls user provided 'responseHandler'
		//func if response is ready 
		function handleResponse(request, responseHandler, isJsonResponse) {
			if ((request.readystate==4)&&(request.status==200)) {
				//Default to isJsonResponse = true
				if (isJsonResponse == undefined) {
					isJsonResponse=true;
				} 
				if (isJsonResponse) {
					responseHandler(JSON.parse(request.responseText))
				}
				else{
					responseHandler(request.responseText);
				}
			}
		}
		


		//expose utility to global object
		global.$ajaxUtils = ajaxUtils;


})(window);