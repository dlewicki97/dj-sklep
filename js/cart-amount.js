function setCartSum() {
	let counters = [...document.getElementsByClassName('cart-drop-counter-container')];
	let sum = 0;
	counters.forEach(counter => {
		let amount = parseInt(counter.getElementsByClassName('cart-drop-amount')[0].innerHTML);

		let price = parseInt(counter.getElementsByClassName('cart-drop-price')[0].innerHTML.replace(/ |zł/g, ''));

		sum += amount*price;
	})

	document.getElementsByClassName('cart-drop-sum-price')[0].innerHTML = sum + ' zł';
}

function increaseItem(i, maxAmount) {
	let counter = document.getElementById('counter' + i);
	let count = counter.getElementsByClassName('cart-drop-amount')[0].innerHTML;

	if(parseInt(count) < maxAmount) {
		counter.getElementsByClassName('cart-drop-amount')[0].innerHTML = parseInt(count)+1;
		setCartSum();	
	} 
	count = counter.getElementsByClassName('cart-drop-amount')[0].innerHTML;
	if(parseInt(count) == maxAmount) counter.getElementsByClassName('cart-drop-arrow-up')[0].style.filter = 'invert(1)';
	else counter.getElementsByClassName('cart-drop-arrow-up')[0].style.filter = 'none';

	if(parseInt(count) > 1) counter.getElementsByClassName('cart-drop-arrow-down')[0].style.filter = 'none'
}

function decreaseItem(i) {
	let counter = document.getElementById('counter' + i);
	let count = counter.getElementsByClassName('cart-drop-amount')[0].innerHTML;

	
	if(parseInt(count) > 1) {
		counter.getElementsByClassName('cart-drop-amount')[0].innerHTML = parseInt(count)-1;
		counter.getElementsByClassName('cart-drop-arrow-up')[0].style.filter = 'none';
		setCartSum();
	}
	count = counter.getElementsByClassName('cart-drop-amount')[0].innerHTML;
	if(parseInt(count) == 1) counter.getElementsByClassName('cart-drop-arrow-down')[0].style.filter = 'invert(1)';
}

