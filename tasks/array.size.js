Object.defineProperty(Array.prototype, 'size', {
	get: function() {
		return this.reduce((acc, elem) => acc + 1, 0);
	},
	set: function(value) {
		this.splice(value);
	}
});

console.log([0, 1].size); // 2

var arr = [0, 1, 2];
arr.size = 0;
console.log(arr); // []
