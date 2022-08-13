// loader function
window.addEventListener('load', function () {
  const loader = document.querySelector(".loader")
  loader.style.opacity = 0;
  loader.style["z-index"] = -10000000;
})


//fetching markup items
const welcome = document.querySelector(".welcome");

const slider = document.querySelector(".slider img");

const maxPlayer = document.querySelector(".maxPlayer");
const downBtn = document.querySelector(".fa-angle-down");
const maxPlayerImage = document.querySelector(".maxPlayerImage");
const songTitle = document.querySelector(".songTitle");
const animeTitle = document.querySelector(".anime");
const media = document.querySelector(".audio");
const repeatBtn = document.querySelector(".fa-repeat");
const backBtn = document.querySelector(".fa-backward-step");
const playBtn = document.querySelector(".play1");
const pauseBtn = document.querySelector(".pause1");
const forwardBtn = document.querySelector(".fa-forward-step");
const shuffleBtn = document.querySelector(".fa-shuffle");
const duration = document.querySelectorAll(".timerWrapper span");
const seek = document.querySelector(".seek");

const minPlayer = document.querySelector(".minPlayer");
const minPlayerImage = document.querySelector(".minPlayerImage");
const minPlay = document.querySelector(".play2");
const minPause = document.querySelector(".pause2");
const minTitle = document.querySelector(".minSongTitle");
const minClose = document.querySelector(".fa-close");

const music = document.querySelectorAll(".song p");
const music_alt = document.querySelectorAll(".play-button");

const download = document.querySelectorAll(".fa-download");
const downloadImage = document.querySelectorAll(".song img");
const popup = document.querySelector("dialog");
const link = document.querySelector("dialog a");

//getting user's stored info or adding user's info if not available
window.addEventListener("DOMContentLoaded", checkName);

function checkName() {
  if (!localStorage.getItem("name")) {
    let username = prompt("Please enter your name");
    let name = "";
    if (username == null || username == "") {
      name = "User";
    } else {
      name = username;
    }
    localStorage.setItem("name", name);
    welcome.textContent = `Welcome, ${name}`;
  } else {
    let name = localStorage.getItem("name");
    welcome.textContent = `Welcome back, ${name}!`;
  }
}

//listing song characteristics as object properties
const songs = [
  {
    title: "Call Your Name",
    anime: "Attack on Titan",
    thumbnail: "Call-Your-Name.jpg",
    audio: "Call-Your-Name.mp3",
  },
  {
    title: "Centimeter",
    anime: "Rent a Girlfriend",
    thumbnail: "Centimeter.jpg",
    audio: "Centimeter.mp3",
  },
  {
    title: "Daddy Daddy Do",
    anime: "Love is War",
    thumbnail: "Daddy-Daddy-Do.jpg",
    audio: "Daddy-Daddy-Do.mp3",
  },
  {
    title: "Evil Morty Dubstep",
    anime: "Rick and Morty",
    thumbnail: "Evil-Morty-Dubstep.jpg",
    audio: "Evil-Morty-Dubstep.mp3",
  },
  {
    title: "Giri Giri",
    anime: "Love is War",
    thumbnail: "Giri-Giri.jpg",
    audio: "Giri-Giri.mp3",
  },
  {
    title: "Great Escape",
    anime: "Attack on Titan",
    thumbnail: "Great-Escape.jpg",
    audio: "Great-Escape.mp3",
  },
  {
    title: "Guren No Yumiya",
    anime: "Attack on Titan",
    thumbnail: "Guren-No-Yumiya.jpg",
    audio: "Guren-No-Yumiya.mp3",
  },
  {
    title: "Hacking To The Gate",
    anime: "Steins; Gate",
    thumbnail: "Hacking-To-The-Gate.jpg",
    audio: "Hacking-To-The-Gate.mp3",
  },
  {
    title: "Jiyuu No Tsubasa",
    anime: "Attack on Titan",
    thumbnail: "Jiyuu-No-Tsubasa.jpg",
    audio: "Jiyuu-No-Tsubasa.mp3",
  },
  {
    title: "Love Dramatic",
    anime: "Love is War",
    thumbnail: "Love-Dramatic.jpg",
    audio: "Love-Dramatic.mp3",
  },
  {
    title: "Mikasa",
    anime: "Attack on Titan",
    thumbnail: "Mikasa.jpg",
    audio: "Mikasa.mp3",
  },
  {
    title: "Nightmare - Alumina",
    anime: "Death Note",
    thumbnail: "Nightmare-Alumina.jpg",
    audio: "Nightmare-Alumina.mp3",
  },
  {
    title: "Nightmare - The World",
    anime: "Death Note",
    thumbnail: "Nightmare-The-World.jpg",
    audio: "Nightmare-The-World.mp3",
  },
  {
    title: "Queen Of Mean",
    anime: "Descendants",
    thumbnail: "Queen-Of-Mean.jpg",
    audio: "Queen-Of-Mean.mp3",
  },
  {
    title: "Reluctant Heroes",
    anime: "Attack on Titan",
    thumbnail: "Reluctant-Heroes.jpg",
    audio: "Reluctant-Heroes.mp3",
  },
  {
    title: "Shinzou Wo Sasageyo",
    anime: "Attack on Titan",
    thumbnail: "Shinzou-Wo-Sasageyo.jpg",
    audio: "Shinzou-Wo-Sasageyo.mp3",
  },
  {
    title: "The Rumbling",
    anime: "Attack on Titan",
    thumbnail: "The-Rumbling.jpg",
    audio: "The-Rumbling.mp3",
  },
  {
    title: "TMNT Opening Sequence",
    anime: "TMNT",
    thumbnail: "TMNT-Opening-Sequence.jpg",
    audio: "TMNT-Opening-Sequence.mp3",
  },
  {
    title: "Touch Off",
    anime: "The Promised Neverland",
    thumbnail: "Touch-Off.jpg",
    audio: "Touch-Off.mp3",
  },
  {
    title: "Vogel Im Kafig",
    anime: "Attack on Titan",
    thumbnail: "Vogel-Im-Kafig.jpg",
    audio: "Vogel-Im-Kafig.mp3",
  },
];

// image slider
function imageUpdate() {
  let i = Math.floor(Math.random() * 4);
  slider.src = `./assets/${i}.jpg`;
}

setInterval(imageUpdate, 4000);

//maxPlayer controls
//play button to play song
playBtn.addEventListener("click", (e) => {
  media.play();
  e.target.style.display = "none";
  pauseBtn.style.display = "block";
  //provisions for minplayer
  minPlay.style.display = "none";
  minPause.style.display = "block";
});

//pause button to pause song
pauseBtn.addEventListener("click", (e) => {
  media.pause();
  e.target.style.display = "none";
  playBtn.style.display = "block";
  //provisions for minplayer
  minPause.style.display = "none";
  minPlay.style.display = "block";
});

//display current time in audio
media.addEventListener("timeupdate", () => {
  let minute = Math.floor(media.currentTime / 60);
  let second = Math.floor(media.currentTime - minute * 60);
  let newMinute = minute.toString().padStart(2, "0");
  let newSecond = second.toString().padStart(2, "0");
  duration[0].textContent = `${newMinute}:${newSecond}`;
  //seek track must be updated as well
  seek.min = 0;
  seek.max = media.duration;
  seek.value = media.currentTime;
  seek.step = 1;
});

//display duration of current audio
media.addEventListener("canplay", () => {
  let minutes = Math.floor(media.duration / 60);
  let seconds = Math.floor(media.duration - minutes * 60);
  let newMinutes = minutes.toString().padStart(2, "0");
  let newSeconds = seconds.toString().padStart(2, "0");
  duration[1].textContent = `${newMinutes}:${newSeconds}`;
});

//the seek should also affect the media play
seek.addEventListener("change", () => {
  media.currentTime = seek.value;
});

//playing the next song
forwardBtn.addEventListener("click", nextSong);

function nextSong() {
  //get info i.e. src of current song
  let mediaIndex = media.src.indexOf("audio");
  let mediaSource = media.src.slice(mediaIndex + 6);
  //going through songs array data
  for (let j = 0; j < songs.length; j++) {
    //compare gotten data with available songs array data above
    if (mediaSource === songs[j].audio) {
      //if there is a match do the following with said match
      //when the match is not the last song, play the next song
      if (j !== songs.length - 1) {
        media.src = media.src.replace(mediaSource, songs[j + 1].audio);
        pauseBtn.style.display = "block";
        playBtn.style.display = "none";
        //provisions for minplayer
        minPlay.style.display = "none";
        minPause.style.display = "block";
        media.play();
      }
      //if the match is the last song in the array, play the first song
      else {
        media.src = media.src.replace(mediaSource, songs[0].audio);
        pauseBtn.style.display = "block";
        playBtn.style.display = "none";
        //provisions for minplayer
        minPlay.style.display = "none";
        minPause.style.display = "block";
        media.play();
      }
    }
    //if it doesn't match skip
    else {
      continue;
    }
  }
}

//as the next song plays, so also should the image and titles change
forwardBtn.addEventListener("click", nextImage);

function nextImage() {
  //get info i.e. src of image of the current song
  let imageIndex = maxPlayerImage.src.indexOf("images");
  let imageSource = maxPlayerImage.src.slice(imageIndex + 7);
  //going through songs array data
  for (let k = 0; k < songs.length; k++) {
    //compare gotten data with available songs array data above
    if (imageSource === songs[k].thumbnail) {
      //if there is a match do the following with said match
      //when the match is not the last image, display the next image; change anime and song titles also
      if (k !== songs.length - 1) {
        maxPlayerImage.src = maxPlayerImage.src.replace(
          imageSource,
          songs[k + 1].thumbnail
        );
        songTitle.textContent = songs[k + 1].title;
        animeTitle.textContent = songs[k + 1].anime;
        //provisions for minplayer
        minPlayerImage.src = maxPlayerImage.src;
        minTitle.textContent = songs[k + 1].title;
      }
      //if the match is the last image in the array, display the first image; change titles accordingly
      else {
        maxPlayerImage.src = maxPlayerImage.src.replace(
          imageSource,
          songs[0].thumbnail
        );
        songTitle.textContent = songs[0].title;
        animeTitle.textContent = songs[0].anime;
        //provisions for minplayer
        minPlayerImage.src = maxPlayerImage.src;
        minTitle.textContent = songs[0].title;
      }
    }
    //if it doesn't match skip
    else {
      continue;
    }
  }
}

//playing the previous song
backBtn.addEventListener("click", previousSong);

function previousSong() {
  //get info i.e. src of current song
  let mediaIndex = media.src.indexOf("audio");
  let mediaSource = media.src.slice(mediaIndex + 6);
  //going through songs array data
  for (let l = 0; l < songs.length; l++) {
    //compare gotten data with available songs array data above
    if (mediaSource === songs[l].audio) {
      //if there is a match do the following with said match
      //when the match is not the first song, play the previous song
      if (l !== 0) {
        media.src = media.src.replace(mediaSource, songs[l - 1].audio);
        pauseBtn.style.display = "block";
        playBtn.style.display = "none";
        //provisions for minplayer
        minPlay.style.display = "none";
        minPause.style.display = "block";
        media.play();
      }
      //if the match is the first song in the array, play the last song
      else {
        media.src = media.src.replace(
          mediaSource,
          songs[songs.length - 1].audio
        );
        pauseBtn.style.display = "block";
        playBtn.style.display = "none";
        //provisions for minplayer
        minPlay.style.display = "none";
        minPause.style.display = "block";
        media.play();
      }
    }
    //if it doesn't match skip
    else {
      continue;
    }
  }
}

//as the previous song plays, so also should the image and titles change
backBtn.addEventListener("click", previousImage);

function previousImage() {
  //get info i.e. src of image of the current song
  let imageIndex = maxPlayerImage.src.indexOf("images");
  let imageSource = maxPlayerImage.src.slice(imageIndex + 7);
  //going through songs array data
  for (let m = 0; m < songs.length; m++) {
    //compare gotten data with available songs array data above
    if (imageSource === songs[m].thumbnail) {
      //if there is a match do the following with said match
      //when the match is not the first image, display the previous image; change anime and song titles also
      if (m !== 0) {
        maxPlayerImage.src = maxPlayerImage.src.replace(
          imageSource,
          songs[m - 1].thumbnail
        );
        songTitle.textContent = songs[m - 1].title;
        animeTitle.textContent = songs[m - 1].anime;
        //provisions for minplayer
        minPlayerImage.src = maxPlayerImage.src;
        minTitle.textContent = songs[m - 1].title;
      }
      //if the match is the first image in the array, display the last image; change titles accordingly
      else {
        maxPlayerImage.src = maxPlayerImage.src.replace(
          imageSource,
          songs[songs.length - 1].thumbnail
        );
        songTitle.textContent = songs[songs.length - 1].title;
        animeTitle.textContent = songs[songs.length - 1].anime;
        //provisions for minplayer
        minPlayerImage.src = maxPlayerImage.src;
        minTitle.textContent = songs[songs.length - 1].title;
      }
    }
    //if it doesn't match skip
    else {
      continue;
    }
  }
}

//repeat button time, woo-hoo!!
repeatBtn.addEventListener("click", repeat);

var rep = 0;
function repeat(e) {
  //if repeat button isn't active, play next song
  if (rep == 1) {
    e.target.style.color = "";
    return (rep = 0);
  }
  // else if active, repeat
  else {
    e.target.style.color = "var(--deepBlue)";
    return (rep = 1);
  }
}

//depending on the value of rep, the media repeats or goes to the next song on ending
media.addEventListener("ended", () => {
  if (rep == 0) {
    nextSong();
    nextImage();
  } else {
    media.currentTime = 0;
    media.play();
  }
});

//shuffle time, sheesh 🙄
shuffleBtn.addEventListener("click", shuffle);

var random = 0;
function shuffle(e) {
  //if shuffle button isn't active, play next song in sequence
  if (random == 1) {
    e.target.style.color = "";
    return (random = 0);
  }
  // else if active, shuffle
  else {
    e.target.style.color = "var(--deepBlue)";
    return (random = 1);
  }
}

//depending on the value of random, the media shuffles or goes to the next song in the sequence on ending
media.addEventListener("ended", () => {
  if (random == 1) {
    let o = Math.floor(Math.random() * 20);

    //fetch current song and shuffle on end
    let mediaIndex = media.src.indexOf("audio");
    let mediaSource = media.src.slice(mediaIndex + 6);
    media.src = media.src.replace(mediaSource, songs[o].audio);
    media.play();
    playBtn.style.display = "none";
    pauseBtn.style.display = "block";
    //provisions for minplayer
    minPlay.style.display = "none";
    minPause.style.display = "block";

    //fetch current image and shuffle on end
    let imageIndex = maxPlayerImage.src.indexOf("images");
    let imageSource = maxPlayerImage.src.slice(imageIndex + 7);
    maxPlayerImage.src = maxPlayerImage.src.replace(
      imageSource,
      songs[o].thumbnail
    );
    //provisions for minplayer
    minPlayerImage.src = maxPlayerImage.src;

    //fetch titles and shuffle accordingly
    songTitle.textContent = songs[o].title;
    animeTitle.textContent = songs[o].anime;
    //provisions for minplayer
    minTitle.textContent = songs[o].title;
  }
});

//time to close maxPlayer and minplayer magically appears 🪄
downBtn.addEventListener("click", () => {
  maxPlayer.style.display = "none";
  minPlayer.style.visibility = "visible";
});

//minplayer controls
minPlay.onclick = (e) => {
  media.play();
  e.target.style.display = "none";
  minPause.style.display = "block";
  //whatever happens here should also affect the max player
  playBtn.style.display = "none";
  pauseBtn.style.display = "block";
};

minPause.onclick = (e) => {
  media.pause();
  e.target.style.display = "none";
  minPlay.style.display = "block";
  //whatever happens here should also affect the max player
  pauseBtn.style.display = "none";
  playBtn.style.display = "block";
};

//fading out the minplayer on close
minClose.addEventListener("click", () => {
  //occur after .3secs to improve UX 🤔🤷
  setTimeout(slide, 300);
  function slide() {
    //if minplayer is visible perform operation
    if (minPlayer.style.visibility === "visible") {
      for (
        let p = 0;
        p < document.innerWidth;
        p += document.innerWidth / 1000
      ) {
        minPlayer.style.left = `${p}px`;
      }
      //next close the minplayer, pause audio and set current audio time to zero and display play button and remove pause button to avoid possible problems
      minPlayer.style.visibility = "hidden";
      minPlayer.style.left = "0";
      media.pause();
      media.currentTime = 0;
      playBtn.style.display = "block";
      minPlay.style.display = "block";
      pauseBtn.style.display = "none";
      minPause.style.display = "none";
    }
  }
});

//opening the maxplayer
minTitle.addEventListener("click", (e) => {
  minPlayer.style.visibility = "hidden";
  maxPlayer.style.display = "block";
});

//clicking on a song title plays the exact song
music[0].addEventListener("click", playMusic);
music[1].addEventListener("click", playMusic);
music[2].addEventListener("click", playMusic);
music[3].addEventListener("click", playMusic);
music[4].addEventListener("click", playMusic);
music[5].addEventListener("click", playMusic);
music[6].addEventListener("click", playMusic);
music[7].addEventListener("click", playMusic);
music[8].addEventListener("click", playMusic);
music[9].addEventListener("click", playMusic);
music[10].addEventListener("click", playMusic);
music[11].addEventListener("click", playMusic);
music[12].addEventListener("click", playMusic);
music[13].addEventListener("click", playMusic);
music[14].addEventListener("click", playMusic);
music[15].addEventListener("click", playMusic);
music[16].addEventListener("click", playMusic);
music[17].addEventListener("click", playMusic);
music[18].addEventListener("click", playMusic);
music[19].addEventListener("click", playMusic);

// Helper functions to play the music because personally I was looking for a play button the entire time (I didn't know I had to click the song name 😅😅)
music_alt[0].addEventListener("click", () => {
  music[0].click()
});
music_alt[1].addEventListener("click", () => {
  music[1].click()
});
music_alt[2].addEventListener("click", () => {
  music[2].click()
});
music_alt[3].addEventListener("click", () => {
  music[3].click()
});
music_alt[4].addEventListener("click", () => {
  music[4].click()
});
music_alt[5].addEventListener("click", () => {
  music[5].click()
});
music_alt[6].addEventListener("click", () => {
  music[6].click()
});
music_alt[7].addEventListener("click", () => {
  music[7].click()
});
music_alt[8].addEventListener("click", () => {
  music[8].click()
});
music_alt[9].addEventListener("click", () => {
  music[9].click()
});
music_alt[10].addEventListener("click", () => {
  music[10].click()
});
music_alt[11].addEventListener("click", () => {
  music[11].click()
});
music_alt[12].addEventListener("click", () => {
  music[12].click()
});
music_alt[13].addEventListener("click", () => {
  music[13].click()
});
music_alt[14].addEventListener("click", () => {
  music[14].click()
});
music_alt[15].addEventListener("click", () => {
  music[15].click()
});
music_alt[16].addEventListener("click", () => {
  music[16].click()
});
music_alt[17].addEventListener("click", () => {
  music[17].click()
});
music_alt[18].addEventListener("click", () => {
  music[18].click()
});
music_alt[19].addEventListener("click", () => {
  music[19].click()
});

function playMusic(e) {
  //show maxPlayer and hide minplayer
  maxPlayer.style.display = "block";
  minPlayer.style.visibility = "hidden";
  //check if selected song is in songs array, and if it is use song attributes accordingly
  for (let q = 0; q < songs.length; q++) {
    let text = e.target.textContent;
    switch (text) {
      case songs[q].title:
        //change audio
        let mediaIndex = media.src.indexOf("audio");
        let mediaSource = media.src.slice(mediaIndex + 6);
        media.src = media.src.replace(mediaSource, songs[q].audio);
        media.play();
        playBtn.style.display = "none";
        pauseBtn.style.display = "block";
        //provisions for minplayer
        minPlay.style.display = "none";
        minPause.style.display = "block";

        //change image
        let imageIndex = maxPlayerImage.src.indexOf("images");
        let imageSource = maxPlayerImage.src.slice(imageIndex + 7);
        maxPlayerImage.src = maxPlayerImage.src.replace(
          imageSource,
          songs[q].thumbnail
        );
        //provisions for minplayer
        minPlayerImage.src = maxPlayerImage.src;
        //changes maxPlayer background image to song image
        maxPlayer.style.backgroundImage = `url('./images/${songs[q].thumbnail}')`;


        //change titles
        songTitle.textContent = songs[q].title;
        animeTitle.textContent = songs[q].anime;
        //provisions for minplayer
        minTitle.textContent = songs[q].title;
        break;

      default:
        continue;
    }
  }
}

//finally time for the download button 😩😤😌
//start by getting return values per download button for download function
let r = 0;
download[0].addEventListener("click", () => {
  r = 0;
  downloadSong(r);
});
download[1].addEventListener("click", () => {
  r = 1;
  downloadSong(r);
});
download[2].addEventListener("click", () => {
  r = 2;
  downloadSong(r);
});
download[3].addEventListener("click", () => {
  r = 3;
  downloadSong(r);
});
download[4].addEventListener("click", () => {
  r = 4;
  downloadSong(r);
});
download[5].addEventListener("click", () => {
  r = 5;
  downloadSong(r);
});
download[6].addEventListener("click", () => {
  r = 6;
  downloadSong(r);
});
download[7].addEventListener("click", () => {
  r = 7;
  downloadSong(r);
});
download[8].addEventListener("click", () => {
  r = 8;
  downloadSong(r);
});
download[9].addEventListener("click", () => {
  r = 9;
  downloadSong(r);
});
download[10].addEventListener("click", () => {
  r = 10;
  downloadSong(r);
});
download[11].addEventListener("click", () => {
  r = 11;
  downloadSong(r);
});
download[12].addEventListener("click", () => {
  r = 12;
  downloadSong(r);
});
download[13].addEventListener("click", () => {
  r = 13;
  downloadSong(r);
});
download[14].addEventListener("click", () => {
  r = 14;
  downloadSong(r);
});
download[15].addEventListener("click", () => {
  r = 15;
  downloadSong(r);
});
download[16].addEventListener("click", () => {
  r = 16;
  downloadSong(r);
});
download[17].addEventListener("click", () => {
  r = 17;
  downloadSong(r);
});
download[18].addEventListener("click", () => {
  r = 18;
  downloadSong(r);
});
download[19].addEventListener("click", () => {
  r = 19;
  downloadSong(r);
});

//finally time to define download function
function downloadSong(value) {
  //getting url for media to be downloaded
  let locale = downloadImage[value].src.replace("images", "audio");
  let location = locale.replace("jpg", "mp3");
  //time to download
  //display popup first, the flex class ensures that the button is centered vertically and horizontally; and the link target should be the right location
  popup.classList.add("flex");
  popup.showModal();
  link.href = location;
}


//ensure that popup is closed once link is clicked
link.addEventListener("click", () => {
  popup.close();
  //don't forget to remove flex class
  popup.classList.remove("flex");
});

// Neon effect
const accentColors = ["#B624C1", "#EF40FF", "#9457E4", "#0FF0FC", "#1562C1"];

function changeColor() {
  setInterval(function () {
    let selectedColor =
      accentColors[Math.floor(Math.random() * accentColors.length)];
    document.documentElement.style.setProperty("--accent-color", selectedColor);
  }, 1000);
}

changeColor();
