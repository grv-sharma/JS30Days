document.addEventListener("DOMContentLoaded", function() {
	const supportsVideo = !!document.createElement("video").canPlayType;
	const videoContainer = document.getElementById("videoContainer");
	const video = document.getElementById("video");
	const videoControls = document.getElementById("video-controls");
	video.controls = false;
	//videoControls.style.display = "block";

	if (supportsVideo) {
		const playPause = document.getElementById('playpause');
		const stop = document.getElementById('stop');
		const toggleMute = document.getElementById('mute');
		const progress = document.getElementById("progress");
		const progressBar = document.getElementById('progress-bar');

		playPause.addEventListener("click", (e) => {
			if (video.paused || video.ended) {
				video.play();
			} else {
				video.pause();
			}
		});

		stop.addEventListener("click", (e) => {
			video.pause();
			video.currentTime = 0;
		});

		toggleMute.addEventListener("click", (e) => {
			video.muted = !video.muted;
		});

		video.addEventListener("timeupdate", () => {
			if (!progress.getAttribute('max')) progress.setAttribute('max', video.duration);
			progress.value = video.currentTime;
			progressBar.style.width = Math.floor((video.currentTime / video.duration) * 100) + '%';
		});

	}
});

