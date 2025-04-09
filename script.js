// Contador de dias
const dataInicial = new Date("2021-11-02");
const hoje = new Date();
const diferencaTempo = hoje - dataInicial;
const diasPassados = Math.floor(diferencaTempo / (1000 * 60 * 60 * 24));
document.getElementById("contador").textContent = `${diasPassados} dias`;

// Carrossel de imagens com transição suave
let indice = 1;
const imagem = document.getElementById("imagem-carrossel");

setInterval(() => {
    imagem.style.opacity = 0;
    setTimeout(() => {
        indice = (indice % 15) + 1;
        imagem.src = `imagens/imagem${indice}.jpg`;
        imagem.style.opacity = 1;
    }, 500);
}, 3000);

// Música de fundo com botão
const botaoMusica = document.getElementById("botao-musica");
const musica = document.getElementById("musica");

let tocando = false;

botaoMusica.addEventListener("click", () => {
    if (!tocando) {
        musica.play();
        botaoMusica.textContent = "Pausar música";
    } else {
        musica.pause();
        botaoMusica.textContent = "Tocar música";
    }
    tocando = !tocando;
});
