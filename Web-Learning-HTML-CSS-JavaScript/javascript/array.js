// push pop
// shift unshift
// indexof
// slice

var num =[1,2,3];
num.push(4);
alert(num);

alert(num.pop());


// unshift: insert at the head of the array
var letter = ["a","b"];
letter.unshift("c");
alert(letter);

// shift:remove the first ele in the array and return this element
letter.shift();
alert(letter);


//indexOf()
alert(letter.indexOf("b"));

//slice
var sl = letter.slice(0,2);
// ["a","b"]

var new_letter = letter.slice(); // actually do the copy



var color = ['white','red','blue'];


color.forEach(function(color){
	console.log(color);
})