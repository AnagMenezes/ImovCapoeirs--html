const imoveis = [
    {
        id: 1,
        tipo: "aluguel",
        titulo: "Casa disponível para aluguel",
        imagens: [
            "imagens/aluguel1.png", "imagens/aluguel2.png", "imagens/aluguel3.png", "imagens/aluguel4.png", "imagens/aluguel5.png"],
        descricao: "Casa pequena, bem iluminada, ideal para estudantes.",
        preco: "R$ 400,00/mês",
        area: "30m²",
        comodos: "2 quartos | 1 banheiros | 1 cozinha ",
        endereco: "Rua 1 de dezembro, centro, n° 13, Capoeiras/PE, CEP 55.365-000",
        telefone: "558781546934",
    },
        {
        id: 2,
        tipo: "aluguel",
        titulo: "Apartamento disponível para aluguel",
        imagens: [
            "imagens/2.1aluguel.png", "imagens/2.2aluguel.png", "imagens/2.3aluguel.jpeg"
        ],
        descricao: "Casa ampla, ideal para casal, muito bem localizada, não é permitido pets",
        preco: "R$ 600,00/mês",
        area: "40m²",
        comodos: "2 quartos | 1 banheiros | 1 cozinha | varanda",
        endereco: "Rua Anelson Rodrigues, n° 290, Cohab II, Capoeiras/PE",
        telefone: "558799462197"
    },
    {
        id: 3,
        tipo: "aluguel",
        titulo: "Casa grande para aluguel",
        imagens: ["imagens/3.1aluguel.jpeg", "imagens/3.2aluguel.jpeg", "imagens/3.3aluguel.jpeg", "imagens/3.4aluguel.jpeg", "imagens/3.5aluguel.jpeg"],
        descricao: "Casa grande e luxuosa, arejada e bem iluminada, ideal para famílias grandes que buscam conforto.",
        preco: "R$ 2.000,00/mês",
        area: "110m²",
        comodos: "4 quartos | 2 banheiros | 1 vaga para garagem | área de serviço | 1 cozinha",
        endereco: "Rua Professor Eurides Pinto, n°209, Centro, Capoeiras/PE, CEP 55.365-000",
        telefone: "8799261324"
    },
    {
        id: 4,
        tipo: "aluguel",
        titulo: "Ponto comercial para aluguel",
        imagens: ["imagens/estabelecimento1.jpeg", "imagens/estabelecimento2.jpeg"],
        descricao: "Salão bem localizado e arejado.",
        preco: "R$ 600,00/mês",
        area: "35m²",
        comodos: "1 salão amplo | 1 banheiro ",
        endereco: "Praça João Borrego, n° 45, Capoeiras/PE, CEP 55.365-000",
        telefone: "8799665036"
    },
    {
        id: 5,
        tipo: "venda",
        titulo: "Casa à venda",
        imagens: ["imagens/IMAGEMruaprojetadan35.jpeg"],
        descricao: "Casa ampla, arejada e bem localizada. Aberto a negociações pelo contato. ",
        preco: "R$ 57.891",
        area: "200m²",
        comodos: "3 quartos | 1 banheiro | 1 vaga para garagem| área de serviço | 1 sala | 1 cozinha",
        endereco: "Rua Projetada, Nº 35, Centro, Capoeiras/PE, CEP 55.365-000",
        telefone: "1120870781",
    },
    {
        id: 6,
        tipo: "venda",
        titulo: "Casa grande à venda",
        imagens: ["imagens/Aprigio.250.0.jpeg", "imagens/Aprigio.250.6.jpeg", "imagens/Aprigio250.1.jpeg", "imagens/Aprigio.250.2.jpeg", "imagens/Aprigio250.3.jpeg", "imagens/Aprigio.250.4.jpeg", "imagens/Aprigio.250.7.jpeg"],
        descricao: "Casa ampla, arejada e bem iluminada. Casa espaçosa ideal para famílias, localizada no centro.",
        preco: "R$ 110.000",
        area: "300m²",
        comodos: "3 quartos | 1 banheiros | 1 vaga para garagem | varanda espaçosa | 1 cozinha | 1 sala",
        endereco: "Rua Aprígio Inácio Cordeiro, Nº 250, Centro, Capoeiras/PE, CEP 55.365-000",
        telefone: "81995074310",
    },
    {
        id: 7,
        tipo: "venda",
        titulo: "Terreno disponível para venda ou troca",
        imagens: ["imagens/terreno1.jpeg", "imagens/terreno2.jpeg", "imagens/terreno3.jpeg"],
        descricao: "Terreno grande em bairro seguro, disponível para venda ou troca.",
        preco: "R$ 60.000,00",
        area: "200m²",
        endereco: "Rua Águas belas, S/N, Maria Zelia, Capoeiras/PE, CEP 55.365-000.",
        telefone: "8796112342"
    },
    {
        id: 8,
        tipo: "venda",
        titulo: "Lote a venda",
        imagens: ["imagens/loteamento.jpeg"],
        descricao: "Disponível para venda ou troca",
        preco: "R$ 50.000",
        area: "70²",
        endereco: "Loteamento Chico Batata, Araça, Capoeiras/PE, CEP 55.365-000.",
        telefone: "8781457741"
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
        tipoImoveis(apenasAluguel); 

} else if (paginaAtual.includes("venda.html")) {
    const apenasVenda = imoveis.filter(imovel => imovel.tipo === "venda");
    tipoImoveis(apenasVenda);
    
} else if (paginaAtual.includes("detalhes.html")) {
    carregarDetalhes(); 
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

function filtrarPorPreco() {
    const min = parseFloat(document.getElementById("preco-min").value) || 0;
    const max = parseFloat(document.getElementById("preco-max").value) || Infinity;

    const paginaAtual = window.location.pathname;
    let imoveisFiltrados = imoveis;

    if (paginaAtual.includes("aluguel.html")) {
        imoveisFiltrados = imoveis.filter(imovel => imovel.tipo === "aluguel");
    } else if (paginaAtual.includes("venda.html")) {
        imoveisFiltrados = imoveis.filter(imovel => imovel.tipo === "venda");
    }

    const resultadoFinal = imoveisFiltrados.filter(imovel => {
        const precoLimpo = parseFloat(imovel.preco.replace("R$", "").replace(/\./g, "").trim());
        return precoLimpo >= min && precoLimpo <= max;
    });

    if (resultadoFinal.length === 0) {
        alert("Nenhum imóvel foi encontrado nessa faixa de preço :(");
        tipoImoveis([]); 
    } else {
        tipoImoveis(resultadoFinal);
    }
}


