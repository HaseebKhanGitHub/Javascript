


function OrderChickenWith(sideDish) {
	// body...
/*
	if (sideDish===undefined) {
	sideDish="drink";
		}
*/
	sideDish = sideDish || "drink";	
	console.log("Chicken will be delivered with : "+sideDish);
}

OrderChickenWith("fish");
OrderChickenWith();