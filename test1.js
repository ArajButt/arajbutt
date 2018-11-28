const products = require('./products.interface');
class Products {
	constructor() {
		var str = "Stamps and Flower - Sage"
		displayProducts();
		leastprice(str);
	}
}

function displayProducts() {
	console.log('productNamePrice', productNamePrice);
}
var productNamePrice = products.map(officer => [name=officer.productName, price=officer.productPrice])
	;

function leastprice(str)
{
	console.log('LEAST PRICE PRODUCT ACCORDING TO GIVEN PARAMETER : ',);
	var leastPriceWithThisName = products.filter(officer => officer.productName === str)
		.map(officer => [officer.productName,officer.productPrice])
		.reduce(function (prev, curr) {
			return prev.productPrice < curr.productPrice ? prev : curr;
		});
	console.log('leastPriceWithThisName', leastPriceWithThisName);
}

// Do not edit below this line
const product = new Products();