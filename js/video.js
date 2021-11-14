var video = document.getElementById("player1");

window.addEventListener("load", function() {
	console.log("Good job opening the window")

});

document.querySelector("#play").addEventListener("click", function() {
	video.play();
});

document.querySelector("#pause").addEventListener("click", function() {
	video.pause();
});

document.querySelector("#slower").addEventListener("click", function() {
	video.playbackRate = video.playbackRate - 0.05;
	console.log("New Speed:" + video.playbackRate);

});

document.querySelector("#faster").addEventListener("click", function() {
	video.playbackRate = video.playbackRate + 0.05;
	console.log("New Speed:" + video.playbackRate);

});

document.querySelector("#skip").addEventListener("click", function() {
	let timeLeft = video.duration - video.currentTime;
	if (timeLeft > 15) {
		video.currentTime += 15;
	} else {
		video.currentTime = 0;
	}
	console.log("Current time: " + video.currentTime + " sec")
});

document.querySelector("#mute").addEventListener("click", function() {
	video.muted = !video.muted;
});

document.querySelector("#slider").addEventListener("change", function() {
	video.volume = this.value / 100;
});

document.querySelector("#vintage").addEventListener("click", function() {
	video.classList.add("oldSchool")
});

document.querySelector("#orig").addEventListener("click", function() {
	video.classList.remove("oldSchool")
});

