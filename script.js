const openButton = document.getElementById("openInvite");
const opening = document.getElementById("opening");
const invitation = document.getElementById("invitation");
const weddingMusic = document.getElementById("weddingMusic");

/* --------------------------------
   AUDIO FILE FROM URL PARAMETER
   Default: audio.mp3
   Example: ?audio=romantic.mp3
--------------------------------- */

const params = new URLSearchParams(window.location.search);
const audioFile = params.get("audio") || "audio.mp3";

weddingMusic.src = audioFile;
weddingMusic.loop = true;
weddingMusic.preload = "auto";


/* --------------------------------
   OPEN INVITATION + PLAY MUSIC
--------------------------------- */

openButton.addEventListener("click", () => {

  // The tap itself is a user gesture,
  // so mobile browsers allow the song to start here.
  weddingMusic.volume = 0.72;

  weddingMusic.play().catch(() => {});

  opening.animate(
    [
      {
        opacity: 1,
        transform: "scale(1)"
      },
      {
        opacity: 0,
        transform: "scale(1.03)"
      }
    ],
    {
      duration: 650,
      easing: "ease",
      fill: "forwards"
    }
  );

  setTimeout(() => {
    opening.style.display = "none";
    invitation.classList.add("show");

    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }, 580);

});


/* --------------------------------
   COUNTDOWN
--------------------------------- */

const targetDate =
  new Date("2026-09-27T11:30:00+05:30").getTime();

function updateCountdown() {

  let d = Math.max(
    0,
    targetDate - Date.now()
  );

  document.getElementById("days").textContent =
    String(Math.floor(d / 86400000)).padStart(2, "0");

  document.getElementById("hours").textContent =
    String(
      Math.floor((d % 86400000) / 3600000)
    ).padStart(2, "0");

  document.getElementById("minutes").textContent =
    String(
      Math.floor((d % 3600000) / 60000)
    ).padStart(2, "0");

  document.getElementById("seconds").textContent =
    String(
      Math.floor((d % 60000) / 1000)
    ).padStart(2, "0");
}

updateCountdown();

setInterval(updateCountdown, 1000);