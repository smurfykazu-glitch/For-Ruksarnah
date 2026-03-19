const imageUrls = [
    "https://i.imgur.com/mpqLvmn.jpeg", "https://i.imgur.com/UK3ZZmK.jpeg",
    "https://i.imgur.com/cVhNaHX.jpeg", "https://i.imgur.com/nxCyNqu.jpeg",
    "https://i.imgur.com/Jz3VE1v.jpeg", "https://i.imgur.com/aPnOWtj.jpeg",
    "https://i.imgur.com/ne5Hgap.jpeg", "https://i.imgur.com/a3FzKsy.jpeg",
    "https://i.imgur.com/Wks6ykr.jpeg", "https://i.imgur.com/WdPH439.jpeg",
    "https://i.imgur.com/j7uGMfN.jpeg", "https://i.imgur.com/ElRrRWF.jpeg",
    "https://i.imgur.com/gkDyZrg.jpeg", "https://i.imgur.com/HhpZcXh.jpeg",
    "https://i.imgur.com/x8aZ12Z.jpeg", "https://i.imgur.com/hH3Pmk9.jpeg",
    "https://i.imgur.com/I55of5V.jpeg", "https://i.imgur.com/fxnsEpf.jpeg",
    "https://i.imgur.com/jCxMpv4.jpeg", "https://i.imgur.com/4NVw4Ff.jpeg",
    "https://i.imgur.com/Fka9ChL.jpeg", "https://i.imgur.com/2gq6tT7.jpeg",
    "https://i.imgur.com/k5E9JyS.jpeg", "https://i.imgur.com/cu1DdCo.jpeg",
    "https://i.imgur.com/mO2E9gF.jpeg", "https://i.imgur.com/OEm2yJN.jpeg",
    "https://i.imgur.com/gL0OpaJ.jpeg", "https://i.imgur.com/zNOFyOF.jpeg",
    "https://i.imgur.com/MDB6WsK.jpeg", "https://i.imgur.com/nUhj5k6.jpeg",
    "https://i.imgur.com/xWShRv0.jpeg", "https://i.imgur.com/OHy5QYw.jpeg",
    "https://i.imgur.com/c5JvOnl.jpeg", "https://i.imgur.com/mcIbhdo.jpeg",
    "https://i.imgur.com/jbF7ZPM.jpeg", "https://i.imgur.com/E3WNI4K.jpeg",
    "https://i.imgur.com/vbUWGb8.jpeg", "https://i.imgur.com/jxXunBS.jpeg",
    "https://i.imgur.com/BVypguj.jpeg", "https://i.imgur.com/zk9UxZU.jpeg",
    "https://i.imgur.com/CMyzDRU.jpeg", "https://i.imgur.com/2OtFlIV.jpeg",
    "https://i.imgur.com/AqE4ULV.jpeg", "https://i.imgur.com/M2ijRES.jpeg",
    "https://i.imgur.com/pH77Fhd.jpeg", "https://i.imgur.com/fMNWdGc.jpeg",
    "https://i.imgur.com/O2jEYEb.jpeg", "https://i.imgur.com/FZYvsfk.jpeg",
    "https://i.imgur.com/mxetgNJ.jpeg", "https://i.imgur.com/KT2hav4.jpeg"
];

function preloadImages() {
    imageUrls.forEach((url) => {
        const img = new Image();
        img.src = url;
    });
}

window.addEventListener('load', () => {
    preloadImages();
    const garden = document.getElementById('flower-garden');
    for (let i = 0; i < 20; i++) {
        setTimeout(() => {
            createFlower(garden);
        }, i * 250);
    }
    setTimeout(() => {
        document.getElementById('intro-controls').classList.remove('hidden');
    }, 4500);
});

function createFlower(container) {
    const flower = document.createElement('div');
    flower.className = 'bloom-flower';
    const size = 50 + Math.random() * 50;
    flower.style.left = Math.random() * 90 + '%';
    flower.style.top = Math.random() * 90 + '%';
    flower.innerHTML = `
        <svg class="flower-svg" viewBox="0 0 100 100" style="width:${size}px; height:${size}px;">
            <circle cx="50" cy="50" r="12" fill="#ffd54f" />
            <path d="M50 0 Q60 25 50 50 Q40 25 50 0" fill="#ffc1e3" transform="rotate(0 50 50)" />
            <path d="M50 0 Q60 25 50 50 Q40 25 50 0" fill="#ffc1e3" transform="rotate(72 50 50)" />
            <path d="M50 0 Q60 25 50 50 Q40 25 50 0" fill="#ffc1e3" transform="rotate(144 50 50)" />
            <path d="M50 0 Q60 25 50 50 Q40 25 50 0" fill="#ffc1e3" transform="rotate(216 50 50)" />
            <path d="M50 0 Q60 25 50 50 Q40 25 50 0" fill="#ffc1e3" transform="rotate(288 50 50)" />
        </svg>
    `;
    container.appendChild(flower);
}

document.getElementById('toPage2').addEventListener('click', () => {
    switchPage('page1', 'page2');
    startPhotoFall();
    setTimeout(() => {
        document.querySelector('.message-container').classList.add('animate-text');
        document.body.style.overflowY = "auto";
    }, 2500);
});

document.getElementById('toPage3').addEventListener('click', () => {
    switchPage('page2', 'page3');
    document.body.style.overflowY = "hidden";
    window.scrollTo(0,0);
});

function switchPage(oldId, newId) {
    document.getElementById(oldId).classList.remove('active');
    setTimeout(() => {
        document.getElementById(newId).classList.add('active');
    }, 800);
}

function startPhotoFall() {
    const container = document.getElementById('photo-canvas');
    let count = 0;
    
    const interval = setInterval(() => {
        // REPEAT LOGIC: If count reaches the end, reset it to 0
        if (count >= imageUrls.length) { 
            count = 0; 
        }

        const img = document.createElement('img');
        img.src = imageUrls[count];
        img.className = 'falling-photo';
        img.style.left = Math.random() * (window.innerWidth - 110) + 'px';
        img.style.top = '-150px';
        container.appendChild(img);

        let pos = -150;
        const speed = 0.8 + Math.random() * 1; 
        
        const fall = setInterval(() => {
            if (pos > window.innerHeight) {
                clearInterval(fall);
                img.remove();
            } else {
                pos += speed;
                img.style.top = pos + 'px';
            }
        }, 16);
        count++;
    }, 800); 
}
