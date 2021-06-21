// Faça o exercício da equação de GRAVITAÇÃO UNIVERSAL aqui

const massa1El = document.querySelector('#massa1');
const massa2El = document.querySelector('#massa2');
const gravidadeEl = document.querySelector('#constante');
const distanciaEl = document.querySelector('#distancia');
const resultadoEl = document.querySelector("#calcular");

resultadoEl.addEventListener('click', function() {   
    const forca = (gravidadeEl.value * massa1El.value * massa2El.value)/(distanciaEl.value * distanciaEl.value);

    document.querySelector('#resultado').value = forca;  
});


// Este arquivo AINDA NÃO ESTÁ INCLUÍDO no arquivo HTML