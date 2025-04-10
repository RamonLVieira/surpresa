function atualizarContador() {
    const inicio = new Date("2021-11-02T23:27:00");
    const agora = new Date();

    let anos = agora.getFullYear() - inicio.getFullYear();
    let meses = agora.getMonth() - inicio.getMonth();
    let dias = agora.getDate() - inicio.getDate();
    let horas = agora.getHours() - inicio.getHours();
    let minutos = agora.getMinutes() - inicio.getMinutes();
    let segundos = agora.getSeconds() - inicio.getSeconds();

    if (segundos < 0) { segundos += 60; minutos--; }
    if (minutos < 0) { minutos += 60; horas--; }
    if (horas < 0) { horas += 24; dias--; }
    if (dias < 0) {
        const mesAnterior = new Date(agora.getFullYear(), agora.getMonth(), 0);
        dias += mesAnterior.getDate();
        meses--;
    }
    if (meses < 0) { meses += 12; anos--; }

    document.getElementById("anos").textContent = String(anos).padStart(2, '0');
    document.getElementById("meses").textContent = String(meses).padStart(2, '0');
    document.getElementById("dias").textContent = String(dias).padStart(2, '0');
    document.getElementById("horas").textContent = String(horas).padStart(2, '0');
    document.getElementById("minutos").textContent = String(minutos).padStart(2, '0');
    document.getElementById("segundos").textContent = String(segundos).padStart(2, '0');
}

setInterval(atualizarContador, 1000);
atualizarContador();

// Carrossel
const imagens = [
  "imagens/imagem1.jpg", "imagens/imagem2.jpg", "imagens/imagem3.jpg",
  "imagens/imagem4.jpg", "imagens/imagem5.jpg", "imagens/imagem6.jpg",
  "imagens/imagem7.jpg", "imagens/imagem8.jpg", "imagens/imagem9.jpg",
  "imagens/imagem10.jpg", "imagens/imagem11.jpg", "imagens/imagem12.jpg",
  "imagens/imagem13.jpg", "imagens/imagem14.jpg", "imagens/imagem15.jpg"
];

let indiceAtual = 0;
const imgElement = document.getElementById("imagem-carrossel");

function trocarImagem() {
  indiceAtual = (indiceAtual + 1) % imagens.length;
  imgElement.style.opacity = 0;
  setTimeout(() => {
    imgElement.src = imagens[indiceAtual];
    imgElement.style.opacity = 1;
  }, 500);
}

setInterval(trocarImagem, 4000);