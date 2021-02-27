$("#musicContainer");
$("#playBtn");
$("#prevBtn");
$("#nextBtn");
$("#audio");
$("#progress");
$("#progressContainer");
$("#title");
$("#cover");

// Song titles
const songs = ["hey", "summer", "ukulele"];

// Keep track of song
let songIndex = 0;

// Initially load song details into DOM
loadSong(songs[songIndex]);

// Update song details
function loadSong(song) {
  // Can change the song
  title.innerText = song;
  audio.src = `music/${song}.mp3`;
  cover.src = `images/${song}.jpg`;
}

// Event listeners

$("#playBtn").click(function (e) {
  e.preventDefault();
  const isPlaying = $("musicContainer").hasClass("play");
  if (isPlaying == true) {
    pauseSong();
  } else {
    playSong();
  }
});

// Play song
function playSong() {
  musicContainer.classList.add("play");
  playBtn.querySelector("i.fas").classList.remove("fa-play");
  playBtn.querySelector("i.fas").classList.add("fa-pause");

  audio.play();
}
// Pause song
function pauseSong() {
  musicContainer.classList.remove("play");
  playBtn.querySelector("i.fas").classList.add("fa-play");
  playBtn.querySelector("i.fas").classList.remove("fa-pause");

  audio.pause();
}
