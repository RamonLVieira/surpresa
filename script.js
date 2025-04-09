// Data e hora inicial
const dataInicial = new Date("2021-11-02T23:27:00");

// Atualização contínua do contador
function atualizarContador() {
    const agora = new Date();
    let diferenca = agora - dataInicial;

    const msEmUmSegundo = 1000;
    const msEmUmMinuto = msEmUmSegundo * 60;
    const msEmUmaHora = msEmUmMinuto * 60;
    const msEmUmDia = msEmUmaHora * 24;
    const msEmUmAno = msEmUmDia * 365.25;

    const anos = Math.floor(diferenca / msEmUmAno);
    diferenca %= msEmUmAno;

    const dias = Math.floor(diferenca / msEmUmDia);
    diferenca %= msEmUmDia;

    const horas = Math.floor(diferenca / msEmUmaHora);
    diferenca %= msEmUmaHora;

    const minutos = Math.floor(diferenca / msEmUmMinuto);
    diferenca %= msEmUmMinuto;

    const segundos = Math.floor(diferenca / msEmUmSegundo);

    const texto = `${anos} anos, ${dias} dias, ${horas}h ${minutos}min ${segundos}s`;

    document.getElementById("contador").textContent = texto;
}

setInterval(atualizarContador, 1000);
atualizarContador(); // chamada inicial

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
