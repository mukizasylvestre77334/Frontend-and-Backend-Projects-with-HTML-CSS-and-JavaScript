var obj = {
	name:"chuck",
	age:45,
	isCool:false,
	friends:["bob","tina"],
	add: function(x,y){
		return x+y;
	}
};

obj.add(1,2);


//keyword: this
//underscore js
var comments = {};
comments.data = ['a','b','c'];

//this mean this objects
comments.print = function(){
	this.data.forEach(function(el){
		console.log(el);
	})
}
