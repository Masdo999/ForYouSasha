const yesBtn = document.getElementById("yesBtn");
const sureBtn = document.getElementById("sureBtn");
const message = document.getElementById("message");
const bgMusic = document.getElementById("bgMusic");

let clickCount = 0;
let heartInterval = null;

// Tombol ARE YOU SURE?
sureBtn.addEventListener("click", () => {
  clickCount++;

  const x = Math.random() * (window.innerWidth - 200);
  const y = Math.random() * (window.innerHeight - 100);

  yesBtn.style.position = "absolute";
  yesBtn.style.left = x + "px";
  yesBtn.style.top = y + "px";
  yesBtn.style.animation = "shake 0.4s";

  setTimeout(() => yesBtn.style.animation = "", 400);

  if (clickCount >= 3) {
    sureBtn.textContent = "Just say YES 😘";
  }
});

// Tombol YES
yesBtn.addEventListener("click", () => {
  bgMusic.play();
  bgMusic.volume = 0.5;

  message.style.display = "block";
  message.innerHTML = "Yay! 💕 You said YES! Happy Valentine's Day 🎉";

  yesBtn.style.display = "none";
  sureBtn.style.display = "none";

  heartInterval = setInterval(createHeart, 300);
});

function createHeart() {
  const heart = document.createElement("div");
  heart.className = "hearts";
  heart.innerHTML = "❤️";
  heart.style.left = Math.random() * 100 + "%";
  document.body.appendChild(heart);

  setTimeout(() => heart.remove(), 5000);
}
