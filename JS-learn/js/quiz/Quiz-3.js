/**
 * http://usejsdoc.org/
 */



function Person(name,age){
	this.name=name;
	this.age=age;
	var self=this;
	setInterval(function() {
		self.age++;  // undefined++
		console.log(self.age);
	}, 1000);
	
}

var p=new Person('Ria', 0);  // 
