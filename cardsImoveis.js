const imoveis = [
    {
        id: 1,
        tipo: "aluguel",
        titulo: "Casa disponível para aluguel",
        imagens: [
            "imagens/casaG.png", "imagens/casa 1 de aluguel.jpg", "imagens/casaG.png"],
        descricao: "Casa ampla, arejada e bem iluminada, próxima a tudo. gjygjggugug ougigig 7tguu6fu fru6fu 66r  6r6r6r76r7 67r76r7 6r67r5e7 6r76e65e5i dud",
        preco: "R$ 1.800",
        area: "32m²",
        comodos: "3 quartos | 2 banheiros | 1 vaga | varanda",
        endereco: "Rua Exemplo 1, 123 - Capoeiras",
        telefone: "5587999072131",
    },
        {
        id: 2,
        tipo: "aluguel",
        titulo: "Apartamento disponível para aluguel",
        imagens: [
            "imagens/casaG.png"
        ],
        descricao: "Casa ampla, arejada e bem iluminada, próxima a tudo. hbbubiubiubub jbiuububub ubiubiubibu ubiubiubiu iuuh uiuhkk",
        preco: "R$ 1.800",
        area: "32m²",
        comodos: "3 quartos | 2 banheiros | 1 vaga | varanda",
        endereco: "Rua Exemplo 2, 123 - Capoeiras",
       
    },
    {
        id: 3,
        tipo: "aluguel",
        titulo: "Kitnet aconchegante para aluguel",
        imagens: ["imagens/casaG.png"],
        descricao: "Casa ampla, arejada e bem iluminada, próxima a tudo.",
        preco: "R$ 1.800",
        area: "32m²",
        comodos: "3 quartos | 2 banheiros | 1 vaga | varanda",
        endereco: "Rua Exemplo 3, 123 - Capoeiras",
        
    },
    {
        id: 4,
        tipo: "aluguel",
        titulo: "Casa de praia para aluguel",
        imagens: ["imagens/casaG.png"],
        descricao: "Casa ampla, arejada e bem iluminada, próxima a tudo.",
        preco: "R$ 1.800",
        area: "32m²",
        comodos: "3 quartos | 2 banheiros | 1 vaga | varanda",
        endereco: "Rua Exemplo 4, 123 - Capoeiras",
        
    },
    {
        id: 5,
        tipo: "venda",
        titulo: "Casa de praia para venda",
        imagens: ["imagens/casaG.png"],
        descricao: "Casa ampla, arejada e bem iluminada, próxima a tudo.",
        preco: "R$ 1.800",
        area: "32m²",
        comodos: "3 quartos | 2 banheiros | 1 vaga | varanda",
        endereco: "Rua Exemplo 5, 123 - Capoeiras",
      
    },
    {
        id: 6,
        tipo: "venda",
        titulo: "Casa de praia para venda",
        imagens: ["imagens/casaG.png"],
        descricao: "Casa ampla, arejada e bem iluminada, próxima a tudo.",
        preco: "R$ 1.800",
        area: "32m²",
        comodos: "3 quartos | 2 banheiros | 1 vaga | varanda",
        endereco: "Rua Exemplo 6, 123 - Capoeiras",

    },
    {
        id: 7,
        tipo: "venda",
        titulo: "Casa de praia para venda",
        imagens: ["imagens/casaG.png"],
        descricao: "Casa ampla, arejada e bem iluminada, próxima a tudo.",
        preco: "R$ 1.800",
        area: "32m²",
        comodos: "3 quartos | 2 banheiros | 1 vaga | varanda",
        endereco: "Rua Exemplo 7, 123 - Capoeiras",
       
    },
    {
        id: 8,
        tipo: "venda",
        titulo: "Casa de praia para venda",
        imagens: ["imagens/casaG.png"],
        descricao: "Casa ampla, arejada e bem iluminada, próxima a tudo.",
        preco: "R$ 1.800",
        area: "32m²",
        comodos: "3 quartos | 2 banheiros | 1 vaga | varanda",
        endereco: "Rua Exemplo 8, 123 - Capoeiras",
        
    }

];

const grid = document.getElementById("grid-imoveis");

function tipoImoveis(listaDeImoveis){
    if (!grid) return;
    grid.innerHTML = "";
    listaDeImoveis.forEach(imovel =>{
        grid.innerHTML += `
            <div class="card-imovel">
               <div class="carrossel" id="carrossel-${imovel.id}">
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
                    <a href="detalhes.html?id=${imovel.id}" class="Bcontato">Ver mais</a>
                </div>
            </div>
        `;
    });
    configurarCarrossel();
}

function configurarCarrossel() {
    document.querySelectorAll(".next").forEach(botao => {
        botao.onclick = function () {
            const container = this.closest(".carrossel, .galeria");
            const img = container.querySelector(".imagem-carrossel");
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
            const container = this.closest(".carrossel, .galeria");
            const img = container.querySelector(".imagem-carrossel");
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
        tipoImoveis(apenasAluguel); // O configurarCarrossel() deve rodar no final de tipoImoveis

} else if (paginaAtual.includes("venda.html")) {
    const apenasVenda = imoveis.filter(imovel => imovel.tipo === "venda");
    tipoImoveis(apenasVenda);
} else if (paginaAtual.includes("detalhes.html")) {
    carregarDetalhes(); // Certifique-se que configurarCarrossel() está na ULTIMA LINHA dentro de carregarDetalhes()
} else {
    tipoImoveis(imoveis);
}

function carregarDetalhes() {
    const parametros = new URLSearchParams(window.location.search);
    const id = parseInt(parametros.get("id"));
    const imovel = imoveis.find(item => item.id === id);

    if (!imovel) {
        console.log("Imóvel não encontrado");
        return;
    }

    document.getElementById("titulo").textContent = imovel.titulo;
    document.getElementById("preco").textContent = imovel.preco;
    document.getElementById("descricao").textContent = imovel.descricao;

    const img = document.getElementById("imagens");
    img.src = imovel.imagens[0];
    img.dataset.index = 0;
    img.dataset.imagens = imovel.imagens.join(",");

    document.getElementById("area").textContent = imovel.area;
    document.getElementById("comodos").textContent = imovel.comodos;
    document.getElementById("endereco").textContent = imovel.endereco;
    document.getElementById("botao-whatsapp").href = `https://wa.me/${imovel.telefone}`;

    configurarCarrossel();
}



