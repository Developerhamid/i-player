// Access on our working elements
const SongImg = document.getElementById("songImg");
const Music = document.getElementById("music");
const Prev = document.getElementById("pre");
const Play = document.getElementById("play");
const Next = document.getElementById("next");
const SongName = document.querySelector('.song-name');
const Artist = document.querySelector('.song-artist');

const Songs = [
  {
    id: 0,
    songName: "Rain and Tears",
    songArtist: "JuliusH",
    songNum: "1.mp3",
    songImg: "1.jpg",
  },
  {
    id: 1,
    songName: "Ambient Piano",
    songArtist: "Alex MakeMusic",
    songNum: "2.mp3",
    songImg: "2.jpg",
  },
  {
    id: 2,
    songName: "Background Loop Melodic Techno",
    songArtist: "Zen Man",
    songNum: "3.mp3",
    songImg: "3.jpg",
  },
  {
    id: 3,
    songName: "Everything Feels New",
    songArtist: "EvgenyBardyuzha",
    songNum: "4.mp3",
    songImg: "4.jpg",
  },
  {
    id: 4,
    songName: "Fluidity",
    songArtist: "tobylane",
    songNum: "5.mp3",
    songImg: "5.jpg",
  },
  {
    id: 5,
    songName: "Indian music with sitar",
    songArtist: "ShidenBeatsMusic",
    songNum: "6.mp3",
    songImg: "6.jpg",
  },
  {
    id: 6,
    songName: "Inspirational Exciting Piano",
    songArtist: "Lesfm",
    songNum: "7.mp3",
    songImg: "7.jpg",
  },
  {
    id: 7,
    songName: "Kingdom of Fantasy",
    songArtist: "Lesfm",
    songNum: "8.mp3",
    songImg: "8.jpg",
  },
];

let songIndex = 0;

Play.addEventListener("click", () => {
  if (Music.paused) {
    Music.play();
    Play.classList.replace("fa-play", "fa-pause");
    SongImg.classList.add("rotation");
  } else {
    Music.pause();
    Play.classList.replace("fa-pause", "fa-play");
    SongImg.classList.remove("rotation");
  }
});

Prev.addEventListener("click", () => {
  songIndex--;
  if (songIndex < 0) {
    songIndex = Songs.length - 1;
  }
  MusicPlay(songIndex);
});

Next.addEventListener("click", () => {
  songIndex++;
  if (songIndex > Songs.length - 1) {
    songIndex = 0;
  }
  MusicPlay(songIndex);
});

function MusicPlay(songIndex) {
  SongName.textContent = `${Songs[songIndex].songName}`;
  Artist.textContent = `${Songs[songIndex].songArtist}`;
  Music.src = `songs/${Songs[songIndex].songNum}`;
  SongImg.src = `covers/${Songs[songIndex].songImg}`;
  //   console.log(`songs/${Songs[songIndex].songNum}`);  //for testing the songNumber
  Music.play();
  Play.classList.replace("fa-play", "fa-pause");
  SongImg.classList.add("rotation");
}
