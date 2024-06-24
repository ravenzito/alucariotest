import { conectaApi } from "./js/conectaApi.js";

const lista = document.querySelector("[data-lista]");

function constroiCard(imagem, titulo, preco, id) {
    const produto = document.createElement('li');
    produto.className = "produtos__lista";
    produto.innerHTML = `
        <div class="produto__conteudo">
            <img class="produtos__img" src="${imagem}" alt="${titulo}">
            <div class="produto__texto">
                <h3>${titulo}</h3>
                <p>${preco}</p>
                <button class="botao__deletar" data-id="${id}">
                    <img src="/public/img/icon_trash.png" alt="Deletar">
                </button>
            </div>
        </div>
    `;

    produto.querySelector(".botao__deletar").addEventListener("click", async () => {
        await conectaApi.deletaProduto(id);
        produto.remove();
    });

    return produto;
}

async function listaProdutos() {
    const listaApi = await conectaApi.listaProdutos();
    listaApi.forEach(elemento => lista.appendChild(constroiCard(elemento.imagem, elemento.titulo, elemento.preco, elemento.id)));
}

listaProdutos();
