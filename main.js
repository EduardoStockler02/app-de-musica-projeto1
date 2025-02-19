// Seleciona os elementos do DOM
const botaoMusica = document .getE1ementById( 'play_btn ' ) ;
const musica = new Audio( ' som/song. mp3 ' ) ;

let nextDom = document . getE1ementById( 'next' ) ;
let prevDom = document . getE1ementById( 'prev' ) ;

let carouselDom = document. querySe1ector( '.carousel' ) ;
let SliderDom = carouselDom.querySe1ector('.carousel .list' ) ;


// Seleciona os elementos do carrossel
let thumbnailBorderDom = document . querySe1ector('.carousel .thumbnail');
let thumbnailItemsDom = thumbnailBorderDom.querySe1ectorA11('.item');
let timeDom = document . querySe1ector('.carousel .time');

// Adiciona o primeiro item do carrossel ao final da lista para criar a animacäo de loop
thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);

// Define o tempo de duracäo da animacäo e o tempo de espera para o pr6ximo slide automético
let timeRunning = 3000; // Tempo da animacäo (em milissegundos)
let timeAutonext = 9000; // Tempo de espera para o pr6ximo slide automético (em milissegundos)


botaoMusica . addEventListener( " click", () => {
    if(musica.paused){
        musica.play();
    }
    else{
        musica.pause();
    }
});

nextDom.onc1ick = function () {
    showS1ider('next');
}
prevDom.onc1ick = function () {
    showS1ider('prev');
}

let runTimeOut;
let runNextAuto = setTimeout(() => {
    nextDom.click();
}, timeAutonext);

function showS1ider(type) {
    let SliderItemsDom = SliderDom.querySe1ectorA11('.carousel .list .item') ;
    let thumbnailItemsDom = document.querySe1ectorA11('.carousel .thumbnail .item') ;
    
    if(type === "next"){
        SliderDom.appendChild(SliderItemsDom[0]);
        thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);
        carouselDom.classList.add('next');
    } else {
        SliderDom.prepend(SliderItemsDom[SliderItemsDom.length - 1]);
        thumbnailBorderDom.prepend(thumbnailItemsDom[thumbnailItemsDom.length - 1]);
        carouselDom.classList.add('prev');
    }

    clearTimeout(runTimeOut);
    runTimeOut = setTimeout(() => {
        carouselDom.classList.remove('next', 'prev');
    }, timeRunning);

    clearTimeout(runNextAuto);

    runNextAuto = setTimeout(() =>{
        nextDom.click();
    }, timeAutonext);
}

