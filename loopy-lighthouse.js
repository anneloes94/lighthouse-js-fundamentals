for (let x = 100; x <= 200; x++) {
	let outcome = "";

	if (x % 3 === 0) {
		outcome += "Loopy";
	}
	if (x % 4 === 0) {
		outcome += "Lighthouse";
	}

	console.log(outcome || x);

}