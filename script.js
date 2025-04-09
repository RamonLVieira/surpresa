// === CONTADOR DE TEMPO POR EXTENSO ===
const dataInicial = new Date("2021-11-02T23:27:00");

function atualizarContador() {
    const agora = new Date();

    let anos = agora.getFullYear() - dataInicial.getFullYear();
    let meses = agora.getMonth() - dataInicial.getMonth();
    let dias = agora.getDate() - dataInicial.getDate();
    let horas = agora.getHours() - dataInicial.getHours();
    let minutos = agora.getMinutes() - dataInicial.getMinutes();
    let segundos = agora.getSeconds() - dataInicial.getSeconds();

    if (segundos < 0) {
        segundos += 60;
        minutos--;
    }
    if (minutos < 0) {
        minutos += 60;
        horas--;
    }
    if (horas < 0) {
        horas += 24;
        dias--;
    }
    if (dias < 0) {
        const mesAnterior = new Date(agora.getFullYear(), agora.getMonth(), 0).getDate();
        dias += mesAnterior;
        meses--;
    }
    if (meses < 0) {
        meses += 12;
        anos--;
    }

    const texto = `${anos} ${anos === 1 ? 'ano' : 'anos'}, ` +
                  `${meses} ${meses === 1 ? 'mês' : 'meses'}, ` +
                  `${dias} ${dias === 1 ? 'dia' : 'dias'}, ` +
                  `${horas} ${horas === 1 ? 'hora' : 'horas'}, ` +
                  `${minutos} ${minutos === 1 ? 'minuto' : 'minutos'} e ` +
                  `${segundos} ${segundos === 1 ? 'segundo' : 'segundos'}`;

    document.getElementById("contador").textContent = texto;
}

setInterval(atualizarContador, 1000);
atualizarContador();

// === CARROSSEL DE IMAGENS COM TRANSIÇÃO SUAVE ===
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
