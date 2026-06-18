const imoveis = [
    {
        id: 1,
        tipo: "aluguel",
        titulo: "Casa disponível para aluguel",
        imagens: [
            "imagens/casaG.png", "imagens/casa 1 de aluguel.jpg", "imagens/casaG.png"],
        descricao: "3 quartos • 2 banheiros • varanda",
        preco: "R$ 1.800"
    },
        {
        id: 2,
        tipo: "aluguel",
        titulo: "Apartamento disponível para aluguel",
        imagens: [
            "imagens/casaG.png"
        ],
        descricao: "2 quartos • garagem",
        preco: "R$ 1.200"
    },
    {
        id: 3,
        tipo: "aluguel",
        titulo: "Kitnet aconchegante para aluguel",
        imagens: ["imagens/casaG.png"],
        descricao: "1 quarto • centro",
        preco: "R$ 900"
    },
    {
        id: 4,
        tipo: "aluguel",
        titulo: "Casa de praia para aluguel",
        imagens: ["imagens/casaG.png"],
        descricao: "4 quartos • vista para o mar",
        preco: "R$ 3.500"
    },
    {
        id: 5,
        tipo: "venda",
        titulo: "Casa de praia para venda",
        imagens: ["imagens/casaG.png"],
        descricao: "4 quartos • vista para o mar",
        preco: "R$ 3.500"
    },
    {
        id: 6,
        tipo: "venda",
        titulo: "Casa de praia para venda",
        imagens: ["imagens/casaG.png"],
        descricao: "4 quartos • vista para o mar",
        preco: "R$ 3.500"
    },
    {
        id: 7,
        tipo: "venda",
        titulo: "Casa de praia para venda",
        imagens: ["imagens/casaG.png"],
        descricao: "4 quartos • vista para o mar",
        preco: "R$ 3.500"
    },
    {
        id: 8,
        tipo: "venda",
        titulo: "Casa de praia para venda",
        imagens: ["imagens/casaG.png"],
        descricao: "4 quartos • vista para o mar",
        preco: "R$ 3.500"
    }

];

const grid = document.getElementById("grid-imoveis");

function tipoImoveis(listaDeImoveis){
    if (!grid) return;
    grid.innerHTML = "";

    listaDeImoveis.forEach(imovel =>{
        grid.innerHTML += `
            <div class="card-imovel">
               <div class="carrossel">
                    <button class="prev">❮</button>
                    <img src="${imovel.imagens[0]}" 
                        alt="${imovel.titulo}"
                        class="imagem-carrossel"
                        data-index="0"
                        data-imagens="${imovel.imagens.join(',')}">
                    <button class="next">❯</button>
                </div>
                <div class="card-info">
                    <h3>${imovel.titulo}</h3>
                    <p>${imovel.descricao}</p>
                    <h4>${imovel.preco}</h4>
                    <a href="detalhes.html" class="Bcontato">Ver mais</a>
                </div>
            </div>
        `;
    });
    configurarCarrossel();
}
function configurarCarrossel() {
    document.querySelectorAll(".next").forEach(botao => {
        botao.onclick = function () { 
            const img = this.parentElement.querySelector(".imagem-carrossel");
            let imagens = img.dataset.imagens.split(",");
            let index = parseInt(img.dataset.index);
            index++;
            if (index >= imagens.length) index = 0;
            img.src = imagens[index];
            img.dataset.index = index;
        };
    });

    document.querySelectorAll(".prev").forEach(botao => {
        botao.onclick = function () {
            const img = this.parentElement.querySelector(".imagem-carrossel");
            let imagens = img.dataset.imagens.split(",");
            let index = parseInt(img.dataset.index);
            index--;
            if (index < 0) index = imagens.length - 1;
            img.src = imagens[index];
            img.dataset.index = index;
        };
    });
}

const paginaAtual = window.location.pathname;

if (paginaAtual.includes("aluguel.html")) {
   
    const apenasAluguel = imoveis.filter(imovel => imovel.tipo === "aluguel");
    tipoImoveis(apenasAluguel);
} 
else if (paginaAtual.includes("venda.html")) {
    
    const apenasVenda = imoveis.filter(imovel => imovel.tipo === "venda");
    tipoImoveis(apenasVenda);
} 
else {
    tipoImoveis(imoveis);
}

 