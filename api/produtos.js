const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors());
app.use(express.json());

let produtos = [
    { id: 1, titulo: "Lucario - SWSH09: Brilliant Stars (SWSH09)", preco: "R$ 25,00", imagem: "public/img/lucario-card-2.webp" },
    { id: 2, titulo: "Lucario ex - Prize Pack Series Cards", preco: "R$65,00", imagem: "public/img/lucario-card.webp" },
    { id: 3, titulo: "Lucario Funko", preco: "R$120,00", imagem: "public/img/lucario-funko.jpg" },
    { id: 4, titulo: "Lucario Action Figure", preco: "R$350,00", imagem: "public/img/lucario-figure.jpg" }
];

app.get('/api/produtos', (req, res) => {
    res.status(200).json(produtos);
});

app.post('/api/produtos', (req, res) => {
    const { titulo, preco, imagem } = req.body;
    const novoProduto = {
        id: produtos.length + 1,
        titulo,
        preco,
        imagem
    };
    produtos.push(novoProduto);
    res.status(201).json(novoProduto);
});

app.delete('/api/produtos/:id', (req, res) => {
    const id = parseInt(req.params.id);
    produtos = produtos.filter(produto => produto.id !== id);
    res.status(204).send();
});

module.exports = app;
