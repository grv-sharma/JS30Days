document.addEventListener("DOMContentLoaded", function() {
	const canvas = document.getElementById("draw");
	canvas.height = window.innerHeight;
	canvas.width = window.innerWidth;
	const ctx = canvas.getContext("2d");

	let isDrawing = false;
	let lastX = 0;
	let lastY = 0;

	ctx.strokeStyle = '#BADASS';
	ctx.lineJoin = 'round';
	ctx.lineCap = 'round';
	let hue = 0;
	let direction = true;
	ctx.globalCompositeOperation = 'source-over';
	//copy produces an interesting effect;
	//ctx.globalCompositeOperation = 'copy';

	function draw(e) {
		if (!isDrawing) {
			return //
		}
		ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
		ctx.beginPath();
		ctx.moveTo(lastX, lastY);
		ctx.lineTo(e.offsetX, e.offsetY);
		ctx.stroke();
		[lastX, lastY] = [e.offsetX, e.offsetY];
		hue++;
		if (hue >= 360) {
			hue = 0;
		}

		if (ctx.lineWidth >= 100 || ctx.lineWidth <= 1) {
			direction = !direction;
		}

		if (direction) {
			ctx.lineWidth++;
		} else {
			ctx.lineWidth--;
		}
	}

	canvas.addEventListener("mousedown", (e) => {
		isDrawing = true;
		[lastX, lastY] = [e.offsetX, e.offsetY];
	});


	canvas.addEventListener("mousemove", draw);
	canvas.addEventListener("mouseup", () => isDrawing = false);
	canvas.addEventListener("mouseout", () => isDrawing = false);

})