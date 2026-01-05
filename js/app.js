// document.addEventListener("DOMContentLoaded", function () {
// 	const audio = new Audio();
// 	const track = document.querySelector(".track");
// 	const trackTitle = document.querySelector(".track-title");
// 	const trackArtist = document.querySelector(".track-artist");
// 	const playPauseBtn = document.querySelector(".play-pause");
// 	const prevBtn = document.querySelector(".prev");
// 	const nextBtn = document.querySelector(".next");
// 	const progressBar = document.querySelector(".progress-bar");

// 	const trackList = [
// 		{
// 			src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
// 			title: "SoundHelix 1",
// 			artist: "T. Schürger"
// 		},
// 		{
// 			src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-8.mp3",
// 			title: "Spy vs. Spy - Chill-out Acid Squeeze Mix",
// 			artist: "T. Schürger"
// 		},
// 		{
// 			src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3",
// 			title: "SoundHelix 2",
// 			artist: "T. Schürger"
// 		},
// 		{
// 			src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3",
// 			title: "SoundHelix 3",
// 			artist: "T. Schürger"
// 		},
// 		{
// 			src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-17.mp3",
// 			title: "The Stationary Ark - Low pH Arktic Clubmix",
// 			artist: "T. Schürger"
// 		}
// 	];

// 	let currentTrack = 0;
// 	let isPlaying = true;

// 	function loadTrack(index) {
// 		const current = trackList[index];
// 		audio.src = current.src;
// 		trackTitle.textContent = current.title;
// 		trackArtist.textContent = current.artist;

// 		if (isPlaying) {
// 			audio.play();
// 			playPauseBtn.textContent = "⏸";
// 		}
// 	}

// 	function togglePlayPause() {
// 		if (isPlaying) {
// 			audio.pause();
// 			playPauseBtn.textContent = "▶";
// 		} else {
// 			audio.play();
// 			playPauseBtn.textContent = "⏸";
// 		}
// 		isPlaying = !isPlaying;
// 	}

// 	function updateProgress() {
// 		if (audio.duration) {
// 			const progress = (audio.currentTime / audio.duration) * 100;
// 			progressBar.style.width = `${progress}%`;
// 		}

// 		if (audio.ended) {
// 			nextTrack();
// 		}
// 	}

// 	function nextTrack() {
// 		currentTrack = (currentTrack + 1) % trackList.length;
// 		loadTrack(currentTrack);
// 	}

// 	function prevTrack() {
// 		currentTrack = (currentTrack - 1 + trackList.length) % trackList.length;
// 		loadTrack(currentTrack);
// 	}

// 	document
// 		.querySelector(".progress-container")
// 		.addEventListener("click", (e) => {
// 			const progressContainer = e.currentTarget;
// 			const rect = progressContainer.getBoundingClientRect();
// 			const clickPosition = e.clientX - rect.left;
// 			const progressContainerWidth = rect.width;
// 			const seekTime = (clickPosition / progressContainerWidth) * audio.duration;
// 			audio.currentTime = seekTime;
// 		});

// 	playPauseBtn.addEventListener("click", togglePlayPause);
// 	nextBtn.addEventListener("click", nextTrack);
// 	prevBtn.addEventListener("click", prevTrack);
// 	audio.addEventListener("timeupdate", updateProgress);

// 	loadTrack(0);
// 	audio.play();
// 	playPauseBtn.textContent = "⏸";
// });





// // The End Of Year Date To Countdown Date

// document.addEventListener('DOMContentLoaded', () => {
//     // Unix timestamp (in seconds) to count down to
//     var toDayFromNow = (new Date(`Dec 31, ${new Date().getFullYear()} 23:59:59`).getTime() / 1000);
//     // Set Up FlipDown
//     var flipdown = new FlipDown(toDayFromNow)

//     // Start The Count Down
//     .start()
//     // Do Something When The Countdown Ends
//     .ifEnded(() => {
//         document.querySelector(".flipdown").innerHTML = `<h2>Timer is ended</h2>`;
//     });
// });


