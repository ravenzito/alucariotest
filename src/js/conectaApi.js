async function listaProdutos() {
    const conexao = await fetch("http://localhost:3000/produtos");
    const conexaoConvertida = await conexao.json();
    
    return conexaoConvertida;
}

async function criaProduto(titulo, preco, imagem) {
    const conexao = await fetch("http://localhost:3000/produtos",{
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify({
            titulo: titulo,
            preco: `R$${preco}`,
            imagem: imagem
        })
    });

    const conexaoConvertida = conexao.json();
    return conexaoConvertida;
}

async function deletaProduto(id) {
    await fetch(`http://localhost:3000/produtos/${id}`, {
        method: "DELETE"
    });
}

export const conectaApi = {
    listaProdutos,
    criaProduto,
    deletaProduto
}
