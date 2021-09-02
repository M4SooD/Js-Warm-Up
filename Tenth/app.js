let product_count;

function isNumber(num) {
	if (isNaN(num) || typeof(num) != "number") {
		throw "Not a Number";
	}
	return true;
}

function increase() {
	for (let i = 0; i < arguments.length; ++i) {
		isNumber(parseInt(arguments[i]));
	}

	if (arguments.length === 0) {
		increase1();
	}

	if (arguments.length === 1) {
		increase2(arguments[0]);
	}
}

function increase1() {
	if (product_count === undefined) {
		product_count = 0;
	}

	++product_count;
}

function increase2(num) {
	product_count = (num < product_count) ? product_count : num;
}


console.log(product_count);
increase(21);
console.log(product_count);
increase(44);
console.log(product_count);
increase(33);
console.log(product_count);