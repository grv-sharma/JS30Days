document.addEventListener("DOMContentLoaded", function() {
	const boxes = document.querySelectorAll('#item input[type="checkbox"]');
	boxes.forEach(box => box.addEventListener("click", handleCheck));


	let lastChecked;

	function handleCheck(e) {
		if (e.shiftKey && this.checked) {
			let inBetween = false;
			boxes.forEach(box => {
				if (box === this || box === lastChecked) {
					inBetween = !inBetween;
				}

				if (inBetween) {
					box.checked = true;
				}
			});
		}

		lastChecked = this;
	}

});