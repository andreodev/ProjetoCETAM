document.addEventListener('DOMContentLoaded', () => {
    const rowTop = document.getElementById('row-top');
    const rowBottom = document.getElementById('row-bottom');
    
    const sons = {
        animais: [
            { nome: "Sapo", imagem: "sapo.png", arquivo: "sapo.mp3" },
            { nome: "Gato", imagem: "cat.ico", arquivo: "gato.mp3" },
            { nome: "Leão", imagem: "leao.png", arquivo: "leo.mp3" },
            { nome: "Passáro", imagem: "passaro.png", arquivo: "passaro.mp3" },
        ],
        transportes: [
            {nome: "Carro", imagem: "carro.png", arquivo: "carro.mp3"},
            {nome: "Avião", imagem: "aviao.png", arquivo: "aviao.mp3"},
            {nome: "Caminhão", imagem: "caminhao.png", arquivo: "caminhao.mp3"},
            {nome: "Trem", imagem: "trem.png", arquivo: "Trem.mp3"}
        ],
        sons: [
            {nome: "Aplausos", imagem: "aplausos.png", arquivo: "aplausos.mp3"},
            {nome: "Assobio", imagem: "assobio.png", arquivo: "assobio.mp3"},
        ]
    };

    function exibirSons(categoria) {
    const containerSons = document.getElementById('containerSons');
    containerSons.innerHTML = ''; // Limpar os sons anteriores

    const lista = sons[categoria];

    if (lista) {
        lista.forEach(som => {
            const divCard = document.createElement('div');
            divCard.classList.add('cardPrincipal');
            divCard.style.backgroundImage = `url('assets/imagens/${som.imagem}')`;

            const cardTexto = document.createElement('div');
            cardTexto.classList.add('cardTexto');
            cardTexto.textContent = som.nome;

            divCard.addEventListener('click', () => {
                const audio = new Audio(`sons/${som.arquivo}`);
                audio.play();
            });

            divCard.appendChild(cardTexto);
            containerSons.appendChild(divCard);
        });
    }
}

    function criarCards({ nome, imagem }) {
        const nomeFormatado = nome.charAt(0).toUpperCase() + nome.slice(1);

        const card = document.createElement('div');
        card.className = 'card';
        card.style.backgroundImage = `url('assets/imagens/categorias/${imagem}.png')`;

        const texto = document.createElement('div');
        texto.className = 'card-texto';
        texto.textContent = nomeFormatado;

        card.addEventListener('click', () => {
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
                { nome: "Transportes", imagem: "transportes" }
            ]
        };

        objetos.top.forEach(obj => {
            const card = criarCards(obj);
            rowTop.appendChild(card);
        });

        objetos.bottom.forEach(obj => {
            const card = criarCards(obj);
            rowBottom.appendChild(card);
        });
    }

    renderizarCards();
});
