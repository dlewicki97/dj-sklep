
let productsCols = [...document.getElementsByClassName('products-listing')[0].getElementsByClassName('col-12')];

productsCols.forEach(col => {
	let productPriceContainer = col.getElementsByClassName('product-price-container')[0];
	if(productPriceContainer.getElementsByClassName('product-discount')[0] != undefined) {
		col.getElementsByClassName('add-to-cart')[0].style.marginTop = '-13px';
	}
})