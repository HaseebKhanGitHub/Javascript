



// object literals and this n self

var literalCircle={
	
	radius:10,


	getArea: function () {
		var self=this;
		console.log(this);

		var increaseRadius= function () {
			self.radius=20;
			// body...
		};
		increaseRadius();
		console.log(this.radius);

		return Math.PI * Math.pow(this.radius, 2);
		// body...
	}
};

console.log(literalCircle.getArea());

