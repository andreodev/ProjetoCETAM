document.addEventListener("DOMContentLoaded", () => {
  const rowTop = document.getElementById("row-top");
  const rowBottom = document.getElementById("row-bottom");

  const sons = {
  animais: [
    { nome: "Sapo", imagem: "sapo.png", arquivo: "sapo.mp3" },
    { nome: "Gato", imagem: "gato.jpg", arquivo: "gato.mp3" },
    { nome: "Leão", imagem: "leao.jpg", arquivo: "leao.mp3" },
    { nome: "Pássaro", imagem: "bird.jpg", arquivo: "passaro.mp3" }, // Corrigido: Passáro → Pássaro
  ],
  instrumentos: [
    { nome: "Flauta", imagem: "flauta.jpg", arquivo: "flauta.mp3" }, // Corrigido: flauta → Flauta
    { nome: "Guitarra", imagem: "guitarra.png", arquivo: "Guitarra.mp3" },
    { nome: "Violino", imagem: "violino.png", arquivo: "Violino.mp3" },
    { nome: "Piano", imagem: "piano.png", arquivo: "piano.mp3" }, // Corrigido: piano → Piano
  ],
  natureza: [
    { nome: "Cachoeira", imagem: "cachoeira.png", arquivo: "cachoeira.mp3" }, // Corrigido: cachoeira → Cachoeira
    { nome: "Trovão", imagem: "trovao.jpg", arquivo: "Trovao.mp3" }, // Corrigido: trovao → Trovão
    { nome: "Vento", imagem: "vento.png", arquivo: "vento.mp3" }, // Corrigido: vento → Vento
    { nome: "Chuva", imagem: "chuva.png", arquivo: "chuva.mp3" }, // Corrigido: chuva → Chuva
  ],
  transportes: [
    { nome: "Carro", imagem: "carro.png", arquivo: "carro.mp3" },
    { nome: "Avião", imagem: "aviao.png", arquivo: "aviao.mp3" },
    { nome: "Caminhão", imagem: "caminhao.png", arquivo: "caminhao.mp3" },
    { nome: "Trem", imagem: "trem.png", arquivo: "Trem.mp3" },
  ],
  sons: [
    { nome: "Aplausos", imagem: "aplausos.png", arquivo: "aplausos.mp3" },
    { nome: "Assobio", imagem: "assobio.png", arquivo: "Assobio.mp3" },
    { nome: "Risada", imagem: "risada.jpg", arquivo: "risada.mp3" },
    { nome: "Torcida", imagem: "tprcida.png", arquivo: "torcida.mp3" }, // Corrigido nome do som (abaixo com observação)
  ],
};

  let audioAtual = null;
  let timeoutAudio = null;
  let canPlay = true;

  function exibirSons(categoria) {
    const containerSons = document.getElementById("containerSons");
    containerSons.innerHTML = ""; // Limpar os sons anteriores

    const lista = sons[categoria];

    if (lista) {
      lista.forEach((som, index) => {
        const divCard = document.createElement("div");
        divCard.classList.add("cardPrincipal");
        divCard.style.backgroundImage = `url('assets/imagens/${som.imagem}')`;

        // Garantir que os estilos sejam aplicados corretamente aos cards criados dinamicamente
        divCard.style.width = "200px"; // Define largura fixa
        divCard.style.height = "200px"; // Define altura fixa

        // Ajustar a duração da transição para torná-la mais lenta
        divCard.style.transition = "transform 2s ease, box-shadow 2s ease, opacity 1.5s ease"; // Aumenta a duração da transição

        // Ajustar a duração da transição e garantir consistência
        setTimeout(() => {
          divCard.classList.add("fade-in-down");
        }, index * 150); // Ajustar o delay incremental para 150ms por card

        const cardTexto = document.createElement("div");
        cardTexto.classList.add("cardTexto");
        cardTexto.textContent = som.nome;

        divCard.addEventListener("click", () => {
            if (audioAtual && !audioAtual.ended) return;
          
            divCard.classList.add("cardBrilhando");
            setTimeout(() => {
              divCard.classList.remove("cardBrilhando");
            }, 6000);
          
            audioAtual = new Audio(`sons/${som.arquivo}`);
            audioAtual.play();
          
            timeoutAudio = setTimeout(() => {
              audioAtual.pause();
              audioAtual.currentTime = 0;
              audioAtual = null;
            }, 3000);
          
            audioAtual.onended = () => {
              clearTimeout(timeoutAudio);
              audioAtual = null;
            };
          });

        divCard.appendChild(cardTexto);
        containerSons.appendChild(divCard);
      });
    }
  }

  function criarCards({ nome, imagem }) {
    const nomeFormatado = nome.charAt(0).toUpperCase() + nome.slice(1);

    const card = document.createElement("div");
    card.className = "card";
    card.style.backgroundImage = `url('assets/imagens/categorias/${imagem}.png')`;

    const texto = document.createElement("div");
    texto.className = "card-texto";
    texto.textContent = nomeFormatado;

    card.addEventListener("click", () => {
      exibirSons(imagem.toLowerCase());
    });

    card.appendChild(texto);
    return card;
  }

  function renderizarCards() {
    const objetos = {
      top: [
        { nome: "Animais", imagem: "animais" },
        { nome: "Instrumentos Musicais", imagem: "instrumentos" },
        { nome: "Natureza", imagem: "natureza" },
      ],
      bottom: [
        { nome: "Sons do corpo", imagem: "sons" },
        { nome: "Transportes", imagem: "transportes" },
      ],
    };

    objetos.top.forEach((obj) => {
      const card = criarCards(obj);
      rowTop.appendChild(card);
    });

    objetos.bottom.forEach((obj) => {
      const card = criarCards(obj);
      rowBottom.appendChild(card);
    });
  }

  renderizarCards();
});
