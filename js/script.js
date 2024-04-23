// Inserisco le immagini in una Array che posso controllare 
let Slider = document.querySelectorAll('main > div');
console.log(Slider);


// variabili di supporto (ovviamente mi vengono in mente quando mi servono)
let visibleSlide;
let nextSlide;

document.getElementById("btnNext").addEventListener("click", function () {
    // conteggio oggetti nell'array
    for (let i = 0; i < Slider.length; i++) {
        const img = Slider[i];
        console.log(img);
        // selezione oggetto con l'attributo che cerco e lo cambio
        if (img.classList.contains('visible')) {
            img.classList.remove('visible');
            console.log(i, img);
            // salvo l'elemento
            visibleSlide = i
            console.log(visibleSlide);
        }
    }

    // a fine cilco
    // incremento il numero dell'indice
    nextSlide = visibleSlide + 1;
    console.log(nextSlide);

    // rinizio il ciclo
    if (nextSlide >= Slider.length) {
        nextSlide = 0;
    }

    // aggiungo la classe visible alla nextSlide
    Slider[nextSlide].classList.add('visible');

})

document.getElementById("btnBack").addEventListener("click", function () {
    // conteggio oggetti nell'array
    for (let i = Slider.length - 1; i >= 0; i--) {
        const img = Slider[i];
        console.log(img);
        // selezione oggetto con l'attributo che cerco e lo cambio
        if (img.classList.contains('visible')) {
            img.classList.remove('visible');
            console.log(i, img);
            // salvo l'elemento
            visibleSlide = i
            console.log(visibleSlide);
        }
    }

    // a fine cilco
    // incremento il numero dell'indice
    nextSlide = visibleSlide - 1;
    console.log(nextSlide);

    // rinizio il ciclo
    if (nextSlide < 0) {
        nextSlide = 4;
    }

    // aggiungo la classe visible alla nextSlide
    Slider[nextSlide].classList.add('visible');

})