document.addEventListener("DOMContentLoaded", function() {
	const video_container = document.getElementById('vid_container');
	const video = document.getElementById('video');
	video.controls = false;

	const playPause = document.getElementById('playPause');
	const stop = document.getElementById('stop');
	const progress = document.getElementById('progress');
	const volRange = document.getElementById('volumeSlider');
	const speedVar = document.getElementById('speedVar');
	const backTen = document.getElementById('backTen');
	const forwardTen = document.getElementById('forwardTen');
	const fs = document.getElementById('fs');

	playPause.addEventListener("click", () => {
		if (video.paused || video.ended) {
			video.play();
			playPause.classList.remove("fa-play");
			playPause.classList.add("fa-pause");
		} else {
			video.pause();
			playPause.classList.remove("fa-pause");
			playPause.classList.add("fa-play");
		}
	});

	stop.addEventListener("click", () => {
		video.pause();
		video.currentTime = 0;
	});

	video.addEventListener("click", (e) => {
		if (video.paused || video.ended) {
			video.play();
			playPause.classList.remove("fa-play");
			playPause.classList.add("fa-pause");
		} else {
			video.pause();
			playPause.classList.remove("fa-pause");
			playPause.classList.add("fa-play");
		}
	});
	
	video.addEventListener("timeupdate", () => {
		if (!progress.getAttribute("max")) progress.setAttribute("max", video.duration);
		progress.value = video.currentTime;
		progress.style.width = Math.floor((video.currentTime / video.duration) * 100 + '%');
		progress.style.color = "blue";
	});

	progress.addEventListener("click", (e) => {
		const pos = 
			(e.pageX - progress.offsetLeft - progress.offsetParent.offsetLeft) /
			progress.offsetWidth;
		video.currentTime = pos * video.duration;
	});


	volRange.addEventListener("change", (e) => {
		video.volume = e.currentTarget.value / 100;
	});

	speedVar.addEventListener("change", (e) => {
		video.playbackRate = speedVar.value;
	});

	backTen.addEventListener("click", (e) => {
		video.currentTime = video.currentTime - 10;
	});

	forwardTen.addEventListener("click", (e) => {
		video.currentTime = video.currentTime + 10;
	});

	fs.addEventListener("click", (e) => {
		if (document.fullscreenElement !== null) {
			document.exitFullscreen();
		} else {
			//to display custom controls on fullScreen
			video_container.requestFullscreen();
			//video.requestFullscreen();
		}
	});
});
