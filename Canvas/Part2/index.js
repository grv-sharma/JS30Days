document.addEventListener("DOMContentLoaded", function() {
	const canvas = document.getElementById('booth');
	const ctx = canvas.getContext("2d");
	const colorPick = document.getElementById("colorPicker");
	const lineWidth = document.getElementById('lineWidthSel');
	const btn = document.getElementById("clear");
	let strokeColor = "black";
	let lineW = 20;

	colorPick.addEventListener("change", () => {
		strokeColor = colorPick.value;
	});

	lineWidth.addEventListener("change", () => {
		lineW = lineWidth.value;
	});

	btn.addEventListener("click", () => {
		ctx.clearRect(0, 0, canvas.width, canvas.height);
	});

	let isDrawing = false;
	let lastX = 0;
	let lastY = 0;
	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;

	function draw(e) {
		if (!isDrawing) {
			return;
		}
		ctx.lineJoin = 'round';
		ctx.lineCap = 'round';
		ctx.strokeStyle = strokeColor;
		ctx.lineWidth = lineW;
		ctx.beginPath();
		ctx.moveTo(lastX, lastY);
		ctx.lineTo(e.offsetX, e.offsetY);
		ctx.stroke();
		[lastX, lastY] = [e.offsetX, e.offsetY];
	}

	canvas.addEventListener("mousemove", draw);
	canvas.addEventListener("mousedown", (e) => {
		isDrawing = true;
		[lastX, lastY] = [e.offsetX, e.offsetY];
	})
	canvas.addEventListener("mouseup", () => isDrawing = false);
	canvas.addEventListener("mouseout", () => isDrawing = false);
});
