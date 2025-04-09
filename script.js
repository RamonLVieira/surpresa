// Contador de dias
const dataInicial = new Date("2021-11-02");
const hoje = new Date();
const diferencaTempo = hoje - dataInicial;
const diasPassados = Math.floor(diferencaTempo / (1000 * 60 * 60 * 24));
document.getElementById("contador").textContent = `${diasPassados} dias`;

// Carrossel de imagens
let indice = 1;
setInterval(() => {
    indice = (indice % 15) + 1;
    document.getElementById("imagem-carrossel").src = `imagens/imagem${indice}.jpg`;
}, 3000); // troca a cada 3 segundos
