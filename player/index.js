document.addEventListener("DOMContentLoaded", function() {
	const supportsVideo = !!document.createElement("video").canPlayType;
	const videoContainer = document.getElementById("videoContainer");
	const video = document.getElementById("video");
	const videoControls = document.getElementById("video-controls");
	video.controls = false;
	videoControls.style.display = "block";

	if (supportsVideo) {
		//do stuff here;
	}
});

