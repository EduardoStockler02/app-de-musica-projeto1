const musics = [
    "/msc/TanjirouNoUta.mp3",
    "/msc/NezukoTheme.mp3",
    "/msc/ZenitsuTheme.mp3",
    "/msc/InosukeTheme.mp3",
    "/msc/TomiokaTheme.mp3",
];

let actualMusic = 0;
const music = new Audio(musics[actualMusic]); 

const MusicButton = document.getElementById('play_btn');

let nextDom = document.getElementById('next');
let prevDom = document.getElementById('prev');

let carouselDom = document.querySelector('.carousel');
let sliderDom = carouselDom.querySelector('.carousel .list');

let thumbnailBorderDom = document.querySelector('.carousel .thumbnail');
let thumbnailItemsDom = thumbnailBorderDom.querySelectorAll('.item');
let timeDom = document.querySelector('.carousel .time');

if (thumbnailItemsDom.length > 0) {
    thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);
}

let timeRunning = 3000; 

// Toggle play/pause on button click
MusicButton.addEventListener("click", () => {
    if (music.paused) {
        music.play();
    } else {
        music.pause();
    }
});

nextDom.onclick = function () {
    showSlider('next');
};
prevDom.onclick = function () {
    showSlider('prev');
};

let runTimeOut;

function showSlider(type) {
    let sliderItemsDom = sliderDom.querySelectorAll('.carousel .list .item');
    let thumbnailItemsDom = document.querySelectorAll('.carousel .thumbnail .item');
    
    if (type === "next") {
        sliderDom.appendChild(sliderItemsDom[0]);
        thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);
        carouselDom.classList.add('next');

        actualMusic = (actualMusic + 1) % musics.length;
    } else {
        sliderDom.prepend(sliderItemsDom[sliderItemsDom.length - 1]);
        thumbnailBorderDom.prepend(thumbnailItemsDom[thumbnailItemsDom.length - 1]);
        carouselDom.classList.add('prev');

        actualMusic = (actualMusic - 1 + musics.length) % musics.length;
    }

    music.src = musics[actualMusic];
    music.play();

    clearTimeout(runTimeOut);
    runTimeOut = setTimeout(() => {
        carouselDom.classList.remove('next', 'prev');
    }, timeRunning);

    clearTimeout(runNextAuto);
    runNextAuto = setTimeout(() => {
        nextDom.click();
    }, timeAutoNext);
}