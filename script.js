const yesBtn = document.getElementById('yesBtn');
const sureBtn = document.getElementById('sureBtn');
const message = document.getElementById('message');
const bgMusic = document.getElementById('bgMusic');

let clickCount = 0;
let scaleYes = 1;
let heartInterval;

const funnyTexts = [
    "ARE YOU SURE? 🤔",
    "Really really sure? 😏",
    "Hmm… think again 💕",
    "HEY 😳",
    "You can’t escape 😈",
    "JUST SAY YES 😂"
];

// tombol ARE YOU SURE kabur
sureBtn.addEventListener('click', () => {
    clickCount++;

    const x = Math.random() * (window.innerWidth - sureBtn.offsetWidth);
    const y = Math.random() * (window.innerHeight - sureBtn.offsetHeight);

    sureBtn.style.position = 'absolute';
    sureBtn.style.left = x + 'px';
    sureBtn.style.top = y + 'px';

    // YES makin besar
    scaleYes += 0.15;
    yesBtn.style.transform = `scale(${scaleYes})`;

    sureBtn.textContent = funnyTexts[Math.min(clickCount, funnyTexts.length - 1)];

    if (clickCount > 5) {
        sureBtn.textContent = "NO WAY OUT 😆";
    }

    playClickSound();
});

// tombol YES
yesBtn.addEventListener('click', () => {
    bgMusic.play().catch(() => {});
    bgMusic.volume = 0.5;

    yesBtn.style.display = 'none';
    sureBtn.style.display = 'none';

    message.style.display = 'block';
    typeText(
        "YAAAAY 💖💖💖You finally said YES!!! 😍Happy Valentine's Day My Princess 💕✨",
        message
    );

    startHearts();
});

// typing effect
function typeText(text, element) {
    element.innerHTML = "";
    let i = 0;
    const typing = setInterval(() => {
        element.innerHTML += text.charAt(i);
        i++;
        if (i >= text.length) clearInterval(typing);
    }, 50);
}

// hati + bintang jatuh
function startHearts() {
    clearInterval(heartInterval);
    heartInterval = setInterval(() => {
        const item = document.createElement('div');
        item.className = 'hearts';
        item.innerHTML = Math.random() > 0.5 ? '❤️' : '⭐';
        item.style.left = Math.random() * 100 + '%';
        document.body.appendChild(item);
        setTimeout(() => item.remove(), 5000);
    }, 200);
}

// suara klik
const audioContext = new (window.AudioContext || window.webkitAudioContext)();
function playClickSound() {
    const osc = audioContext.createOscillator();
    osc.frequency.value = 700;
    osc.connect(audioContext.destination);
    osc.start();
    osc.stop(audioContext.currentTime + 0.1);
}
