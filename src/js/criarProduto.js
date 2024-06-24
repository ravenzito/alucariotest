import { conectaApi } from "./js/conectaApi.js";

const formulario = document.querySelector("[data-formulario]");

async function criarProduto(evento){
    evento.preventDefault();

    const titulo = document.querySelector("[data-titulo]").value;
    const preco = document.querySelector("[data-preco]").value;
    const imagem = document.querySelector("[data-imagem]").value;

    await conectaApi.criaProduto(titulo, preco, imagem);

}

formulario.addEventListener("submit", evento => criarProduto(evento));
