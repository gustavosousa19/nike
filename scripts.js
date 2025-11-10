const body = document.querySelector('body');
const tenis = document.querySelector('.img-tenis');


function mudarVisual(cor, imagem) {
    tenis.classList.add('troca-efeito');

    body.style.background = cor;

    setTimeout(() => {
        tenis.src = imagem;
        tenis.classList.remove('troca-efeito');
    }, 1000);
}


