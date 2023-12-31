var a = {
	prop: 0,
	toString() {
	this.prop++;
	return this.prop;
	}
};

console.log(a == a); // true
console.log(a < a); // true
