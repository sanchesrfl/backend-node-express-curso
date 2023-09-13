const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const porta = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Dados fictícios para nossas operações CRUD
let livros = [
  { id: 1, titulo: 'Livro 1' },
  { id: 2, titulo: 'Livro 2' },
];

// Listar todos os livros
app.get('/livros', (req, res) => {
  res.json(livros);
});

// Obter um único livro por ID
app.get('/livros/:id', (req, res) => {
  const idLivro = parseInt(req.params.id);
  const livro = livros.find((livro) => livro.id === idLivro);

  if (!livro) {
    return res.status(404).json({ erro: 'Livro não encontrado' });
  }

  res.json(livro);
});

// Criar um novo livro
app.post('/livros', (req, res) => {
  const { titulo } = req.body;
  const novoLivro = { id: livros.length + 1, titulo };
  livros.push(novoLivro);

  res.status(201).json(novoLivro);
});

// Atualizar um livro por ID
app.put('/livros/:id', (req, res) => {
  const idLivro = parseInt(req.params.id);
  const tituloAtualizado = req.body.titulo;

  const livro = livros.find((livro) => livro.id === idLivro);

  if (!livro) {
    return res.status(404).json({ erro: 'Livro não encontrado' });
  }

  livro.titulo = tituloAtualizado;

  res.json(livro);
});

// Excluir um livro por ID
app.delete('/livros/:id', (req, res) => {
  const idLivro = parseInt(req.params.id);
  const indice = livros.findIndex((livro) => livro.id === idLivro);

  if (indice === -1) {
    return res.status(404).json({ erro: 'Livro não encontrado' });
  }

  livros.splice(indice, 1);

  res.status(204).send();
});

app.listen(porta, () => {
  console.log(`O servidor está ouvindo na porta ${porta}`);
});
