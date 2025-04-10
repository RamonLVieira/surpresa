// INÍCIO DO CONTADOR AUTOMÁTICO
function atualizarContador() {
  const inicio = new Date("2021-11-02T23:27:00");
  const agora = new Date();

  let anos = agora.getFullYear() - inicio.getFullYear();
  let meses = agora.getMonth() - inicio.getMonth();
  let dias = agora.getDate() - inicio.getDate();
  let horas = agora.getHours() - inicio.getHours();
  let minutos = agora.getMinutes() - inicio.getMinutes();
  let segundos = agora.getSeconds() - inicio.getSeconds();

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
    const mesAnterior = new Date(agora.getFullYear(), agora.getMonth(), 0);
    dias += mesAnterior.getDate();
    meses--;
  }
  if (meses < 0) {
    meses += 12;
    anos--;
  }

  document.getElementById("anos").textContent = String(anos).padStart(2, '0');
  document.getElementById("meses").textContent = String(meses).padStart(2, '0');
  document.getElementById("dias").textContent = String(dias).padStart(2, '0');
  document.getElementById("horas").textContent = String(horas).padStart(2, '0');
  document.getElementById("minutos").textContent = String(minutos).padStart(2, '0');
  document.getElementById("segundos").textContent = String(segundos).padStart(2, '0');

  atualizarLabel("anos", anos, "ANO", "ANOS");
  atualizarLabel("meses", meses, "MÊS", "MESES");
  atualizarLabel("dias", dias, "DIA", "DIAS");
  atualizarLabel("horas", horas, "HORA", "HORAS");
  atualizarLabel("minutos", minutos, "MINUTO", "MINUTOS");
  atualizarLabel("segundos", segundos, "SEGUNDO", "SEGUNDOS");
}

function atualizarLabel(id, valor, singular, plural) {
  const bloco = document.getElementById(id).parentElement;
  const label = bloco.querySelector(".label");
  label.textContent = valor === 1 ? singular : plural;
}

setInterval(atualizarContador, 1000);
atualizarContador();

// MENSAGEM DE BOAS-VINDAS COM DIGITAÇÃO
function digitarMensagem(texto) {
  const elemento = document.getElementById("mensagem-digitando");
  elemento.textContent = "";
  let i = 0;
  const intervalo = setInterval(() => {
    elemento.textContent += texto.charAt(i);
    i++;
    if (i >= texto.length) clearInterval(intervalo);
  }, 50);
}

// VERIFICAÇÃO DE SENHA E TRANSIÇÃO
function verificarResposta() {
  const resposta = document.getElementById("resposta").value.trim().toLowerCase();
  const correta = "02/11/2021";

  if (resposta === correta || resposta === "02-11-2021") {
    document.getElementById("tela-senha").style.display = "none";
    document.getElementById("tela-boas-vindas").style.display = "block";

    digitarMensagem("A cada segundo que passa eu te amo ainda mais...");

    setTimeout(() => {
      document.getElementById("tela-boas-vindas").style.display = "none";
      const conteudo = document.getElementById("conteudo-principal");
      conteudo.style.display = "block";
      conteudo.classList.add("fade-in");

      iniciarCarrossel(); // ⬅️ agora o carrossel começa aqui
    }, 6500);
  } else {
    document.getElementById("mensagem-erro").textContent = "Não é essa kkkkk";
  }
}

// CARROSSEL DE IMAGENS
const imagens = [
  "imagens/imagem1.jpg",
  "imagens/imagem2.jpg",
  "imagens/imagem3.jpg",
  "imagens/imagem4.jpg",
  "imagens/imagem5.jpg",
  "imagens/imagem6.jpg",
  "imagens/imagem7.jpg",
  "imagens/imagem8.jpg",
  "imagens/imagem9.jpg",
  "imagens/imagem10.jpg",
  "imagens/imagem11.jpg",
  "imagens/imagem12.jpg",
  "imagens/imagem13.jpg",
  "imagens/imagem14.jpg",
  "imagens/imagem15.jpg"
];

let indiceAtual = 0;

function iniciarCarrossel() {
  const imgElement = document.getElementById("imagem-carrossel");

  setInterval(() => {
    indiceAtual = (indiceAtual + 1) % imagens.length;
    imgElement.style.opacity = 0;

    setTimeout(() => {
      imgElement.src = imagens[indiceAtual];
      imgElement.style.opacity = 1;
    }, 400);
  }, 4000);
}
